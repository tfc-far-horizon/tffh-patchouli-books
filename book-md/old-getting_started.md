```patchouli-category
id: getting_started
name: 新手入门
description: 如何在群峦传说的世界中生存下来。如何渡过石器时代并获得你的第一把镐。
icon: tfc:stone/axe/sedimentary
sortnum: 1
```

#第一天

```patchouli-entry
id: getting_started/introduction
name: 第一天
category: tfc:getting_started
icon: tfc:rock/loose/granite
read_by_default: true
sortnum: 0
extra_recipe_mappings:
  tfc:stone/knife_head/sedimentary: 5
  tfc:stone/knife_head/metamorphic: 5
  tfc:stone/knife_head/igneous_extrusive: 5
  tfc:stone/knife_head/igneous_intrusive: 5
  tfc:stone/knife/sedimentary: 5
  tfc:stone/knife/metamorphic: 5
  tfc:stone/knife/igneous_extrusive: 5
  tfc:stone/knife/igneous_intrusive: 5
  tfc:stone/axe_head/sedimentary: 7
  tfc:stone/axe_head/metamorphic: 7
  tfc:stone/axe_head/igneous_extrusive: 7
  tfc:stone/axe_head/igneous_intrusive: 7
  tfc:stone/axe/sedimentary: 7
  tfc:stone/axe/metamorphic: 7
  tfc:stone/axe/igneous_extrusive: 7
  tfc:stone/axe/igneous_intrusive: 7
  tfc:stone/shovel_head/sedimentary: 8
  tfc:stone/shovel_head/metamorphic: 8
  tfc:stone/shovel_head/igneous_extrusive: 8
  tfc:stone/shovel_head/igneous_intrusive: 8
  tfc:stone/shovel/sedimentary: 8
  tfc:stone/shovel/metamorphic: 8
  tfc:stone/shovel/igneous_extrusive: 8
  tfc:stone/shovel/igneous_intrusive: 8
  tfc:stone/hoe_head/sedimentary: 9
  tfc:stone/hoe_head/metamorphic: 9
  tfc:stone/hoe_head/igneous_extrusive: 9
  tfc:stone/hoe_head/igneous_intrusive: 9
  tfc:stone/hoe/sedimentary: 9
  tfc:stone/hoe/metamorphic: 9
  tfc:stone/hoe/igneous_extrusive: 9
  tfc:stone/hoe/igneous_intrusive: 9
  tfc:stone/hammer_head/sedimentary: 10
  tfc:stone/hammer_head/metamorphic: 10
  tfc:stone/hammer_head/igneous_extrusive: 10
  tfc:stone/hammer_head/igneous_intrusive: 10
  tfc:stone/hammer/sedimentary: 10
  tfc:stone/hammer/metamorphic: 10
  tfc:stone/hammer/igneous_extrusive: 10
  tfc:stone/hammer/igneous_intrusive: 10
  tfc:stone/javelin_head/sedimentary: 11
  tfc:stone/javelin_head/metamorphic: 11
  tfc:stone/javelin_head/igneous_extrusive: 11
  tfc:stone/javelin_head/igneous_intrusive: 11
  tfc:stone/javelin/sedimentary: 11
  tfc:stone/javelin/metamorphic: 11
  tfc:stone/javelin/igneous_extrusive: 11
  tfc:stone/javelin/igneous_intrusive: 11
```

+ _untitled_
	在群峦传说中，你最初能获得的资源只有那些散落在地上的木棍、树枝、和小石子。几乎所有气候中都会有这些资源。你可以按\$(item)\$(k:key.use)\$()，或打破它们来把它们捡起来。
+ 示例
	```patchouli:multiblock
	multiblock:
	  pattern:
	    - - "1    "
	      - " 2  4"
	      - "  03 "
	      - " 4   "
	      - "    5"
	    - - GGGGG
	      - GGGGG
	      - GGGGG
	      - GGGGG
	      - GGGGG
	  mapping:
	    "1": tfc:rock/loose/granite[count=1]
	    "2": tfc:rock/loose/granite[count=2]
	    "3": tfc:rock/loose/granite[count=3]
	    "4": tfc:groundcover/stick
	    "5": tfc:wood/twig/ash
	    G: tfc:grass/aridisol
	enable_visualize: false
	```
	一些散落的木棍和石头。
+ _untitled_
	除了在地上收集木棍和小树枝外，还可以空手打碎树叶来获得木棍。在你收集了一些石头和木棍后，你就可以开始尝试\$(thing)石子塑形\$()了。石子塑形是将两块石子互相敲击以将其中一块凿成特定形状的过程。首先你的手中应至少握住两块石子，然后对着空气按下\$(item)\$(k:key.use)\$()就能打开\$(thing)塑形界面\$()。
+ _untitled_
	```patchouli:image
	images:
	  - tfc:textures/gui/book/gui/rock_knapping.png
	border: false
	```
	塑形界面。
+ _untitled_
	想要塑形特定的物品，就必须通过点击\$(thing)塑形界面\$()上的正方形石片来凿去不要的部分，直到形成所需的图案。例如将石片凿成右侧显示的图案就能做成石刀刃。注意！如果不小心凿掉了错误的部分，材料就被浪费掉了！
	
	与制作配方一样，所需图案的位置对输出并不重要，并且一些配方具有多个有效的图案。
