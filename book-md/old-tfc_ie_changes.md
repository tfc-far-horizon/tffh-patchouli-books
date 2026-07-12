```patchouli-category
id: tfc_ie_changes
name: TFC + IE Crossover
description: 沉浸工程在群峦世界中的变化
icon: immersiveengineering:manual
sortnum: 10
__comment__: 这个文件是通过mc的资源自动生成的
```

#新的矿物

```patchouli-entry
id: tfc_ie_changes/ores
name: 新的矿物
category: tfc:tfc_ie_changes
icon: tfc_ie_addon:ore/normal_bauxite
read_by_default: true
sortnum: 0
extra_recipe_mappings:
  tfc_ie_addon:ore/small_bauxite: 0
  tfc_ie_addon:ore/poor_bauxite: 0
  tfc_ie_addon:ore/normal_bauxite: 0
  tfc_ie_addon:ore/rich_bauxite: 0
  tfc_ie_addon:ore/small_galena: 2
  tfc_ie_addon:ore/poor_galena: 2
  tfc_ie_addon:ore/normal_galena: 2
  tfc_ie_addon:ore/rich_galena: 2
  tfc_ie_addon:ore/small_uraninite: 4
  tfc_ie_addon:ore/poor_uraninite: 4
  tfc_ie_addon:ore/normal_uraninite: 4
  tfc_ie_addon:ore/rich_uraninite: 4
__comment__: This file was automatically created by mcresources
```

