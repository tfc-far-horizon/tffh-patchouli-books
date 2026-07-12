function splitLines(text) {
  return String(text).split('\n');
}

function fallbackHunk(base, target) {
  let prefix = 0;
  while (prefix < base.length && prefix < target.length && base[prefix] === target[prefix]) prefix += 1;
  let suffix = 0;
  while (
    suffix < base.length - prefix
    && suffix < target.length - prefix
    && base[base.length - 1 - suffix] === target[target.length - 1 - suffix]
  ) suffix += 1;
  if (prefix === base.length && prefix === target.length) return [];
  return [{
    start: prefix,
    end: base.length - suffix,
    lines: target.slice(prefix, target.length - suffix),
  }];
}

export function diffHunks(baseText, targetText) {
  const base = splitLines(baseText);
  const target = splitLines(targetText);
  if (baseText === targetText) return [];
  if (base.length * target.length > 2_000_000) return fallbackHunk(base, target);

  const rows = base.length + 1;
  const cols = target.length + 1;
  const matrix = Array.from({ length: rows }, () => new Uint32Array(cols));
  for (let i = base.length - 1; i >= 0; i -= 1) {
    for (let j = target.length - 1; j >= 0; j -= 1) {
      matrix[i][j] = base[i] === target[j]
        ? matrix[i + 1][j + 1] + 1
        : Math.max(matrix[i + 1][j], matrix[i][j + 1]);
    }
  }

  const hunks = [];
  let i = 0;
  let j = 0;
  let start = null;
  let added = [];

  const flush = () => {
    if (start === null) return;
    hunks.push({ start, end: i, lines: added });
    start = null;
    added = [];
  };

  while (i < base.length || j < target.length) {
    if (i < base.length && j < target.length && base[i] === target[j]) {
      flush();
      i += 1;
      j += 1;
    } else if (j < target.length && (i === base.length || matrix[i][j + 1] >= matrix[i + 1][j])) {
      if (start === null) start = i;
      added.push(target[j]);
      j += 1;
    } else {
      if (start === null) start = i;
      i += 1;
    }
  }
  flush();
  return hunks;
}

function applyRegion(base, start, end, hunks) {
  const result = [];
  let cursor = start;
  for (const hunk of hunks) {
    result.push(...base.slice(cursor, hunk.start), ...hunk.lines);
    cursor = hunk.end;
  }
  result.push(...base.slice(cursor, end));
  return result;
}

function sameLines(left, right) {
  return left.length === right.length && left.every((line, index) => line === right[index]);
}

function markerBlock(ours, base, theirs) {
  return [
    '<<<<<<< YOURS',
    ...ours,
    '||||||| BASE',
    ...base,
    '=======',
    ...theirs,
    '>>>>>>> SERVER',
  ];
}

export function threeWayMerge(baseText, oursText, theirsText) {
  if (oursText === theirsText) return { text: oursText, conflicts: 0 };
  if (oursText === baseText) return { text: theirsText, conflicts: 0 };
  if (theirsText === baseText) return { text: oursText, conflicts: 0 };

  const base = splitLines(baseText);
  const oursHunks = diffHunks(baseText, oursText);
  const theirsHunks = diffHunks(baseText, theirsText);
  const output = [];
  let oursIndex = 0;
  let theirsIndex = 0;
  let cursor = 0;
  let conflicts = 0;

  while (oursIndex < oursHunks.length || theirsIndex < theirsHunks.length) {
    const nextOurs = oursHunks[oursIndex];
    const nextTheirs = theirsHunks[theirsIndex];
    const start = Math.min(nextOurs?.start ?? Infinity, nextTheirs?.start ?? Infinity);
    output.push(...base.slice(cursor, start));

    let end = Math.max(
      nextOurs?.start === start ? nextOurs.end : start,
      nextTheirs?.start === start ? nextTheirs.end : start,
    );
    const regionOurs = [];
    const regionTheirs = [];
    let expanded = true;
    while (expanded) {
      expanded = false;
      while (oursIndex < oursHunks.length && oursHunks[oursIndex].start <= end) {
        const hunk = oursHunks[oursIndex++];
        regionOurs.push(hunk);
        if (hunk.end > end) { end = hunk.end; expanded = true; }
      }
      while (theirsIndex < theirsHunks.length && theirsHunks[theirsIndex].start <= end) {
        const hunk = theirsHunks[theirsIndex++];
        regionTheirs.push(hunk);
        if (hunk.end > end) { end = hunk.end; expanded = true; }
      }
    }

    const baseRegion = base.slice(start, end);
    const oursRegion = applyRegion(base, start, end, regionOurs);
    const theirsRegion = applyRegion(base, start, end, regionTheirs);

    if (regionOurs.length === 0) output.push(...theirsRegion);
    else if (regionTheirs.length === 0) output.push(...oursRegion);
    else if (sameLines(oursRegion, theirsRegion)) output.push(...oursRegion);
    else if (sameLines(oursRegion, baseRegion)) output.push(...theirsRegion);
    else if (sameLines(theirsRegion, baseRegion)) output.push(...oursRegion);
    else {
      conflicts += 1;
      output.push(...markerBlock(oursRegion, baseRegion, theirsRegion));
    }
    cursor = end;
  }

  output.push(...base.slice(cursor));
  return { text: output.join('\n'), conflicts };
}

const CONFLICT_PATTERN = /^<<<<<<< YOURS\n([\s\S]*?)^\|\|\|\|\|\|\| BASE\n([\s\S]*?)^=======\n([\s\S]*?)^>>>>>>> SERVER(?:\n|$)/m;

export function resolveFirstConflict(text, choice) {
  const match = CONFLICT_PATTERN.exec(text);
  if (!match) return { text, resolved: false };
  const ours = match[1].replace(/\n$/, '');
  const base = match[2].replace(/\n$/, '');
  const theirs = match[3].replace(/\n$/, '');
  let replacement;
  if (choice === 'ours') replacement = ours;
  else if (choice === 'theirs') replacement = theirs;
  else if (choice === 'base') replacement = base;
  else if (choice === 'both') replacement = `${ours}\n${theirs}`;
  else throw new Error(`Unknown conflict resolution: ${choice}`);
  const suffix = text.slice(match.index + match[0].length);
  const separator = match[0].endsWith('\n') && suffix && !replacement.endsWith('\n') ? '\n' : '';
  return {
    text: `${text.slice(0, match.index)}${replacement}${separator}${suffix}`,
    resolved: true,
  };
}

export function countConflictMarkers(text) {
  return (String(text).match(/^<<<<<<< YOURS$/gm) ?? []).length;
}