+ _untitled_
	[](#knife)
	```tfc:rock_knapping_recipe
	tfc:knapping/stone/knife_head/sedimentary
	tfc:knapping/stone/knife_head/metamorphic
	tfc:knapping/stone/knife_head/igneous_extrusive
	tfc:knapping/stone/knife_head/igneous_intrusive
	```
	一把石刀刃，用各种不同的岩石都可以制作。
+ _untitled_
	```patchouli:crafting
	tfc:crafting/stone/knife/sedimentary
	```
	使用木棍或小树枝可以把任意的石制工具头组装成完整的工具。
	
	石刀可以破坏植物来收获\$(thing)干草\$()。
+ _untitled_
	```tfc:rock_knapping_recipe
	tfc:knapping/stone/axe_head/sedimentary
	tfc:knapping/stone/axe_head/metamorphic
	tfc:knapping/stone/axe_head/igneous_extrusive
	tfc:knapping/stone/axe_head/igneous_intrusive
	```
	\$(thing)斧\$()可以砍倒整棵树，包括树干和树叶。但只有单独打碎树叶才能获得树苗和木棍。
+ _untitled_
	```tfc:rock_knapping_recipe
	tfc:knapping/stone/shovel_head/sedimentary
	tfc:knapping/stone/shovel_head/metamorphic
	tfc:knapping/stone/shovel_head/igneous_extrusive
	tfc:knapping/stone/shovel_head/igneous_intrusive
	```
	\$(thing)铲\$()可以用来挖类似土壤材质的方块。对\$(thing)草方块\$()或\$(thing)泥土\$(item)使用\$()铲子也可以制造\$(thing)土径\$()。
+ _untitled_
	```tfc:rock_knapping_recipe
	tfc:knapping/stone/hoe_head/sedimentary
	tfc:knapping/stone/hoe_head/metamorphic
	tfc:knapping/stone/hoe_head/igneous_extrusive
	tfc:knapping/stone/hoe_head/igneous_intrusive
	```
	\$(thing)锄\$()是[农耕](mechanics/crops)不可或缺的工具。它也可以清理树叶或其他植物。
+ _untitled_
	```tfc:rock_knapping_recipe
	tfc:knapping/stone/hammer_head/sedimentary
	tfc:knapping/stone/hammer_head/metamorphic
	tfc:knapping/stone/hammer_head/igneous_extrusive
	tfc:knapping/stone/hammer_head/igneous_intrusive
	```
	\$(thing)锤\$()可以当作武器使用（造成[打击伤害](mechanics/damage_types)），但它最主要的用途还是在[冶金业](getting_started/primitive_anvils)中。
+ _untitled_
	```tfc:rock_knapping_recipe
	tfc:knapping/stone/javelin_head/sedimentary
	tfc:knapping/stone/javelin_head/metamorphic
	tfc:knapping/stone/javelin_head/igneous_extrusive
	tfc:knapping/stone/javelin_head/igneous_intrusive
	```
	\$(thing)标枪\$()是一种原始的一次性远程武器，也可以当作近战武器使用（造成[突刺伤害](mechanics/damage_types)）。
#生火

```patchouli-entry
id: getting_started/firepit
name: 生火
category: tfc:getting_started
icon: tfc:firepit
read_by_default: true
sortnum: 1
extra_recipe_mappings:
  tfc:firepit: 0
  tfc:torch: 6
  minecraft:torch: 6
  tfc:flint_and_pyrite: 11
  tfc:ore/pyrite: 11
```

+ _untitled_
	[](#firestarter)
	\$(thing)火\$()在文明史上是一项重大的技术进步。想要生火，就必须做一个\$(thing)起火器\$()。对准需要生火的目标按住\$(item)\$(k:key.use)\$()。片刻之后，会产生烟，然后便有几率成功生火。你可能需要多尝试几次才能成功点起火来。
+ _untitled_
	```patchouli:crafting
	tfc:crafting/firestarter
	```
	可以用两根木棍制作起火器。
+ 篝火
	有了起火器，现在可以制作\$(thing)篝火\$()了。要制作一个篝火，你需要一根\$(thing)原木\$()、三根\$(thing)木棍\$()，以及可选的最多五份\$(thing)引火物\$()。引火物可以是纸制品、干草或松果等物品，每使用一份引火物，成功点燃篝火的几率提高 10%。将所有物品丢（\$(item)\$(k:key.drop)\$()）在地上，放在同一个方块上。然后用起火器对准有物品浮在上面的方块使用。
+ _untitled_
	```patchouli:multiblock
	multiblock:
	  pattern:
	    - - X
	    - - "0"
	  mapping:
	    X: tfc:firepit[lit=true]
	enable_visualize: false
	```
	如果成功的话，就能创建一个篝火。
+ _untitled_
	再次与篝火互动就可以打开篝火界面。屏幕的左侧是四个\$(thing)燃料\$()槽。将原木、泥炭、或木棍捆之类的可燃物放置在最上面那格就能将它们添加到篝火里了。篝火会先燃烧最下面那格的燃料。左侧的刻度尺对应了篝火目前的\$(thing)温度\$()。屏幕右侧的格子则可以放置需要[加热](mechanics/heating)的物品。
+ _untitled_
	```patchouli:image
	images:
	  - tfc:textures/gui/book/gui/firepit.png
	border: false
	```
	篝火界面
+ _untitled_
	```tfc:heat_recipe
	tfc:heating/torch_from_stick
	```
	许多有用的物品可以在篝火中加热制作。例如加热木棍就可以做成两根\$(thing)火把\$()。注意！放置在世界中的火把是会燃尽的，但好在你可以用\$(thing)起火器\$()或其他\$(thing)火把\$()重新点燃它们。
+ _untitled_
	```tfc:heat_recipe
	tfc:heating/food/cooked_cod
	```
	篝火还可以用来\$(thing)加热食物\$()。生肉和面团之类的东西都可以在篝火中烧制以延长其保质期。有关保质期的知识请参考[这一章节](mechanics/decay)。
+ _untitled_
	篝火可以随时通过手持\$(thing)铲子\$()点击来熄灭。
	
	可以将一些其他物品放置在篝火之上来改变其功能。放置\$(thing)锻铁烤架\$()可将篝火变成[烧烤架](mechanics/grill)，可一次加热五个物品。放置\$(thing)陶锅\$()则会将篝火变成[大锅](mechanics/pot)，可用来煲汤。要移除篝火上的额外设备，可以按住\$(item)\$(k:key.sneak)\$()并按下\$(item)\$(k:key.use)\$()。千万注意不要移除还未冷却的烤架和锅！
+ _untitled_
	```tfc:multimultiblock
	```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - "0"
		mapping:
		  X: tfc:firepit
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - "0"
		mapping:
		  X: tfc:grill
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - "0"
		mapping:
		  X: tfc:pot
		```
	一个篝火，添加了烤架或锅。
+ _untitled_
	不同燃料的杂质含量并不一致。添加不纯净的燃料会使篝火产生更多烟尘。如果使用的燃料杂质含量越多，篝火产生的烟尘会飘得越高。所有燃料中，原木的杂质含量最少，而原木中杂质含量最多的种类是松木。松果和落叶之类的燃料杂质含量非常高以至于无法产生足够的热量来烹饪食物。
+ _untitled_
	```patchouli:crafting
	tfc:crafting/flint_and_pyrite
	```
	可以使用燧石和黄铁矿制作更高级的起火器，或者之后用燧石和钢。
#制陶术

```patchouli-entry
id: getting_started/pottery
name: 制陶术
category: tfc:getting_started
icon: tfc:ceramic/vessel
read_by_default: true
sortnum: 2
extra_recipe_mappings:
  minecraft:clay: 0
  tag:tfc:clay_indicators: 2
  tfc:ceramic/unfired_vessel: 4
  tfc:ceramic/vessel: 4
  tfc:ceramic/unfired_jug: 8
  tfc:ceramic/jug: 8
  tfc:ceramic/unfired_ingot_mold: 11
  tfc:ceramic/ingot_mold: 11
  tfc:ceramic/unfired_propick_head_mold: 14
  tfc:ceramic/unfired_pickaxe_head_mold: 15
  tfc:ceramic/pickaxe_head_mold: 15
  tfc:ceramic/unfired_saw_blade_mold: 16
  tfc:ceramic/saw_blade_mold: 16
  tfc:ceramic/unfired_scythe_blade_mold: 17
  tfc:ceramic/scythe_blade_mold: 17
  tfc:ceramic/unfired_chisel_head_mold: 18
  tfc:ceramic/chisel_head_mold: 18
  tfc:ceramic/unfired_axe_head_mold: 19
  tfc:ceramic/axe_head_mold: 19
  tfc:ceramic/unfired_hammer_head_mold: 20
  tfc:ceramic/hammer_head_mold: 20
  tfc:ceramic/unfired_knife_blade_mold: 21
  tfc:ceramic/knife_blade_mold: 21
  tfc:ceramic/unfired_hoe_head_mold: 22
  tfc:ceramic/hoe_head_mold: 22
  tfc:ceramic/unfired_shovel_head_mold: 23
  tfc:ceramic/shovel_head_mold: 23
```

+ _untitled_
	\$(thing)黏土\$()是一种特别有用的材料，你可以用它制作陶器。一开始你可能难以找到黏土，因为它们总是隐藏在草皮之下。但简而言之，有两种获取它们的手段。首先，黏土会在[年降雨量](the_world/climate#rainfall)大于 175mm 的区域中成片地大量生成，而且有几种特殊的\$(thing)植物\$()会生长在黏土之上。
+ 黏土指示植物
	```patchouli:multiblock
	multiblock:
	  pattern:
	    - - "   "
	      - " C "
	      - "   "
	    - - XXX
	      - X0X
	      - XXX
	  mapping:
	    "0": tfc:clay_grass/aridisol
	    X: tfc:clay_grass/aridisol
	    C: "#tfc:clay_indicators"
	enable_visualize: false
	```
	黏土草方块，其上生长的是黏土指示植物。
+ _untitled_
	[](#knapping)
	有几种植物指示了附近可能存在黏土，它们是：\$(thing)蹄盖蕨\$()、\$(thing)美人蕉\$()、\$(thing)一枝黄花\$()、\$(thing)蒲苇\$()、\$(thing)分药花\$()、和\$(thing)水生美人蕉\$()。其次，黏土也会在水源附近，比如河流、湖泊、或水池边，以小块的形式生成。
	
	和石子类似，黏土也可以被塑形成有用的物品。需要手持五个黏土球才能塑形。不同于石子塑形，捏坏了的黏土并不会消失，只要关闭黏土塑形界面重新尝试即可。
+ _untitled_
	```patchouli:image
	images:
	  - tfc:textures/gui/book/gui/clay_knapping.png
	border: false
	```
	塑形界面。
+ 小缸
	[](#vessel)
	黏土可以用来做成小缸。你捏出来的小缸还需要烧制才能使用。烧制是指将黏土置于 1200°C（\$(e)^\$(t:Yellow)黄色^）以上的高温中[加热](mechanics/heating)，直到它变成\$(thing)瓷\$()。
	
	篝火的温度并不足以烧制瓷器，你得使用[坑窑](getting_started/pit_kiln)才行。
+ _untitled_
	```tfc:knapping_recipe
	tfc:knapping/ceramic/unfired_vessel
	```
	塑造黏土小缸。
+ 大缸
	[大缸](mechanics/decay#large_vessels)的制作方法类似。它可以放置在地上，拥有九个物品槽。更多信息请查看链接章节。
+ _untitled_
	```tfc:knapping_recipe
	tfc:knapping/ceramic/unfired_large_vessel
	```
	塑造黏土大缸
+ 陶罐
	[](#jug)
	另一个很有用的陶器是\$(thing)陶罐\$()。你可以用它来盛装或从中饮用各种液体，比如\$(thing)淡水\$()。
	
	要使用它，只需拿着壶对着水源方块按\$(item)\$(k:key.use)\$()就行。长按\$(item)\$(k:key.use)\$()便可以用它喝水。陶罐一次可以容纳 \$(thing)100 mB\$() 的液体。
+ _untitled_
	```tfc:knapping_recipe
	tfc:knapping/ceramic/unfired_jug
	```
	塑造黏土陶罐。
+ 模具
	[](#mold)
	黏土的另一大作用是用来制作\$(thing)模具\$()。将熔融金属浇铸进模具中并冷却就能将其制成各种有用的工具或物品。金属冷却后，手持模具并按下\$(item)\$(k:key.use)\$()就可以将其取出了。
	
	最简单的模具是\$(thing)铸锭模具\$()，可以按右侧所示的方法塑形出来。
+ _untitled_
	```tfc:knapping_recipe
	tfc:knapping/ceramic/unfired_ingot_mold
	```
	塑造黏土铸锭模具
+ _untitled_
	```tfc:heat_recipe
	tfc:heating/ceramic/ingot_mold
	```
	模具和其他陶器一样必须在[坑窑](getting_started/pit_kiln)中烧制才能使用。
	
	将熔融的金属浇铸进烧制过后的模具中，等待金属充分冷却，就可以获得模具对应的金属制品。
+ 铸造
	```patchouli:spotlight
	item: tfc:ceramic/ingot_mold[tfc:fluid={id:"tfc:metal/copper",amount:100}]
	link_recipes: false
	```
	接下来的几页会教你如何将黏土塑形成各种工具的模具。
+ _untitled_
	```tfc:knapping_recipe
	tfc:knapping/ceramic/unfired_propick_head_mold
	```
	[勘矿镐](mechanics/prospecting#propick)本身并不能挖掘，但却是寻找矿脉必不可少的工具。
+ _untitled_
	```tfc:knapping_recipe
	tfc:knapping/ceramic/unfired_pickaxe_head_mold
	```
	\$(thing)镐\$()是挖掘必备的工具。
+ _untitled_
	```tfc:knapping_recipe
	tfc:knapping/ceramic/unfired_saw_blade_mold
	```
	\$(thing)锯\$()可以将原木切割成木板或[支撑柱](mechanics/support_beams)等高级木工物品。只有有了锯子你才能制作\$(thing)工作台\$()！
+ _untitled_
	```tfc:knapping_recipe
	tfc:knapping/ceramic/unfired_scythe_blade_mold
	```
	\$(thing)镰刀\$()可以一次性破坏 3x3x3 区域内的所有植物和树叶！
+ _untitled_
	```tfc:knapping_recipe
	tfc:knapping/ceramic/unfired_chisel_head_mold
	```
	[凿](mechanics/chisel)可以用来将普通方块转变为平滑方块，还可以用来制作多种装饰性方块。
+ _untitled_
	```tfc:knapping_recipe
	tfc:knapping/ceramic/unfired_axe_head_mold
	```
	\$(thing)斧\$()是用来砍树的。注意！用石斧砍树掉落的原木数量会比金属制成的斧要低上不少！
+ _untitled_
	```tfc:knapping_recipe
	tfc:knapping/ceramic/unfired_hammer_head_mold
	```
	\$(thing)锤\$()是在[砧](mechanics/anvils)上制作物品不可或缺的工具。
+ _untitled_
	```tfc:knapping_recipe
	tfc:knapping/ceramic/unfired_knife_blade_mold
	```
	\$(thing)刀\$()可以当作武器使用，不过主要还是用来破坏植物类型的方块。
+ _untitled_
	```tfc:knapping_recipe
	tfc:knapping/ceramic/unfired_hoe_head_mold
	```
	\$(thing)锄\$()可以用来种植和管理[农作物](mechanics/crops)。
+ _untitled_
	```tfc:knapping_recipe
	tfc:knapping/ceramic/unfired_shovel_head_mold
	```
	\$(thing)铲\$()可以挖东西。
#坑窑

```patchouli-entry
id: getting_started/pit_kiln
name: 坑窑
category: tfc:getting_started
icon: tfc:textures/gui/book/icons/pit_kiln.png
read_by_default: true
sortnum: 3
```

+ _untitled_
	坑窑是游戏早期用来[加热](mechanics/heating)物品的方法。例如，它可用于将黏土\$(thing)烧制\$()成陶瓷。坑窑在大约六个小时的时间内，可以将其内容物加热到 1400 °C，即^\$(#FFDF00)\$(t:Yellow White)黄白色^。
+ _untitled_
	搭建坑窑前，你需要准备：
	\$(li)最多 4 个想要加热的物品。\$(li)8 束\$(thing)干草\$()\$(li)8 根\$(thing)原木\$()\$(li)[起火器](getting_started/firepit#firestarter)，或\$(thing)火把\$()等能生火的物品。
	
	^备注：^想要用火把生火，只需将火把丢在搭建好的坑窑上再等一会儿就可以了。
+ _untitled_
	要建造一个坑窑：
	
	^1.^ 用\$(item)\$(k:tfc.key.place_block)\$()将最多四个物品放入一个 1x1 的坑中。
	^2.^ 用八束\$(thing)干草\$()或两个\$(thing)干草块\$()右键点击坑窑，直到物品被覆盖。
	^3.^ 用八根\$(thing)原木\$()右键点击坑窑，直到填满。
	^4.^ 点燃坑窑的顶部！
	
	然后坑窑会燃烧六个小时，慢慢[加热](mechanics/heating)里面的物品。
+ _untitled_
	```patchouli:image
	images:
	  - tfc:textures/gui/book/tutorial/pit_kiln_1.png
	  - tfc:textures/gui/book/tutorial/pit_kiln_2.png
	  - tfc:textures/gui/book/tutorial/pit_kiln_3.png
	  - tfc:textures/gui/book/tutorial/pit_kiln_4.png
	  - tfc:textures/gui/book/tutorial/pit_kiln_5.png
	border: true
	```
	如何搭建一个坑窑。
#矿石、金属和铸造

```patchouli-entry
id: getting_started/finding_ores
name: 矿石、金属和铸造
category: tfc:getting_started
icon: tfc:ore/normal_native_copper
read_by_default: true
sortnum: 4
```

+ _untitled_
	除了地上的那些木棍、树枝和小石子，你可能还遇到过散落在地表的小矿粒。多收集一点吧，在你获得镐之前，这是你获得矿石和金属为数不多的方法之一。
+ _untitled_
	```patchouli:multiblock
	multiblock:
	  pattern:
	    - - "    "
	      - "  0 "
	      - "    "
	    - - ABCD
	      - EFGH
	      - IJKL
	    - - XXXX
	      - XXXX
	      - XXXX
	  mapping:
	    X: tfc:grass/entisol
	    A: tfc:ore/small_native_copper
	    B: tfc:ore/small_native_gold
	    C: tfc:ore/small_hematite
	    D: tfc:ore/small_native_silver
	    E: tfc:ore/small_cassiterite
	    F: tfc:ore/small_bismuthinite
	    G: tfc:ore/small_garnierite
	    H: tfc:ore/small_malachite
	    I: tfc:ore/small_magnetite
	    J: tfc:ore/small_limonite
	    K: tfc:ore/small_sphalerite
	    L: tfc:ore/small_tetrahedrite
	enable_visualize: false
	```
	每种不同的小矿粒
+ _untitled_
	这些小矿粒不仅为你提供了早期生存至关重要的金属素材，它们还提示你它们附近的浅表层岩石中可能存在大型矿脉。留心标记你发现这些小矿粒的位置，这些信息等你以后有了[勘矿镐](mechanics/prospecting)之后会很有用的。
	
	下一页会介绍这个世界中的的十二种矿粒和他们所对应的金属。
+ 小矿石粒
	\$(li)原生铜粒（\$(thing)铜\$()）\$(li)原生金粒（\$(thing)金\$()）\$(li)赤铁矿粒（\$(thing)铸铁\$()）\$(li)原生银粒（\$(thing)银\$()）\$(li)锡石粒（\$(thing)锡\$()）\$(li)辉铋矿粒（\$(thing)铋\$()）\$(li)绿镍矿粒（\$(thing)镍\$()）\$(li)孔雀石粒（\$(thing)铜\$()）\$(li)磁铁矿粒（\$(thing)铸铁\$()）\$(li)褐铁矿粒（\$(thing)铸铁\$()）\$(li)闪锌矿粒（\$(thing)锌\$()）\$(li)黝铜矿粒（\$(thing)铜\$()）
+ 铸造
	[](#casting)
	在群峦传说中，每个矿石包含的实际金属的\$(thing)单位\$()（\$(thing)mB（也就是毫桶）\$()）是不同的。像这样在地表发现的小矿粒质量最低，只能提供 \$(thing)10 mB\$() 的金属。为了提取这种金属，需要将其熔化，并使用称为\$(thing)铸造\$()的工艺制成工具。
+ _untitled_
	开始之前，你需要准备：
	\$(li)一只[小缸](getting_started/pottery#vessel)\$(li)足够搭建一个[坑窑](getting_started/pit_kiln)的材料。\$(li)若干个用来浇铸金属的[模具](getting_started/pottery#mold)。\$(li)最后，也是最重要的，至少价值 100 mB 的可以用来铸造的金属矿石。早期的话就只有\$(thing)铜\$()了（三种铜矿石中的任意一种，或者混搭都行）。
	
	\$(italic)备注：如果材料足够，也可以直接铸造某些[合金](getting_started/primitive_alloys)。
+ _untitled_
	首先，打开并将想要熔化的矿粒放进\$(thing)小缸\$()中。记得一定要数好金属的数量！然后，把装有矿粒的小缸放进[坑窑](getting_started/pit_kiln)中并点燃。矿石会随着容器的升温而熔化，当火熄灭之后你就能将装有液态金属的小缸从中取出了。
	
	将小缸从坑窑中取出并手持小缸按下\$(item)\$(k:key.use)\$()来打开\$(thing)铸造\$()界面。
+ _untitled_
	```patchouli:image
	images:
	  - tfc:textures/gui/book/gui/casting.png
	border: false
	```
	铸造界面。
+ _untitled_
	接下来，只要将烧制好的模具放在屏幕中间的空格内就可以将液态金属浇铸进模具了。一定要趁金属还没凝固时浇铸。如果金属变冷了的话就只能再造一个坑窑把它熔化了！模具注满之后就可以从小缸中拿出来冷却了。等待模具中的金属凝固之后，手持模具\$(item)\$(k:key.use)\$()点击，或将模具放入合成格中就可以将成品取出。
+ _untitled_
	```patchouli:crafting
	tfc:crafting/metal/pickaxe/copper
	```
	现在你学会如何铸造金属工具了，来尝试做一把镐吧！去收集矿粒，做一个镐头模具，再在坑窑里熔化矿粒并浇铸到模具里，最后加上一根木棍就好了！
#原始合金

```patchouli-entry
id: getting_started/primitive_alloys
name: 原始合金
category: tfc:getting_started
icon: tfc:ceramic/ingot_mold[tfc:fluid={id:"tfc:metal/bronze",amount:100}]
read_by_default: true
sortnum: 5
extra_recipe_mappings:
  tfc:metal/ingot/bronze: 3
  tfc:metal/ingot/bismuth_bronze: 4
  tfc:metal/ingot/black_bronze: 5
  tfc:metal/ingot/brass: 7
```

+ _untitled_
	\$(thing)合金\$()是指由两种或更多种不同金属混合而成的更强的金属。铜在游戏早期很实用，但想要发展到下一级文明，就必须想办法做出\$(thing)青铜\$()。将不同金属混合在一起熔化，只要所有成分都处于特定区间内就能做出对应的合金了！
+ _untitled_
	\$(thing)小缸\$()是游戏早期唯一可以制作合金的手段。制作合金的步骤和[铸造](getting_started/finding_ores#casting)很相似，唯一的区别是要在小缸中混合放置多种不同的金属而不仅仅是铜。只要小缸中的几种金属比例都位于可接受范围内，熔化所得的金属就会自动转化为合金。
+ _untitled_
	例如，要合成 1000 mB 的\$(thing)青铜\$()（右侧所示），你需要加入 880~920 mB 的\$(thing)铜\$()以及 80~120 mB 的\$(thing)锡\$()。
	
	接下来的几页展示了三种不同的铜合金。每种铜合金都可以做成工具、[盔甲](mechanics/armor)、和其他金属物品，但它们的耐久度、效率、和伤害有些微小的差异。
+ 青铜
	```patchouli:spotlight
	item: tfc:metal/ingot/bronze
	link_recipes: false
	```
	
	^条件：^
	\$(li)\$(thing)铜\$()：88 - 92 %\$(li)\$(thing)锡\$()：8 - 12 %
	
	
+ 铋青铜
	```patchouli:spotlight
	item: tfc:metal/ingot/bismuth_bronze
	link_recipes: false
	```
	
	^条件：^
	\$(li)\$(thing)铜\$()：50 - 65 %\$(li)\$(thing)锌\$()：20 - 30 %\$(li)\$(thing)铋\$()：10 - 20 %
	
	
+ 黑青铜
	```patchouli:spotlight
	item: tfc:metal/ingot/black_bronze
	link_recipes: false
	```
	
	^条件：^
	\$(li)\$(thing)铜\$()：50 - 70 %\$(li)\$(thing)银\$()：10 - 25 %\$(li)\$(thing)金\$()：10 - 25 %
	
	
+ 实用合金
	其他合金不适合制作工具。它们是\$(thing)黄铜\$()、\$(thing)玫瑰金\$()和\$(thing)纯银\$()。
	
	\$(thing)黄铜\$()是一种有用的合金，可用于各种装置，包括[机械动力](mechanics/mechanical_power)。
	
	\$(thing)玫瑰金\$()和\$(thing)纯银\$()用于制作[红钢](mechanics/steel#red_steel)和[蓝钢](mechanics/steel#blue_steel)。
+ 黄铜
	[](#brass)
	```patchouli:spotlight
	item: tfc:metal/ingot/brass
	link_recipes: false
	```
	
	^条件：^
	\$(li)\$(thing)铜\$()：88 - 92 %\$(li)\$(thing)锌\$()：8 - 12 %
	
	
+ 玫瑰金
	```patchouli:spotlight
	item: tfc:metal/ingot/rose_gold
	link_recipes: false
	```
	
	^条件：^
	\$(li)\$(thing)铜\$()：15 - 30 %\$(li)\$(thing)金\$()：70 - 85 %
	
	
+ 纯银
	```patchouli:spotlight
	item: tfc:metal/ingot/sterling_silver
	link_recipes: false
	```
	
	^条件：^
	\$(li)\$(thing)铜\$()：20 - 40 %\$(li)\$(thing)银\$()：60 - 80 %
	
	
#原始砧

```patchouli-entry
id: getting_started/primitive_anvils
name: 原始砧
category: tfc:getting_started
icon: tfc:rock/anvil/granite
read_by_default: true
sortnum: 6
extra_recipe_mappings:
  tfc:rock/anvil/granite: 0
  tfc:rock/anvil/diorite: 0
  tfc:rock/anvil/gabbro: 0
  tfc:rock/anvil/rhyolite: 0
  tfc:rock/anvil/basalt: 0
  tfc:rock/anvil/andesite: 0
  tfc:rock/anvil/dacite: 0
```

+ _untitled_
	用\$(thing)砧\$()锻造金属锭是不同于铸造的另一种制作工具的方法。同时砧也是发展使用更高级金属的必需品。砧既可以用来[锻造](mechanics/anvils#working)，也可以用来[焊接](mechanics/anvils#welding)。这一章节我们只讲如何获得你的第一个原始石砧。
+ _untitled_
	首先，你得找到一块\$(thing)天然的\$()\$(thing)喷出岩\$() （流纹岩、玄武岩、安山岩、或英安岩）或\$(thing)侵入岩\$()（花岗岩、闪长岩、或辉长岩）。你可以直接使用暴露在地表的那些，或者也可以把它们从岩壁上[采下来](getting_started/primitive_anvils#raw_rock)。
+ 石砧
	[](#stone_anvils)
	你还需要一把任意材料制成的\$(thing)锤\$()。要把岩石变成砧，手持\$(thing)锤\$()右键点击其\$(thing)顶面\$()即可。
	
	砧是有不同[等级](mechanics/anvils#tiers)的。石砧的等级是 0 - 也就是最低等级。它只能用来[焊接](mechanics/anvils#welding) 1 级的金属锭。
+ _untitled_
	```tfc:multimultiblock
	```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - " 0 "
		  - - RRR
		mapping:
		  "0": AIR
		  R: tfc:rock/raw/gabbro
		```
	+ `tfc:rock_anvil`
	将中间那块岩石作为石砧。
+ 获得原石
	[](#raw_rock)
	想要获得一块天然的岩石，直接用镐挖是不行的。唯一的方法是将其六面所相邻的方块都挖掉，悬空的岩石就会掉落其本体了。
+ _untitled_
	```tfc:multimultiblock
	```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - "   "
		    - " R "
		    - "   "
		  - - " R "
		    - RRR
		    - " R "
		  - - "   "
		    - " 0 "
		    - "   "
		mapping:
		  "0": tfc:rock/raw/gabbro
		  R: tfc:rock/raw/gabbro
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - "   "
		    - "   "
		    - "   "
		  - - " R "
		    - RRR
		    - " R "
		  - - "   "
		    - " 0 "
		    - "   "
		mapping:
		  "0": tfc:rock/raw/gabbro
		  R: tfc:rock/raw/gabbro
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - "   "
		    - "   "
		    - "   "
		  - - "   "
		    - RRR
		    - " R "
		  - - "   "
		    - " 0 "
		    - "   "
		mapping:
		  "0": tfc:rock/raw/gabbro
		  R: tfc:rock/raw/gabbro
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - "   "
		    - "   "
		    - "   "
		  - - "   "
		    - " RR"
		    - " R "
		  - - "   "
		    - " 0 "
		    - "   "
		mapping:
		  "0": tfc:rock/raw/gabbro
		  R: tfc:rock/raw/gabbro
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - "   "
		    - "   "
		    - "   "
		  - - "   "
		    - " RR"
		    - "   "
		  - - "   "
		    - " 0 "
		    - "   "
		mapping:
		  "0": tfc:rock/raw/gabbro
		  R: tfc:rock/raw/gabbro
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - "   "
		    - "   "
		    - "   "
		  - - "   "
		    - " R "
		    - "   "
		  - - "   "
		    - " 0 "
		    - "   "
		mapping:
		  "0": tfc:rock/raw/gabbro
		  R: tfc:rock/raw/gabbro
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - "   "
		    - "   "
		    - "   "
		  - - "   "
		    - " R "
		    - "   "
		  - - "   "
		    - " 0 "
		    - "   "
		mapping:
		  "0": AIR
		  R: tfc:rock/raw/gabbro
		```
	挖掉一块原石的所有六个邻面 - 之后，中心块将作为物品掉落。
#建筑材料

```patchouli-entry
id: getting_started/building_materials
name: 建筑材料
category: tfc:getting_started
icon: tfc:wattle/unstained
read_by_default: true
sortnum: 7
```

+ _untitled_
	在游戏早期，由于很多坚固的建筑方块需要金属工具才能获得，建造房屋是比较困难的。不过仍然有一些建筑方块仅用石制工具就能获得。
	
	等有了金属工具之后，才能考虑制作[更高级的建筑材料](mechanics/advanced_building_materials)。
+ 材料目录
	
	  1. [干草块](getting_started/building_materials#thatch)
	  2. [壤泥砖](getting_started/building_materials#mud_bricks)
	  3. [板条与涂料](getting_started/building_materials#wattle_and_daub)
	  4. [黏土块和泥炭](getting_started/building_materials#clay_and_peat)
	
+ 干草块
	[](#thatch)
	手持[石刀](getting_started/introduction#knife)就能通过破坏草丛等植物来获取\$(thing)干草\$()。干草可以用于合成一种非常原始的建筑材料：\$(thing)干草块\$()。干草块是一种很轻的建筑材料，不受重力影响，但同样也没有碰撞体积！如果必要，干草块也可以反向合成\$(thing)干草\$()。
+ _untitled_
	```patchouli:crafting
	tfc:crafting/thatch
	tfc:crafting/straw
	```
+ 壤泥砖
	[](#mud_bricks)
	```patchouli:crafting
	tfc:crafting/drying_bricks/entisol
	```
	\$(thing)壤泥\$()会生成在地表、河流和湖底，或大量出现在低洼潮湿的生物群系中。将它们和一束\$(thing)干草\$()合成就能制成\$()湿壤泥砖\$()。
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
		  X: tfc:drying_bricks/entisol[count=4,dried=false]
		  Y: tfc:grass/entisol
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - Y
		  - - "0"
		mapping:
		  X: tfc:drying_bricks/entisol[count=4,dried=true]
		  Y: tfc:grass/entisol
		```
	它们可以放在干燥的地方，一天后它们会硬化成\$(thing)壤泥砖\$()。
+  
	```patchouli:crafting
	tfc:crafting/mud_bricks/entisol
	```
	这些干燥后的壤泥砖可以做成\$(thing)壤泥砖块\$()。它们也可以做成\$(thing)楼梯\$()、\$(thing)台阶\$()、或\$(thing)墙\$()。
+ _untitled_
	```patchouli:multiblock
	multiblock:
	  pattern:
	    - - X
	    - - "0"
	  mapping:
	    X: "#tfc:mud_bricks"
	enable_visualize: false
	```
	所有不同品种的泥砖
+ 板条与涂料
	[](#wattle_and_daub)
	\$(thing)板条\$()和\$(thing)涂料\$()是两种非常有用的建筑和装饰方块。
	
	\$(thing)板条\$()可以直接放在地上，但玩家和其他生物可以直接穿过去，而且还很容易碎掉。用\$(thing)涂料\$()就可以将其加固，让它变成实心方块。
+ _untitled_
	```patchouli:crafting
	tfc:crafting/wattle
	```
	要将\$(thing)板条\$()加固成实心方块，必须先用木棍\$(thing)编织\$()加固。
+ _untitled_
	```patchouli:crafting
	tfc:crafting/daub
	tfc:crafting/daub_from_mud
	```
+ _untitled_
	```patchouli:image
	images:
	  - tfc:textures/gui/book/tutorial/wattle_weave.png
	border: true
	```
	手持至少四根木棍来\$(thing)编织\$()板条。
+ _untitled_
	可以在板条方块的顶面、底面、和两条对角线添加额外的木棍来添加装饰花纹。手持\$(thing)木棍\$()并对着板条方块按\$(item)\$(k:key.use)\$()就可以添加一根木棍了。要装饰不同的部位，只需瞄准板条不同的面即可。
+ _untitled_
	```patchouli:image
	images:
	  - tfc:textures/gui/book/tutorial/wattle_add_stick.png
	border: true
	```
	在板条上添加木棍。
+ _untitled_
	```patchouli:image
	images:
	  - tfc:textures/gui/book/tutorial/wattle_add_daub.png
	border: true
	```
	对准\$(thing)编织加固过的板条\$()使用\$(thing)涂料\$()就能将其转变为实心方块。
+ _untitled_
	```patchouli:image
	images:
	  - tfc:textures/gui/book/tutorial/wattle_stained.png
	border: true
	```
	之后可以用[染料](mechanics/dye)右键点击它来\$(thing)染色\$()。
+ 黏土块和泥炭
	[](#clay_and_peat)
	黏土球可以做成黏土块。将黏土块放在地上再挖掉就可以把它变回黏土球。虽然谈不上美观，它们至少很好获得。
	
	泥炭也是一种不受重力影响的方块，常常会在水边生成。有些植物也会生长在泥炭上。
	
	然而，泥炭很容易着火。
+ 黏土块
	```patchouli:crafting
	minecraft:clay
	```
#如何过夜

```patchouli-entry
id: getting_started/a_place_to_sleep
name: 如何过夜
category: tfc:getting_started
icon: tfc:medium_raw_hide
read_by_default: true
sortnum: 8
extra_recipe_mappings:
  tfc:thatch_bed: 0
```

+ _untitled_
	游戏早期你可以做一张\$(thing)干草床\$()。虽然不能用它来跳过夜晚，但至少可以用来设置你的复活点。要搭建干草床，在地上放置两个相邻的\$(thing)干草块\$()，然后手持一张\$(thing)大块兽皮\$()右击干草块。只有大型动物会掉落大块兽皮，例如\$(thing)熊\$()和\$(thing)牛\$()。
+ 干草床
	```patchouli:multiblock
	multiblock:
	  pattern:
	    - - " D "
	      - " 0 "
	  mapping:
	    "0": tfc:thatch_bed[part=head,facing=east]
	    D: tfc:thatch_bed[part=foot,facing=east]
	enable_visualize: false
	```
	一张干草床。
#体积和重量

```patchouli-entry
id: getting_started/size_and_weight
name: 体积和重量
category: tfc:getting_started
icon: tfc:textures/gui/book/icons/size_and_weight.png
read_by_default: true
sortnum: 9
```

+ _untitled_
	每种物品都有其\$(thing)体积 ⇲ \$()和\$(thing)重量 ⚖\$() 。物品的体积和重量会显示在其\$(thing)工具提示\$()中，将鼠标悬停在物品上就能查看。
+ 体积 ⇲
	物品的体积决定了何种容器可以装得下这种物品。
	\$(li)\$(thing)极小\$()的物品可以装在任何容器里。\$(li)\$(thing)非常小\$()的物品可以装在任何容器里。\$(li)只有\$(thing)小\$()及以下的物品可以装在[小缸](mechanics/decay#small_vessels)里。\$(li)只有\$(thing)普通\$()及以下的物品可以装在[大缸](mechanics/decay#small_vessels)里。
+ _untitled_
	\$(li)只有\$(thing)大\$()及以下的物品可以装在箱子里。\$(li)\$(thing)非常大\$()的物品只能单独在[坑窑](getting_started/pit_kiln)中烧制。\$(li)\$(thing)极大\$()的物品不能装进任何普通容器中，而且携带它们会导致你负担过重。
+ 重量 ⚖
	物品的重量决定了它一组可堆叠的上限。
	\$(li)\$(thing)非常轻\$()：64\$(li)\$(thing)轻\$()：32\$(li)\$(thing)中等\$()：16\$(li)\$(thing)重\$()：4\$(li)\$(thing)非常重\$()：1
	
	大部分物品都属于\$(thing)非常轻\$()的类别。方块一般都是\$(thing)中等\$()重量。
+ _untitled_
	物品栏中存在\$(thing)极大\$()且\$(thing)非常重\$()的物品会使你\$(thing)负担过重\$()。只要携带一件\$(thing)极大、非常重\$()的物品就会导致你变得疲惫，饥饿值也会消耗得更快。携带两件以上就会使你进入\$(thing)负担过重\$()状态，行动也会变得极其缓慢。
+ 负担过重
	[](#overburdening)
	会导致负担过重的物品有\$(thing)砧\$()、\$(thing)密封的大桶\$()、装有物品的\$(thing)坩埚等。\$()
	
	提示: [马](mechanics/animal_husbandry#horses)也会负担过重。
#食物和水

```patchouli-entry
id: getting_started/food_and_water
name: 食物和水
category: tfc:getting_started
icon: tfc:textures/item/food/orange.png
read_by_default: true
sortnum: 10
```

+ _untitled_
	在群峦传说中，你不仅需要注意你的饥饿度，还需要管理你的口渴度。饥饿度的机制和原版类似。大部分的食物会为你回复五分之一饥饿条，其他一些食物（比如\$(thing)香蒲根\$()）则会少回复些。进食还会使你回复一些\$(thing)饱和度\$()，也就是饱腹感。
+ _untitled_
	几乎任何动作都会消耗饥饿度。疾跑、游泳、或[负担过重](getting_started/size_and_weight#overburdening)都会更快消耗饥饿度。有关某样食物可以为你回复的\$(thing)饱和度\$()、\$(thing)口渴度\$()、和\$(thing)营养元素\$()可以通过在物品栏中将鼠标放置在其上并按住\$(item)\$(k:key.sneak)\$()检视。
+ _untitled_
	所有食物都可以用这种方法展开详细的工具提示。食物的[保质期](mechanics/decay)也会在此显示。需要注意的是，不是所有能吃的东西都有营养价值。比如[面团](mechanics/bread)可以吃，但毫无营养，而且也不会回复饱和度或口渴度。这样的食物吃了也没多少好处。
+ _untitled_
	以下是一个食物的工具提示的示例：
	
	橙子
	\$(2)保质期：1004年 七月6日 11:59（约1月1天）\$()
	营养：
	- 饱和度：2%
	- 口渴值：2%
	\$(a)- 水果：0.5
+ _untitled_
	```patchouli:image
	images:
	  - tfc:textures/gui/book/gui/nutrition.png
	border: false
	```
	这是营养界面。每个状态条显示了你目前的营养水平。
+ 营养元素
	[](#nutrients)
	群峦传说中有五种营养元素。它们都可以通过吃东西摄入：\$(l)\$(a)水果\$()\$()、\$(l)\$(2)蔬菜\$()\$()、\$(l)\$(c)蛋白质\$()\$()、\$(l)\$(6)谷物\$()\$()、和\$(l)\$(5)乳制品\$()\$()。保持每种营养元素都处于较高水平会增加你的最大生命值，反之则会降低生命值。食用食物就能摄入它所蕴含的营养元素。通过制作[汤](mechanics/pot#soup)之类的\$(thing)餐点\$()可以将多种食材组合成为一顿食物。\$(thing)用餐\$()比分开吃烹饪材料更好，因为你的营养元素水平是根据你吃的最后几个食物决定的。
+ _untitled_
	\$(l)\$(a)水果\$()\$()：水果元素的主要来源于[果木](the_world/wild_fruits)。比如灌木和果树。两个值得注意的特例是[南瓜](mechanics/crops#pumpkin)和[西瓜](mechanics/crops#pumpkin)。这两种植物也被算作是水果。
	
	\$(l)\$(2)蔬菜\$()\$()：大部分[农作物](mechanics/crops)都蕴含这种营养元素。
	
	\$(l)\$(c)蛋白质\$()\$()：[动物](the_world/wild_animals)肉都含有蛋白质。对于不想杀生的玩家来说，一个肉食的替代品则是[大豆](mechanics/crops#soybean)。大豆同时拥有蛋白质和蔬菜元素。
+ _untitled_
	\$(l)\$(6)谷物\$()\$()：谷物元素是由……呃，谷物提供的。比如[大麦](mechanics/crops#barley)。如何将谷物变成有用的食物主要写在[烤面包](mechanics/bread)章节。\$(thing)香蒲根\$()和\$(thing)芋头根\$()也算谷物。
	
	\$(l)\$(5)乳制品\$()\$()：所有乳制品都是用\$(thing)奶\$()制成的。想要获得奶，就必须繁殖[产奶动物](mechanics/animal_husbandry#dairy_animals)。如何将生奶变成有用的食物主要写在[乳制品](mechanics/dairy)章节。
	
	食物一旦腐败便完全不能吃了。关于防止食物腐败的知识，请阅读[食物保鲜](mechanics/decay)章节。
+ 口渴度
	[](#thirst)
	口渴度指的是你身体中的水分含量。口渴度和饥饿度一样会缓慢流失。处于高温环境，或进行剧烈运动都会使口渴度流失得更快。用\$(item)\$(k:key.use)\$()点击\$(thing)淡水\$()水源方块就可以回复你的口渴度，但要注意喝咸水反而会导致你损失更多口渴度，有时你还会获得会让你持续流失更多口渴度的\$(thing)干渴\$()状态效果。
+ 饮水安全
	```patchouli:multiblock
	multiblock:
	  pattern:
	    - - X
	    - - Y
	    - - "0"
	  mapping:
	    X: minecraft:air
	    Y: tfc:plant/cattail[part=lower,fluid=water]
	enable_visualize: false
	```
	河流和湖泊中的水往往都是淡水。另外，\$(thing)阔叶香蒲\$()之类的植物只会生长在淡水中。
+ _untitled_
	```tfc:knapping_recipe
	tfc:knapping/ceramic/unfired_jug
	```
	将黏土[塑形](getting_started/pottery)并烧制成一只[罐](getting_started/pottery#jug)便能将水带在身边了。手持空罐用\$(item)\$(k:key.use)\$()点击水源就能盛水。按住\$(item)\$(k:key.use)\$()便能从中喝水。
+ _untitled_
	当你的饥饿度或口渴度太低时，你的移动和挖掘速度都会变得很缓慢，还会不断受到伤害。你的营养元素会在死亡后重置。
