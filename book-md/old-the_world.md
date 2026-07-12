```patchouli-category
id: the_world
name: 这个世界
description: 深入了解你周围的大自然。
icon: tfc:grass/entisol
sortnum: 0
```

#地质学

```patchouli-entry
id: the_world/geology
name: 地质学
category: tfc:the_world
icon: tfc:rock/raw/shale
read_by_default: true
sortnum: 0
```

+ _untitled_
	群峦传说的世界被划分为几个巨大的大陆——这些陆地宽达数千米，并被海洋分隔开来。在这些大陆上，你可以找到山脉、河流以及许多其他地貌环境。
+ _untitled_
	```patchouli:image
	images:
	  - tfc:textures/gui/book/biomes/regions.png
	border: true
	```
	从宏观尺度观察的典型群峦传说世界。
+ 岩层
	[](#rocks)
	这个世界也是由不同类型的\$(thing)岩石\$()构成的。一块同质的岩石区域有时会广达一公里，且根据深度的不同，会有其他两到三种不同的岩石构成分明的岩石层。不同的岩石类型中包含了不同的[矿石](the_world/ores_and_minerals)，且大部分矿石只会出现在特定的岩石类型中。若想找到它们，就必须先找到正确的岩石类型。
+ _untitled_
	```patchouli:image
	images:
	  - tfc:textures/gui/book/biomes/rock_layers.png
	border: true
	```
	群峦传说世界的剖面图。
+ 海底
	海底由[喷出岩](the_world/geology#igneous_extrusive)构成——这类岩石由岩浆迅速冷却形成。喷出岩之下通常会出现相同\$(item)等级\$()的[侵入岩](the_world/geology)。
	
	例如，\$(thing)玄武岩\$()（一种镁铁质喷出岩）下方很可能就是\$(thing)辉长岩\$()（一种镁铁质侵入岩）。
+ 火成岩等级
	\$(li)[长英质](https://en.wikipedia.org/wiki/Felsic)岩石包括\$(thing)花岗岩\$()和\$(thing)流纹岩\$()。\$(li)[中性](https://en.wikipedia.org/wiki/Intermediate_composition)岩石包括\$(thing)安山岩\$()、\$(thing)英安岩\$()和\$(thing)闪长岩\$()。\$(li)[镁铁质](https://en.wikipedia.org/wiki/Mafic)岩石包括\$(thing)玄武岩\$()和\$(thing)辉长岩\$()。
+ _untitled_
	大陆顶部的岩石层要么是喷出岩，要么是[沉积岩](the_world/geology#sedimentary)。沉积岩之下通常会出现其上层岩石的[变质](the_world/geology#metamorphic)形态。
	
	例如，\$(thing)大理岩\$()（一种变质岩）通常出现在\$(thing)石灰岩\$()或\$(thing)白垩岩\$()之下。高级变质岩则位于其他变质岩或火成岩的深处。
+ 变质岩
	\$(li)\$(thing)板岩\$()和\$(thing)千枚岩\$()形成于\$(thing)页岩\$()、\$(thing)黏土岩\$()和\$(thing)砾岩\$()之下。\$(li)\$(thing)大理岩\$()形成于\$(thing)石灰岩\$()、\$(thing)白云岩\$()和\$(thing)白垩岩\$()之下。\$(li)\$(thing)石英岩\$()形成于\$(thing)燧石岩\$()之下。\$(li)\$(thing)片岩\$()和\$(thing)片麻岩\$()形成于\$(thing)板岩\$()和\$(thing)千枚岩\$()之下，或火成侵入岩之中。
+ 隆升区域
	最后，在山脉地区，你可能还会看到\$(thing)隆升\$()现象，即变质岩或火成侵入岩出现在地表。隆升岩层可以位于其他变质岩之上。
	
	此外，[岩墙](https://en.wikipedia.org/wiki/Dike_%28geology%29)——火成侵入岩的小型垂直切片——也可能零星分布在世界各地。
+ _untitled_
	它们穿透上层岩石而出。
	
	综上所述，接下来的几页将列出所有四类岩石：\$(thing)沉积岩\$()、\$(thing)变质岩\$()、\$(thing)喷出岩\$()和\$(thing)侵入岩\$()。这些类别决定了岩石的生成位置（参见前几页），也决定了其中可能生成的矿石。
+ 沉积岩
	[](#sedimentary)
	[沉积岩](https://en.wikipedia.org/wiki/Sedimentary_rock)是由矿物或有机颗粒的堆积或沉积形成的。它们通常出现在大陆地区的顶部岩层中。包括：
	\$(li)页岩\$(li)黏土岩\$(li)石灰岩\$(li)砾岩\$(li)白云岩\$(li)燧石岩\$(li)白垩岩
+ 变质岩
	[](#metamorphic)
	[变质岩](https://en.wikipedia.org/wiki/Metamorphic_rock)是由变质作用形成的岩石。它们可以在对应的沉积岩或火成岩之下找到，也可见于隆升区域。包括：
	\$(li)石英岩\$(li)板岩\$(li)千枚岩\$(li)片岩\$(li)片麻岩\$(li)大理岩
+ 喷出岩
	[](#igneous_extrusive)
	[喷出岩](https://en.wikipedia.org/wiki/Igneous_rock#Extrusive)是由岩浆在地球表面冷却形成的。它们可以在大陆地区的顶部岩层或海底找到。包括：
	\$(li)流纹岩\$(li)玄武岩\$(li)安山岩\$(li)英安岩
+ 侵入岩
	[](#igneous_intrusive)
	[侵入岩](https://en.wikipedia.org/wiki/Igneous_rock#Intrusive)是由岩浆在地壳下冷却形成的。它们可以在深层地下找到，偶尔也出现在岩墙或隆升区域。包括：
	\$(li)花岗岩\$(li)闪长岩\$(li)辉长岩
#矿石和矿物

```patchouli-entry
id: the_world/ores_and_minerals
name: 矿石和矿物
category: tfc:the_world
icon: tfc:ore/normal_hematite
read_by_default: true
sortnum: 1
extra_recipe_mappings:
  tfc:ore/small_native_copper: 2
  tfc:ore/poor_native_copper: 2
  tfc:ore/normal_native_copper: 2
  tfc:ore/rich_native_copper: 2
  tfc:ore/small_native_gold: 4
  tfc:ore/poor_native_gold: 4
  tfc:ore/normal_native_gold: 4
  tfc:ore/rich_native_gold: 4
  tfc:ore/small_native_silver: 6
  tfc:ore/poor_native_silver: 6
  tfc:ore/normal_native_silver: 6
  tfc:ore/rich_native_silver: 6
  tfc:ore/small_tetrahedrite: 8
  tfc:ore/poor_tetrahedrite: 8
  tfc:ore/normal_tetrahedrite: 8
  tfc:ore/rich_tetrahedrite: 8
  tfc:ore/small_malachite: 10
  tfc:ore/poor_malachite: 10
  tfc:ore/normal_malachite: 10
  tfc:ore/rich_malachite: 10
  tfc:ore/small_cassiterite: 12
  tfc:ore/poor_cassiterite: 12
  tfc:ore/normal_cassiterite: 12
  tfc:ore/rich_cassiterite: 12
  tfc:ore/small_bismuthinite: 14
  tfc:ore/poor_bismuthinite: 14
  tfc:ore/normal_bismuthinite: 14
  tfc:ore/rich_bismuthinite: 14
  tfc:ore/small_garnierite: 16
  tfc:ore/poor_garnierite: 16
  tfc:ore/normal_garnierite: 16
  tfc:ore/rich_garnierite: 16
  tfc:ore/small_hematite: 18
  tfc:ore/poor_hematite: 18
  tfc:ore/normal_hematite: 18
  tfc:ore/rich_hematite: 18
  tfc:ore/small_magnetite: 20
  tfc:ore/poor_magnetite: 20
  tfc:ore/normal_magnetite: 20
  tfc:ore/rich_magnetite: 20
  tfc:ore/small_limonite: 22
  tfc:ore/poor_limonite: 22
  tfc:ore/normal_limonite: 22
  tfc:ore/rich_limonite: 22
  tfc:ore/small_sphalerite: 24
  tfc:ore/poor_sphalerite: 24
  tfc:ore/normal_sphalerite: 24
  tfc:ore/rich_sphalerite: 24
  tfc:ore/lignite: 26
  tfc:ore/bituminous_coal: 28
  tfc:red_kaolin_clay: 30
  tfc:pink_kaolin_clay: 30
  tfc:white_kaolin_clay: 30
  tfc:kaolin_clay_grass: 30
  tfc:kaolin_clay: 30
  tfc:ore/graphite: 32
  tfc:ore/cinnabar: 34
  tfc:ore/cryolite: 36
  tfc:ore/saltpeter: 38
  tfc:ore/sulfur: 40
  tfc:ore/sylvite: 42
  tfc:ore/borax: 44
  tfc:ore/gypsum: 46
  tfc:ore/halite: 48
  tfc:ore/emerald: 50
  tfc:ore/diamond: 52
  tfc:ore/lapis_lazuli: 54
  tfc:ore/amethyst: 56
  tfc:ore/opal: 58
  tfc:ore/ruby: 60
```

+ _untitled_
	群峦传说中的矿物和矿石可称得上是稀有资源。与原版不同，矿石只会生成在庞大，但稀少的\$(thing)矿脉\$()结构中。要想找到矿脉，就必须熟练掌握[勘矿](mechanics/prospecting)技巧。有些矿石只会出现在特定的岩石类型中或高度上。因此，勘矿的一大关键步骤便是找到正确的岩石类型和高度。
+ _untitled_
	另外，某些矿石是\$(thing)分级的\$()。矿石块可能是贫瘠、普通或富集的，不同的矿脉中各类矿石块的比例也不同。\$(thing)更富集\$()的矿脉价值更高。
	
	接下来的几页将展示不同类型的矿石、它们的模样以及在哪里可以找到它们。
+ 原生铜
	[](#native_copper)
	原生铜是\$(thing)铜\$()的矿石。它可以在[喷出岩](the_world/geology#igneous_extrusive)中找到，海拔高于 y=40。
	
	它也可以出现在\$(thing)河流\$()的沉积物中，这些沉积物可以用[淘金盘](mechanics/panning)淘洗。
+ _untitled_
	```tfc:multimultiblock
	```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - "0"
		mapping:
		  X: tfc:ore/poor_native_copper/dacite
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - "0"
		mapping:
		  X: tfc:ore/normal_native_copper/dacite
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - "0"
		mapping:
		  X: tfc:ore/rich_native_copper/dacite
		```
	英安岩中的原生铜矿。
+ 原生金
	[](#native_gold)
	原生金是\$(thing)金\$()的矿石。它可以在 y=70 以下的海拔找到，但更深的矿脉更大更富集。它可以在[喷出岩](the_world/geology#igneous_extrusive)和[侵入岩](the_world/geology#igneous_intrusive)中找到。
	
	它也可以出现在\$(thing)河流\$()的沉积物中，这些沉积物可以用[淘金盘](mechanics/panning)淘洗。
+ _untitled_
	```tfc:multimultiblock
	```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - "0"
		mapping:
		  X: tfc:ore/poor_native_gold/diorite
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - "0"
		mapping:
		  X: tfc:ore/normal_native_gold/diorite
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - "0"
		mapping:
		  X: tfc:ore/rich_native_gold/diorite
		```
	闪长岩中的原生金矿。
+ 原生银
	[](#native_silver)
	原生银是\$(thing)银\$()的矿石。在隆升区域 y=90 以上的\$(thing)花岗岩\$()或\$(thing)闪长岩\$()中可以找到小型贫瘠矿脉。在 y=20 以下的深层地下，在\$(thing)花岗岩\$()、\$(thing)闪长岩\$()、\$(thing)片岩\$()和\$(thing)片麻岩\$()中可以找到更大更富集的矿脉。
	
	它也可以出现在\$(thing)河流\$()的沉积物中，这些沉积物可以用[淘金盘](mechanics/panning)淘洗。
+ _untitled_
	```tfc:multimultiblock
	```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - "0"
		mapping:
		  X: tfc:ore/poor_native_silver/granite
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - "0"
		mapping:
		  X: tfc:ore/normal_native_silver/granite
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - "0"
		mapping:
		  X: tfc:ore/rich_native_silver/granite
		```
	花岗岩中的原生银矿。
+ 黝铜矿
	[](#tetrahedrite)
	黝铜矿是\$(thing)铜\$()矿石的一种。它可以生成在任何深度的[变质岩](the_world/geology#metamorphic)中，但更深的矿脉通常更丰盛。
+ _untitled_
	```tfc:multimultiblock
	```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - "0"
		mapping:
		  X: tfc:ore/poor_tetrahedrite/schist
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - "0"
		mapping:
		  X: tfc:ore/normal_tetrahedrite/schist
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - "0"
		mapping:
		  X: tfc:ore/rich_tetrahedrite/schist
		```
	片岩中的黝铜矿。
+ 孔雀石
	[](#malachite)
	孔雀石是\$(thing)铜\$()的矿石。它主要出现在\$(thing)大理岩\$()或\$(thing)石灰岩\$()、\$(thing)白垩岩\$()和\$(thing)白云岩\$()中。它可以在大多数海拔找到，但更深的矿脉通常更大更富集。
+ _untitled_
	```tfc:multimultiblock
	```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - "0"
		mapping:
		  X: tfc:ore/poor_malachite/marble
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - "0"
		mapping:
		  X: tfc:ore/normal_malachite/marble
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - "0"
		mapping:
		  X: tfc:ore/rich_malachite/marble
		```
	大理岩中的孔雀石矿。
+ 锡石
	[](#cassiterite)
	锡石是\$(thing)锡\$()的矿石。它可以在高海拔的[侵入岩](the_world/geology#igneous_intrusive)中找到，在隆升区域或岩墙中 y=80 以上。
	
	它也可以出现在\$(thing)河流\$()的沉积物中，这些沉积物可以用[淘金盘](mechanics/panning)淘洗。
+ _untitled_
	```tfc:multimultiblock
	```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - "0"
		mapping:
		  X: tfc:ore/poor_cassiterite/diorite
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - "0"
		mapping:
		  X: tfc:ore/normal_cassiterite/diorite
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - "0"
		mapping:
		  X: tfc:ore/rich_cassiterite/diorite
		```
	闪长岩中的锡石矿。
+ 辉铋矿
	[](#bismuthinite)
	辉铋矿是\$(thing)铋\$()的矿石。它可以在近地表的[沉积岩](the_world/geology#sedimentary)中找到，或者在深层地下的[侵入岩](the_world/geology#igneous_intrusive)中找到更大更富集的矿脉。
+ _untitled_
	```tfc:multimultiblock
	```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - "0"
		mapping:
		  X: tfc:ore/poor_bismuthinite/shale
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - "0"
		mapping:
		  X: tfc:ore/normal_bismuthinite/shale
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - "0"
		mapping:
		  X: tfc:ore/rich_bismuthinite/shale
		```
	页岩中的辉铋矿。
+ 绿镍矿
	[](#garnierite)
	绿镍矿是\$(thing)镍\$()的矿石。它可以在 y=0 以下的海拔找到。主要存在于深层地下的\$(thing)辉长岩\$()中。在[侵入岩](the_world/geology#igneous_intrusive)中也可以找到较小、更稀少的矿脉。
+ _untitled_
	```tfc:multimultiblock
	```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - "0"
		mapping:
		  X: tfc:ore/poor_garnierite/gabbro
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - "0"
		mapping:
		  X: tfc:ore/normal_garnierite/gabbro
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - "0"
		mapping:
		  X: tfc:ore/rich_garnierite/gabbro
		```
	辉长岩中的绿镍矿。
+ 赤铁矿
	[](#hematite)
	赤铁矿是\$(thing)铁\$()的矿石。它可以在近地表的任何[喷出岩](the_world/geology#igneous_extrusive)中以大型矿脉的形式找到。
+ _untitled_
	```tfc:multimultiblock
	```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - "0"
		mapping:
		  X: tfc:ore/poor_hematite/andesite
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - "0"
		mapping:
		  X: tfc:ore/normal_hematite/andesite
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - "0"
		mapping:
		  X: tfc:ore/rich_hematite/andesite
		```
	安山岩中的赤铁矿。
+ 磁铁矿
	[](#magnetite)
	磁铁矿是\$(thing)铁\$()的矿石。它可以在近地表的任何[沉积岩](the_world/geology#sedimentary)中以大型矿脉的形式找到。
+ _untitled_
	```tfc:multimultiblock
	```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - "0"
		mapping:
		  X: tfc:ore/poor_magnetite/limestone
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - "0"
		mapping:
		  X: tfc:ore/normal_magnetite/limestone
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - "0"
		mapping:
		  X: tfc:ore/rich_magnetite/limestone
		```
	石灰岩中的磁铁矿。
+ 褐铁矿
	[](#limonite)
	褐铁矿是\$(thing)铁\$()的矿石。它可以在近地表的任何[沉积岩](the_world/geology#sedimentary)中以大型矿脉的形式找到。
+ _untitled_
	```tfc:multimultiblock
	```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - "0"
		mapping:
		  X: tfc:ore/poor_limonite/chalk
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - "0"
		mapping:
		  X: tfc:ore/normal_limonite/chalk
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - "0"
		mapping:
		  X: tfc:ore/rich_limonite/chalk
		```
	白垩岩中的褐铁矿。
+ 闪锌矿
	[](#sphalerite)
	闪锌矿是\$(thing)锌\$()的矿石。小型贫瘠矿脉可以在近地表的[喷出岩](the_world/geology#igneous_extrusive)中找到，而大型富集矿脉可以在深层地下的[侵入岩](the_world/geology#igneous_intrusive)中找到。
+ _untitled_
	```tfc:multimultiblock
	```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - "0"
		mapping:
		  X: tfc:ore/poor_sphalerite/quartzite
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - "0"
		mapping:
		  X: tfc:ore/normal_sphalerite/quartzite
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - "0"
		mapping:
		  X: tfc:ore/rich_sphalerite/quartzite
		```
	石英岩中的闪锌矿。
+ 褐煤
	[](#lignite)
	```patchouli:spotlight
	item: tfc:ore/lignite
	link_recipes: false
	```
	褐煤是一种低品位的\$(thing)煤\$()矿石。它可以在近地表的[沉积岩](the_world/geology#sedimentary)中以非常巨大的扁平矿层形式找到。
+ _untitled_
	```patchouli:multiblock
	multiblock:
	  pattern:
	    - - X
	    - - "0"
	  mapping:
	    X: tfc:lignite
	enable_visualize: false
	```
	褐煤。
+ 烟煤
	[](#bituminous_coal)
	```patchouli:spotlight
	item: tfc:ore/bituminous_coal
	link_recipes: false
	```
	烟煤是一种中等品位的\$(thing)煤\$()矿石。它可以在近地表的[沉积岩](the_world/geology#sedimentary)中以非常巨大的扁平矿层形式找到。
+ _untitled_
	```patchouli:multiblock
	multiblock:
	  pattern:
	    - - X
	    - - "0"
	  mapping:
	    X: tfc:bituminous_coal
	enable_visualize: false
	```
	烟煤
+ 高岭石
	[](#kaolinite)
	```patchouli:spotlight
	item: tfc:kaolin_clay
	link_recipes: false
	```
	高岭石是一种柔软的\$(thing)矿物\$()，用于制作[耐火黏土](mechanics/fire_clay)。它可以在高原、古老山脉、丘陵和高地的海拔较高处生成，需要[温度](the_world/climate#temperature)至少 18°C，[降雨量](the_world/climate#rainfall)至少 300mm。\$(thing)火球花\$()生长在高岭土上。
+ _untitled_
	```tfc:multimultiblock
	```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - Y
		  - - "0"
		mapping:
		  X: tfc:plant/blood_lily
		  Y: tfc:kaolin_clay_grass
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - Y
		  - - "0"
		mapping:
		  X: tfc:plant/blood_lily
		  Y: tfc:red_kaolin_clay
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - Y
		  - - "0"
		mapping:
		  X: tfc:plant/blood_lily
		  Y: tfc:white_kaolin_clay
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - Y
		  - - "0"
		mapping:
		  X: tfc:plant/blood_lily
		  Y: tfc:pink_kaolin_clay
		```
	高岭土的变种。
+ 石墨
	[](#graphite)
	```patchouli:spotlight
	item: tfc:ore/graphite
	link_recipes: false
	```
	石墨是一种\$(thing)矿物\$()，用于制作[耐火黏土](mechanics/fire_clay)。它可以在 y=60 以下的\$(thing)片麻岩\$()、\$(thing)大理岩\$()、\$(thing)石英岩\$()和\$(thing)片岩\$()中找到。
+ _untitled_
	```patchouli:multiblock
	multiblock:
	  pattern:
	    - - X
	    - - "0"
	  mapping:
	    X: tfc:ore/graphite/gneiss
	enable_visualize: false
	```
	片麻岩中的石墨。
+ 朱砂
	[](#cinnabar)
	```patchouli:spotlight
	item: tfc:ore/cinnabar
	link_recipes: false
	```
	朱砂是一种\$(thing)矿物\$()，可以在[手推磨](mechanics/quern)中研磨得到\$(thing)红石粉\$()。它可以在深层地下的矿脉中找到，存在于\$(thing)石英岩\$()、\$(thing)花岗岩\$()、\$(thing)千枚岩\$()和\$(thing)片岩\$()中。
+ _untitled_
	```patchouli:multiblock
	multiblock:
	  pattern:
	    - - X
	    - - "0"
	  mapping:
	    X: tfc:ore/cinnabar/quartzite
	enable_visualize: false
	```
	石英岩中的朱砂。
+ 冰晶石
	[](#cryolite)
	```patchouli:spotlight
	item: tfc:ore/cryolite
	link_recipes: false
	```
	冰晶石是一种\$(thing)矿物\$()，可以在[手推磨](mechanics/quern)中研磨得到\$(thing)红石粉\$()。它可以在深层地下的矿脉中找到，存在于\$(thing)花岗岩\$()和\$(thing)闪长岩\$()中。
+ _untitled_
	```patchouli:multiblock
	multiblock:
	  pattern:
	    - - X
	    - - "0"
	  mapping:
	    X: tfc:ore/cryolite/granite
	enable_visualize: false
	```
	花岗岩中的冰晶石。
+ 硝石
	[](#saltpeter)
	```patchouli:spotlight
	item: tfc:ore/saltpeter
	link_recipes: false
	```
	硝石是一种\$(thing)矿物\$()，可以在[手推磨](mechanics/quern)中研磨，然后用于制作\$(thing)火药\$()。它可以在近地表的[沉积岩](the_world/geology#sedimentary)中以非常巨大的扁平矿层形式找到。
+ _untitled_
	```patchouli:multiblock
	multiblock:
	  pattern:
	    - - X
	    - - "0"
	  mapping:
	    X: tfc:ore/saltpeter/shale
	enable_visualize: false
	```
	页岩中的硝石。
+ 硫磺
	[](#sulfur)
	```patchouli:spotlight
	item: tfc:ore/sulfur
	link_recipes: false
	```
	硫磺是一种\$(thing)矿物\$()，可以在[手推磨](mechanics/quern)中研磨，然后用于制作\$(thing)火药\$()。它出现在深层地下靠近岩浆层的位置，以稀疏但大型且丰富的矿脉形式存在，可在任何[变质岩](the_world/geology#metamorphic)或[侵入岩](the_world/geology#igneous_intrusive)中找到。
+ _untitled_
	```patchouli:multiblock
	multiblock:
	  pattern:
	    - - X
	    - - "0"
	  mapping:
	    X: tfc:ore/sulfur/gabbro
	enable_visualize: false
	```
	辉长岩中的硫磺。
+ 钾石盐
	[](#sylvite)
	```patchouli:spotlight
	item: tfc:ore/sylvite
	link_recipes: false
	```
	钾石盐是一种\$(thing)矿物\$()，可以在[手推磨](mechanics/quern)中研磨，然后用作[肥料](mechanics/fertilizers)。它可以在近地表的\$(thing)页岩\$()、\$(thing)黏土岩\$()和\$(thing)燧石岩\$()中以非常巨大的扁平矿层形式找到。
+ _untitled_
	```patchouli:multiblock
	multiblock:
	  pattern:
	    - - X
	    - - "0"
	  mapping:
	    X: tfc:ore/sylvite/chert
	enable_visualize: false
	```
	硅质岩中的钾盐
+ 硼砂
	[](#borax)
	```patchouli:spotlight
	item: tfc:ore/borax
	link_recipes: false
	```
	硼砂是一种\$(thing)矿物\$()，可以在[手推磨](mechanics/quern)中研磨制成[助焊剂](mechanics/flux)。它可以在近地表的\$(thing)黏土岩\$()、\$(thing)石灰岩\$()和\$(thing)页岩\$()中以非常巨大的扁平矿层形式找到。
+ _untitled_
	```patchouli:multiblock
	multiblock:
	  pattern:
	    - - X
	    - - "0"
	  mapping:
	    X: tfc:ore/borax/shale
	enable_visualize: false
	```
	页岩中的硼砂。
+ 石膏
	[](#gypsum)
	```patchouli:spotlight
	item: tfc:ore/gypsum
	link_recipes: false
	```
	石膏是一种装饰性\$(thing)矿物\$()，可用于制作[灰泥](mechanics/advanced_building_materials#plaster)。它可以在近地表的[沉积岩](the_world/geology#sedimentary)中以非常巨大的扁平矿层形式找到。
+ _untitled_
	```patchouli:multiblock
	multiblock:
	  pattern:
	    - - X
	    - - "0"
	  mapping:
	    X: tfc:ore/gypsum/chalk
	enable_visualize: false
	```
	白垩岩中的石膏。
+ 岩盐
	[](#halite)
	```patchouli:spotlight
	item: tfc:ore/halite
	link_recipes: false
	```
	岩盐是一种\$(thing)矿物\$()，可以在[手推磨](mechanics/quern)中研磨制成\$(thing)盐\$()，这是一种重要的[防腐剂](mechanics/decay#salting)。它可以在近地表的[沉积岩](the_world/geology#sedimentary)中以非常巨大的扁平矿层形式找到。
+ _untitled_
	```patchouli:multiblock
	multiblock:
	  pattern:
	    - - X
	    - - "0"
	  mapping:
	    X: tfc:halite
	enable_visualize: false
	```
	岩盐。
+ 祖母绿
	[](#emerald)
	```patchouli:spotlight
	item: tfc:ore/emerald
	link_recipes: false
	```
	祖母绿是一种装饰性[宝石](mechanics/gems)。它看起来相当漂亮，也许如果你能在这个无比孤独的世界中找到另一个人，你可以用它和他们交易……
	
	它以细长的垂直矿脉形式出现，最高可达一百格。它可以在[侵入岩](the_world/geology#igneous_intrusive)中找到。
+ _untitled_
	```patchouli:multiblock
	multiblock:
	  pattern:
	    - - X
	    - - "0"
	  mapping:
	    X: tfc:ore/emerald/diorite
	enable_visualize: false
	```
	闪长岩中的祖母绿。
+ 金伯利岩
	[](#diamond)
	```patchouli:spotlight
	item: tfc:ore/diamond
	link_recipes: false
	```
	金伯利岩是一种装饰性且价值连城的[宝石](mechanics/gems)。它以细长的垂直矿脉形式出现，称为[金伯利岩管](https://en.wikipedia.org/wiki/Volcanic_pipe)，最高可达一百格。它只能在\$(thing)辉长岩\$()中找到。
+ _untitled_
	```patchouli:multiblock
	multiblock:
	  pattern:
	    - - X
	    - - "0"
	  mapping:
	    X: tfc:ore/diamond/gabbro
	enable_visualize: false
	```
	辉长岩中的金伯利岩。
+ 青金石
	[](#lapis_lazuli)
	```patchouli:spotlight
	item: tfc:ore/lapis_lazuli
	link_recipes: false
	```
	青金石是一种装饰性\$(thing)矿物\$()，可用于制作[蓝色染料](mechanics/dye)。它可以在 y=-20 到 y=80 之间的\$(thing)石灰岩\$()和\$(thing)大理岩\$()中以大型但稀疏的矿脉形式找到。
+ _untitled_
	```patchouli:multiblock
	multiblock:
	  pattern:
	    - - X
	    - - "0"
	  mapping:
	    X: tfc:ore/lapis_lazuli/marble
	enable_visualize: false
	```
	大理岩中的青金石。
+ 紫水晶
	[](#amethyst)
	```patchouli:spotlight
	item: tfc:ore/amethyst
	link_recipes: false
	```
	紫水晶是一种装饰性\$(thing)矿物\$()，可用于制作[玻璃](mechanics/glassworking)。它可以在 y=40 以上的河流下方的\$(thing)沉积岩\$()和\$(thing)变质岩\$()中找到。
+ _untitled_
	```patchouli:multiblock
	multiblock:
	  pattern:
	    - - X
	    - - "0"
	  mapping:
	    X: tfc:ore/amethyst/marble
	enable_visualize: false
	```
	大理岩中的紫水晶。
+ 蛋白石
	[](#opal)
	```patchouli:spotlight
	item: tfc:ore/opal
	link_recipes: false
	```
	蛋白石是一种装饰性\$(thing)矿物\$()。它可以在 y=40 以上的河流下方的\$(thing)沉积岩\$()和\$(thing)喷出岩\$()中找到。
+ _untitled_
	```patchouli:multiblock
	multiblock:
	  pattern:
	    - - X
	    - - "0"
	  mapping:
	    X: tfc:ore/opal/basalt
	enable_visualize: false
	```
	玄武岩中的蛋白石。
+ 红宝石
	[](#ruby)
	```patchouli:spotlight
	item: tfc:ore/ruby
	link_recipes: false
	```
	红宝石是一种装饰性\$(thing)矿物\$()。它可以在 y=-10 以下的\$(thing)片岩\$()和\$(thing)片麻岩\$()中找到。
+ _untitled_
	```patchouli:multiblock
	multiblock:
	  pattern:
	    - - X
	    - - "0"
	  mapping:
	    X: tfc:ore/ruby/schist
	enable_visualize: false
	```
	片岩中的红宝石。
#历法和气候

```patchouli-entry
id: the_world/climate
name: 历法和气候
category: tfc:the_world
icon: tfc:textures/gui/book/icons/thermometer.png
read_by_default: true
sortnum: 2
```

+ _untitled_
	[](#calendar)
	在群峦传说中，气候和时间都是影响生存的非常重要的要素。首先，我们先来谈谈\$(thing)日历\$()。
	
	在任何时候，只要打开物品栏并点击\$(thing)日历\$()选项卡就能查看日历。这里会显示当前的\$(thing)季节\$()、\$(thing)日历日\$()和\$(thing)日期\$()。
+ _untitled_
	```patchouli:image
	images:
	  - tfc:textures/gui/book/gui/calendar.png
	border: false
	```
	日历界面
+ _untitled_
	群峦传说的世界是有四季的，气象和气候也会随之变化。每个季节根据月份分为\$(thing)初期\$()、\$(thing)仲期\$()和\$(thing)暮期\$()。以下是四季所对应的月份：
	\$(li)^春季^：三月 - 五月\$(li)^夏季^：六月 - 八月\$(li)^秋季^：九月 - 十一月\$(li)^冬季^：十二月 - 次年二月
+ _untitled_
	当前季节会影响地区的温度和降水（如果可以下雨或下雪）等。所以一定要经常查看日历，它对你的生存会有很大的帮助！
	
	接下来，我们来谈谈气候。
+ 气候
	[](#climate)
	主物品栏屏幕上的另一个选项卡是\$(thing)气候\$()屏幕。它显示当前位置的信息。
	
	从上到下，屏幕依次显示[当地气候](https://en.wikipedia.org/wiki/K%C3%B6ppen_climate_classification)、\$(thing)年平均温度\$()、当前温度、\$(thing)年平均降雨量\$()、当前降雨量、峰值降雨量以及峰值出现的季节。
+ _untitled_
	```patchouli:image
	images:
	  - tfc:textures/gui/book/gui/climate.png
	border: false
	```
	气候界面
+ 温度
	[](#temperature)
	一个地区的温度是由几个因素共同决定的。
	\$(li)首先，地质结构和纬度（Z 坐标）的影响是最大的。\$(li)其次是当前的季节——夏天最热，冬天最冷。\$(li)最后，每天的不同时间温度也会有所不同，且天和天之间也会有小幅变动。
+ _untitled_
	最后一行显示的是当前由上述因素共同决定后的温度。
	
	温度会影响很多事情：作物和植物是否会生长，冰雪是否会形成或融化等等。
+ 降雨量
	[](#rainfall)
	降雨量受多种因素影响：
	
	区域，尤其是经度（X 坐标）影响最大，通常出生点以东气候更湿润。距离海岸的远近也有影响，内陆地区气候更干燥。
+ _untitled_
	当前季节和当地气候也会影响降雨量。这些影响也取决于区域：西海岸通常夏季干燥，而大型大陆的东侧则有显著的夏季季风。大陆中心和海洋岛屿的季节变化较小。
+ _untitled_
	年降雨量以毫米（mm）为单位，范围在 0mm 到 500mm 之间，但在季节性强的气候中，瞬时降雨量可达 1000mm。降雨量影响一个地区的动植物种类，以及降雨和降雪的频率。
	
+ _untitled_
	一个区域的降雨量还决定了何种农作物能被种植在这儿。降雨量的多少是影响土地[湿度](mechanics/hydration)的一个重要因素，而湿度则决定了[农作物](mechanics/crops)、[果树](the_world/wild_fruits#fruit_trees)、和[灌木丛](the_world/wild_fruits#tall_bushes)是否可以生长。
#自然植物

```patchouli-entry
id: the_world/flora
name: 自然植物
category: tfc:the_world
icon: tfc:plant/goldenrod
read_by_default: true
sortnum: 3
```

+ _untitled_
	群峦传说中有非常非常多\$(italic)不同\$()种类的植物。
	
	不同的植物出现在不同的[气候](the_world/climate)中，它们的外观会随当前季节变化——经历开花、休眠的周期，或随着当地温度变化而改变颜色。色彩鲜艳的花朵通常可以在[手推磨](mechanics/quern)中粉碎以获得[染料](mechanics/dye)。
+ 普通植物
	```patchouli:multiblock
	multiblock:
	  pattern:
	    - - X
	    - - "0"
	  mapping:
	    X: tfc:plant/anthurium
	enable_visualize: false
	```
	普通植物就像小花。它们会生长在草地、泥土和农田上。
+ 耐旱植物
	```patchouli:multiblock
	multiblock:
	  pattern:
	    - - X
	    - - "0"
	  mapping:
	    X: tfc:plant/sagebrush
	enable_visualize: false
	```
	耐旱植物与普通植物一样，但它们可以在沙子上生长。这些植物一般只会生长在降雨量少的地区。
+ 仙人掌
	[](#cacti)
	```patchouli:multiblock
	multiblock:
	  pattern:
	    - - X
	    - - Y
	    - - "0"
	  mapping:
	    X: tfc:plant/barrel_cactus[part=upper]
	    Y: tfc:plant/barrel_cactus[part=lower]
	enable_visualize: false
	```
	仙人掌可以长到两个方块的高度，而且会对你造成伤害!
+ 匍匐植物
	```patchouli:multiblock
	multiblock:
	  pattern:
	    - - X
	    - - "0"
	  mapping:
	    X: tfc:plant/moss[down=true]
	enable_visualize: false
	```
	匍匐植物会在其他方块表面爬行。它们大部分时候都会成片出现。
+ 附生植物
	```patchouli:multiblock
	multiblock:
	  pattern:
	    - - XY
	    - - "0 "
	  mapping:
	    X: tfc:wood/wood/birch
	    Y: tfc:plant/licorice_fern[facing=south]
	enable_visualize: false
	```
	附生植物只能生长在原木的侧面。
+ 矮草
	```patchouli:multiblock
	multiblock:
	  pattern:
	    - - X
	    - - "0"
	  mapping:
	    X: tfc:plant/bluegrass
	enable_visualize: false
	```
	矮草会随着时间推移而长高。它们也能够在泥炭和壤泥上生长。
+ 高草
	```patchouli:multiblock
	multiblock:
	  pattern:
	    - - X
	    - - Y
	    - - "0"
	  mapping:
	    X: tfc:plant/king_fern[part=upper]
	    Y: tfc:plant/king_fern[part=lower]
	enable_visualize: false
	```
	高度刚好够遮住你的视野。
+ 藤蔓
	```patchouli:multiblock
	multiblock:
	  pattern:
	    - - X
	    - - "0"
	  mapping:
	    X: tfc:plant/ivy[up=true,north=true]
	enable_visualize: false
	```
	只要足够温暖，藤蔓就会自行散布。
+ 悬垂藤
	```patchouli:multiblock
	multiblock:
	  pattern:
	    - - X
	    - - Y
	    - - "0"
	  mapping:
	    X: tfc:plant/liana_plant
	    Y: tfc:plant/liana
	enable_visualize: false
	```
	悬垂藤蔓以其顶部一个方块为基础向下生长。
+ 缠绕藤
	```patchouli:multiblock
	multiblock:
	  pattern:
	    - - X
	    - - Y
	    - - "0"
	  mapping:
	    X: tfc:plant/arundo
	    Y: tfc:plant/arundo_plant
	enable_visualize: false
	```
	缠绕藤从地面向上生长。有些品种是实心的。
+ 水生植物
	水生植物只能在淡水或咸水中生成，其他方面和陆地上的植物没什么不同。一些水生植物可以烹饪成食物。
+ 普通水生植物
	```patchouli:multiblock
	multiblock:
	  pattern:
	    - - X
	    - - "0"
	  mapping:
	    X: tfc:plant/sago[fluid=water]
	enable_visualize: false
	```
	用\$(thing)刀\$()割普通水生植物可以获得\$(thing)海草\$()。
+ 水草
	```patchouli:multiblock
	multiblock:
	  pattern:
	    - - X
	    - - "0"
	  mapping:
	    X: tfc:plant/manatee_grass[fluid=salt_water]
	enable_visualize: false
	```
	水草就是生长在水中的草。
+ 高大水生植物
	```patchouli:multiblock
	multiblock:
	  pattern:
	    - - X
	    - - Y
	    - - "0"
	  mapping:
	    X: tfc:plant/cattail[part=upper]
	    Y: tfc:plant/cattail[part=lower,fluid=water]
	enable_visualize: false
	```
	只要下面那格有水就可以活。用\$(thing)刀\$()割\$(thing)水生芋头\$()和\$()阔叶香蒲\$()可以获得它们的\$(thing)根\$()。
+ 漂萍植物
	```patchouli:multiblock
	multiblock:
	  pattern:
	    - - X
	    - - Y
	    - - "0"
	  mapping:
	    X: tfc:plant/duckweed
	    Y: minecraft:water
	enable_visualize: false
	```
	漂萍植物生长在水面上。船会在接触时破坏它们。
+ 海带
	```patchouli:multiblock
	multiblock:
	  pattern:
	    - - X
	    - - Y
	    - - "0"
	  mapping:
	    X: tfc:plant/winged_kelp[fluid=salt_water]
	    Y: tfc:plant/winged_kelp_plant[fluid=salt_water]
	enable_visualize: false
	```
	海带是缠绕藤的水生版本。
+ 树海带
	```patchouli:multiblock
	multiblock:
	  pattern:
	    - - X
	    - - Y
	    - - "0"
	  mapping:
	    X: tfc:plant/giant_kelp_flower[facing=up,fluid=salt_water]
	    Y: tfc:plant/giant_kelp_plant[down=true,up=true,fluid=salt_water]
	enable_visualize: false
	```
	树海带在水下长成错综复杂的树。用\$(thing)刀\$()可以收获它们的花朵。
#野生作物

```patchouli-entry
id: the_world/wild_crops
name: 野生作物
category: tfc:the_world
icon: tfc:textures/gui/book/icons/wild_crops.png
read_by_default: true
sortnum: 4
extra_recipe_mappings:
  tag:tfc:wild_crops: 0
```

+ _untitled_
	世界各地都能找到小团的\$(thing)野生作物\$()。
	
	用手就可以收获野生作物，当然\$(thing)刀\$()或其他锋利的工具也行。它们会掉落\$(thing)种子\$()和一些\$(thing)农产品\$()。再次种植这些种子就可以种出人工栽培版本的作物。
+ 野生小麦
	```patchouli:multiblock
	multiblock:
	  pattern:
	    - - X
	    - - "0"
	  mapping:
	    X: tfc:wild_crop/wheat[mature=true]
	enable_visualize: false
	```
	作为示例，这是[小麦](mechanics/crops#wheat)的野生版本。
+ _untitled_
	每一种可以种植的[农作物](mechanics/crops)也都可以在野外找到。野生作物看起来与栽培的同类相似，但更隐蔽地隐藏在草丛中。野生作物只在六月到十月期间成熟。否则，它们会看起来像枯死一样，直到下一个夏天。
+ _untitled_
	```tfc:multimultiblock
	```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - "0"
		mapping:
		  X: tfc:wild_crop/barley
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - "0"
		mapping:
		  X: tfc:wild_crop/oat
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - "0"
		mapping:
		  X: tfc:wild_crop/rye
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - Y
		  - - "0"
		mapping:
		  X: tfc:wild_crop/maize[part=top]
		  Y: tfc:wild_crop/maize[part=bottom]
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - "0"
		mapping:
		  X: tfc:wild_crop/barley
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - "0"
		mapping:
		  X: tfc:wild_crop/rice[fluid=water]
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - "0"
		mapping:
		  X: tfc:wild_crop/beet
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - "0"
		mapping:
		  X: tfc:wild_crop/cabbage
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - "0"
		mapping:
		  X: tfc:wild_crop/carrot
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - "0"
		mapping:
		  X: tfc:wild_crop/garlic
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - Y
		  - - "0"
		mapping:
		  X: tfc:wild_crop/green_bean[part=top]
		  Y: tfc:wild_crop/green_bean[part=bottom]
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - "0"
		mapping:
		  X: tfc:wild_crop/potato
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - "0"
		mapping:
		  X: tfc:wild_crop/onion
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - "0"
		mapping:
		  X: tfc:wild_crop/soybean
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - "0"
		mapping:
		  X: tfc:wild_crop/squash
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - Y
		  - - "0"
		mapping:
		  X: tfc:wild_crop/sugarcane[part=top]
		  Y: tfc:wild_crop/sugarcane[part=bottom]
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - Y
		  - - "0"
		mapping:
		  X: tfc:wild_crop/tomato[part=top]
		  Y: tfc:wild_crop/tomato[part=bottom]
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - Y
		  - - "0"
		mapping:
		  X: tfc:wild_crop/jute[part=top]
		  Y: tfc:wild_crop/jute[part=bottom]
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - "0"
		mapping:
		  X: tfc:wild_crop/pumpkin
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - "0"
		mapping:
		  X: tfc:wild_crop/melon
		```
	所有野生作物的变种
+ 寻找野生作物
	野生作物会生成在接近该作物可种植的气候区域，因此如果要寻找特定作物，就到该作物可种植的气候中去寻找。然而，与玩家种植的[农作物](mechanics/crops)不同，野生作物不需要[湿度](mechanics/hydration)。相反，它们出现的位置取决于年平均[温度](the_world/climate#temperature)和[降雨量](the_world/climate#rainfall)。
+ _untitled_
	接下来的几页展示了一个表格，列出了可以找到野生作物的环境。
+ 野生作物所需条件
	```raw/tfc:table
	{
	  "type": "tfc:table",
	  "strings": [
	    {
	      "text": "Crop",
	      "bold": true
	    },
	    {
	      "text": "Temperature (°C)",
	      "bold": true
	    },
	    {
	      "text": "Rainfall (mm)",
	      "bold": true
	    },
	    {
	      "text": "Cassava"
	    },
	    {
	      "text": "10.4 - 40"
	    },
	    {
	      "text": "260 - 500"
	    },
	    {
	      "text": "Green Bean"
	    },
	    {
	      "text": " -4 - 19.4"
	    },
	    {
	      "text": "150 - 410"
	    },
	    {
	      "text": "Lentil"
	    },
	    {
	      "text": "-7.6 - 19.4"
	    },
	    {
	      "text": " 75 - 190"
	    },
	    {
	      "text": "Peanut"
	    },
	    {
	      "text": "12.2 - 40"
	    },
	    {
	      "text": "130 - 360"
	    },
	    {
	      "text": "Soybean"
	    },
	    {
	      "text": "-9.4 - 15.8"
	    },
	    {
	      "text": "160 - 410"
	    },
	    {
	      "text": "Barley"
	    },
	    {
	      "text": "-9.4 - 17.6"
	    },
	    {
	      "text": " 70 - 310"
	    },
	    {
	      "text": "Oat"
	    },
	    {
	      "text": "-9.4 - 15.8"
	    },
	    {
	      "text": "140 - 400"
	    },
	    {
	      "text": "Rye"
	    },
	    {
	      "text": "-9.4 - 8.6"
	    },
	    {
	      "text": "100 - 350"
	    },
	    {
	      "text": "Maize"
	    },
	    {
	      "text": "-9.4 - 23.0"
	    },
	    {
	      "text": "300 - 500"
	    },
	    {
	      "text": "Wheat"
	    },
	    {
	      "text": "-9.4 - 15.8"
	    },
	    {
	      "text": "100 - 400"
	    },
	    {
	      "text": "Rice"
	    },
	    {
	      "text": "8.6 - 40"
	    },
	    {
	      "text": "200 - 500"
	    },
	    {
	      "text": "Beet"
	    },
	    {
	      "text": "-13 - 23.0"
	    },
	    {
	      "text": " 70 - 300"
	    }
	  ],
	  "text": "",
	  "title": "野生作物所需条件",
	  "legend": [],
	  "columns": 2,
	  "first_column_width": 80,
	  "column_width": 70,
	  "row_height": 10,
	  "left_buffer": 2,
	  "top_buffer": 12,
	  "draw_background": false
	}
	```
+ _empty_
+ 野生作物所需条件
	```raw/tfc:table
	{
	  "type": "tfc:table",
	  "strings": [
	    {
	      "text": "Crop",
	      "bold": true
	    },
	    {
	      "text": "Temperature (°C)",
	      "bold": true
	    },
	    {
	      "text": "Rainfall (mm)",
	      "bold": true
	    },
	    {
	      "text": "Cabbage"
	    },
	    {
	      "text": "-13 - 23.0"
	    },
	    {
	      "text": " 60 - 280"
	    },
	    {
	      "text": "Carrot"
	    },
	    {
	      "text": "-13 - 23.0"
	    },
	    {
	      "text": "100 - 400"
	    },
	    {
	      "text": "Garlic"
	    },
	    {
	      "text": "-5.8 - 15.8"
	    },
	    {
	      "text": " 60 - 310"
	    },
	    {
	      "text": "Onion"
	    },
	    {
	      "text": "-7.6 - 21.2"
	    },
	    {
	      "text": "100 - 390"
	    },
	    {
	      "text": "Potato"
	    },
	    {
	      "text": "-9.4 - 15.8"
	    },
	    {
	      "text": "200 - 420"
	    },
	    {
	      "text": "Squash"
	    },
	    {
	      "text": "-9.4 - 19.4"
	    },
	    {
	      "text": " 90 - 390"
	    },
	    {
	      "text": "Tomato"
	    },
	    {
	      "text": "1.4 - 40"
	    },
	    {
	      "text": "120 - 390"
	    },
	    {
	      "text": "Red Bell Pepper"
	    },
	    {
	      "text": "12.2 - 40"
	    },
	    {
	      "text": "190 - 450"
	    },
	    {
	      "text": "Yellow Bell Pepper"
	    },
	    {
	      "text": "12.2 - 40"
	    },
	    {
	      "text": "190 - 450"
	    },
	    {
	      "text": "Pumpkin"
	    },
	    {
	      "text": "-9.4 - 23.0"
	    },
	    {
	      "text": "120 - 390"
	    }
	  ],
	  "text": "",
	  "title": "野生作物所需条件",
	  "legend": [],
	  "columns": 2,
	  "first_column_width": 80,
	  "column_width": 70,
	  "row_height": 10,
	  "left_buffer": 2,
	  "top_buffer": 12,
	  "draw_background": false
	}
	```
+ _empty_
+ 野生作物所需条件
	```raw/tfc:table
	{
	  "type": "tfc:table",
	  "strings": [
	    {
	      "text": "Crop",
	      "bold": true
	    },
	    {
	      "text": "Temperature (°C)",
	      "bold": true
	    },
	    {
	      "text": "Rainfall (mm)",
	      "bold": true
	    },
	    {
	      "text": "Melon"
	    },
	    {
	      "text": "  5 - 40"
	    },
	    {
	      "text": "200 - 500"
	    },
	    {
	      "text": "Canola"
	    },
	    {
	      "text": "-13 - 3.2"
	    },
	    {
	      "text": "120 - 320"
	    },
	    {
	      "text": "Radish"
	    },
	    {
	      "text": "-11.2 - 6.8"
	    },
	    {
	      "text": "190 - 410"
	    },
	    {
	      "text": "Alfalfa"
	    },
	    {
	      "text": "-14.8 - 5"
	    },
	    {
	      "text": "240 - 480"
	    },
	    {
	      "text": "Jute"
	    },
	    {
	      "text": "1.4 - 19.4"
	    },
	    {
	      "text": "100 - 410"
	    },
	    {
	      "text": "Papyrus"
	    },
	    {
	      "text": "12.2 - 40"
	    },
	    {
	      "text": "310 - 500"
	    },
	    {
	      "text": "Sugarcane"
	    },
	    {
	      "text": "17.6 - 40"
	    },
	    {
	      "text": "160 - 500"
	    }
	  ],
	  "text": "",
	  "title": "野生作物所需条件",
	  "legend": [],
	  "columns": 2,
	  "first_column_width": 80,
	  "column_width": 70,
	  "row_height": 10,
	  "left_buffer": 2,
	  "top_buffer": 12,
	  "draw_background": false
	}
	```
+ _empty_
#野生水果

```patchouli-entry
id: the_world/wild_fruits
name: 野生水果
category: tfc:the_world
icon: tfc:textures/item/food/elderberry.png
read_by_default: true
sortnum: 5
extra_recipe_mappings:
  tfc:food/cherry: 8
  tfc:plant/cherry_sapling: 8
  tfc:food/green_apple: 10
  tfc:plant/green_apple_sapling: 10
  tfc:food/lemon: 12
  tfc:plant/lemon_sapling: 12
  tfc:food/olive: 14
  tfc:plant/olive_sapling: 14
  tfc:food/orange: 16
  tfc:plant/orange_sapling: 16
  tfc:food/peach: 18
  tfc:plant/peach_sapling: 18
  tfc:food/plum: 20
  tfc:plant/plum_sapling: 20
  tfc:food/red_apple: 22
  tfc:plant/red_apple_sapling: 22
  tfc:food/banana: 24
  tfc:plant/banana_sapling: 24
  tfc:food/blackberry: 32
  tfc:plant/blackberry_bush: 32
  tfc:food/raspberry: 34
  tfc:plant/raspberry_bush: 34
  tfc:food/blueberry: 36
  tfc:plant/blueberry_bush: 36
  tfc:food/elderberry: 38
  tfc:plant/elderberry_bush: 38
  tfc:food/bunchberry: 44
  tfc:plant/bunchberry_bush: 44
  tfc:food/gooseberry: 46
  tfc:plant/gooseberry_bush: 46
  tfc:food/snowberry: 48
  tfc:plant/snowberry_bush: 48
  tfc:food/cloudberry: 50
  tfc:plant/cloudberry_bush: 50
  tfc:food/strawberry: 52
  tfc:plant/strawberry_bush: 52
  tfc:food/wintergreen_berry: 54
  tfc:plant/wintergreen_berry_bush: 54
  tfc:food/cranberry: 56
  tfc:plant/cranberry_bush: 56
```

+ _untitled_
	许多不同种类的野生水果生长在世界各地。可以直接吃掉它们，或用合适的工具来种植。通常来说，它们会以三种不同的形式出现：[果树](the_world/wild_fruits#fruit_trees)、[高大灌木](the_world/wild_fruits#tall_bushes)、或[小型灌木](the_world/wild_fruits#small_bushes)。
	
	所有会结果的植物都有属于自己的生命周期。它们每年都会生长、开花、结果、然后休眠。
+ _untitled_
	果木的生长是有季节性的。在冬眠的季节中，它们会看上去像枯死了一般。而到了春天，它们则会长出翠绿的新枝，准备开花结果。每种水果的具体结果时间因树而异。另外，果木也会因衰老、或处于不当的气候环境中而死亡。
+ 果树
	[](#fruit_trees)
	\$(thing)果树\$()会从一棵小树苗长成高大的果树。果树的树枝是它们最重要的部分，而且只要气候环境合适就会持续生长。随着果树不断成长，它们会在树枝周围长出\$(thing)树叶\$()。树叶会在合适的季节中开花结果。
+ _untitled_
	```patchouli:image
	images:
	  - tfc:textures/gui/book/tutorial/fruit_tree.png
	border: true
	```
	一棵典型的果树。
+ _untitled_
	果树始于\$(thing)树苗\$()。只有当该果树的非休眠季节且满足其气候要求时，树苗才会开始生长，种下第一段树干。最终树的大小大致由原始树苗方块中包含的树苗数量决定。树苗越多，树就越大。
	可以通过\$(thing)嫁接\$()在同一方块中添加更多树苗。要嫁接树苗，只需手持树苗，副手拿着\$(thing)刀\$()，然后对着已有的树苗\$(item)\$(k:key.use)\$()。
+ _untitled_
	要从果树获取树苗，用\$(thing)斧\$()破坏“肘部”方块（即一侧和上方都有连接的树枝方块）。树苗也可以放置在树的这些“肘部”位置，只要它们不是太高。这样一棵果树就可以结出多种水果。当树叶方块结果时，用\$(item)\$(k:key.use)\$()即可收获果实。这会获得一个水果，并将植株恢复到生长阶段，直到冬季休眠。
+ _untitled_
	种植果树时，正确的[温度](the_world/climate#temperature)和[湿度](mechanics/hydration)至关重要。只有当树木基部（种植树苗处）的年平均温度在该树种范围内时，果树才会生长和结果。同样，湿度由年平均降雨量和树木基部附近的水源决定。
+ _empty_
+ 樱桃树
	[](#cherry)
	可在以下区域找到：
	\$(bold)[温度](the_world/climate#temperature): -5.2 - 14 °C
	\$(bold)[降雨量](the_world/climate#rainfall): 100 - 350mm
	
	生长所需条件：
	\$(bold)[温度](the_world/climate#temperature): -6.4 - 15.2 °C
	\$(bold)[湿度](mechanics/hydration): 7 - 80%
	
	樱桃树在一月至三月生长，四月至五月开花，六月结果。
+ _untitled_
	```tfc:multimultiblock
	```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - "     "
		    - "  L  "
		    - "     "
		    - "     "
		    - "     "
		  - - "  L  "
		    - " L1L "
		    - "  L  "
		    - "     "
		    - "     "
		  - - "  L  "
		    - " L1L "
		    - "  L  "
		    - "     "
		    - "     "
		  - - "  L  "
		    - " L3L "
		    - " L2L "
		    - "  L  "
		    - "     "
		  - - "     "
		    - "     "
		    - "  0  "
		    - "     "
		    - "     "
		  - - "     "
		    - "     "
		    - "  1  "
		    - "     "
		    - "     "
		mapping:
		  "0": tfc:plant/cherry_branch[down=true,up=true]
		  "1": tfc:plant/cherry_branch[down=true,up=true]
		  "2": tfc:plant/cherry_branch[down=true,west=true]
		  "3": tfc:plant/cherry_branch[east=true,up=true]
		  L: tfc:plant/cherry_leaves[lifecycle=dormant]
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - "     "
		    - "  L  "
		    - "     "
		    - "     "
		    - "     "
		  - - "  L  "
		    - " L1L "
		    - "  L  "
		    - "     "
		    - "     "
		  - - "  L  "
		    - " L1L "
		    - "  L  "
		    - "     "
		    - "     "
		  - - "  L  "
		    - " L3L "
		    - " L2L "
		    - "  L  "
		    - "     "
		  - - "     "
		    - "     "
		    - "  0  "
		    - "     "
		    - "     "
		  - - "     "
		    - "     "
		    - "  1  "
		    - "     "
		    - "     "
		mapping:
		  "0": tfc:plant/cherry_branch[down=true,up=true]
		  "1": tfc:plant/cherry_branch[down=true,up=true]
		  "2": tfc:plant/cherry_branch[down=true,west=true]
		  "3": tfc:plant/cherry_branch[east=true,up=true]
		  L: tfc:plant/cherry_leaves[lifecycle=healthy]
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - "     "
		    - "  L  "
		    - "     "
		    - "     "
		    - "     "
		  - - "  L  "
		    - " L1L "
		    - "  L  "
		    - "     "
		    - "     "
		  - - "  L  "
		    - " L1L "
		    - "  L  "
		    - "     "
		    - "     "
		  - - "  L  "
		    - " L3L "
		    - " L2L "
		    - "  L  "
		    - "     "
		  - - "     "
		    - "     "
		    - "  0  "
		    - "     "
		    - "     "
		  - - "     "
		    - "     "
		    - "  1  "
		    - "     "
		    - "     "
		mapping:
		  "0": tfc:plant/cherry_branch[down=true,up=true]
		  "1": tfc:plant/cherry_branch[down=true,up=true]
		  "2": tfc:plant/cherry_branch[down=true,west=true]
		  "3": tfc:plant/cherry_branch[east=true,up=true]
		  L: tfc:plant/cherry_leaves[lifecycle=flowering]
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - "     "
		    - "  L  "
		    - "     "
		    - "     "
		    - "     "
		  - - "  L  "
		    - " L1L "
		    - "  L  "
		    - "     "
		    - "     "
		  - - "  L  "
		    - " L1L "
		    - "  L  "
		    - "     "
		    - "     "
		  - - "  L  "
		    - " L3L "
		    - " L2L "
		    - "  L  "
		    - "     "
		  - - "     "
		    - "     "
		    - "  0  "
		    - "     "
		    - "     "
		  - - "     "
		    - "     "
		    - "  1  "
		    - "     "
		    - "     "
		mapping:
		  "0": tfc:plant/cherry_branch[down=true,up=true]
		  "1": tfc:plant/cherry_branch[down=true,up=true]
		  "2": tfc:plant/cherry_branch[down=true,west=true]
		  "3": tfc:plant/cherry_branch[east=true,up=true]
		  L: tfc:plant/cherry_leaves[lifecycle=fruiting]
		```
	一棵典型的樱桃树。
+ 青苹果树
	[](#green_apple)
	可在以下区域找到：
	\$(bold)[温度](the_world/climate#temperature): -10.6 - 10.4 °C
	\$(bold)[降雨量](the_world/climate#rainfall): 130 - 280mm
	
	生长所需条件：
	\$(bold)[温度](the_world/climate#temperature): -11.8 - 11.6 °C
	\$(bold)[湿度](mechanics/hydration): 10 - 75%
	
	青苹果树三月至七月生长，八月至九月开花，十月结果。
+ _untitled_
	```tfc:multimultiblock
	```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - "     "
		    - "  L  "
		    - "     "
		    - "     "
		    - "     "
		  - - "  L  "
		    - " L1L "
		    - "  L  "
		    - "     "
		    - "     "
		  - - "  L  "
		    - " L1L "
		    - "  L  "
		    - "     "
		    - "     "
		  - - "  L  "
		    - " L3L "
		    - " L2L "
		    - "  L  "
		    - "     "
		  - - "     "
		    - "     "
		    - "  0  "
		    - "     "
		    - "     "
		  - - "     "
		    - "     "
		    - "  1  "
		    - "     "
		    - "     "
		mapping:
		  "0": tfc:plant/green_apple_branch[down=true,up=true]
		  "1": tfc:plant/green_apple_branch[down=true,up=true]
		  "2": tfc:plant/green_apple_branch[down=true,west=true]
		  "3": tfc:plant/green_apple_branch[east=true,up=true]
		  L: tfc:plant/green_apple_leaves[lifecycle=dormant]
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - "     "
		    - "  L  "
		    - "     "
		    - "     "
		    - "     "
		  - - "  L  "
		    - " L1L "
		    - "  L  "
		    - "     "
		    - "     "
		  - - "  L  "
		    - " L1L "
		    - "  L  "
		    - "     "
		    - "     "
		  - - "  L  "
		    - " L3L "
		    - " L2L "
		    - "  L  "
		    - "     "
		  - - "     "
		    - "     "
		    - "  0  "
		    - "     "
		    - "     "
		  - - "     "
		    - "     "
		    - "  1  "
		    - "     "
		    - "     "
		mapping:
		  "0": tfc:plant/green_apple_branch[down=true,up=true]
		  "1": tfc:plant/green_apple_branch[down=true,up=true]
		  "2": tfc:plant/green_apple_branch[down=true,west=true]
		  "3": tfc:plant/green_apple_branch[east=true,up=true]
		  L: tfc:plant/green_apple_leaves[lifecycle=healthy]
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - "     "
		    - "  L  "
		    - "     "
		    - "     "
		    - "     "
		  - - "  L  "
		    - " L1L "
		    - "  L  "
		    - "     "
		    - "     "
		  - - "  L  "
		    - " L1L "
		    - "  L  "
		    - "     "
		    - "     "
		  - - "  L  "
		    - " L3L "
		    - " L2L "
		    - "  L  "
		    - "     "
		  - - "     "
		    - "     "
		    - "  0  "
		    - "     "
		    - "     "
		  - - "     "
		    - "     "
		    - "  1  "
		    - "     "
		    - "     "
		mapping:
		  "0": tfc:plant/green_apple_branch[down=true,up=true]
		  "1": tfc:plant/green_apple_branch[down=true,up=true]
		  "2": tfc:plant/green_apple_branch[down=true,west=true]
		  "3": tfc:plant/green_apple_branch[east=true,up=true]
		  L: tfc:plant/green_apple_leaves[lifecycle=flowering]
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - "     "
		    - "  L  "
		    - "     "
		    - "     "
		    - "     "
		  - - "  L  "
		    - " L1L "
		    - "  L  "
		    - "     "
		    - "     "
		  - - "  L  "
		    - " L1L "
		    - "  L  "
		    - "     "
		    - "     "
		  - - "  L  "
		    - " L3L "
		    - " L2L "
		    - "  L  "
		    - "     "
		  - - "     "
		    - "     "
		    - "  0  "
		    - "     "
		    - "     "
		  - - "     "
		    - "     "
		    - "  1  "
		    - "     "
		    - "     "
		mapping:
		  "0": tfc:plant/green_apple_branch[down=true,up=true]
		  "1": tfc:plant/green_apple_branch[down=true,up=true]
		  "2": tfc:plant/green_apple_branch[down=true,west=true]
		  "3": tfc:plant/green_apple_branch[east=true,up=true]
		  L: tfc:plant/green_apple_leaves[lifecycle=fruiting]
		```
	一棵典型的青苹果树。
+ 柠檬树
	[](#lemon)
	可在以下区域找到：
	\$(bold)[温度](the_world/climate#temperature): 7.4 - 24.8 °C
	\$(bold)[降雨量](the_world/climate#rainfall): 220 - 440mm
	
	生长所需条件：
	\$(bold)[温度](the_world/climate#temperature): 6.2 - 26 °C
	\$(bold)[湿度](mechanics/hydration): 19 - 95%
	
	柠檬树二月至五月生长，六月至七月开花，八月结果。
+ _untitled_
	```tfc:multimultiblock
	```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - "     "
		    - "  L  "
		    - "     "
		    - "     "
		    - "     "
		  - - "  L  "
		    - " L1L "
		    - "  L  "
		    - "     "
		    - "     "
		  - - "  L  "
		    - " L1L "
		    - "  L  "
		    - "     "
		    - "     "
		  - - "  L  "
		    - " L3L "
		    - " L2L "
		    - "  L  "
		    - "     "
		  - - "     "
		    - "     "
		    - "  0  "
		    - "     "
		    - "     "
		  - - "     "
		    - "     "
		    - "  1  "
		    - "     "
		    - "     "
		mapping:
		  "0": tfc:plant/lemon_branch[down=true,up=true]
		  "1": tfc:plant/lemon_branch[down=true,up=true]
		  "2": tfc:plant/lemon_branch[down=true,west=true]
		  "3": tfc:plant/lemon_branch[east=true,up=true]
		  L: tfc:plant/lemon_leaves[lifecycle=dormant]
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - "     "
		    - "  L  "
		    - "     "
		    - "     "
		    - "     "
		  - - "  L  "
		    - " L1L "
		    - "  L  "
		    - "     "
		    - "     "
		  - - "  L  "
		    - " L1L "
		    - "  L  "
		    - "     "
		    - "     "
		  - - "  L  "
		    - " L3L "
		    - " L2L "
		    - "  L  "
		    - "     "
		  - - "     "
		    - "     "
		    - "  0  "
		    - "     "
		    - "     "
		  - - "     "
		    - "     "
		    - "  1  "
		    - "     "
		    - "     "
		mapping:
		  "0": tfc:plant/lemon_branch[down=true,up=true]
		  "1": tfc:plant/lemon_branch[down=true,up=true]
		  "2": tfc:plant/lemon_branch[down=true,west=true]
		  "3": tfc:plant/lemon_branch[east=true,up=true]
		  L: tfc:plant/lemon_leaves[lifecycle=healthy]
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - "     "
		    - "  L  "
		    - "     "
		    - "     "
		    - "     "
		  - - "  L  "
		    - " L1L "
		    - "  L  "
		    - "     "
		    - "     "
		  - - "  L  "
		    - " L1L "
		    - "  L  "
		    - "     "
		    - "     "
		  - - "  L  "
		    - " L3L "
		    - " L2L "
		    - "  L  "
		    - "     "
		  - - "     "
		    - "     "
		    - "  0  "
		    - "     "
		    - "     "
		  - - "     "
		    - "     "
		    - "  1  "
		    - "     "
		    - "     "
		mapping:
		  "0": tfc:plant/lemon_branch[down=true,up=true]
		  "1": tfc:plant/lemon_branch[down=true,up=true]
		  "2": tfc:plant/lemon_branch[down=true,west=true]
		  "3": tfc:plant/lemon_branch[east=true,up=true]
		  L: tfc:plant/lemon_leaves[lifecycle=flowering]
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - "     "
		    - "  L  "
		    - "     "
		    - "     "
		    - "     "
		  - - "  L  "
		    - " L1L "
		    - "  L  "
		    - "     "
		    - "     "
		  - - "  L  "
		    - " L1L "
		    - "  L  "
		    - "     "
		    - "     "
		  - - "  L  "
		    - " L3L "
		    - " L2L "
		    - "  L  "
		    - "     "
		  - - "     "
		    - "     "
		    - "  0  "
		    - "     "
		    - "     "
		  - - "     "
		    - "     "
		    - "  1  "
		    - "     "
		    - "     "
		mapping:
		  "0": tfc:plant/lemon_branch[down=true,up=true]
		  "1": tfc:plant/lemon_branch[down=true,up=true]
		  "2": tfc:plant/lemon_branch[down=true,west=true]
		  "3": tfc:plant/lemon_branch[east=true,up=true]
		  L: tfc:plant/lemon_leaves[lifecycle=fruiting]
		```
	一棵典型的柠檬树。
+ 橄榄树
	[](#olive)
	可在以下区域找到：
	\$(bold)[温度](the_world/climate#temperature): 2 - 23 °C
	\$(bold)[降雨量](the_world/climate#rainfall): 250 - 450mm
	
	生长所需条件：
	\$(bold)[温度](the_world/climate#temperature): 0.8 - 24.2 °C
	\$(bold)[湿度](mechanics/hydration): 22 - 95%
	
	橄榄树三月至七月生长，八月至九月开花，十月结果。
	
	橄榄可用于生产[橄榄油](mechanics/lamps#olives)，可用作灯的燃料。
+ _untitled_
	```tfc:multimultiblock
	```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - "     "
		    - "  L  "
		    - "     "
		    - "     "
		    - "     "
		  - - "  L  "
		    - " L1L "
		    - "  L  "
		    - "     "
		    - "     "
		  - - "  L  "
		    - " L1L "
		    - "  L  "
		    - "     "
		    - "     "
		  - - "  L  "
		    - " L3L "
		    - " L2L "
		    - "  L  "
		    - "     "
		  - - "     "
		    - "     "
		    - "  0  "
		    - "     "
		    - "     "
		  - - "     "
		    - "     "
		    - "  1  "
		    - "     "
		    - "     "
		mapping:
		  "0": tfc:plant/olive_branch[down=true,up=true]
		  "1": tfc:plant/olive_branch[down=true,up=true]
		  "2": tfc:plant/olive_branch[down=true,west=true]
		  "3": tfc:plant/olive_branch[east=true,up=true]
		  L: tfc:plant/olive_leaves[lifecycle=dormant]
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - "     "
		    - "  L  "
		    - "     "
		    - "     "
		    - "     "
		  - - "  L  "
		    - " L1L "
		    - "  L  "
		    - "     "
		    - "     "
		  - - "  L  "
		    - " L1L "
		    - "  L  "
		    - "     "
		    - "     "
		  - - "  L  "
		    - " L3L "
		    - " L2L "
		    - "  L  "
		    - "     "
		  - - "     "
		    - "     "
		    - "  0  "
		    - "     "
		    - "     "
		  - - "     "
		    - "     "
		    - "  1  "
		    - "     "
		    - "     "
		mapping:
		  "0": tfc:plant/olive_branch[down=true,up=true]
		  "1": tfc:plant/olive_branch[down=true,up=true]
		  "2": tfc:plant/olive_branch[down=true,west=true]
		  "3": tfc:plant/olive_branch[east=true,up=true]
		  L: tfc:plant/olive_leaves[lifecycle=healthy]
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - "     "
		    - "  L  "
		    - "     "
		    - "     "
		    - "     "
		  - - "  L  "
		    - " L1L "
		    - "  L  "
		    - "     "
		    - "     "
		  - - "  L  "
		    - " L1L "
		    - "  L  "
		    - "     "
		    - "     "
		  - - "  L  "
		    - " L3L "
		    - " L2L "
		    - "  L  "
		    - "     "
		  - - "     "
		    - "     "
		    - "  0  "
		    - "     "
		    - "     "
		  - - "     "
		    - "     "
		    - "  1  "
		    - "     "
		    - "     "
		mapping:
		  "0": tfc:plant/olive_branch[down=true,up=true]
		  "1": tfc:plant/olive_branch[down=true,up=true]
		  "2": tfc:plant/olive_branch[down=true,west=true]
		  "3": tfc:plant/olive_branch[east=true,up=true]
		  L: tfc:plant/olive_leaves[lifecycle=flowering]
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - "     "
		    - "  L  "
		    - "     "
		    - "     "
		    - "     "
		  - - "  L  "
		    - " L1L "
		    - "  L  "
		    - "     "
		    - "     "
		  - - "  L  "
		    - " L1L "
		    - "  L  "
		    - "     "
		    - "     "
		  - - "  L  "
		    - " L3L "
		    - " L2L "
		    - "  L  "
		    - "     "
		  - - "     "
		    - "     "
		    - "  0  "
		    - "     "
		    - "     "
		  - - "     "
		    - "     "
		    - "  1  "
		    - "     "
		    - "     "
		mapping:
		  "0": tfc:plant/olive_branch[down=true,up=true]
		  "1": tfc:plant/olive_branch[down=true,up=true]
		  "2": tfc:plant/olive_branch[down=true,west=true]
		  "3": tfc:plant/olive_branch[east=true,up=true]
		  L: tfc:plant/olive_leaves[lifecycle=fruiting]
		```
	一棵典型的橄榄树。
+ 橙树
	[](#orange)
	可在以下区域找到：
	\$(bold)[温度](the_world/climate#temperature): 9.2 - 40 °C
	\$(bold)[降雨量](the_world/climate#rainfall): 300 - 500mm
	
	生长所需条件：
	\$(bold)[温度](the_world/climate#temperature): 8 - 41.2 °C
	\$(bold)[湿度](mechanics/hydration): 27 - 100%
	
	橙树三月至六月生长，七月至八月开花，九月结果。
+ _untitled_
	```tfc:multimultiblock
	```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - "     "
		    - "  L  "
		    - "     "
		    - "     "
		    - "     "
		  - - "  L  "
		    - " L1L "
		    - "  L  "
		    - "     "
		    - "     "
		  - - "  L  "
		    - " L1L "
		    - "  L  "
		    - "     "
		    - "     "
		  - - "  L  "
		    - " L3L "
		    - " L2L "
		    - "  L  "
		    - "     "
		  - - "     "
		    - "     "
		    - "  0  "
		    - "     "
		    - "     "
		  - - "     "
		    - "     "
		    - "  1  "
		    - "     "
		    - "     "
		mapping:
		  "0": tfc:plant/orange_branch[down=true,up=true]
		  "1": tfc:plant/orange_branch[down=true,up=true]
		  "2": tfc:plant/orange_branch[down=true,west=true]
		  "3": tfc:plant/orange_branch[east=true,up=true]
		  L: tfc:plant/orange_leaves[lifecycle=dormant]
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - "     "
		    - "  L  "
		    - "     "
		    - "     "
		    - "     "
		  - - "  L  "
		    - " L1L "
		    - "  L  "
		    - "     "
		    - "     "
		  - - "  L  "
		    - " L1L "
		    - "  L  "
		    - "     "
		    - "     "
		  - - "  L  "
		    - " L3L "
		    - " L2L "
		    - "  L  "
		    - "     "
		  - - "     "
		    - "     "
		    - "  0  "
		    - "     "
		    - "     "
		  - - "     "
		    - "     "
		    - "  1  "
		    - "     "
		    - "     "
		mapping:
		  "0": tfc:plant/orange_branch[down=true,up=true]
		  "1": tfc:plant/orange_branch[down=true,up=true]
		  "2": tfc:plant/orange_branch[down=true,west=true]
		  "3": tfc:plant/orange_branch[east=true,up=true]
		  L: tfc:plant/orange_leaves[lifecycle=healthy]
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - "     "
		    - "  L  "
		    - "     "
		    - "     "
		    - "     "
		  - - "  L  "
		    - " L1L "
		    - "  L  "
		    - "     "
		    - "     "
		  - - "  L  "
		    - " L1L "
		    - "  L  "
		    - "     "
		    - "     "
		  - - "  L  "
		    - " L3L "
		    - " L2L "
		    - "  L  "
		    - "     "
		  - - "     "
		    - "     "
		    - "  0  "
		    - "     "
		    - "     "
		  - - "     "
		    - "     "
		    - "  1  "
		    - "     "
		    - "     "
		mapping:
		  "0": tfc:plant/orange_branch[down=true,up=true]
		  "1": tfc:plant/orange_branch[down=true,up=true]
		  "2": tfc:plant/orange_branch[down=true,west=true]
		  "3": tfc:plant/orange_branch[east=true,up=true]
		  L: tfc:plant/orange_leaves[lifecycle=flowering]
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - "     "
		    - "  L  "
		    - "     "
		    - "     "
		    - "     "
		  - - "  L  "
		    - " L1L "
		    - "  L  "
		    - "     "
		    - "     "
		  - - "  L  "
		    - " L1L "
		    - "  L  "
		    - "     "
		    - "     "
		  - - "  L  "
		    - " L3L "
		    - " L2L "
		    - "  L  "
		    - "     "
		  - - "     "
		    - "     "
		    - "  0  "
		    - "     "
		    - "     "
		  - - "     "
		    - "     "
		    - "  1  "
		    - "     "
		    - "     "
		mapping:
		  "0": tfc:plant/orange_branch[down=true,up=true]
		  "1": tfc:plant/orange_branch[down=true,up=true]
		  "2": tfc:plant/orange_branch[down=true,west=true]
		  "3": tfc:plant/orange_branch[east=true,up=true]
		  L: tfc:plant/orange_leaves[lifecycle=fruiting]
		```
	一棵典型的橙树。
+ 桃树
	[](#peach)
	可在以下区域找到：
	\$(bold)[温度](the_world/climate#temperature): -3.4 - 15.8 °C
	\$(bold)[降雨量](the_world/climate#rainfall): 180 - 470mm
	
	生长所需条件：
	\$(bold)[温度](the_world/climate#temperature): -4.6 - 17 °C
	\$(bold)[湿度](mechanics/hydration): 15 - 95%
	
	桃树十二月至三月生长，四月至五月开花，六月结果。
+ _untitled_
	```tfc:multimultiblock
	```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - "     "
		    - "  L  "
		    - "     "
		    - "     "
		    - "     "
		  - - "  L  "
		    - " L1L "
		    - "  L  "
		    - "     "
		    - "     "
		  - - "  L  "
		    - " L1L "
		    - "  L  "
		    - "     "
		    - "     "
		  - - "  L  "
		    - " L3L "
		    - " L2L "
		    - "  L  "
		    - "     "
		  - - "     "
		    - "     "
		    - "  0  "
		    - "     "
		    - "     "
		  - - "     "
		    - "     "
		    - "  1  "
		    - "     "
		    - "     "
		mapping:
		  "0": tfc:plant/peach_branch[down=true,up=true]
		  "1": tfc:plant/peach_branch[down=true,up=true]
		  "2": tfc:plant/peach_branch[down=true,west=true]
		  "3": tfc:plant/peach_branch[east=true,up=true]
		  L: tfc:plant/peach_leaves[lifecycle=dormant]
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - "     "
		    - "  L  "
		    - "     "
		    - "     "
		    - "     "
		  - - "  L  "
		    - " L1L "
		    - "  L  "
		    - "     "
		    - "     "
		  - - "  L  "
		    - " L1L "
		    - "  L  "
		    - "     "
		    - "     "
		  - - "  L  "
		    - " L3L "
		    - " L2L "
		    - "  L  "
		    - "     "
		  - - "     "
		    - "     "
		    - "  0  "
		    - "     "
		    - "     "
		  - - "     "
		    - "     "
		    - "  1  "
		    - "     "
		    - "     "
		mapping:
		  "0": tfc:plant/peach_branch[down=true,up=true]
		  "1": tfc:plant/peach_branch[down=true,up=true]
		  "2": tfc:plant/peach_branch[down=true,west=true]
		  "3": tfc:plant/peach_branch[east=true,up=true]
		  L: tfc:plant/peach_leaves[lifecycle=healthy]
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - "     "
		    - "  L  "
		    - "     "
		    - "     "
		    - "     "
		  - - "  L  "
		    - " L1L "
		    - "  L  "
		    - "     "
		    - "     "
		  - - "  L  "
		    - " L1L "
		    - "  L  "
		    - "     "
		    - "     "
		  - - "  L  "
		    - " L3L "
		    - " L2L "
		    - "  L  "
		    - "     "
		  - - "     "
		    - "     "
		    - "  0  "
		    - "     "
		    - "     "
		  - - "     "
		    - "     "
		    - "  1  "
		    - "     "
		    - "     "
		mapping:
		  "0": tfc:plant/peach_branch[down=true,up=true]
		  "1": tfc:plant/peach_branch[down=true,up=true]
		  "2": tfc:plant/peach_branch[down=true,west=true]
		  "3": tfc:plant/peach_branch[east=true,up=true]
		  L: tfc:plant/peach_leaves[lifecycle=flowering]
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - "     "
		    - "  L  "
		    - "     "
		    - "     "
		    - "     "
		  - - "  L  "
		    - " L1L "
		    - "  L  "
		    - "     "
		    - "     "
		  - - "  L  "
		    - " L1L "
		    - "  L  "
		    - "     "
		    - "     "
		  - - "  L  "
		    - " L3L "
		    - " L2L "
		    - "  L  "
		    - "     "
		  - - "     "
		    - "     "
		    - "  0  "
		    - "     "
		    - "     "
		  - - "     "
		    - "     "
		    - "  1  "
		    - "     "
		    - "     "
		mapping:
		  "0": tfc:plant/peach_branch[down=true,up=true]
		  "1": tfc:plant/peach_branch[down=true,up=true]
		  "2": tfc:plant/peach_branch[down=true,west=true]
		  "3": tfc:plant/peach_branch[east=true,up=true]
		  L: tfc:plant/peach_leaves[lifecycle=fruiting]
		```
	一棵典型的桃树。
+ 李树
	[](#plum)
	可在以下区域找到：
	\$(bold)[温度](the_world/climate#temperature): -7 - 12.2 °C
	\$(bold)[降雨量](the_world/climate#rainfall): 120 - 300mm
	
	生长所需条件：
	\$(bold)[温度](the_world/climate#temperature): -8.2 - 13.4 °C
	\$(bold)[湿度](mechanics/hydration): 9 - 75%
	
	李树一月至四月生长，五月至六月开花，七月结果。
+ _untitled_
	```tfc:multimultiblock
	```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - "     "
		    - "  L  "
		    - "     "
		    - "     "
		    - "     "
		  - - "  L  "
		    - " L1L "
		    - "  L  "
		    - "     "
		    - "     "
		  - - "  L  "
		    - " L1L "
		    - "  L  "
		    - "     "
		    - "     "
		  - - "  L  "
		    - " L3L "
		    - " L2L "
		    - "  L  "
		    - "     "
		  - - "     "
		    - "     "
		    - "  0  "
		    - "     "
		    - "     "
		  - - "     "
		    - "     "
		    - "  1  "
		    - "     "
		    - "     "
		mapping:
		  "0": tfc:plant/plum_branch[down=true,up=true]
		  "1": tfc:plant/plum_branch[down=true,up=true]
		  "2": tfc:plant/plum_branch[down=true,west=true]
		  "3": tfc:plant/plum_branch[east=true,up=true]
		  L: tfc:plant/plum_leaves[lifecycle=dormant]
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - "     "
		    - "  L  "
		    - "     "
		    - "     "
		    - "     "
		  - - "  L  "
		    - " L1L "
		    - "  L  "
		    - "     "
		    - "     "
		  - - "  L  "
		    - " L1L "
		    - "  L  "
		    - "     "
		    - "     "
		  - - "  L  "
		    - " L3L "
		    - " L2L "
		    - "  L  "
		    - "     "
		  - - "     "
		    - "     "
		    - "  0  "
		    - "     "
		    - "     "
		  - - "     "
		    - "     "
		    - "  1  "
		    - "     "
		    - "     "
		mapping:
		  "0": tfc:plant/plum_branch[down=true,up=true]
		  "1": tfc:plant/plum_branch[down=true,up=true]
		  "2": tfc:plant/plum_branch[down=true,west=true]
		  "3": tfc:plant/plum_branch[east=true,up=true]
		  L: tfc:plant/plum_leaves[lifecycle=healthy]
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - "     "
		    - "  L  "
		    - "     "
		    - "     "
		    - "     "
		  - - "  L  "
		    - " L1L "
		    - "  L  "
		    - "     "
		    - "     "
		  - - "  L  "
		    - " L1L "
		    - "  L  "
		    - "     "
		    - "     "
		  - - "  L  "
		    - " L3L "
		    - " L2L "
		    - "  L  "
		    - "     "
		  - - "     "
		    - "     "
		    - "  0  "
		    - "     "
		    - "     "
		  - - "     "
		    - "     "
		    - "  1  "
		    - "     "
		    - "     "
		mapping:
		  "0": tfc:plant/plum_branch[down=true,up=true]
		  "1": tfc:plant/plum_branch[down=true,up=true]
		  "2": tfc:plant/plum_branch[down=true,west=true]
		  "3": tfc:plant/plum_branch[east=true,up=true]
		  L: tfc:plant/plum_leaves[lifecycle=flowering]
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - "     "
		    - "  L  "
		    - "     "
		    - "     "
		    - "     "
		  - - "  L  "
		    - " L1L "
		    - "  L  "
		    - "     "
		    - "     "
		  - - "  L  "
		    - " L1L "
		    - "  L  "
		    - "     "
		    - "     "
		  - - "  L  "
		    - " L3L "
		    - " L2L "
		    - "  L  "
		    - "     "
		  - - "     "
		    - "     "
		    - "  0  "
		    - "     "
		    - "     "
		  - - "     "
		    - "     "
		    - "  1  "
		    - "     "
		    - "     "
		mapping:
		  "0": tfc:plant/plum_branch[down=true,up=true]
		  "1": tfc:plant/plum_branch[down=true,up=true]
		  "2": tfc:plant/plum_branch[down=true,west=true]
		  "3": tfc:plant/plum_branch[east=true,up=true]
		  L: tfc:plant/plum_leaves[lifecycle=fruiting]
		```
	一棵典型的李树。
+ 红苹果树
	[](#red_apple)
	可在以下区域找到：
	\$(bold)[温度](the_world/climate#temperature): -10.6 - 10.4 °C
	\$(bold)[降雨量](the_world/climate#rainfall): 190 - 310mm
	
	生长所需条件：
	\$(bold)[温度](the_world/climate#temperature): -11.8 - 11.6 °C
	\$(bold)[湿度](mechanics/hydration): 16 - 75%
	
	红苹果树三月至七月生长，八月至九月开花，十月结果。
+ _untitled_
	```tfc:multimultiblock
	```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - "     "
		    - "  L  "
		    - "     "
		    - "     "
		    - "     "
		  - - "  L  "
		    - " L1L "
		    - "  L  "
		    - "     "
		    - "     "
		  - - "  L  "
		    - " L1L "
		    - "  L  "
		    - "     "
		    - "     "
		  - - "  L  "
		    - " L3L "
		    - " L2L "
		    - "  L  "
		    - "     "
		  - - "     "
		    - "     "
		    - "  0  "
		    - "     "
		    - "     "
		  - - "     "
		    - "     "
		    - "  1  "
		    - "     "
		    - "     "
		mapping:
		  "0": tfc:plant/red_apple_branch[down=true,up=true]
		  "1": tfc:plant/red_apple_branch[down=true,up=true]
		  "2": tfc:plant/red_apple_branch[down=true,west=true]
		  "3": tfc:plant/red_apple_branch[east=true,up=true]
		  L: tfc:plant/red_apple_leaves[lifecycle=dormant]
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - "     "
		    - "  L  "
		    - "     "
		    - "     "
		    - "     "
		  - - "  L  "
		    - " L1L "
		    - "  L  "
		    - "     "
		    - "     "
		  - - "  L  "
		    - " L1L "
		    - "  L  "
		    - "     "
		    - "     "
		  - - "  L  "
		    - " L3L "
		    - " L2L "
		    - "  L  "
		    - "     "
		  - - "     "
		    - "     "
		    - "  0  "
		    - "     "
		    - "     "
		  - - "     "
		    - "     "
		    - "  1  "
		    - "     "
		    - "     "
		mapping:
		  "0": tfc:plant/red_apple_branch[down=true,up=true]
		  "1": tfc:plant/red_apple_branch[down=true,up=true]
		  "2": tfc:plant/red_apple_branch[down=true,west=true]
		  "3": tfc:plant/red_apple_branch[east=true,up=true]
		  L: tfc:plant/red_apple_leaves[lifecycle=healthy]
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - "     "
		    - "  L  "
		    - "     "
		    - "     "
		    - "     "
		  - - "  L  "
		    - " L1L "
		    - "  L  "
		    - "     "
		    - "     "
		  - - "  L  "
		    - " L1L "
		    - "  L  "
		    - "     "
		    - "     "
		  - - "  L  "
		    - " L3L "
		    - " L2L "
		    - "  L  "
		    - "     "
		  - - "     "
		    - "     "
		    - "  0  "
		    - "     "
		    - "     "
		  - - "     "
		    - "     "
		    - "  1  "
		    - "     "
		    - "     "
		mapping:
		  "0": tfc:plant/red_apple_branch[down=true,up=true]
		  "1": tfc:plant/red_apple_branch[down=true,up=true]
		  "2": tfc:plant/red_apple_branch[down=true,west=true]
		  "3": tfc:plant/red_apple_branch[east=true,up=true]
		  L: tfc:plant/red_apple_leaves[lifecycle=flowering]
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - "     "
		    - "  L  "
		    - "     "
		    - "     "
		    - "     "
		  - - "  L  "
		    - " L1L "
		    - "  L  "
		    - "     "
		    - "     "
		  - - "  L  "
		    - " L1L "
		    - "  L  "
		    - "     "
		    - "     "
		  - - "  L  "
		    - " L3L "
		    - " L2L "
		    - "  L  "
		    - "     "
		  - - "     "
		    - "     "
		    - "  0  "
		    - "     "
		    - "     "
		  - - "     "
		    - "     "
		    - "  1  "
		    - "     "
		    - "     "
		mapping:
		  "0": tfc:plant/red_apple_branch[down=true,up=true]
		  "1": tfc:plant/red_apple_branch[down=true,up=true]
		  "2": tfc:plant/red_apple_branch[down=true,west=true]
		  "3": tfc:plant/red_apple_branch[east=true,up=true]
		  L: tfc:plant/red_apple_leaves[lifecycle=fruiting]
		```
	一棵典型的红苹果树。
+ 香蕉树
	[](#banana)
	可在以下区域找到：
	\$(bold)[温度](the_world/climate#temperature): 11 - 40 °C
	\$(bold)[降雨量](the_world/climate#rainfall): 280 - 500mm
	
	生长所需条件：
	\$(bold)[温度](the_world/climate#temperature): 9.8 - 41.2 °C
	\$(bold)[湿度](mechanics/hydration): 25 - 100%
	
	香蕉是一种特殊的果树。它们仅垂直生长，没有叶子，只在最顶端的方块结果。树苗从植物的开花部分掉落。香蕉植株一旦被收获，就会死亡，不会再结果。必须在春季重新种植。
+ _untitled_
	```tfc:multimultiblock
	```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - Y
		  - - X
		  - - X
		  - - X
		  - - "0"
		mapping:
		  "0": tfc:plant/banana_plant[stage=0]
		  Y: tfc:plant/banana_plant[stage=2,lifecycle=dormant]
		  X: tfc:plant/banana_plant[stage=1]
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - Y
		  - - X
		  - - X
		  - - X
		  - - "0"
		mapping:
		  "0": tfc:plant/banana_plant[stage=0]
		  Y: tfc:plant/banana_plant[stage=2,lifecycle=healthy]
		  X: tfc:plant/banana_plant[stage=1]
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - Y
		  - - X
		  - - X
		  - - X
		  - - "0"
		mapping:
		  "0": tfc:plant/banana_plant[stage=0]
		  Y: tfc:plant/banana_plant[stage=2,lifecycle=flowering]
		  X: tfc:plant/banana_plant[stage=1]
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - Y
		  - - X
		  - - X
		  - - X
		  - - "0"
		mapping:
		  "0": tfc:plant/banana_plant[stage=0]
		  Y: tfc:plant/banana_plant[stage=2,lifecycle=fruiting]
		  X: tfc:plant/banana_plant[stage=1]
		```
	一棵典型的香蕉树。
+ 果树
	```raw/tfc:table
	{
	  "type": "tfc:table",
	  "strings": [
	    {
	      "text": ""
	    },
	    {
	      "text": "Jan"
	    },
	    {
	      "text": "Feb"
	    },
	    {
	      "text": "Mar"
	    },
	    {
	      "text": "Apr"
	    },
	    {
	      "text": "May"
	    },
	    {
	      "text": "Jun"
	    },
	    {
	      "text": "Jul"
	    },
	    {
	      "text": "Aug"
	    },
	    {
	      "text": "Sep"
	    },
	    {
	      "text": "Oct"
	    },
	    {
	      "text": "Nov"
	    },
	    {
	      "text": "Dec"
	    },
	    {
	      "text": "Cherry"
	    },
	    {
	      "fill": "0x6ab553"
	    },
	    {
	      "fill": "0x6ab553"
	    },
	    {
	      "fill": "0x6ab553"
	    },
	    {
	      "fill": "0xcca0db"
	    },
	    {
	      "fill": "0xcca0db"
	    },
	    {
	      "fill": "0xa217ff"
	    },
	    {
	      "fill": "0xa8986a"
	    },
	    {
	      "fill": "0xa8986a"
	    },
	    {
	      "fill": "0xa8986a"
	    },
	    {
	      "fill": "0xa8986a"
	    },
	    {
	      "fill": "0xa8986a"
	    },
	    {
	      "fill": "0xa8986a"
	    },
	    {
	      "text": "Apple"
	    },
	    {
	      "fill": "0xa8986a"
	    },
	    {
	      "fill": "0xa8986a"
	    },
	    {
	      "fill": "0x6ab553"
	    },
	    {
	      "fill": "0x6ab553"
	    },
	    {
	      "fill": "0x6ab553"
	    },
	    {
	      "fill": "0x6ab553"
	    },
	    {
	      "fill": "0x6ab553"
	    },
	    {
	      "fill": "0xcca0db"
	    },
	    {
	      "fill": "0xcca0db"
	    },
	    {
	      "fill": "0xa217ff"
	    },
	    {
	      "fill": "0xa8986a"
	    },
	    {
	      "fill": "0xa8986a"
	    },
	    {
	      "text": "Lemon"
	    },
	    {
	      "fill": "0xa8986a"
	    },
	    {
	      "fill": "0x6ab553"
	    },
	    {
	      "fill": "0x6ab553"
	    },
	    {
	      "fill": "0x6ab553"
	    },
	    {
	      "fill": "0x6ab553"
	    },
	    {
	      "fill": "0xcca0db"
	    },
	    {
	      "fill": "0xcca0db"
	    },
	    {
	      "fill": "0xa217ff"
	    },
	    {
	      "fill": "0xa8986a"
	    },
	    {
	      "fill": "0xa8986a"
	    },
	    {
	      "fill": "0xa8986a"
	    },
	    {
	      "fill": "0xa8986a"
	    },
	    {
	      "text": "Olive"
	    },
	    {
	      "fill": "0xa8986a"
	    },
	    {
	      "fill": "0xa8986a"
	    },
	    {
	      "fill": "0x6ab553"
	    },
	    {
	      "fill": "0x6ab553"
	    },
	    {
	      "fill": "0x6ab553"
	    },
	    {
	      "fill": "0x6ab553"
	    },
	    {
	      "fill": "0x6ab553"
	    },
	    {
	      "fill": "0xcca0db"
	    },
	    {
	      "fill": "0xcca0db"
	    },
	    {
	      "fill": "0xa217ff"
	    },
	    {
	      "fill": "0xa8986a"
	    },
	    {
	      "fill": "0xa8986a"
	    },
	    {
	      "text": "Orange"
	    },
	    {
	      "fill": "0xa8986a"
	    },
	    {
	      "fill": "0xa8986a"
	    },
	    {
	      "fill": "0x6ab553"
	    },
	    {
	      "fill": "0x6ab553"
	    },
	    {
	      "fill": "0x6ab553"
	    },
	    {
	      "fill": "0x6ab553"
	    },
	    {
	      "fill": "0xcca0db"
	    },
	    {
	      "fill": "0xcca0db"
	    },
	    {
	      "fill": "0xa217ff"
	    },
	    {
	      "fill": "0xa8986a"
	    },
	    {
	      "fill": "0xa8986a"
	    },
	    {
	      "fill": "0xa8986a"
	    },
	    {
	      "text": "Peach"
	    },
	    {
	      "fill": "0x6ab553"
	    },
	    {
	      "fill": "0x6ab553"
	    },
	    {
	      "fill": "0x6ab553"
	    },
	    {
	      "fill": "0xcca0db"
	    },
	    {
	      "fill": "0xcca0db"
	    },
	    {
	      "fill": "0xa217ff"
	    },
	    {
	      "fill": "0xa8986a"
	    },
	    {
	      "fill": "0xa8986a"
	    },
	    {
	      "fill": "0xa8986a"
	    },
	    {
	      "fill": "0xa8986a"
	    },
	    {
	      "fill": "0xa8986a"
	    },
	    {
	      "fill": "0x6ab553"
	    },
	    {
	      "text": "Plum"
	    },
	    {
	      "fill": "0x6ab553"
	    },
	    {
	      "fill": "0x6ab553"
	    },
	    {
	      "fill": "0x6ab553"
	    },
	    {
	      "fill": "0x6ab553"
	    },
	    {
	      "fill": "0xcca0db"
	    },
	    {
	      "fill": "0xcca0db"
	    },
	    {
	      "fill": "0xa217ff"
	    },
	    {
	      "fill": "0xa8986a"
	    },
	    {
	      "fill": "0xa8986a"
	    },
	    {
	      "fill": "0xa8986a"
	    },
	    {
	      "fill": "0xa8986a"
	    },
	    {
	      "fill": "0xa8986a"
	    },
	    {
	      "text": "Banana"
	    },
	    {
	      "fill": "0xa8986a"
	    },
	    {
	      "fill": "0xa8986a"
	    },
	    {
	      "fill": "0x6ab553"
	    },
	    {
	      "fill": "0x6ab553"
	    },
	    {
	      "fill": "0x6ab553"
	    },
	    {
	      "fill": "0x6ab553"
	    },
	    {
	      "fill": "0xcca0db"
	    },
	    {
	      "fill": "0xcca0db"
	    },
	    {
	      "fill": "0xa217ff"
	    },
	    {
	      "fill": "0xa8986a"
	    },
	    {
	      "fill": "0xa8986a"
	    },
	    {
	      "fill": "0xa8986a"
	    }
	  ],
	  "text": "果树的结果日历。",
	  "title": "果树",
	  "legend": [
	    {
	      "text": "Dormant",
	      "color": "0xa8986a"
	    },
	    {
	      "text": "Healthy",
	      "color": "0x6ab553"
	    },
	    {
	      "text": "Flowering",
	      "color": "0xcca0db"
	    },
	    {
	      "text": "Fruiting",
	      "color": "0xa217ff"
	    }
	  ],
	  "columns": 12,
	  "first_column_width": 45,
	  "column_width": 15,
	  "row_height": 10,
	  "left_buffer": 5,
	  "top_buffer": 11,
	  "draw_background": true
	}
	```
+ _empty_
+ 大型灌木
	[](#tall_bushes)
	某些水果会长在\$(thing)大型灌木\$()中。这种灌木可以向各个方向生长并扩散。它们既可以向上生长，也可以向四周生长出新的\$(thing)藤条\$()。藤条在一段时间之后也会变成新的灌木。灌木直到完全成熟之前都会试图扩张。使用锋利工具来破坏这些灌木有概率掉落一株灌木（破坏完全成熟的灌木则必定掉落）。
+ _untitled_
	```patchouli:image
	images:
	  - tfc:textures/gui/book/tutorial/berry_bush.png
	border: true
	```
	一丛野生的大型灌木。
+ _untitled_
	大型灌木必须在有方块供其藤条扎根时才会扩张。换句话说，想让它扩散，则必须在它周围正下方放一块实心方块。最好还要把地整平，并清掉附近的杂草杂物。
+ _untitled_
	与果树类似，灌木在确定[湿度](mechanics/hydration)和[温度](the_world/climate#temperature)时以植株的基部方块为准，只要年平均降雨量和温度合适就会生长。
	任何完全长成的灌木块都可以结出浆果，用\$(item)\$(k:key.use)\$()即可收获。
+ 黑莓灌木
	[](#blackberry)
	可在以下区域找到：
	\$(bold)[温度](the_world/climate#temperature): -5.2 - 19.4 °C
	\$(bold)[降雨量](the_world/climate#rainfall): 200 - 500mm
	
	生长所需条件：
	\$(bold)[温度](the_world/climate#temperature): -6.4 - 20.6 °C
	\$(bold)[湿度](mechanics/hydration): 17 - 100%
	
	黑莓灌木二月至五月生长，六月至七月开花，八月结果。
	
	它们可以在树木稀少的地区找到。
+ _untitled_
	```tfc:multimultiblock
	```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - "X "
		  - - YZ
		  - - AZ
		  - - "0 "
		mapping:
		  X: tfc:plant/blackberry_bush[stage=0,lifecycle=dormant]
		  Y: tfc:plant/blackberry_bush[stage=1,lifecycle=dormant]
		  Z: tfc:plant/blackberry_bush_cane[stage=0,lifecycle=dormant,facing=south]
		  A: tfc:plant/blackberry_bush[stage=2,lifecycle=dormant]
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - "X "
		  - - YZ
		  - - AZ
		  - - "0 "
		mapping:
		  X: tfc:plant/blackberry_bush[stage=0,lifecycle=healthy]
		  Y: tfc:plant/blackberry_bush[stage=1,lifecycle=healthy]
		  Z: tfc:plant/blackberry_bush_cane[stage=0,lifecycle=healthy,facing=south]
		  A: tfc:plant/blackberry_bush[stage=2,lifecycle=healthy]
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - "X "
		  - - YZ
		  - - AZ
		  - - "0 "
		mapping:
		  X: tfc:plant/blackberry_bush[stage=0,lifecycle=flowering]
		  Y: tfc:plant/blackberry_bush[stage=1,lifecycle=flowering]
		  Z: tfc:plant/blackberry_bush_cane[stage=0,lifecycle=flowering,facing=south]
		  A: tfc:plant/blackberry_bush[stage=2,lifecycle=flowering]
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - "X "
		  - - YZ
		  - - AZ
		  - - "0 "
		mapping:
		  X: tfc:plant/blackberry_bush[stage=0,lifecycle=fruiting]
		  Y: tfc:plant/blackberry_bush[stage=1,lifecycle=fruiting]
		  Z: tfc:plant/blackberry_bush_cane[stage=0,lifecycle=fruiting,facing=south]
		  A: tfc:plant/blackberry_bush[stage=2,lifecycle=fruiting]
		```
	一丛典型的黑莓灌木。
+ 树莓灌木
	[](#raspberry)
	可在以下区域找到：
	\$(bold)[温度](the_world/climate#temperature): -10.6 - 14 °C
	\$(bold)[降雨量](the_world/climate#rainfall): 180 - 450mm
	
	生长所需条件：
	\$(bold)[温度](the_world/climate#temperature): -11.8 - 15.2 °C
	\$(bold)[湿度](mechanics/hydration): 15 - 95%
	
	树莓灌木四月至七月生长，八月至九月开花，十月结果。
	
	它们可以在树木稀少的地区找到。
+ _untitled_
	```tfc:multimultiblock
	```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - "X "
		  - - YZ
		  - - AZ
		  - - "0 "
		mapping:
		  X: tfc:plant/raspberry_bush[stage=0,lifecycle=dormant]
		  Y: tfc:plant/raspberry_bush[stage=1,lifecycle=dormant]
		  Z: tfc:plant/raspberry_bush_cane[stage=0,lifecycle=dormant,facing=south]
		  A: tfc:plant/raspberry_bush[stage=2,lifecycle=dormant]
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - "X "
		  - - YZ
		  - - AZ
		  - - "0 "
		mapping:
		  X: tfc:plant/raspberry_bush[stage=0,lifecycle=healthy]
		  Y: tfc:plant/raspberry_bush[stage=1,lifecycle=healthy]
		  Z: tfc:plant/raspberry_bush_cane[stage=0,lifecycle=healthy,facing=south]
		  A: tfc:plant/raspberry_bush[stage=2,lifecycle=healthy]
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - "X "
		  - - YZ
		  - - AZ
		  - - "0 "
		mapping:
		  X: tfc:plant/raspberry_bush[stage=0,lifecycle=flowering]
		  Y: tfc:plant/raspberry_bush[stage=1,lifecycle=flowering]
		  Z: tfc:plant/raspberry_bush_cane[stage=0,lifecycle=flowering,facing=south]
		  A: tfc:plant/raspberry_bush[stage=2,lifecycle=flowering]
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - "X "
		  - - YZ
		  - - AZ
		  - - "0 "
		mapping:
		  X: tfc:plant/raspberry_bush[stage=0,lifecycle=fruiting]
		  Y: tfc:plant/raspberry_bush[stage=1,lifecycle=fruiting]
		  Z: tfc:plant/raspberry_bush_cane[stage=0,lifecycle=fruiting,facing=south]
		  A: tfc:plant/raspberry_bush[stage=2,lifecycle=fruiting]
		```
	一丛典型的树莓灌木。
+ 蓝莓灌木
	[](#blueberry)
	可在以下区域找到：
	\$(bold)[温度](the_world/climate#temperature): -8.8 - 8.6 °C
	\$(bold)[降雨量](the_world/climate#rainfall): 150 - 400mm
	
	生长所需条件：
	\$(bold)[温度](the_world/climate#temperature): -10 - 9.8 °C
	\$(bold)[湿度](mechanics/hydration): 12 - 90%
	
	蓝莓灌木二月至五月生长，六月至七月开花，八月结果。
	
	它们可以在树木稀少的地区找到。
+ _untitled_
	```tfc:multimultiblock
	```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - "X "
		  - - YZ
		  - - AZ
		  - - "0 "
		mapping:
		  X: tfc:plant/blueberry_bush[stage=0,lifecycle=dormant]
		  Y: tfc:plant/blueberry_bush[stage=1,lifecycle=dormant]
		  Z: tfc:plant/blueberry_bush_cane[stage=0,lifecycle=dormant,facing=south]
		  A: tfc:plant/blueberry_bush[stage=2,lifecycle=dormant]
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - "X "
		  - - YZ
		  - - AZ
		  - - "0 "
		mapping:
		  X: tfc:plant/blueberry_bush[stage=0,lifecycle=healthy]
		  Y: tfc:plant/blueberry_bush[stage=1,lifecycle=healthy]
		  Z: tfc:plant/blueberry_bush_cane[stage=0,lifecycle=healthy,facing=south]
		  A: tfc:plant/blueberry_bush[stage=2,lifecycle=healthy]
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - "X "
		  - - YZ
		  - - AZ
		  - - "0 "
		mapping:
		  X: tfc:plant/blueberry_bush[stage=0,lifecycle=flowering]
		  Y: tfc:plant/blueberry_bush[stage=1,lifecycle=flowering]
		  Z: tfc:plant/blueberry_bush_cane[stage=0,lifecycle=flowering,facing=south]
		  A: tfc:plant/blueberry_bush[stage=2,lifecycle=flowering]
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - "X "
		  - - YZ
		  - - AZ
		  - - "0 "
		mapping:
		  X: tfc:plant/blueberry_bush[stage=0,lifecycle=fruiting]
		  Y: tfc:plant/blueberry_bush[stage=1,lifecycle=fruiting]
		  Z: tfc:plant/blueberry_bush_cane[stage=0,lifecycle=fruiting,facing=south]
		  A: tfc:plant/blueberry_bush[stage=2,lifecycle=fruiting]
		```
	一丛典型的蓝莓灌木。
+ 接骨木灌木
	[](#elderberry)
	可在以下区域找到：
	\$(bold)[温度](the_world/climate#temperature): -5.2 - 15.8 °C
	\$(bold)[降雨量](the_world/climate#rainfall): 120 - 380mm
	
	生长所需条件：
	\$(bold)[温度](the_world/climate#temperature): -6.4 - 17 °C
	\$(bold)[湿度](mechanics/hydration): 9 - 85%
	
	接骨木灌木二月至五月生长，六月至七月开花，八月结果。
	
	它们可以在树木稀少的地区找到。
+ _untitled_
	```tfc:multimultiblock
	```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - "X "
		  - - YZ
		  - - AZ
		  - - "0 "
		mapping:
		  X: tfc:plant/elderberry_bush[stage=0,lifecycle=dormant]
		  Y: tfc:plant/elderberry_bush[stage=1,lifecycle=dormant]
		  Z: tfc:plant/elderberry_bush_cane[stage=0,lifecycle=dormant,facing=south]
		  A: tfc:plant/elderberry_bush[stage=2,lifecycle=dormant]
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - "X "
		  - - YZ
		  - - AZ
		  - - "0 "
		mapping:
		  X: tfc:plant/elderberry_bush[stage=0,lifecycle=healthy]
		  Y: tfc:plant/elderberry_bush[stage=1,lifecycle=healthy]
		  Z: tfc:plant/elderberry_bush_cane[stage=0,lifecycle=healthy,facing=south]
		  A: tfc:plant/elderberry_bush[stage=2,lifecycle=healthy]
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - "X "
		  - - YZ
		  - - AZ
		  - - "0 "
		mapping:
		  X: tfc:plant/elderberry_bush[stage=0,lifecycle=flowering]
		  Y: tfc:plant/elderberry_bush[stage=1,lifecycle=flowering]
		  Z: tfc:plant/elderberry_bush_cane[stage=0,lifecycle=flowering,facing=south]
		  A: tfc:plant/elderberry_bush[stage=2,lifecycle=flowering]
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - "X "
		  - - YZ
		  - - AZ
		  - - "0 "
		mapping:
		  X: tfc:plant/elderberry_bush[stage=0,lifecycle=fruiting]
		  Y: tfc:plant/elderberry_bush[stage=1,lifecycle=fruiting]
		  Z: tfc:plant/elderberry_bush_cane[stage=0,lifecycle=fruiting,facing=south]
		  A: tfc:plant/elderberry_bush[stage=2,lifecycle=fruiting]
		```
	一丛典型的接骨木灌木。
+ 大型浆果灌木
	```raw/tfc:table
	{
	  "type": "tfc:table",
	  "strings": [
	    {
	      "text": ""
	    },
	    {
	      "text": "Jan"
	    },
	    {
	      "text": "Feb"
	    },
	    {
	      "text": "Mar"
	    },
	    {
	      "text": "Apr"
	    },
	    {
	      "text": "May"
	    },
	    {
	      "text": "Jun"
	    },
	    {
	      "text": "Jul"
	    },
	    {
	      "text": "Aug"
	    },
	    {
	      "text": "Sep"
	    },
	    {
	      "text": "Oct"
	    },
	    {
	      "text": "Nov"
	    },
	    {
	      "text": "Dec"
	    },
	    {
	      "text": "Blackberry"
	    },
	    {
	      "fill": "0xa8986a"
	    },
	    {
	      "fill": "0x6ab553"
	    },
	    {
	      "fill": "0x6ab553"
	    },
	    {
	      "fill": "0x6ab553"
	    },
	    {
	      "fill": "0x6ab553"
	    },
	    {
	      "fill": "0xcca0db"
	    },
	    {
	      "fill": "0xcca0db"
	    },
	    {
	      "fill": "0xa217ff"
	    },
	    {
	      "fill": "0xa8986a"
	    },
	    {
	      "fill": "0xa8986a"
	    },
	    {
	      "fill": "0xa8986a"
	    },
	    {
	      "fill": "0xa8986a"
	    },
	    {
	      "text": "Raspberry"
	    },
	    {
	      "fill": "0xa8986a"
	    },
	    {
	      "fill": "0xa8986a"
	    },
	    {
	      "fill": "0xa8986a"
	    },
	    {
	      "fill": "0x6ab553"
	    },
	    {
	      "fill": "0x6ab553"
	    },
	    {
	      "fill": "0x6ab553"
	    },
	    {
	      "fill": "0x6ab553"
	    },
	    {
	      "fill": "0xcca0db"
	    },
	    {
	      "fill": "0xcca0db"
	    },
	    {
	      "fill": "0xa217ff"
	    },
	    {
	      "fill": "0xa8986a"
	    },
	    {
	      "fill": "0xa8986a"
	    },
	    {
	      "text": "Blueberry"
	    },
	    {
	      "fill": "0xa8986a"
	    },
	    {
	      "fill": "0x6ab553"
	    },
	    {
	      "fill": "0x6ab553"
	    },
	    {
	      "fill": "0x6ab553"
	    },
	    {
	      "fill": "0x6ab553"
	    },
	    {
	      "fill": "0xcca0db"
	    },
	    {
	      "fill": "0xcca0db"
	    },
	    {
	      "fill": "0xa217ff"
	    },
	    {
	      "fill": "0xa8986a"
	    },
	    {
	      "fill": "0xa8986a"
	    },
	    {
	      "fill": "0xa8986a"
	    },
	    {
	      "fill": "0xa8986a"
	    },
	    {
	      "text": "Elderberry"
	    },
	    {
	      "fill": "0xa8986a"
	    },
	    {
	      "fill": "0x6ab553"
	    },
	    {
	      "fill": "0x6ab553"
	    },
	    {
	      "fill": "0x6ab553"
	    },
	    {
	      "fill": "0x6ab553"
	    },
	    {
	      "fill": "0xcca0db"
	    },
	    {
	      "fill": "0xcca0db"
	    },
	    {
	      "fill": "0xa217ff"
	    },
	    {
	      "fill": "0xa8986a"
	    },
	    {
	      "fill": "0xa8986a"
	    },
	    {
	      "fill": "0xa8986a"
	    },
	    {
	      "fill": "0xa8986a"
	    }
	  ],
	  "text": "大型浆果灌木的结果日历。",
	  "title": "大型浆果灌木",
	  "legend": [
	    {
	      "text": "Dormant",
	      "color": "0xa8986a"
	    },
	    {
	      "text": "Healthy",
	      "color": "0x6ab553"
	    },
	    {
	      "text": "Flowering",
	      "color": "0xcca0db"
	    },
	    {
	      "text": "Fruiting",
	      "color": "0xa217ff"
	    }
	  ],
	  "columns": 12,
	  "first_column_width": 45,
	  "column_width": 15,
	  "row_height": 10,
	  "left_buffer": 5,
	  "top_buffer": 11,
	  "draw_background": true
	}
	```
+ _empty_
+ 小型灌木
	[](#small_bushes)
	\$(thing)小型灌木\$()是一种低矮的果木，生成在森林中。如果附近没有太多其他灌木，小型灌木偶尔会扩散到周围的方块。
	
	小型灌木会经历三个生长阶段，成熟后只需用\$(item)\$(k:key.use)\$()即可收获。
+ _untitled_
	```tfc:multimultiblock
	```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - "0"
		mapping:
		  X: tfc:plant/bunchberry_bush[lifecycle=healthy,stage=0]
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - "0"
		mapping:
		  X: tfc:plant/bunchberry_bush[lifecycle=healthy,stage=1]
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - "0"
		mapping:
		  X: tfc:plant/bunchberry_bush[lifecycle=healthy,stage=2]
		```
	三种不同大小的健康小型灌木
+ 御膳橘灌木
	[](#bunchberry)
	可在以下区域找到：
	\$(bold)[温度](the_world/climate#temperature): -14.2 - 1.4 °C
	\$(bold)[降雨量](the_world/climate#rainfall): 280 - 500mm
	
	生长所需条件：
	\$(bold)[温度](the_world/climate#temperature): -15.4 - 2.6 °C
	\$(bold)[湿度](mechanics/hydration): 25 - 100%
	
	御膳橘灌木五月至七月生长，八月至九月开花，十月结果。
	
	它们可以在森林中找到。
+ _untitled_
	```tfc:multimultiblock
	```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - "0"
		mapping:
		  X: tfc:plant/bunchberry_bush[lifecycle=dormant,stage=2]
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - "0"
		mapping:
		  X: tfc:plant/bunchberry_bush[lifecycle=healthy,stage=2]
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - "0"
		mapping:
		  X: tfc:plant/bunchberry_bush[lifecycle=flowering,stage=2]
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - "0"
		mapping:
		  X: tfc:plant/bunchberry_bush[lifecycle=fruiting,stage=2]
		```
	御膳橘灌木的月度生长阶段。
+ 鹅莓灌木
	[](#gooseberry)
	可在以下区域找到：
	\$(bold)[温度](the_world/climate#temperature): -7 - 12.2 °C
	\$(bold)[降雨量](the_world/climate#rainfall): 200 - 500mm
	
	生长所需条件：
	\$(bold)[温度](the_world/climate#temperature): -8.2 - 13.4 °C
	\$(bold)[湿度](mechanics/hydration): 17 - 100%
	
	鹅莓灌木四月至七月生长，八月至九月开花，十月结果。
	
	它们可以在森林中找到。
+ _untitled_
	```tfc:multimultiblock
	```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - "0"
		mapping:
		  X: tfc:plant/gooseberry_bush[lifecycle=dormant,stage=2]
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - "0"
		mapping:
		  X: tfc:plant/gooseberry_bush[lifecycle=healthy,stage=2]
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - "0"
		mapping:
		  X: tfc:plant/gooseberry_bush[lifecycle=flowering,stage=2]
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - "0"
		mapping:
		  X: tfc:plant/gooseberry_bush[lifecycle=fruiting,stage=2]
		```
	鹅莓灌木的月度生长阶段。
+ 雪莓灌木
	[](#snowberry)
	可在以下区域找到：
	\$(bold)[温度](the_world/climate#temperature): -10.6 - 5 °C
	\$(bold)[降雨量](the_world/climate#rainfall): 200 - 500mm
	
	生长所需条件：
	\$(bold)[温度](the_world/climate#temperature): -11.8 - 6.2 °C
	\$(bold)[湿度](mechanics/hydration): 17 - 100%
	
	雪莓灌木三月至六月生长，七月至八月开花，九月结果。
	
	它们可以在森林中找到。
+ _untitled_
	```tfc:multimultiblock
	```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - "0"
		mapping:
		  X: tfc:plant/snowberry_bush[lifecycle=dormant,stage=2]
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - "0"
		mapping:
		  X: tfc:plant/snowberry_bush[lifecycle=healthy,stage=2]
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - "0"
		mapping:
		  X: tfc:plant/snowberry_bush[lifecycle=flowering,stage=2]
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - "0"
		mapping:
		  X: tfc:plant/snowberry_bush[lifecycle=fruiting,stage=2]
		```
	雪莓灌木的月度生长阶段。
+ 云莓灌木
	[](#cloudberry)
	可在以下区域找到：
	\$(bold)[温度](the_world/climate#temperature): -14.2 - 6.8 °C
	\$(bold)[降雨量](the_world/climate#rainfall): 80 - 320mm
	
	生长所需条件：
	\$(bold)[温度](the_world/climate#temperature): -15.4 - 8 °C
	\$(bold)[湿度](mechanics/hydration): 5 - 80%
	
	云莓灌木二月至五月生长，六月至八月开花，九月结果。
	
	它们可以在森林中找到。
+ _untitled_
	```tfc:multimultiblock
	```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - "0"
		mapping:
		  X: tfc:plant/cloudberry_bush[lifecycle=dormant,stage=2]
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - "0"
		mapping:
		  X: tfc:plant/cloudberry_bush[lifecycle=healthy,stage=2]
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - "0"
		mapping:
		  X: tfc:plant/cloudberry_bush[lifecycle=flowering,stage=2]
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - "0"
		mapping:
		  X: tfc:plant/cloudberry_bush[lifecycle=fruiting,stage=2]
		```
	云莓灌木的月度生长阶段。
+ 草莓灌木
	[](#strawberry)
	可在以下区域找到：
	\$(bold)[温度](the_world/climate#temperature): -1.6 - 17.6 °C
	\$(bold)[降雨量](the_world/climate#rainfall): 140 - 400mm
	
	生长所需条件：
	\$(bold)[温度](the_world/climate#temperature): -2.8 - 18.8 °C
	\$(bold)[湿度](mechanics/hydration): 11 - 90%
	
	草莓灌木十月至十二月生长，一月至二月开花，三月结果。
	
	它们可以在森林中找到。
+ _untitled_
	```tfc:multimultiblock
	```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - "0"
		mapping:
		  X: tfc:plant/strawberry_bush[lifecycle=dormant,stage=2]
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - "0"
		mapping:
		  X: tfc:plant/strawberry_bush[lifecycle=healthy,stage=2]
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - "0"
		mapping:
		  X: tfc:plant/strawberry_bush[lifecycle=flowering,stage=2]
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - "0"
		mapping:
		  X: tfc:plant/strawberry_bush[lifecycle=fruiting,stage=2]
		```
	草莓灌木的月度生长阶段。
+ 冬青莓灌木
	[](#wintergreen_berry)
	可在以下区域找到：
	\$(bold)[温度](the_world/climate#temperature): -8.8 - 6.8 °C
	\$(bold)[降雨量](the_world/climate#rainfall): 100 - 370mm
	
	生长所需条件：
	\$(bold)[温度](the_world/climate#temperature): -10 - 8 °C
	\$(bold)[湿度](mechanics/hydration): 7 - 85%
	
	冬青莓灌木五月至九月生长，十月至十一月开花，十二月结果。
	
	它们可以在森林中找到。
+ _untitled_
	```tfc:multimultiblock
	```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - "0"
		mapping:
		  X: tfc:plant/wintergreen_berry_bush[lifecycle=dormant,stage=2]
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - "0"
		mapping:
		  X: tfc:plant/wintergreen_berry_bush[lifecycle=healthy,stage=2]
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - "0"
		mapping:
		  X: tfc:plant/wintergreen_berry_bush[lifecycle=flowering,stage=2]
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - "0"
		mapping:
		  X: tfc:plant/wintergreen_berry_bush[lifecycle=fruiting,stage=2]
		```
	冬青莓灌木的月度生长阶段。
+ 蔓越莓灌木
	[](#cranberry)
	可在以下区域找到：
	\$(bold)[温度](the_world/climate#temperature): -14.2 - 8.6 °C
	\$(bold)[降雨量](the_world/climate#rainfall): 250 - 500mm
	
	生长所需条件：
	\$(bold)[温度](the_world/climate#temperature): -15.4 - 9.8 °C
	\$(bold)[湿度](mechanics/hydration): 25 - 100%
	
	蔓越莓灌木三月至六月生长，七月至八月开花，九月结果。
	
	它们可以在森林中找到。与大多数小型灌木不同，蔓越莓灌木在水下生长。
+ _untitled_
	```tfc:multimultiblock
	```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - "0"
		mapping:
		  X: tfc:plant/cranberry_bush[lifecycle=dormant,stage=2,fluid=water]
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - "0"
		mapping:
		  X: tfc:plant/cranberry_bush[lifecycle=healthy,stage=2,fluid=water]
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - "0"
		mapping:
		  X: tfc:plant/cranberry_bush[lifecycle=flowering,stage=2,fluid=water]
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - "0"
		mapping:
		  X: tfc:plant/cranberry_bush[lifecycle=fruiting,stage=2,fluid=water]
		```
	蔓越莓灌木的月度生长阶段。
+ 小型浆果灌木
	```raw/tfc:table
	{
	  "type": "tfc:table",
	  "strings": [
	    {
	      "text": ""
	    },
	    {
	      "text": "Jan"
	    },
	    {
	      "text": "Feb"
	    },
	    {
	      "text": "Mar"
	    },
	    {
	      "text": "Apr"
	    },
	    {
	      "text": "May"
	    },
	    {
	      "text": "Jun"
	    },
	    {
	      "text": "Jul"
	    },
	    {
	      "text": "Aug"
	    },
	    {
	      "text": "Sep"
	    },
	    {
	      "text": "Oct"
	    },
	    {
	      "text": "Nov"
	    },
	    {
	      "text": "Dec"
	    },
	    {
	      "text": "Bunchberry"
	    },
	    {
	      "fill": "0xa8986a"
	    },
	    {
	      "fill": "0xa8986a"
	    },
	    {
	      "fill": "0xa8986a"
	    },
	    {
	      "fill": "0xa8986a"
	    },
	    {
	      "fill": "0x6ab553"
	    },
	    {
	      "fill": "0x6ab553"
	    },
	    {
	      "fill": "0x6ab553"
	    },
	    {
	      "fill": "0xcca0db"
	    },
	    {
	      "fill": "0xcca0db"
	    },
	    {
	      "fill": "0xa217ff"
	    },
	    {
	      "fill": "0xa8986a"
	    },
	    {
	      "fill": "0xa8986a"
	    },
	    {
	      "text": "Gooseberry"
	    },
	    {
	      "fill": "0xa8986a"
	    },
	    {
	      "fill": "0xa8986a"
	    },
	    {
	      "fill": "0xa8986a"
	    },
	    {
	      "fill": "0x6ab553"
	    },
	    {
	      "fill": "0x6ab553"
	    },
	    {
	      "fill": "0x6ab553"
	    },
	    {
	      "fill": "0x6ab553"
	    },
	    {
	      "fill": "0xcca0db"
	    },
	    {
	      "fill": "0xcca0db"
	    },
	    {
	      "fill": "0xa217ff"
	    },
	    {
	      "fill": "0xa8986a"
	    },
	    {
	      "fill": "0xa8986a"
	    },
	    {
	      "text": "Snowberry"
	    },
	    {
	      "fill": "0xa8986a"
	    },
	    {
	      "fill": "0xa8986a"
	    },
	    {
	      "fill": "0x6ab553"
	    },
	    {
	      "fill": "0x6ab553"
	    },
	    {
	      "fill": "0x6ab553"
	    },
	    {
	      "fill": "0x6ab553"
	    },
	    {
	      "fill": "0xcca0db"
	    },
	    {
	      "fill": "0xcca0db"
	    },
	    {
	      "fill": "0xa217ff"
	    },
	    {
	      "fill": "0xa8986a"
	    },
	    {
	      "fill": "0xa8986a"
	    },
	    {
	      "fill": "0xa8986a"
	    },
	    {
	      "text": "Cloudberry"
	    },
	    {
	      "fill": "0xa8986a"
	    },
	    {
	      "fill": "0x6ab553"
	    },
	    {
	      "fill": "0x6ab553"
	    },
	    {
	      "fill": "0x6ab553"
	    },
	    {
	      "fill": "0x6ab553"
	    },
	    {
	      "fill": "0xcca0db"
	    },
	    {
	      "fill": "0xcca0db"
	    },
	    {
	      "fill": "0xcca0db"
	    },
	    {
	      "fill": "0xa217ff"
	    },
	    {
	      "fill": "0xa8986a"
	    },
	    {
	      "fill": "0xa8986a"
	    },
	    {
	      "fill": "0xa8986a"
	    },
	    {
	      "text": "Strawberry"
	    },
	    {
	      "fill": "0xcca0db"
	    },
	    {
	      "fill": "0xcca0db"
	    },
	    {
	      "fill": "0xa217ff"
	    },
	    {
	      "fill": "0xa8986a"
	    },
	    {
	      "fill": "0xa8986a"
	    },
	    {
	      "fill": "0xa8986a"
	    },
	    {
	      "fill": "0xa8986a"
	    },
	    {
	      "fill": "0xa8986a"
	    },
	    {
	      "fill": "0xa8986a"
	    },
	    {
	      "fill": "0x6ab553"
	    },
	    {
	      "fill": "0x6ab553"
	    },
	    {
	      "fill": "0x6ab553"
	    },
	    {
	      "text": "Wintergreen"
	    },
	    {
	      "fill": "0xa8986a"
	    },
	    {
	      "fill": "0xa8986a"
	    },
	    {
	      "fill": "0xa8986a"
	    },
	    {
	      "fill": "0xa8986a"
	    },
	    {
	      "fill": "0x6ab553"
	    },
	    {
	      "fill": "0x6ab553"
	    },
	    {
	      "fill": "0x6ab553"
	    },
	    {
	      "fill": "0x6ab553"
	    },
	    {
	      "fill": "0x6ab553"
	    },
	    {
	      "fill": "0xcca0db"
	    },
	    {
	      "fill": "0xcca0db"
	    },
	    {
	      "fill": "0xa217ff"
	    },
	    {
	      "text": "Cranberry"
	    },
	    {
	      "fill": "0xa8986a"
	    },
	    {
	      "fill": "0xa8986a"
	    },
	    {
	      "fill": "0x6ab553"
	    },
	    {
	      "fill": "0x6ab553"
	    },
	    {
	      "fill": "0x6ab553"
	    },
	    {
	      "fill": "0x6ab553"
	    },
	    {
	      "fill": "0xcca0db"
	    },
	    {
	      "fill": "0xcca0db"
	    },
	    {
	      "fill": "0xa217ff"
	    },
	    {
	      "fill": "0xa8986a"
	    },
	    {
	      "fill": "0xa8986a"
	    },
	    {
	      "fill": "0xa8986a"
	    }
	  ],
	  "text": "小型浆果灌木的结果日历。",
	  "title": "小型浆果灌木",
	  "legend": [
	    {
	      "text": "Dormant",
	      "color": "0xa8986a"
	    },
	    {
	      "text": "Healthy",
	      "color": "0x6ab553"
	    },
	    {
	      "text": "Flowering",
	      "color": "0xcca0db"
	    },
	    {
	      "text": "Fruiting",
	      "color": "0xa217ff"
	    }
	  ],
	  "columns": 12,
	  "first_column_width": 45,
	  "column_width": 15,
	  "row_height": 10,
	  "left_buffer": 5,
	  "top_buffer": 11,
	  "draw_background": true
	}
	```
+ _empty_
#野生动物

```patchouli-entry
id: the_world/wild_animals
name: 野生动物
category: tfc:the_world
icon: tfc:medium_raw_hide
read_by_default: true
sortnum: 6
```

+ _untitled_
	群峦传说的世界充满了各种各样的动物。有些动物对你的生存大有助益，有些动物却非常危险。这一章节是关于野生动物的。有关牲畜的信息，请参阅[畜牧业](mechanics/animal_husbandry)章节。
+ _untitled_
	动物可以大致被分为几类：[捕食者](the_world/wild_animals#predators)、[猎物](the_world/wild_animals#prey)、和[水生生物](the_world/wild_animals#aquatic)。
	
	接下来的几页会详细介绍以上每一种类别的生物。
+ 捕食者
	[](#predators)
	\$(thing)捕食者\$()会攻击玩家。\$(thing)夜行性\$()动物只会在晚上狩猎，而\$(thing)日行性\$()动物只会在白天狩猎。捕食者一般都处于敌对状态，但若最近刚刚杀死了一个生物，它们便会变成中立生物。捕食者拥有\$(thing)领地意识\$()。只要你跑得够远，它们便不会追出它们的领地。
+ _untitled_
	```patchouli:entity
	entity: tfc:polar_bear
	scale: 0.55
	name: 北极熊
	```
	北极熊生活在[温度](the_world/climate#temperature)不超过 10°C、[降雨量](the_world/climate#rainfall)不小于 100mm 的寒冷地区中。
+ _untitled_
	```patchouli:entity
	entity: tfc:grizzly_bear
	scale: 0.55
	name: 灰熊
	```
	灰熊生活在[温度](the_world/climate#temperature)在 -15 到 15°C、[降雨量](the_world/climate#rainfall)不小于 200mm 的温和气候的森林中。
+ _untitled_
	```patchouli:entity
	entity: tfc:black_bear
	scale: 0.55
	name: 黑熊
	```
	黑熊生活在[温度](the_world/climate#temperature)在 5 到 20°C、[降雨量](the_world/climate#rainfall)不小于 250mm 的温暖潮湿的森林中。
+ _untitled_
	```patchouli:entity
	entity: tfc:cougar
	scale: 0.6
	name: 山狮
	```
	山狮生活在[温度](the_world/climate#temperature)在 -10 到 21°C、[降雨量](the_world/climate#rainfall)不小于 150mm 的大多数温和气候中。
+ _untitled_
	```patchouli:entity
	entity: tfc:panther
	scale: 0.6
	name: 黑豹
	```
	黑豹生活在[温度](the_world/climate#temperature)在 -10 到 21°C、[降雨量](the_world/climate#rainfall)不小于 150mm 的温和气候中。
+ _untitled_
	```patchouli:entity
	entity: tfc:lion
	scale: 0.55
	name: 狮
	```
	狮子生活在[温度](the_world/climate#temperature)不低于 16°C、[降雨量](the_world/climate#rainfall)在 50 到 300mm 的平原上。
+ _untitled_
	```patchouli:entity
	entity: tfc:tiger
	scale: 0.55
	name: 老虎
	```
	老虎生成在森林中，需要平均[温度](the_world/climate#temperature)至少 13°C，且[降雨量](the_world/climate#rainfall)高于 100mm。
+ _untitled_
	```patchouli:entity
	entity: tfc:sabertooth
	scale: 0.6
	name: 剑齿虎
	```
	剑齿虎生活在[温度](the_world/climate#temperature)不低于 0°C、[降雨量](the_world/climate#rainfall)不小于 250mm 的任意地区。
+ _untitled_
	```patchouli:entity
	entity: tfc:wolf
	scale: 0.7
	```
	狼生活在[温度](the_world/climate#temperature)不高于 22°C、[降雨量](the_world/climate#rainfall)在 150 到 420mm 的地区。狼有集群狩猎的习性。喂食狼足够多次可能将其驯化为[狗](mechanics/pets)。
+ _untitled_
	```patchouli:entity
	entity: tfc:direwolf
	scale: 0.7
	```
	冰原狼生成在[温度](the_world/climate#temperature)低于冰点的任何地区，且[降雨量](the_world/climate#rainfall)在 150 到 420mm 之间。它们成群狩猎，比普通狼更大，且无法驯服。
+ _untitled_
	```patchouli:entity
	entity: tfc:hyena
	scale: 0.7
	```
	鬣狗生成在[温度](the_world/climate#temperature)高于 15°C 的任何地区，且[降雨量](the_world/climate#rainfall)在 80 到 380mm 之间。它们成群狩猎，且无法驯服。
+ _untitled_
	```patchouli:entity
	entity: tfc:crocodile
	scale: 0.7
	name: 鳄鱼
	```
	鳄鱼生成在河流、湖泊和沼泽附近，需要[温度](the_world/climate#temperature)高于 15°C，[降雨量](the_world/climate#rainfall)不限。它们是夜行性动物，在水中最为危险。
+ _untitled_
	```patchouli:entity
	entity: tfc:ocelot
	scale: 0.7
	```
	豹猫会攻击小动物。它们生成在森林中，需要[温度](the_world/climate#temperature)在 15 到 30°C 之间，[降雨量](the_world/climate#rainfall)在 300 到 500mm 之间。多次喂食豹猫可以将其驯化为[猫](mechanics/pets)。豹猫可以吃生鱼。
+ 冲撞
	[](#ramming_prey)
	\$(thing)冲撞\$()动物有时会试图冲撞附近的生物，包括玩家。它们的攻击威力强大，但可以躲避。如果被攻击，它们会更频繁地进行冲撞。
+ _untitled_
	```patchouli:entity
	entity: tfc:boar
	scale: 0.8
	name: 野猪
	```
	野猪生活在[温度](the_world/climate#temperature)不高于 25°C，且[降雨量](the_world/climate#rainfall)在 130 到 400mm 的平原上。
+ _untitled_
	```patchouli:entity
	entity: tfc:moose
	scale: 0.7
	```
	麋鹿生活在[温度](the_world/climate#temperature)在 -15 到 10°C 之间，且[降雨量](the_world/climate#rainfall)在 150 到 300mm 的任何气候中。
+ _untitled_
	```patchouli:entity
	entity: tfc:wildebeest
	scale: 0.7
	```
	牛羚生成在开阔的平原上，需要[温度](the_world/climate#temperature)高于 13°C，且[降雨量](the_world/climate#rainfall)在 90 到 380mm 之间。
+ _untitled_
	```patchouli:entity
	entity: tfc:bison
	scale: 0.6
	name: 野牛
	```
	野牛生成在开阔的平原上，需要[温度](the_world/climate#temperature)在 -10°C 到 15°C 之间，且[降雨量](the_world/climate#rainfall)在 160 到 420mm 之间。
+ _empty_
+ 猎物
	[](#prey)
	\$(thing)猎物\$()害怕玩家和捕食者。他们擅长逃离危险，但通常无法反击。一些猎物喜欢偷吃农作物。
+ _untitled_
	```patchouli:entity
	entity: tfc:fox
	scale: 0.7
	name: 狐狸
	```
	狐狸喜欢从灌木中啃食莓果，它可以在[温度](the_world/climate#temperature)不高于 25°C，且[降雨量](the_world/climate#rainfall)在 130 到 400mm 的森林中生成。
+ _untitled_
	```patchouli:entity
	entity: tfc:deer
	scale: 0.7
	```
	野猪生活在[温度](the_world/climate#temperature)不高于 25°C，且[降雨量](the_world/climate#rainfall)在 130 到 400mm 的平原上。
+ _untitled_
	```patchouli:entity
	entity: tfc:caribou
	scale: 0.5
	name: 驯鹿
	```
	驯鹿生成在[温度](the_world/climate#temperature)低于 -9°C 的任何地区，且[降雨量](the_world/climate#rainfall)在 110 到 500mm 之间。
+ _untitled_
	```patchouli:entity
	entity: tfc:gazelle
	scale: 0.7
	```
	瞪羚生成在开阔的平原上，需要[温度](the_world/climate#temperature)高于 12°C，且[降雨量](the_world/climate#rainfall)在 90 到 380mm 之间。
+ _untitled_
	```patchouli:entity
	entity: tfc:bongo
	scale: 0.7
	name: 羚羊
	```
	羚羊生成在森林中，需要[温度](the_world/climate#temperature)高于 15°C，且[降雨量](the_world/climate#rainfall)在 230 到 500mm 之间。
+ _untitled_
	```patchouli:entity
	entity: tfc:grouse
	scale: 0.7
	```
	松鸡生活在[温度](the_world/climate#temperature)在 -12 到 13°C 之间，且[降雨量](the_world/climate#rainfall)在 150 到 400mm 的任何气候中。
+ _untitled_
	```patchouli:entity
	entity: tfc:pheasant
	scale: 0.7
	```
	雉鸡生活在[温度](the_world/climate#temperature)在 -5 到 17°C 之间，且[降雨量](the_world/climate#rainfall)在 100 到 300mm 的任何气候中。
+ _untitled_
	```patchouli:entity
	entity: tfc:turkey
	scale: 0.7
	```
	火鸡生活在[温度](the_world/climate#temperature)在 0 到 17°C 之间，且[降雨量](the_world/climate#rainfall)在 250 到 450mm 的任何气候中。
+ _untitled_
	```patchouli:entity
	entity: tfc:peafowl
	scale: 0.8
	name: 孔雀
	```
	孔雀生成在森林中，需要[温度](the_world/climate#temperature)高于 14°C，且[降雨量](the_world/climate#rainfall)在 190 到 500mm 之间。
+ 海洋生物
	[](#aquatic)
	\$(thing)水生生物\$()是一大类包含了多种习性迥异的生物的类别。可以大致分为几小类：\$(thing)滩涂动物\$()、\$(thing)鱼类\$()、\$(thing)贝壳类\$()、或\$(thing)大型海洋生物\$()。
+ _untitled_
	\$(thing)滩涂动物\$()只会生成在海岸边。它们一天中大部分时间都在水里游泳，部分时间在沙滩上闲逛。它们天性好奇，会跟随玩家，但无法被驯服。
+ _untitled_
	```patchouli:entity
	entity: tfc:penguin
	scale: 0.7
	name: 企鹅
	```
	企鹅只生成在最寒冷的海滩、冰盖边缘和海冰上，需要[温度](the_world/climate#temperature)不超过 -14°C，且[降雨量](the_world/climate#rainfall)至少 75mm。
+ _untitled_
	```patchouli:entity
	entity: tfc:leopard_seal
	scale: 0.7
	name: 豹斑海豹
	```
	豹斑海豹生成在寒冷的海滩、冰盖边缘和海冰上，需要[温度](the_world/climate#temperature)不超过 -9°C，且[降雨量](the_world/climate#rainfall)至少 105mm。
+ _untitled_
	```patchouli:entity
	entity: tfc:turtle
	scale: 0.7
	name: 海龟
	```
	海龟喜欢温暖的水域。它们生活在[温度](the_world/climate#temperature)不低于 21°C、[降雨量](the_world/climate#rainfall)不小于 250mm 的温暖海洋中。
+ _empty_
+ 鱼类
	\$(thing)鱼\$()是生活在水中的小动物。它们中的大多数都可以被[钓起来](mechanics/fishing)。不同种的鱼喜好在海洋、河流或湖泊中生活。
+ _untitled_
	```patchouli:entity
	entity: tfc:cod
	scale: 0.7
	name: 鳕鱼
	```
	鳕鱼生活在[温度](the_world/climate#temperature)不高于 18°C 的寒冷海洋中。它们可以被钓起来。
+ _untitled_
	```patchouli:entity
	entity: tfc:pufferfish
	scale: 0.7
	name: 河豚
	```
	河豚生活在[温度](the_world/climate#temperature)不低于 10°C 的海洋中。
+ _untitled_
	```patchouli:entity
	entity: tfc:jellyfish
	scale: 0.7
	name: 水母
	```
	水母生活在[温度](the_world/climate#temperature)不低于 18°C 的温暖海洋中。
+ _untitled_
	```patchouli:entity
	entity: tfc:tropical_fish
	scale: 0.7
	name: 热带鱼
	```
	热带鱼生活在[温度](the_world/climate#temperature)不低于 18°C 的温暖海洋中。
+ _untitled_
	```patchouli:entity
	entity: tfc:salmon
	scale: 0.7
	name: 三文鱼
	```
	三文鱼生活在[温度](the_world/climate#temperature)不低于 -5°C 的河流或湖泊中。
+ _untitled_
	```patchouli:entity
	entity: tfc:bluegill
	scale: 0.7
	name: 蓝鳃鱼
	```
	蓝鳃鱼生活在[温度](the_world/climate#temperature)在 -10 到 26°C 的河流或湖泊中。
+ 贝类
	[](#shellfish)
	\$(thing)贝类\$()是生活在水底的小动物。它们不能被钓起来，但会掉落可以食用或制成[助焊剂](mechanics/flux)的壳。贝类可以作为钓鱼所需的[诱饵](mechanics/fishing)。
+ _untitled_
	```patchouli:entity
	entity: tfc:isopod
	scale: 0.7
	name: 等足虫
	```
	等足虫生活在[温度](the_world/climate#temperature)不高于 14°C 的深海中。
+ _untitled_
	```patchouli:entity
	entity: tfc:lobster
	scale: 0.7
	name: 龙虾
	```
	龙虾生活在[温度](the_world/climate#temperature)不高于 21°C 的海洋中。
+ _untitled_
	```patchouli:entity
	entity: tfc:crayfish
	scale: 0.7
	name: 小龙虾
	```
	小龙虾和龙虾类似，不过它们生活在河流和湖泊中。它们喜欢生活在[温度](the_world/climate#temperature)不低于 5°C、[降雨量](the_world/climate#rainfall)不小于 125mm 的环境中。
+ _untitled_
	```patchouli:entity
	entity: tfc:horseshoe_crab
	scale: 0.7
	name: 马蹄蟹
	```
	马蹄蟹生活在[温度](the_world/climate#temperature)在 10 到 21°C、[降雨量](the_world/climate#rainfall)不大于 400mm 的温和海洋中。
+ 大型海洋生物
	\$(thing)大型海洋生物\$()只生活在巨大水体中。它们中的有些会捕猎其他鱼类。它们会掉落能制作成灯油的[鲸脂](mechanics/lamps#tallow)。
+ _untitled_
	```patchouli:entity
	entity: tfc:orca
	scale: 0.25
	name: 逆戟鲸
	```
	逆戟鲸生活在[温度](the_world/climate#temperature)不高于 19°C、[降雨量](the_world/climate#rainfall)不小于 100mm 的深海中。
+ _untitled_
	```patchouli:entity
	entity: tfc:dolphin
	scale: 0.4
	name: 海豚
	```
	海豚生活在[温度](the_world/climate#temperature)不低于 10°C、[降雨量](the_world/climate#rainfall)不小于 200mm 的深海中。
+ _untitled_
	```patchouli:entity
	entity: tfc:manatee
	scale: 0.25
	name: 海牛
	```
	海牛生活在[温度](the_world/climate#temperature)不低于 20°C、[降雨量](the_world/climate#rainfall)不小于 300mm 的温暖湖泊中。
+ 鱿鱼
	鱿鱼可以在任何深海中生成。它们会掉落\$(thing)墨囊\$()，并给靠得太近的玩家喷上一脸墨水。传言，那些在地下洞穴湖中生活的鱿鱼有一些奇怪的特性。