+ 铝土矿
	[](#铝土矿)
	铝土矿是一种含有\$(thing)铝\$()的矿石，可用于高压级别的设备。它在任意海拔都可以发现，但埋藏较深的矿脉通常品位较高。铝土矿可以在[沉积岩](the_world/geology#sedimentary)和[变质岩](the_world/geology#metamorphic)地层中发现。
+ _untitled_
	```tfc:multimultiblock
	```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - "0"
		mapping:
		  X: tfc_ie_addon:ore/poor_bauxite/marble
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - "0"
		mapping:
		  X: tfc_ie_addon:ore/normal_bauxite/marble
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - "0"
		mapping:
		  X: tfc_ie_addon:ore/rich_bauxite/marble
		```
	大理岩中的铝土矿
+ 方铅矿
	[](#方铅矿)
	方铅矿是一种含\$(thing)铅\$()的矿石,可用于制造电池。它可在海拔低于y=75的地方发现。方铅矿生成在[变质岩](the_world/geology#metamorphic)、[喷出岩](the_world/geology#igneous_extrusive)以及[侵入岩](the_world/geology#igneous_intrusive)中
+ _untitled_
	```tfc:multimultiblock
	```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - "0"
		mapping:
		  X: tfc_ie_addon:ore/poor_galena/marble
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - "0"
		mapping:
		  X: tfc_ie_addon:ore/normal_galena/marble
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - "0"
		mapping:
		  X: tfc_ie_addon:ore/rich_galena/marble
		```
	大理岩中的方铅矿
+ 铀矿
	[](#铀矿)
	铀矿是一种含\$(thing)铀\$()的矿石。它可在海拔低于y=75的地方发现。它可以在[变质岩](the_world/geology#metamorphic)和[喷出岩](the_world/geology#igneous_extrusive)中发现。铀块可以作为热源，用于\$(thing)热传导发电机\$()。
+ _untitled_
	```tfc:multimultiblock
	```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - "0"
		mapping:
		  X: tfc_ie_addon:ore/poor_uraninite/marble
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - "0"
		mapping:
		  X: tfc_ie_addon:ore/normal_uraninite/marble
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - "0"
		mapping:
		  X: tfc_ie_addon:ore/rich_uraninite/marble
		```
	大理岩中的铀矿
#新的合金

```patchouli-entry
id: tfc_ie_changes/alloys
name: 新的合金
category: tfc:tfc_ie_changes
icon: immersiveengineering:ingot_electrum
read_by_default: true
sortnum: 1
extra_recipe_mappings:
  immersiveengineering:ingot_electrum: 1
  immersiveengineering:ingot_constantan: 2
__comment__: This file was automatically created by mcresources
```

+ _untitled_
	群峦传说提供了制造合金的方式，你现在可以以群峦的方式制造诸如\$(thing)琥珀金\$()或\$(thing)康铜\$()这样的合金！你只需要知道这些合金的组成比例即可（相信我，它们非常简单）。
+ 琥珀金
	```patchouli:spotlight
	item: immersiveengineering:ingot_electrum
	link_recipes: false
	```
	
	^条件：^
	\$(li)40 - 60 % : \$(thing)金\$()\$(li)40 - 60 % : \$(thing)银\$()
	
	
+ 康铜
	```patchouli:spotlight
	item: immersiveengineering:ingot_constantan
	link_recipes: false
	```
	
	^条件：^
	\$(li)40 - 60 % : \$(thing)铜\$()\$(li)40 - 60 % : \$(thing)镍\$()
	
	
#新的模具

```patchouli-entry
id: tfc_ie_changes/mold
name: 新的模具
category: tfc:tfc_ie_changes
icon: tfc_ie_addon:mold_sheet
read_by_default: true
sortnum: 2
__comment__: This file was automatically created by mcresources
```

+ 金属模具：薄板
	```patchouli:spotlight
	item: tfc_ie_addon:mold_sheet
	link_recipes: false
	```
	\$(thing)金属模具：薄板\$()是在\$(thing)工程师工作台\$()上通过\$(thing)工程师蓝图\$()制得的。通过它，你可以在\$(thing)金属冲压机\$()上制造各种薄板。
+ 金属模具：块
	```patchouli:spotlight
	item: tfc_ie_addon:mold_block
	link_recipes: false
	```
	\$(thing)金属模具：块\$()以相同的方式制作。你可以用它制作\$(thing)钢块\$()和\$(thing)铀块\$()。
#化学成分

```patchouli-entry
id: tfc_ie_changes/chemicals
name: 化学成分
category: tfc:tfc_ie_changes
icon: tfc:powder/saltpeter
read_by_default: true
sortnum: 3
__comment__: This file was automatically created by mcresources
```

+ _untitled_
	工程师用到的材料可不会都像木头、石头或金属那样简洁。为了在工程中运用更多的材料，对化学物质的基本了解至关重要。
+ _untitled_
	```tfc:quern_recipe
	tfc:quern/saltpeter
	```
	\$(thing)硝石\$()是一种通过在\$(thing)粉碎机\$()中加工[天然硝石矿](the_world/ores_and_minerals#saltpeter)或\$(thing)砂岩\$()而取得的碱盐。\$(thing)硝石矿\$()也可以在[手推磨](mechanics/quern)中加工。
+ _untitled_
	```patchouli:crafting
	immersiveengineering:crafting/fertilizer
	```
	\$(thing)硝石\$()可作为\$(thing)生物柴油\$()生产中的催化剂，也可通过展示出的配方来制造\$(thing)肥料\$()。
+ _untitled_
	[](#sulfur)
	```tfc:quern_recipe
	tfc:quern/sulfur
	```
	\$(thing)硫磺\$()是一种通常在\$(thing)矿床\$()中发现的粉末。它可以通过在\$(thing)粉碎机\$()中处理[硫磺矿](the_world/ores_and_minerals#sulfur)以及\$(thing)石英块\$()获得。 \$(thing)硫磺矿\$()也可以在[手推磨](mechanics/quern)中处理。
+ _untitled_
	```patchouli:crafting
	tfc:crafting/gunpowder
	tfc:crafting/gunpowder_graphite
	```
+ _untitled_
	混合\$(thing)硝石\$()、\$(thing)硫磺\$()和\$(thing)木炭\$()可以制造出\$(thing)火药\$()，这是一种远比通过击杀怪物收集高效的方式。
#多方块结构的变化

```patchouli-entry
id: tfc_ie_changes/multiblocks
name: 多方块结构的变化
category: tfc:tfc_ie_changes
icon: tfc:fire_bricks
read_by_default: true
sortnum: 4
extra_recipe_mappings:
  immersiveengineering:cokebrick: 0
  immersiveengineering:blastbrick: 0
__comment__: This file was automatically created by mcresources
```

+ _untitled_
	在群峦世界中，多方块结构也有所变化。\$(thing)电弧炉\$()将需要群峦传说mod提供的\$(thing)耐火砖\$()而不是高炉砖。
	同时，你不再需要沉浸工程提供的高炉和合金窑，因为群峦传说提供了功能近似的设备。
+ _untitled_
	```patchouli:crafting
	tfc:crafting/fire_bricks
	```
+ 电弧炉
	```patchouli:multiblock
	multiblock:
	  pattern:
	    - - "     "
	      - "S    "
	      - "LLL  "
	      - "S    "
	      - "     "
	    - - "     "
	      - "SBBB "
	      - "LBBB "
	      - "SBBB "
	      - "     "
	    - - "M T  "
	      - LBBBB
	      - LBBBB
	      - LBBBB
	      - "M T  "
	    - - "HHT  "
	      - "LBB  "
	      - "LBB  "
	      - "LBB  "
	      - HHT R
	    - - MMTmm
	      - Mmmmm
	      - Hmmm0
	      - Mmmmm
	      - MMTmS
	  mapping:
	    "0": minecraft:cauldron
	    S: immersiveengineering:steel_scaffolding_standard
	    T: immersiveengineering:storage_steel
	    M: immersiveengineering:sheetmetal_steel
	    m: immersiveengineering:slab_sheetmetal_steel
	    B: tfc:fire_bricks
	    L: immersiveengineering:light_engineering
	    H: immersiveengineering:heavy_engineering
	    R: immersiveengineering:rs_engineering
	enable_visualize: true
	```
#蓝图合成

```patchouli-entry
id: tfc_ie_changes/blueprint
name: 蓝图合成
category: tfc:tfc_ie_changes
icon: immersiveengineering:blueprint
read_by_default: true
sortnum: 5
__comment__: This file was automatically created by mcresources
```

+ _untitled_
	群峦世界没有村庄生成，所以你不能从村民那里“借”到蓝图。不过，你可以以较高的成本在工作台上制造所需的蓝图。
+ _untitled_
	```patchouli:crafting
	tfc_ie_addon:crafting/blueprint_electrode
	tfc_ie_addon:crafting/blueprint_special_bullet
	```
#黄麻

```patchouli-entry
id: tfc_ie_changes/jute
name: 黄麻
category: tfc:tfc_ie_changes
icon: tfc:jute_fiber
read_by_default: true
sortnum: 6
__comment__: This file was automatically created by mcresources
```

+ 黄麻
	```patchouli:spotlight
	item: tfc:jute_fiber
	link_recipes: false
	```
	工业大麻是一种可圈可点的植物，但是我们现在讨论的是\$(thing)黄麻\$()！它的种子是制造\$(thing)生物柴油\$()的优质原料,\$(thing)黄麻纤维\$()可以制成\$(thing)粗麻布\$()，作为\$(thing)坚韧布料的替代品。黄麻种子可以在自然生成的[野生黄麻](the_world/wild_crops)上收集。
+ _untitled_
	```tfc:loom_recipe
	tfc:loom/burlap_cloth
	```
	类似坚韧布料， \$(thing)粗麻布\$()是一种坚韧的织物，由\$(thing)黄麻纤维\$()制成。它被用于制造\$(thing)改良风车\$()、\$(thing)气球\$()和\$(thing)气垫\$()
#石英

```patchouli-entry
id: tfc_ie_changes/quartz
name: 石英
category: tfc:tfc_ie_changes
icon: tfc_ie_addon:mineral/quartz_shard
read_by_default: true
sortnum: 7
extra_recipe_mappings:
  tfc_ie_addon:mineral/quartz_shard: 0
  tfc_ie_addon:mineral/quartz_block: 0
__comment__: This file was automatically created by mcresources
```

+ 石英
	```patchouli:spotlight
	item: tfc_ie_addon:mineral/quartz_shard
	link_recipes: false
	```
	你不再能深入下界获取石英，但这不能阻碍你发展工业的脚步。现在你可以在群峦世界中发现\$(thing)石英晶洞\$()，其中包含\$(thing)石英块\$()和\$(thing)石英晶簇\$()。这种材料对制造沉浸工程所需的电子元件很有帮助。
+ 石英晶簇
	```patchouli:multiblock
	multiblock:
	  pattern:
	    - - "   "
	      - " Q "
	      - "   "
	    - - "   "
	      - " 0 "
	      - "   "
	  mapping:
	    "0": tfc_ie_addon:mineral/budding_quartz
	    Q: tfc_ie_addon:mineral/quartz_cluster
	enable_visualize: false
	```
	记住，随着时间推移，\$(thing)石英母岩\$()可以产出更多的\$(thing)石英晶簇\$()。
#石墨

```patchouli-entry
id: tfc_ie_changes/graphite
name: 石墨
category: tfc:tfc_ie_changes
icon: immersiveengineering:ingot_hop_graphite
read_by_default: true
sortnum: 8
__comment__: This file was automatically created by mcresources
```

+ _untitled_
	高定向热解石墨(HOP)是一种在特定加工过程中使用的高复杂度、高压缩度碳材料。\$(thing)HOP石墨粉\$()通过在\$(thing)工业挤压机\$()中压缩8单位\$(thing)焦煤粉\$()或者\$(thing)石墨粉\$()制得，随后可被熔炼为锭。
+ _untitled_
	```patchouli:spotlight
	item: immersiveengineering:graphite_electrode
	link_recipes: false
	```
	HOP石墨最常见的用途是制造\$(thing)电弧炉\$()所用的\$(thing)石墨电极\$()。制造\$(thing)石墨电极\$()需要[工程师蓝图](tfc:tfc_ie_changes/blueprint)。你也可以通过\$(thing)金属冲压机\$()将\$(thing)4\$()单位HOP石墨锭制成\$(thing)石墨电极\$()。但这样粗糙的制造过程产出的\$(thing)石墨电极\$()只有一半的完整度。
#大炼钢铁

```patchouli-entry
id: tfc_ie_changes/steel_obtain
name: 大炼钢铁
category: tfc:tfc_ie_changes
icon: tfc:metal/ingot/steel
read_by_default: true
sortnum: 9
extra_recipe_mappings:
  immersiveengineering:slag: 0
__comment__: This file was automatically created by mcresources
```

+ _untitled_
	在群峦世界中，制造[钢锭](mechanics/steel)并不容易。现在，你必须通过锻打\$(thing)生铁\$()来制造\$(thing)钢\$()。幸运的是，这一流程在后面可以简化。
+ _untitled_
	```patchouli:spotlight
	item: immersiveengineering:slag
	link_recipes: false
	```
	同时，你在把\$(thing)生铁锭\$()锻造为\$(thing)高碳钢锭\$()时，\$(thing)矿渣\$()会作为一种副产物产出。
#除草剂生产

```patchouli-entry
id: tfc_ie_changes/herbicide
name: 除草剂生产
category: tfc:tfc_ie_changes
icon: immersiveengineering:herbicide_bucket
read_by_default: true
sortnum: 10
__comment__: This file was automatically created by mcresources
```

+ _untitled_
	\$(thing)除草剂\$()在群峦世界也能正常工作！当\$(thing)化学喷射器\$()中装有\$(thing)除草剂\$()时，一切暴露在其喷出的细雾中的植物都会被摧毁。液体会破坏花卉和农作物并杀死泥土上附着的草，因此，它可以作为\$(thing)腐烂的堆肥\$()的替代品。
+ _untitled_
	```patchouli:spotlight
	item: immersiveengineering:herbicide_bucket
	link_recipes: false
	```
	要制造\$(thing)除草剂\$(), 将半桶\$(thing)乙醇\$()、任何一种\$(thing)铜粉\$()以及[硫磺](tfc:tfc_ie_changes/chemicals#sulfur)在\$(thing)搅拌机\$()中混合即可。
#欧姆定律？

```patchouli-entry
id: tfc_ie_changes/external_heater
name: 欧姆定律？
category: tfc:tfc_ie_changes
icon: tfc:crucible
read_by_default: true
sortnum: 11
extra_recipe_mappings:
  immersiveengineering:furnace_heater: 0
__comment__: This file was automatically created by mcresources
```

+ _untitled_
	虽然还没有开发出感应炉这类设备，不过\$(thing)外置加热器\$()可以像[木炭炉](mechanics/charcoal_forge)一样加热[坩埚](mechanics/crucible)
+ _untitled_
	```patchouli:crafting
	immersiveengineering:crafting/furnace_heater
	```
	通常来说，\$(thing)外置加热器\$()可以加热\$(thing)坩埚\$()到2000°C, 消耗20IF/t.
#高端钻头

```patchouli-entry
id: tfc_ie_changes/drill
name: 高端钻头
category: tfc:tfc_ie_changes
icon: tfc_ie_addon:drillhead_black_steel
read_by_default: true
sortnum: 12
__comment__: This file was automatically created by mcresources
```

+ _untitled_
	感觉用钻头挖矿还是太慢了？你是不是也觉得钢钻头很low？
	群峦科技有限公司现已隆重推出彩钢™钻头！它们更快、更大、更持久！
+ _untitled_
	```tfc:tri_anvil_recipe
	header: 钻头
	recipes:
	  - tfc_ie_addon:anvil/drillhead_black_steel
	  - tfc_ie_addon:anvil/drillhead_blue_steel
	  - tfc_ie_addon:anvil/drillhead_red_steel
	```
