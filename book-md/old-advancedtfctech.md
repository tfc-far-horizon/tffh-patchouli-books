```patchouli-category
id: advancedtfctech
name: 进阶群峦科技
description: 用于大规模生产的机器。
icon: advancedtfctech:pirn
sortnum: 10
__comment__: This file was automatically created by mcresources
```

#电动织布机

```patchouli-entry
id: advancedtfctech/power_loom
name: 电动织布机
category: tfc:advancedtfctech
icon: advancedtfctech:power_loom
read_by_default: true
sortnum: 0
extra_recipe_mappings:
  advancedtfctech:power_loom: 0
__comment__: This file was automatically created by mcresources
```

+ 电动织布机
	```patchouli:multiblock
	multiblock:
	  pattern:
	    - - "   "
	      - "SM "
	      - "SM "
	      - "SM "
	      - "   "
	    - - " L "
	      - SMS
	      - " F "
	      - SMS
	      - " L "
	    - - " L "
	      - SHS
	      - S0S
	      - SHS
	      - "RT "
	  mapping:
	    "0": immersiveengineering:heavy_engineering
	    S: immersiveengineering:steel_scaffolding_standard
	    M: immersiveengineering:sheetmetal_steel
	    T: immersiveengineering:storage_steel
	    F: immersiveengineering:steel_fence
	    L: immersiveengineering:light_engineering
	    H: immersiveengineering:heavy_engineering
	    R: immersiveengineering:rs_engineering
	enable_visualize: true
	```
	使用\$(item)工程师锤\$()右击\$(thing)钢块\$()上的\$(thing)轻型工程块\$()以完成此结构。
+ _untitled_
	\$(thing)电动织布机\$()是日益增长的纺织品需求的全新解决方案。
	
	为了使纺织过程自动化，一个装载有绕线纡子的梭子作为纬线在两根高低交替变换的经线中来回穿梭。
	
	操作这台机器，首先需要把缠有某种纤维的纬纱管放置在机器侧面的把手上，这将作为布料的纬线。
+ _untitled_
	随后，手持\$(thing)与已放置的纬纱管同种的纤维\$()右键\$(thing)机器中心的支架\$()来放置经线，填满支架需要\$(thing)16\$()根纤维，这部分纤维并不会在加工中消耗。手持同种纤维右击机器的短边一侧以放置将在加工中消耗的原料。
	
	产物将自动输出到输出侧前方的容器中，或\$(thing)Shift+右键\$()来手动取出。
+ _untitled_
	默认设置下，这台机器消耗80IF/t。
#脱粒机

```patchouli-entry
id: advancedtfctech/thresher
name: 脱粒机
category: tfc:advancedtfctech
icon: advancedtfctech:thresher
read_by_default: true
sortnum: 1
extra_recipe_mappings:
  advancedtfctech:thresher: 0
__comment__: This file was automatically created by mcresources
```

+ 脱粒机
	```patchouli:multiblock
	multiblock:
	  pattern:
	    - - "   "
	      - MHM
	      - "   "
	    - - MMM
	      - LLR
	      - MLM
	    - - MLM
	      - M0M
	      - MMM
	  mapping:
	    "0": immersiveengineering:light_engineering
	    M: immersiveengineering:sheetmetal_steel
	    L: immersiveengineering:light_engineering
	    R: immersiveengineering:rs_engineering
	    H: minecraft:hopper
	enable_visualize: true
	```
	使用\$(item)工程师锤\$()右击\$(thing)上表面裸露\$()的\$(thing)轻型工程块\$()以完成此结构。
+ _untitled_
	\$(thing)脱粒机\$()通过电动机产生的机械力将谷粒从秸秆上分离下来，相比手工脱粒产量更高。
	
	原料可通过漏斗、滑道或者卸货传送带输入。
	
	默认设置下，这台机器消耗80IF/t。
#谷物磨粉机

```patchouli-entry
id: advancedtfctech/grist_mill
name: 谷物磨粉机
category: tfc:advancedtfctech
icon: advancedtfctech:grist_mill
read_by_default: true
sortnum: 2
extra_recipe_mappings:
  advancedtfctech:grist_mill: 0
__comment__: This file was automatically created by mcresources
```

+ 谷物磨粉机
	```patchouli:multiblock
	multiblock:
	  pattern:
	    - - "   "
	      - " H "
	      - "   "
	      - "   "
	    - - " L "
	      - RLM
	      - mTm
	      - mLm
	    - - SMS
	      - S0L
	      - SSS
	      - SMS
	  mapping:
	    "0": immersiveengineering:steel_scaffolding_standard
	    S: immersiveengineering:steel_scaffolding_standard
	    M: immersiveengineering:sheetmetal_steel
	    m: immersiveengineering:slab_sheetmetal_steel
	    T: immersiveengineering:storage_steel
	    L: immersiveengineering:light_engineering
	    R: immersiveengineering:rs_engineering
	    H: minecraft:hopper
	enable_visualize: true
	```
	使用\$(item)工程师锤\$()右击\$(thing)钢块\$()与\$(thing)红石工程块\$()相对的那一面以完成此结构。
