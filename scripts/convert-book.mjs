import fs from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';
import { loadConfig } from '../lib/config.mjs';
import { PatchouliWasmParser } from '../lib/parser.mjs';
import { convertIgemAstToPatchouli } from '../lib/converter.mjs';

function usage() {
  console.error('Usage: node scripts/convert-book.mjs <source.md> <migration.json> <output-directory> [--force]');
  process.exitCode = 2;
}

const args = process.argv.slice(2);
const force = args.includes('--force');
const positional = args.filter((arg) => arg !== '--force');
if (positional.length !== 3) usage();
else {
  const [sourcePath, configPath, outputPath] = positional.map((value) => path.resolve(value));
  if (!force) {
    try {
      await fs.access(outputPath);
      throw new Error(`output already exists: ${outputPath} (use --force only after reviewing the target)`);
    } catch (error) {
      if (error.code !== 'ENOENT') throw error;
    }
  }

  const [source, migration] = await Promise.all([
    fs.readFile(sourcePath, 'utf8'),
    fs.readFile(configPath, 'utf8').then((value) => JSON.parse(value)),
  ]);
  const parser = new PatchouliWasmParser(loadConfig());
  const parsed = await parser.parse(source);
  if (!parsed.ok) {
    console.error(parsed.parseError ?? 'source parser failed');
    process.exitCode = 1;
  } else {
    const converted = convertIgemAstToPatchouli(parsed.document, migration);
    await fs.mkdir(outputPath, { recursive: true });
    for (const file of converted.files) {
      const destination = path.join(outputPath, file.path);
      await fs.mkdir(path.dirname(destination), { recursive: true });
      await fs.writeFile(destination, file.content, 'utf8');
    }
    const reportPath = path.join(outputPath, 'conversion-warnings.json');
    await fs.writeFile(reportPath, `${JSON.stringify({
      source: sourcePath,
      output: outputPath,
      entryCount: converted.entryCount,
      parserWarnings: parsed.document?.[1] ?? [],
      conversionWarnings: converted.warnings,
    }, null, 2)}\n`, 'utf8');
    console.info(`generated ${converted.entryCount} entries in: ${outputPath}`);
    console.info(`warning report: ${reportPath}`);
  }
}