+ _untitled_
	\$(thing)谷物磨粉机\$()能够从谷粒中获取更多可食用的面粉。
	
	原料可通过漏斗、滑道或者卸货传送带输入。
	
	默认设置下，这台机器消耗80IF/t.
#浸灰车间

```patchouli-entry
id: advancedtfctech/beamhouse
name: 浸灰车间
category: tfc:advancedtfctech
icon: advancedtfctech:beamhouse
read_by_default: true
sortnum: 3
extra_recipe_mappings:
  advancedtfctech:beamhouse: 0
__comment__: This file was automatically created by mcresources
```

+ 浸灰车间
	```patchouli:multiblock
	multiblock:
	  pattern:
	    - - "    "
	      - " mmm"
	      - " MMM"
	      - " mmm"
	    - - " L L"
	      - RMHM
	      - LM M
	      - LMMM
	    - - SPSL
	      - SP0S
	      - LPSS
	      - LSSS
	  mapping:
	    "0": immersiveengineering:steel_scaffolding_standard
	    S: immersiveengineering:steel_scaffolding_standard
	    M: immersiveengineering:sheetmetal_iron
	    m: immersiveengineering:slab_sheetmetal_iron
	    P: minecraft:white_wool
	    H: immersiveengineering:heavy_engineering
	    L: immersiveengineering:light_engineering
	    R: immersiveengineering:rs_engineering
	enable_visualize: true
	```
	使用\$(item)工程师锤\$()右击\$(thing)重型工程块\$()以完成此结构。由于暂时未能修复的渲染bug，此处使用minecraft原版的白色羊毛代替沉浸工程mod中的“流体管道。
+ _untitled_
	\$(thing)浸灰车间\$()负责处理皮革生产中的生皮浸灰、鞣制和洗涤过程。
	
	你可以在GUI中直接输入液体或者用装满液体的桶从液体输入口输入液体。不需要的液体可从液体输入口用桶盛出。
	
	默认设置下，这台机器消耗20IF/t.
+ 血肉苦弱
	[](#machine_made)
	```patchouli:spotlight
	item: tfc:large_prepared_hide{machine_made:1b}
	link_recipes: false
	```
	如果使用\$(thing)浸灰车间\$()对生皮进行浸灰操作，生皮将获得\$(thing)"机器加工"\$()的标签。如果后续的\$(thing)洗涤\$()、\$(thing)刮制\$()和\$(thing)鞣制\$()过程都通过机器进行，这一标签将得到保留。您可用[刮制机](tfc:advancedtfctech/fleshing_machine)对浸灰后的生皮进行刮制。
+ _untitled_
	通过这些步骤，最终生皮将产出相比手工制造而言\$(thing)双倍\$()数量的皮革。
	
	但请留意，如果生皮加工中的某一步骤不是由机器完成，粗糙的手工将毁坏机械的精密成果，\$(thing)"机器加工"\$()的标签将会消失而产量也不能得到提升。
#刮制机

```patchouli-entry
id: advancedtfctech/fleshing_machine
name: 刮制机
category: tfc:advancedtfctech
icon: advancedtfctech:fleshing_machine
read_by_default: true
sortnum: 4
extra_recipe_mappings:
  advancedtfctech:fleshing_machine: 0
  advancedtfctech:fleshing_blades: 0
__comment__: This file was automatically created by mcresources
```

+ _untitled_
	\$(thing)刮制机\$()的核心部件是一个附有锋利刀片的旋转滚筒，当浸灰后的生皮通过机器时，高速运转的机械会移除生皮上多余的脂肪和肌肉。
+ _untitled_
	```patchouli:crafting
	advancedtfctech:crafting/fleshing_machine
	```
+ _untitled_
	为了让\$(thing)刮制机\$()运转，必须在机器上安装\$(thing)刮制刀\$()。手持\$(thing)刮制刀\$()右键\$(thing)刮制机\$()即可安装。
	
	如果使用的生皮原料拥有["机器制作"](tfc:advancedtfctech/beamhouse#machine_made)的标签，那么输出原料也会保留这一标签。.
	
	默认设置下，这台机器消耗20IF/t。
+ _untitled_
	```tfc:anvil_recipe
	advancedtfctech:anvil/fleshing_blades
	```
