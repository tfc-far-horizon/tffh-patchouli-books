```patchouli-category
id: mechanics
name: 进阶内容
description: 科技树的进阶部分，从第一把镐一直到彩钢。$(br2)$(br)$(bold)注意：$()你可以通过在任何地方开始打字来搜索条目！
icon: tfc:metal/axe/red_steel
sortnum: 2
```

#高级建筑材料

```patchouli-entry
id: mechanics/advanced_building_materials
name: 高级建筑材料
category: tfc:mechanics
icon: tfc:brick/rhyolite
read_by_default: true
extra_recipe_mappings:
  tfc:alabaster/raw: 2
  tfc:alabaster/polished: 2
```

+ _untitled_
	除了石器时代的基础[建筑材料](getting_started/building_materials)，金属工具可以帮你生产更多的高级建筑材料
+ 材料目录
	
	 1. [石膏](mechanics/advanced_building_materials#plaster)
	 2. [石砖和砂浆](mechanics/advanced_building_materials#bricks_and_mortar)
	
+ 石膏
	[](#plaster)
	石膏是一种由[石膏矿](the_world/ores_and_minerals#gypsum)制成的建筑材料。石膏可以直接用[石膏矿](the_world/ores_and_minerals#gypsum)合成获得，但更高效的方法是在大桶中用 100 mB \$(thing)石灰水\$()密封一些石膏矿。
+ 石膏砖
	```patchouli:crafting
	tfc:crafting/alabaster_brick
	tfc:crafting/alabaster/bricks
	```
+ 石膏装饰
	石膏可以在装有染料的[大桶](mechanics/barrels)中[染色](mechanics/dye)成任何颜色。天然石膏块也可以用[凿子](mechanics/chisel)在\$(thing)平滑\$()模式下凿制成\$(thing)磨制石膏\$()，或者合成为楼梯、台阶或墙。
+ 楼梯和台阶
	```patchouli:crafting
	tfc:crafting/alabaster/bricks/magenta_stairs
	tfc:crafting/alabaster/polished/magenta_slab
	```
+ 石砖和砂浆
	[](#bricks_and_mortar)
	将一些小石子与[凿子](mechanics/chisel)在合成栏中合成就可以得到这种岩石的\$(thing)砖\$()。将砖与\$(thing)砂浆\$()合成就能做成坚固的建筑方块。
	
	砂浆可以通过将\$(thing)沙子\$()加入装有[石灰水](mechanics/barrels#limewater)的大桶得到。
+ _untitled_
	```patchouli:crafting
	tfc:crafting/brick/gneiss
	tfc:crafting/rock/bricks/gneiss
	```
+ _untitled_
	你还可以制作其他的石头装饰方块，例如\$(thing)裂纹砖\$()和\$(thing)雕刻过的石砖\$()。将圆石或石砖方块放在水下的其他苔石旁，苔藓就会扩散，将其转换为\$(thing)苔石\$()或苔石砖。
+ _untitled_
	```patchouli:crafting
	tfc:crafting/rock/chiseled/gneiss
	tfc:crafting/rock/cracked_bricks/gneiss
	```
#畜牧业

```patchouli-entry
id: mechanics/animal_husbandry
name: 畜牧业
category: tfc:mechanics
icon: minecraft:textures/item/egg.png
read_by_default: true
```

+ _untitled_
	\$(thing)牲畜\$()是可以被玩家驯服和饲养的动物。牲畜可以是\$(thing)公的\$()或\$(thing)母的\$()。某些动物会有\$(thing)两性异形\$()的现象。例如，只有公猪会有獠牙。
+ _untitled_
	牲畜会逐渐\$(thing)衰老\$()。刚出生的幼崽不会产出资源，也不能繁殖。一段时间之后它们才会\$(thing)成年\$()。成年的牲畜可以提供蛋、奶等资源，也可以繁殖出新的幼崽。当繁殖或产出资源多次之后，牲畜有可能会衰老。衰老的动物只能作为肉用。
+ _untitled_
	```patchouli:image
	images:
	  - tfc:textures/gui/book/tutorial/old_cow.png
	border: true
	```
	这只牛太老了，不能繁殖。可以从它灰白的毛色和模糊的眼睛中看出。
+ _untitled_
	喂养牲畜可以提升与之的\$(thing)亲密度\$()。每种动物都有其喜爱的食物。手持食物对准牲畜按住\$(item)\$(k:key.sneak)\$()的同时按\$(item)\$(k:key.use)\$()就可以喂养了。
+ _untitled_
	```patchouli:image
	images:
	  - tfc:textures/gui/book/tutorial/unfamiliarized_pig.png
	border: true
	```
	按住\$(item)\$(k:key.sneak)\$()并看着牲畜时会在头上显示其\$(thing)亲密度\$()。
+ _untitled_
	```patchouli:image
	images:
	  - tfc:textures/gui/book/tutorial/no_familiarity_decay_pig.png
	border: true
	```
	如果不喂食，亲密度每天都会减少一点。但如果亲密度高到一定程度（出现一个白色轮廓的心），亲密度就不会因此减少了。
+ _untitled_
	```patchouli:image
	images:
	  - tfc:textures/gui/book/tutorial/familiarity_limit_pig.png
	border: true
	```
	成年牲畜无法达到 100% 的亲密度（出现红色轮廓的心），只有幼年牲畜可能达到 100% 的亲密度。
+ _untitled_
	[](#mammals)
	\$(thing)哺乳动物\$()是通过怀孕繁殖的牲畜。喂食一对亲密度超过 30% 的成年哺乳动物就会让它们开始……你懂的。之后雌性动物将会\$(thing)怀孕\$()。怀孕的动物会在几个月至一年之内产子。
	比如，[猪](mechanics/animal_husbandry#pig)就是哺乳动物。
+ _untitled_
	[](#wooly_animals)
	\$(thing)产毛动物\$()是[哺乳动物](mechanics/animal_husbandry#mammals)的一种。如果它们和你的亲密度足够高且已成年就可以\$(thing)剪毛\$()。
	[绵羊](mechanics/animal_husbandry#sheep)、[羊驼](mechanics/animal_husbandry#alpaca)和[麝牛](mechanics/animal_husbandry#musk_ox)都属于这一类动物。
+ _untitled_
	```tfc:welding_recipe
	tfc:welding/metal/shears/bronze
	```
	剪刀可以通过将两片\$(thing)刀刃\$()[焊接](mechanics/anvils#welding)在一起制成。其中锻造评价较低的刀刃会将其评价（如果有）转移到剪刀上。
+ _untitled_
	[](#dairy_animals)
	\$(thing)产奶动物\$()也是哺乳动物的一种。只要成年且亲密度足够，就可以用木桶点击雌性产奶动物来挤奶。
	[山羊](mechanics/animal_husbandry#goat)、[奶牛](mechanics/animal_husbandry#cow)和[牦牛](mechanics/animal_husbandry#yak)都属于这一类动物。
+ 巢箱
	[](#oviparous_animals)
	```patchouli:crafting
	tfc:crafting/nest_box
	```
	\$(thing)卵生动物\$()不像[哺乳动物](mechanics/animal_husbandry#mammals)可以直接产下幼崽，而是通过产下并孵化\$(thing)蛋\$()来繁殖。它们只能在\$(thing)巢箱\$()中产卵。
	[鸭子](mechanics/animal_husbandry#duck)、[鹌鹑](mechanics/animal_husbandry#quail)和[鸡](mechanics/animal_husbandry#chicken)都属于这一类动物。
+ _untitled_
	```tfc:heat_recipe
	tfc:heating/food/cooked_egg
	```
	\$(thing)蛋\$()可以煎来吃或煮来吃。雄性动物可以让雌性受精，使其产下的下一枚卵变为受精卵。受精卵会在其工具提示里显示它们还需要多久才能孵化。
+ _untitled_
	\$(thing)马科动物\$()是[哺乳动物](mechanics/animal_husbandry#mammals)，驯服后可以骑乘。当亲密度达到 15% 后即可骑乘。马会遗传它们的\$(thing)遗传特性\$()，包括速度、跳跃高度、生命值、体型和花纹。马和驴的后代是\$(thing)骡子\$()。
+ _untitled_
	[](#horses)
	```tfc:knapping_recipe
	tfc:knapping/saddle
	```
	鞍可以用皮革塑形制作。
+ _untitled_
	它们需要\$(thing)鞍\$()才能骑乘，鞍可以通过\$(thing)塑形\$()制作。这包括[骡子](mechanics/animal_husbandry#mule)、[驴](mechanics/animal_husbandry#donkey)和[马](mechanics/animal_husbandry#horses)。骡和驴可以携带任何箱子或大桶。如果携带的是大桶，按住\$(item)\$(k:key.sneak)\$()的同时按\$(item)\$(k:key.use)\$()可以将其卸下。同样，拿着桶按这两个键可以将桶中的液体排空。
	
	接下来的几页将介绍所有牲畜类型。
+ 猪
	[](#pig)
	\$(thing)猪\$()会在[温度](the_world/climate#temperature)在 -10 到 35°C 之间、[降雨量](the_world/climate#rainfall)至少 200 毫米的温和森林中生成。它们是没有特殊功能的[哺乳动物](mechanics/animal_husbandry#mammals)。它们会吃任何食物（可以是腐烂的）。它们一胎能生产 1-10 个幼崽，怀孕 19 天，80 天成年。衰老前它们可以产仔 6 次。
+ _untitled_
	```patchouli:entity
	entity: tfc:pig{NoAI:1b,birth:-100000000L,oldDay:9223372036854775807L,geneticSize:16}
	scale: 0.6
	name: " "
	```
	猪。
+ 兔子
	[](#rabbit)
	\$(thing)Rabbits\$() spawn in [temperatures](the_world/climate#temperature) above -16°C, and at least 15mm of [rainfall](the_world/climate#rainfall), changing their coat based on climate. They are [Mammals](mechanics/animal_husbandry#mammals) with no special abilities, aside from being known for chewing on carrots and cabbage. They will eat any food, even if it is rotten. They have 1-6 children, are pregnant for just 19 days, and reach adulthood in 20 days. They can have children 6 times.
+ _untitled_
	```patchouli:entity
	entity: tfc:rabbit{NoAI:1b,birth:-100000000L,oldDay:9223372036854775807L,geneticSize:16}
	scale: 0.8
	name: " "
	```
	兔子。
+ 牛
	[](#cow)
	\$(thing)牛\$()是一种会在[温度](the_world/climate#temperature)在 -10 和 35°C 之间、[降雨量](the_world/climate#rainfall)至少 250 毫米的大多数气候中生成的[产奶动物](mechanics/animal_husbandry#dairy_animals)。它们只吃\$(thing)谷物\$()（可以是腐烂的）。他们一胎能生产 1-2 个幼崽，怀孕 58 天，192 天成年。若从未挤过奶，衰老前它们可以产仔 13 次。若从未产过仔，衰老前它们可以挤奶 128 次，且每天都可挤奶。
+ _untitled_
	```patchouli:entity
	entity: tfc:cow{NoAI:1b,birth:-100000000L,oldDay:9223372036854775807L,geneticSize:16}
	scale: 0.75
	name: " "
	```
	牛。
+ 山羊
	[](#goat)
	\$(thing)山羊\$()是一种会在[温度](the_world/climate#temperature)在 -12 到 25°C 之间、[降雨量](the_world/climate#rainfall)至少 300 毫米的温和的气候中生成的[产奶动物](mechanics/animal_husbandry#dairy_animals)。它们会吃\$(thing)谷物\$()、\$(thing)水果\$()和\$(thing)蔬菜\$()（可以是腐烂的）。他们一胎能生产 1-2 个幼崽，怀孕 32 天，96 天成年。若从未挤过奶，衰老前它们可以产仔 6 次。若从未产过仔，衰老前它们可以挤奶 60 次，且每三天可挤一次奶。
+ _untitled_
	```patchouli:entity
	entity: tfc:goat{NoAI:1b,birth:-100000000L,oldDay:9223372036854775807L,geneticSize:16}
	scale: 0.75
	name: " "
	```
	山羊。
+ 牦牛
	[](#yak)
	\$(thing)牦牛\$()是一种会在[温度](the_world/climate#temperature)不超过 -11°C、[降雨量](the_world/climate#rainfall)至少 100 毫米的寒冷的气候中生成的[产奶动物](mechanics/animal_husbandry#dairy_animals)。它们只吃新鲜的\$(thing)谷物\$()。它们一胎只能产 1 个幼崽，怀孕 64 天，180 天成年。若从未挤过奶，衰老前它们可以产仔 23 次。若从未产过仔，衰老前它们可以挤奶 230 次，且每天都可挤奶。
+ _untitled_
	```patchouli:entity
	entity: tfc:yak{NoAI:1b,birth:-100000000L,oldDay:9223372036854775807L,geneticSize:16}
	scale: 0.75
	name: " "
	```
	牦牛。
+ 羊驼
	[](#alpaca)
	\$(thing)羊驼\$()是一种会在[温度](the_world/climate#temperature)在 -8 到 20°C 之间、[降雨量](the_world/climate#rainfall)至少 250 毫米的温和的气候中生成的[产毛动物](mechanics/animal_husbandry#wooly_animals)。它们会吃\$(thing)谷物\$()和\$(thing)水果\$()。他们一胎能生产 1-2 个幼崽，怀孕 36 天，98 天成年。若从未剪过毛，衰老前它们可以产仔 13 次。若从未产过仔，衰老前它们可以剪毛 180 次，且每 6 天长出一次羊毛。
+ _untitled_
	```patchouli:entity
	entity: tfc:alpaca{NoAI:1b,birth:-100000000L,oldDay:9223372036854775807L,geneticSize:16}
	scale: 0.75
	name: " "
	```
	羊驼。
+ 绵羊
	[](#sheep)
	\$(thing)绵羊\$()是一种会在[温度](the_world/climate#temperature)在 0 到 35°C 之间、[降雨量](the_world/climate#rainfall) 70 到 300 毫米的较干燥的气候中生成的[产毛动物](mechanics/animal_husbandry#wooly_animals)。它们会吃\$(thing)谷物\$()。它们一胎能生产 1-2 个幼崽，怀孕 32 天，56 天成年。若从未剪过毛，衰老前它们可以产仔 6 次。若从未产过仔，衰老前它们可以剪毛 60 次，且每 9 天长出一次羊毛。
+ _untitled_
	```patchouli:entity
	entity: tfc:sheep{NoAI:1b,birth:-100000000L,oldDay:9223372036854775807L,geneticSize:16}
	scale: 0.75
	name: " "
	```
	绵羊。
+ 麝牛
	[](#musk_ox)
	\$(thing)麝牛\$()生成在寒冷气候中，需要[温度](the_world/climate#temperature)在 -25 到 0°C 之间，[降雨量](the_world/climate#rainfall)至少 100mm。它们是[产毛动物](mechanics/animal_husbandry#wooly_animals)，只吃\$(thing)谷物\$()。它们每胎只产 1 个幼崽，怀孕 64 天，168 天成年。如果从未剪过毛，衰老前可产仔 16 次；如果从未繁殖，衰老前可剪毛 160 次。它们每 96 小时长一次毛。
+ _untitled_
	```patchouli:entity
	entity: tfc:musk_ox{NoAI:1b,birth:-100000000L,oldDay:9223372036854775807L,geneticSize:16}
	scale: 0.75
	name: " "
	```
	麝牛。
+ 鸡
	[](#chicken)
	\$(thing)鸡\$()是一种会在[温度](the_world/climate#temperature)不低于 14°C、[降雨量](the_world/climate#rainfall)至少 225 毫米的温暖的森林中生成的[卵生动物](mechanics/animal_husbandry#oviparous_animals)。它们会吃\$(thing)谷物\$()、\$(thing)水果\$()、\$(thing)蔬菜\$()和\$(thing)种子\$()（可以是腐烂的）。每 30 小时产一次卵，8 天孵化，24 天成年。衰老前可以产卵 100 次。
+ _untitled_
	```patchouli:entity
	entity: tfc:chicken{NoAI:1b,birth:-100000000L,oldDay:9223372036854775807L,geneticSize:16}
	scale: 0.7
	name: " "
	```
	鸡。
+ 鸭
	[](#duck)
	\$(thing)鸭\$()是一种会在[温度](the_world/climate#temperature)在 -25 到 30°C、[降雨量](the_world/climate#rainfall)至少 100 毫米的大多数平原中生成的[卵生动物](mechanics/animal_husbandry#oviparous_animals)。它们会吃\$(thing)谷物\$()、\$(thing)水果\$()、\$(thing)蔬菜\$()和\$(thing)种子\$()（可以是腐烂的）。每 32 小时产一次卵，8 天孵化，32 天成年。衰老前可以产卵 72 次。
+ _untitled_
	```patchouli:entity
	entity: tfc:duck{NoAI:1b,birth:-100000000L,oldDay:9223372036854775807L,geneticSize:16}
	scale: 0.7
	name: " "
	```
	鸭。
+ 鹌鹑
	[](#quail)
	\$(thing)鹌鹑\$()是一种会在[温度](the_world/climate#temperature)在 -15 到 15°C、[降雨量](the_world/climate#rainfall)至少 200 毫米的较冷的气候中生成的[卵生动物](mechanics/animal_husbandry#oviparous_animals)。它们会吃\$(thing)谷物\$()、\$(thing)水果\$()、\$(thing)蔬菜\$()和\$(thing)种子\$()（可以是腐烂的）。每 28 小时产一次卵，8 天孵化， 22 天成年。衰老前可以产卵 48 次。
+ _untitled_
	```patchouli:entity
	entity: tfc:quail{NoAI:1b,birth:-100000000L,oldDay:9223372036854775807L,geneticSize:16}
	scale: 0.7
	name: " "
	```
	鹌鹑。
+ 驴
	[](#donkey)
	\$(thing)驴\$()是一种会在[温度](the_world/climate#temperature)在至少 -15°C、[降雨量](the_world/climate#rainfall) 130 到 400mm 的潮湿的平原中生成的[骑乘动物](mechanics/animal_husbandry#horses)。可以在它们身上放置一个\$(thing)箱子\$()。它们会吃\$(thing)谷物\$()和\$(thing)水果\$()。它们一胎只能产 1 个幼崽，怀孕 19 天，80 天成年。衰老前它们可以产仔 6 次。
+ _untitled_
	```patchouli:entity
	entity: tfc:donkey{NoAI:1b,birth:-100000000L,oldDay:9223372036854775807L,geneticSize:16}
	scale: 0.6
	name: " "
	```
	驴。
+ 骡子
	[](#mule)
	\$(thing)骡子\$()是一种会在[温度](the_world/climate#temperature)在至少 -15°C、[降雨量](the_world/climate#rainfall)在 130 到 400mm 的平原中生成的[骑乘动物](mechanics/animal_husbandry#horses)。可以在它们身上放置一个\$(thing)箱子\$()。它们是\$(thing)马\$()和\$(thing)驴\$()杂交的产物，只有雄性，无法繁殖。他们吃\$(thing)谷物\$()和\$(thing)水果\$()。80 天成年。
+ _untitled_
	```patchouli:entity
	entity: tfc:mule{NoAI:1b,birth:-100000000L,oldDay:9223372036854775807L,geneticSize:16}
	scale: 0.6
	name: " "
	```
	骡子。
+ 马
	[](#horse)
	\$(thing)马\$()是一种会在[温度](the_world/climate#temperature)在至少 -15°C、[降雨量](the_world/climate#rainfall)在 130 到 400 毫米的平原中生成的[骑乘动物](mechanics/animal_husbandry#horses)。它们会吃\$(thing)谷物\$()和\$(thing)水果\$()。它们一胎只能产 1 个幼崽，怀孕 19 天，80 天成年。衰老前它们可以产仔 6 次。
+ _untitled_
	```patchouli:entity
	entity: tfc:horse{NoAI:1b,birth:-100000000L,oldDay:9223372036854775807L,geneticSize:16}
	scale: 0.6
	name: " "
	```
	马。
+ 青蛙
	[](#frog)
	\$(thing)青蛙\$()生成在[温度](the_world/climate#temperature)高于 -13°C 的地区，且[降雨量](the_world/climate#rainfall)至少 150mm。它们可以培养亲密度，繁殖时会在淡水中产卵，卵孵化成蝌蚪。它们会吃鱼和蜘蛛眼。
+ _untitled_
	```patchouli:entity
	entity: tfc:frog{NoAI:1b,birth:-100000000L,oldDay:9223372036854775807L,geneticSize:16}
	scale: 0.8
	name: " "
	```
	青蛙。
#砧

```patchouli-entry
id: mechanics/anvils
name: 砧
category: tfc:mechanics
icon: tfc:metal/anvil/copper
read_by_default: true
extra_recipe_mappings:
  tag:tfc:anvils: 0
```

+ _untitled_
	砧是开展冶金大业必不可少的工具。砧的主要作用是焊接金属锭，或将它们锻造成各种不同的工具和装备。
	
	[锻造](mechanics/anvils#working)是指将一块金属锭打造成其他形状，以便于将其制成某些工具或装备的工艺。而[焊接](mechanics/anvils#welding)则是指将两块金属锭或其他金属部件粘连在一起物品的工艺。
+ _untitled_
	```patchouli:multiblock
	multiblock:
	  pattern:
	    - - X
	    - - "0"
	  mapping:
	    X: "#tfc:anvils"
	enable_visualize: false
	```
	各式各样的金属砧
+ _untitled_
	```patchouli:crafting
	tfc:crafting/metal/anvil/copper
	```
	砧是由它们对应的金属\$(thing)双锭\$()制作的。在获得你的第一个砧前，你只能使用最原始的[石砧](getting_started/primitive_anvils)。有了石砧，你就可以用它来[焊接](mechanics/anvils#welding)出\$(thing)铜双锭\$()了。
+ _untitled_
	[](#tiers)
	砧是分\$(thing)等级\$()的。等级决定了什么样的金属和材料可以在这个砧上加工。只有等级和砧相同或比砧低的材料才可以在砧上锻造，而能在砧上焊接的金属的最大等级为砧的等级 +1。
	\$(li)^第零级^：石砧\$(li)^第一级^：铜\$(li)^第二级^：铋铜、黑铜、青铜\$(li)^第三级^：锻铁\$(li)^第四级^：钢\$(li)^第五级^：黑钢\$(li)^第六级^：红钢、蓝钢
+ 如何锻造
	[](#working)
	与砧互动就能打开砧界面，如右图所示。屏幕左侧的两个空格是用来放置需要加工的物品的。锻造素材必须放在右边那格——左边那格只有焊接时才会用到。锻造时，必须手持、或在右侧空格内放置一柄\$(thing)锤\$()。每次加工时，锤都会略微磨损。
+ _untitled_
	```patchouli:image
	images:
	  - tfc:textures/gui/book/gui/anvil_empty.png
	border: false
	```
	砧界面
+ _untitled_
	开工前，你必须先选择锻造\$(thing)目标\$()。\$(item)\$(k:key.attack)\$()点击卷轴图标打开目标一览，选择完后会自动返回砧界面，且卷轴图标会转变为你刚刚选择的物品，同时屏幕上方的三个空格会显示当前目标所需的\$(thing)锻造规则\$()。
+ _untitled_
	```patchouli:image
	images:
	  - tfc:textures/gui/book/gui/anvil_in_use.png
	border: false
	```
	案例：选择镐头作为目标
+ 完成锻造目标
	屏幕的最中间有一根长条和一红一绿两个指针。\$(2)绿色指针\$()表示了目前的锻造进度。\$(4)红色指针\$()表示了锻造目标。你需要做的，就是将绿色指针与红色指针对齐。
+ _untitled_
	
	
	屏幕正中的\$(4)红色\$()与\$(2)绿色\$()按钮代表了不同的\$(thing)锻造手法\$()。使用\$(2)绿色\$()手法会将绿色指针向^右^移动，而使用\$(4)红色\$()手法则会将绿色指针向^左^移动。注意！如果你把绿色指针打出了屏幕，锻造素材就作废了！然而，单单将两个指针对齐是不够的。你还必须遵守额外的\$(thing)锻造规则\$()……
+ 锻造规则
	每个目标都会有两到三个\$(thing)锻造规则\$()，标注在屏幕顶部。锻造规则要求你按照特定的顺序使用特定的锻造手法来完成目标。比如，如果一个锻造规则要求“\$(2)弯曲 倒数第二\$()”，则你将指针对齐前的倒数第二个手法必须是“\$(2)弯曲\$()”
+ _untitled_
	锻造规则下方会显示你最后使用的三个锻造手法。被满足的锻造规则的轮廓会变为绿色。只有当所有锻造规则都被满足，且两个指针也对齐时才算锻造成功。
	
	最后，别忘了留意锻造素材的[温度](mechanics/heating)。金属锭只有在温度足够高时（其工具提示会显示“可加工”）才可以用来锻造。锻造到一半的物品可以从砧上取出再加热，其锻造进度会保留。
+ 锻造评价
	锻造可不是件容易活儿。新手往往需要将素材来回敲打多次才能做好，而老手便能一气呵成。对于某些锻造目标（比如工具头）来说，如果能在几步内就做成，锻造出来的成品的\$(thing)锻造评价\$()会提升。用评价高的工具头做出来的工具会有一定的属性加成。
+ 完美！
	```patchouli:spotlight
	item: tfc:metal/pickaxe/wrought_iron[tfc:forging_bonus={type:"perfect"}]
	link_recipes: false
	```
	有四种不同的锻造评价：\$(li)粗糙\$(li)合格\$(li)精良\$(li)完美！
	
	根据工具类型的不同，这些词条会改变工具的耐久度、挖掘速度、和伤害等属性。
+ 如何焊接
	[](#welding)
	焊接是指将两块金属锭或其他金属部件粘连在一起的工艺。[石砧](getting_started/primitive_anvils)和金属砧都可以进行焊接。
	
	首先，将要焊接的两件物品加热到足以焊接的[温度](mechanics/heating)（工具提示会显示“可焊接”）。
+ _untitled_
	将两件物品放在砧上（手持物品按住\$(item)\$(k:key.sneak)\$()的同时按\$(item)\$(k:key.use)\$()，或打开界面手动放入都行）。砧上还必须至少有一份[助焊剂](mechanics/flux)。材料都放好后，手持任意\$(thing)锤\$()对准砧按住\$(item)\$(k:key.sneak)\$()的同时按\$(item)\$(k:key.use)\$()。只要听见锤击的音效，且两件物品合二为一就说明完成了。焊接好的物品可以用空手从砧上取出。
#引水桥

```patchouli-entry
id: mechanics/aqueducts
name: 引水桥
category: tfc:mechanics
icon: tfc:rock/aqueduct/shale
read_by_default: true
extra_recipe_mappings:
  tag:tfc:aqueducts: 0
```

+ _untitled_
	\$(thing)引水桥\$()是一种可以将\$(thing)水\$()从水源引至其他地方的建筑方块。[木桶](mechanics/wooden_buckets)无法搬运水源，但\$(thing)引水桥\$()可以将水源方块运往水平方向任意距离外的目的地。它可以运输任何类型的水，包括\$(thing)淡水\$()、\$(thing)咸水\$()、\$()温泉水\$()。
+ _untitled_
	```patchouli:crafting
	tfc:crafting/rock/aqueduct/shale
	```
	可以用[石砖和砂浆](mechanics/advanced_building_materials#bricks_and_mortar)制作引水桥方块。
+ _untitled_
	把\$(thing)引水桥\$()方块水平连接起来，然后将一端连接到相邻\$(thing)水源\$()或\$(thing)下落的水流\$()侧面，稍等片刻，水就会开始流经这个引水桥网络，并且在引水桥的另一端流出。
	
	如果引水桥被破坏了，水流就会中断。同时，\$(thing)引水桥\$()不会产生永久的水源方块 - 引水桥破坏之后所有水都会消失。
+ 一个引水桥网络
	```patchouli:multiblock
	multiblock:
	  pattern:
	    - - "     "
	      - "     "
	      - "  0  "
	      - "     "
	      - "     "
	    - - "     "
	      - "     "
	      - "     "
	      - "     "
	      - "     "
	    - - "  B  "
	      - "  B  "
	      - CADAE
	      - B   B
	      - B   B
	  mapping:
	    A: tfc:rock/aqueduct/marble[south=true,north=true,fluid=water]
	    B: tfc:rock/aqueduct/marble[east=true,west=true,fluid=water]
	    C: tfc:rock/aqueduct/marble[east=true,south=true,fluid=water]
	    D: tfc:rock/aqueduct/marble[west=true,north=true,south=true,fluid=water]
	    E: tfc:rock/aqueduct/marble[east=true,north=true,fluid=water]
	enable_visualize: false
	```
#盔甲纹饰

```patchouli-entry
id: mechanics/armor_trims
name: 盔甲纹饰
category: tfc:mechanics
icon: minecraft:rib_armor_trim_smithing_template
read_by_default: true
```

+ _untitled_
	盔甲纹饰由\$(thing)纹饰材料\$()和[锻造模板](mechanics/sewing_table)制成。在群峦传说中，所有宝石以及银、纯银、金、玫瑰金和铋都可以用作纹饰材料。盔甲纹饰纯粹是装饰性的。
+ _untitled_
	```patchouli:crafting
	minecraft:smithing_table
	```
	锻造台可用于为群峦传说的盔甲添加盔甲纹饰。
#盔甲

```patchouli-entry
id: mechanics/armor
name: 盔甲
category: tfc:mechanics
icon: tfc:metal/chestplate/copper
read_by_default: true
extra_recipe_mappings:
  minecraft:leather_helmet: 1
  minecraft:leather_chestplate: 1
  minecraft:leather_leggings: 1
  minecraft:leather_boots: 1
```

+ _untitled_
	\$(thing)盔甲\$()可以抵御捕食者和怪物的攻击。制作盔甲所用\$(thing)金属\$()的等级越高，盔甲的质量也就越好。[皮革](mechanics/leather_making)盔甲是最弱的，而[彩钢](mechanics/steel)盔甲是最强的。
+ _untitled_
	```tfc:knapping_recipe
	tfc:knapping/leather_chestplate
	```
	皮革盔甲是通过[皮革塑形](mechanics/leather_making)制成的。这种盔甲耐久度不高，但如果凑齐一整套，还是能提供少许防护的。
+ _untitled_
	```tfc:anvil_recipe
	tfc:anvil/metal/unfinished_helmet/copper
	```
	\$(thing)金属盔甲\$()需要利用[砧](mechanics/anvils)经过多重步骤打造而成。首先需要将一个\$(thing)双层薄板\$()锻造成\$(thing)未完成的\$()盔甲部件。例外：靴子只需要一个\$(thing)薄板\$()。
+ _untitled_
	```tfc:welding_recipe
	tfc:welding/metal/greaves/bismuth_bronze
	```
	接下来，需要将一个\$(thing)薄板\$()[焊接](mechanics/anvils#welding)到部件上来完成制作。例外：胸甲需要一个\$(thing)双层薄板\$()才能完成。
+ _untitled_
	同等级的不同金属制成的盔甲可能在耐久度和对不同[伤害类型](mechanics/damage_types)的防御上略有不同。三种不同的青铜中，\$(thing)黑铜\$()的耐久度最高、普通\$(thing)青铜\$()次之、\$(thing)铋铜\$()最弱。对于彩钢来说，\$(thing)红钢\$()的耐久比\$(thing)蓝钢\$()好一些。
+ _untitled_
	钢制盔甲还有一些额外效果：例如\$(thing)盔甲韧性\$()和\$(thing)击退抗性\$()。普通\$(thing)钢\$()盔甲的盔甲韧性是1，\$(thing)黑钢\$()的是2，而\$(thing)彩钢\$()则有3点韧性。此外，\$(thing)黑钢\$()有 5% 的击退抗性，而\$(thing)彩钢\$()有 10%。
#大桶

```patchouli-entry
id: mechanics/barrels
name: 大桶
category: tfc:mechanics
icon: tfc:wood/barrel/palm
read_by_default: true
extra_recipe_mappings:
  tag:tfc:barrels: 0
```

+ _untitled_
	\$(thing)大桶\$()是一种可以容纳物品和液体的设备。大桶中央的空格是用来放置物品的，液体则显示在左侧的水槽中。将\$(thing)桶\$()或\$(thing)罐\$()放在左上角的空格中可以将其中的液体添加到大桶、或将大桶中的液体盛出。拿着容器对着装有液体的大桶按下\$(item)\$(k:key.use)\$()也有同样的效果。
+ _untitled_
	```patchouli:crafting
	tfc:crafting/wood/barrel/oak
	```
	大桶由七个\$(thing)木材\$()制成。
+ _untitled_
	```patchouli:image
	images:
	  - tfc:textures/gui/book/gui/barrel.png
	border: false
	```
	桶界面
+ _untitled_
	可以按屏幕右边的按钮来将大桶\$(thing)密封\$()。密封状态下的桶在被破坏时会保留其中的液体。部分配方必须在密封的大桶中才能制作。对着大桶空手\$(item)\$(k:key.sneak)\$()\$(item)\$(k:key.use)\$()也可以切换大桶的密封状态。
+ 用桶小贴士
	\$(li)手持空的大桶点击水源方块可以盛装液体。\$()\$(li)启封的大桶会在雨中慢慢地装满水。\$()\$(li)大桶会接住上方融化的冰柱。\$()\$(li)密封大桶会弹出不在中心空格的物品。\$()
+ 用大桶合成
	大桶的主要作用是用来混合某些液体和物品。用大桶合成时，桶内的液体和物品的比例必须正确无误。某些配方还需要将大桶\$(thing)密封\$()一段时间才能执行。
+ _untitled_
	如果大桶中物品的比例和配方所需的不一致，多余的物品或液体就会被浪费。但如果执行的是\$(thing)瞬时配方\$()，则必须提供对应液体的足量物品才能进行。
+ _untitled_
	[](#limewater)
	```tfc:instant_barrel_recipe
	tfc:barrel/limewater
	```
	^石灰水^是由[助焊剂](mechanics/flux)溶于\$(thing)淡水\$()制成的。每份[助焊剂](mechanics/flux)可转化 \$(thing)500 mB\$() 的\$(thing)淡水\$()。\$(thing)石灰水\$()可以用来加工[皮革](mechanics/leather_making)，还可以用来合成\$(thing)砂浆\$()。
+ _untitled_
	[](#tannin)
	```tfc:sealed_barrel_recipe
	tfc:barrel/tannin
	```
	^鞣酸^是一种将某些\$(thing)原木\$()的树皮溶于\$(thing)淡水\$()中制得的酸性溶液。\$(thing)橡木\$()、\$(thing)白桦木\$()、\$(thing)栗木\$()、\$(thing)花旗松木\$()、\$(thing)山核桃木\$()、\$(thing)枫木\$()和\$(thing)红杉木\$()都可以用来合成\$(thing)鞣酸\$()。
+ _untitled_
	某些大桶配方需要以一定比例混合两种液体。例如，以 9:1 的比例将\$(thing)奶\$()与\$(thing)醋\$()混合可以得到\$(thing)醋奶\$()；醋和\$(thing)咸水\$()以相同比例混合可以得到\$(thing)卤水\$()。这种配方只能通过先在大桶里装一种液体，然后把装有另一种液体的陶罐或桶放在左上角的液体添加格内来完成。
+ _untitled_
	大桶还可以用来快速[冷却](mechanics/heating)其他物品。把热的东西浸泡在一桶\$(thing)淡水\$()、\$(thing)橄榄油\$()或\$(thing)咸水\$()中就会很快冷却下来。
+ _untitled_
	大桶具有[染色](mechanics/dye)和[漂白](mechanics/dye#lye)物品的能力。大多数可染色的东西，如地毯、蜡烛和[石膏](mechanics/advanced_building_materials#plaster)，可以通过密封在装有染料的大桶中染色，或密封在装有碱液的大桶中漂白。更多信息请参阅染料章节。
+ _untitled_
	将食物封入装有\$(thing)醋\$()的大桶里有助于延长其保质期。将任意\$(thing)水果\$()密封在装有\$(thing)酒精饮料\$()的大桶中就能得到醋。有关于用醋保鲜的知识，请参看[食物保鲜](mechanics/decay#vinegar)章节。
+ _untitled_
	```patchouli:crafting
	tfc:crafting/barrel_rack
	```
	靠墙放置的侧放大桶与直立大桶功能相同，但放置有约束。例如，要在它们上方再放一个侧放大桶，必须先给它们添加\$(thing)桶架\$()，只需\$(item)\$(k:key.use)\$()即可添加。
+ 侧放大桶
	```patchouli:multiblock
	multiblock:
	  pattern:
	    - - X
	    - - Y
	    - - "0"
	  mapping:
	    X: tfc:wood/barrel/kapok[facing=north,rack=false,sealed=true]
	    Y: tfc:wood/barrel/kapok[facing=north,rack=true,sealed=false]
	enable_visualize: false
	```
	侧放大桶通过\$(thing)龙头\$()显示其密封状态。如果龙头是侧向的，则表示已密封。
+ _untitled_
	未密封的侧放大桶会自动将其中的液体排入龙头下方放置的开口大桶（或其他流体容器）。龙头伸入的方块必须是空气方块，液体才能排出。
+ _untitled_
	```patchouli:image
	images:
	  - tfc:textures/gui/book/tutorial/barrel_drip.png
	border: true
	```
	一个正在滴漏的大桶。
#风箱

```patchouli-entry
id: mechanics/bellows
name: 风箱
category: tfc:mechanics
icon: tfc:bellows
read_by_default: true
```

+ _untitled_
	\$(thing)风箱\$()是一种可以增大气流以提升其他设备燃烧温度的方块。然而，燃烧的温度越高，消耗的燃料也就越多。风箱可以作用于它正对着的那一格方块，或是正对着一格的正下方一格方块。因此，[篝火](getting_started/firepit)和[木炭炉](mechanics/charcoal_forge)都可以从风箱受益。
+ _untitled_
	```patchouli:crafting
	tfc:crafting/bellows
	```
	要拉动风箱，\$(item)\$(k:key.use)\$()点击即可。在一段时间内，目标设备的最大燃烧温度会获得提升。
#建造高炉

```patchouli-entry
id: mechanics/blast_furnace
name: 建造高炉
category: tfc:mechanics
icon: tfc:blast_furnace
read_by_default: true
```

+ _untitled_
	\$(thing)高炉\$()是一种用来炼\$(thing)钢\$()的高级设备。将\$(thing)铁矿石\$()、\$(thing)木炭\$()、和\$(thing)助焊剂\$()在高热环境中混合就能制造出一种比锻铁更强的金属。
	
	要搭建高炉，你必须先制作两只[坩埚](mechanics/crucible)、一根锻铁\$(thing)鼓风口\$()、和一个风箱。此外，你还会需要很多\$(thing)锻铁薄板\$()和\$(thing)耐火砖块\$()。
+ _untitled_
	```patchouli:crafting
	tfc:crafting/blast_furnace
	```
	制作高炉方块本体就需要一只\$(thing)坩埚\$()，以及八张\$(thing)锻铁薄板\$()。
+ _untitled_
	然后你需要建造高炉及其\$(thing)烟囱\$()。烟囱必须由[高强度耐火砖](mechanics/fire_clay#fire_bricks)砌成，因为它们足够坚固，可以承受高温。这些砖可以用耐火砖块和锻铁薄板或钢薄板制作。
+ 高炉
	```patchouli:multiblock
	multiblock_id: tfc:blast_furnace
	enable_visualize: true
	```
	最基础的高炉结构。
+ _untitled_
	高炉的烟囱最多可以有五层——每层需要八个\$(thing)高强度耐火砖\$()。层数越多，高炉的总容量越大，一次能冶炼更多的钢。每增加一层烟囱（最多五层），高炉就能多容纳四个矿石物品。
+ _untitled_
	必须从高炉的烟囱顶投入炼钢所需的素材。要炼钢，首先将等量的\$(thing)铁矿石\$()和[助焊剂](mechanics/flux)投入高炉。铁矿石可以用任何能被熔化成\$(thing)铸铁\$()的物品代替。另外，你还需要在高炉燃烧的过程中不断加入[木炭](mechanics/charcoal_pit)来维持燃烧。
+ _untitled_
	与高炉方块互动可以打开高炉界面，如右图所示。高炉界面会显示炉中的金属和燃料数量。屏幕右上角的空格必须放置一根\$(thing)鼓风口\$()。有了鼓风口高炉才能达到可以炼钢的温度。可以在[砧](mechanics/anvils)上锻造鼓风口。
+ _untitled_
	```patchouli:image
	images:
	  - tfc:textures/gui/book/gui/blast_furnace.png
	border: false
	```
	高炉界面
+ _untitled_
	要让高炉达到炼钢的温度，还需要在高炉方块的任意邻面放置一个[风箱](mechanics/bellows)。
+ _untitled_
	```patchouli:multiblock
	multiblock_id: tfc:full_blast_furnace
	enable_visualize: true
	```
	一个最大的完整高炉结构，包含风箱。
+ _untitled_
	最后，开始操作，用[起火器](getting_started/firepit#firestarter)、\$(thing)燧石和黄铁矿\$()或\$(thing)打火石\$()点燃高炉。它会开始加热里面的矿石。确保高炉持续有燃料，并在其内部温度达到木炭的极限后，使用风箱向高炉鼓风。当里面的矿石加热后，它们会熔化并转化为[生铁](mechanics/steel)。
+ _untitled_
	熔融生铁会从高炉中流入任何直接放置在其下方的容器（如[坩埚](mechanics/crucible)）中。之后可从坩埚界面将熔融生铁浇铸至铸锭模具中。你不能直接用生铁制作工具或装备，它还必须再经过一些其他工序处理之后才能使用。具体方法请参阅[炼钢](mechanics/steel)章节。
#锻铁炉

```patchouli-entry
id: mechanics/bloomery
name: 锻铁炉
category: tfc:mechanics
icon: tfc:bloomery
read_by_default: true
extra_recipe_mappings:
  tfc:raw_iron_bloom: 7
  tfc:refined_iron_bloom: 8
```

+ _untitled_
	\$(thing)锻铁炉\$()是一种将\$(thing)铁矿石\$()冶炼成\$(thing)铁坯\$()的设备，铁坯可以加工成\$(thing)锻铁\$()。铁矿石包括[赤铁矿](the_world/ores_and_minerals#hematite)、[褐铁矿](the_world/ores_and_minerals#limonite)和[磁铁矿](the_world/ores_and_minerals#magnetite)。这些矿石熔化后会得到\$(thing)铸铁\$()，而不是\$(thing)锻铁\$()。所有含铁物品熔化后都会得到铸铁。要将其转化为可用的铁，就需要锻铁炉。任何含铁物品都可以用于锻铁炉，包括铁质工具和铸铁锭！
+ _untitled_
	```patchouli:crafting
	tfc:crafting/bloomery
	```
	锻铁炉由 8 个\$(thing)青铜双层薄板\$()制成。
+ 锻铁炉
	```patchouli:multiblock
	multiblock_id: tfc:bloomery
	enable_visualize: true
	```
	最基础的锻铁炉结构。锻铁炉方块可以用\$(item)\$(k:key.use)\$()打开或关闭。
+ _untitled_
	锻铁炉最多可容纳 48 个\$(thing)物品\$()，烟囱每层可放 16 个物品。要增加烟囱层数，可以再堆叠两层石头方块。
	
	要向锻铁炉添加物品，爬到顶部并将物品扔进去。应该会形成一个灰色的矿石堆。
+ _untitled_
	```patchouli:image
	images:
	  - tfc:textures/gui/book/tutorial/bloomery_hole.png
	border: true
	```
	将物品添加到锻铁炉中。
+ _untitled_
	锻铁炉每消耗\$(thing)2 份木炭\$()和\$(thing)100 mB 铸铁\$()可生产一个\$(thing)铁坯\$()。在锻铁炉中填满\$(thing)木炭\$()和\$(thing)矿石\$()的组合后，点燃锻铁炉方块，等待 12 小时让锻铁炉冶炼。当锻铁炉熄灭后，会留下一个\$(thing)铁坯\$()方块。其中包含\$(thing)生铁坯\$()，可以用镐反复挖掘\$(thing)铁坯\$()方块来获得。
+ 方坯
	```patchouli:multiblock
	multiblock:
	  pattern:
	    - - X
	    - - "0"
	  mapping:
	    X: tfc:bloom[layers=8]
	enable_visualize: false
	```
	一大块\$(thing)铁坯\$()。
+ _untitled_
	```tfc:anvil_recipe
	tfc:anvil/refined_iron_bloom
	```
	\$(thing)生铁方坯\$()还必须在[砧](mechanics/anvils)上打造成\$(thing)精铁方坯\$()。
+ _untitled_
	```tfc:anvil_recipe
	tfc:anvil/metal/ingot/wrought_iron
	```
	在[砧](mechanics/anvils)上进一步打造\$(thing)精铁方坯\$()就能获得\$(thing)锻铁锭\$()了。
+ 铁匠的笔记
	\$(li)如果投入锻铁炉的物品超出了它的所能处理的数量，它就会从锻铁炉门口吐出来。\$()\$(li)如果要取回投入锻铁炉中的物品，不要试图挖掘塔中的熔融物，直接把锻铁炉方块挖掉即可。\$()\$(li)方坯只会熔化成铸铁，而不是锻铁。方坯必须经过锤炼才能变成锻铁！\$()
#碗

```patchouli-entry
id: mechanics/bowls
name: 碗
category: tfc:mechanics
icon: tfc:ceramic/bowl
read_by_default: true
extra_recipe_mappings:
  tfc:ceramic/unfired_bowl: 1
  tfc:ceramic/bowl: 1
  minecraft:bowl: 2
```

+ _untitled_
	\$(thing)碗\$()是一种多功能工具，可用于制作[沙拉](mechanics/salad)、制作[汤](mechanics/pot)、[抹盐](mechanics/decay#salting)肉，或将\$(thing)粉末\$()添加到[玻璃](mechanics/glassworking_applications#coloring)中以改变玻璃成品的颜色。
	
	碗可以用\$(thing)陶瓷\$()制作，通过用黏土塑形出碗然后烧制。
+ _untitled_
	```tfc:knapping_recipe
	tfc:knapping/ceramic/unfired_bowl_1
	```
	一次塑形可以制作多个未烧制的碗。
+ 木碗
	```patchouli:crafting
	minecraft:bowl
	```
	碗也可以用木头和\$(thing)胶水\$()合成制作。
	
	\$(thing)胶水\$()可以通过将\$(thing)骨粉\$()浸泡在一桶[石灰水](mechanics/barrels#limewater)中制成。
+ _untitled_
	```tfc:sealed_barrel_recipe
	tfc:barrel/glue
	```
	碗也可以像方块一样放在地上。放置后，可以盛装任何类型的\$(thing)粉末\$()——在[手推磨](mechanics/quern)中研磨矿石、矿物或宝石得到的产物。
+ 粉末
	```patchouli:spotlight
	item: tag:tfc:bowl_powders
	link_recipes: false
	```
	粉末碗最多可容纳 16 份同种粉末。要放入物品，手持粉末右键点击。要取出物品，空手右键点击。
	
	按住\$(item)\$(k:key.sneak)\$()可以取出碗中的所有物品。
+ _untitled_
	```patchouli:spotlight
	item: tfc:powder/salt
	link_recipes: false
	```
	如果碗中有盐，用未抹盐的生肉右键点击碗即可给肉抹盐。这与在物品栏中用盐合成肉的效果相同。
#烤面包

```patchouli-entry
id: mechanics/bread
name: 烤面包
category: tfc:mechanics
icon: tfc:textures/item/food/barley_bread.png
read_by_default: true
extra_recipe_mappings:
  tag:c:foods/bread: 0
  tag:c:foods/dough: 0
  tag:c:foods/grain: 0
  tag:c:foods/flour: 0
```

+ _untitled_
	[大麦](mechanics/crops#barley)之类的农作物只会产出未加工的稻谷。直接收获的谷物并没有什么营养价值，但若能把它们做成\$(thing)面包\$()就好吃多了。面包还能做成[三明治](mechanics/sandwiches)。
+ _untitled_
	```patchouli:crafting
	tfc:crafting/food/barley_grain
	```
	首先，先用\$(thing)小刀\$()将麦粒从秸秆上刮下来。
+ _untitled_
	```patchouli:spotlight
	item: tfc:food/rye_grain
	link_recipes: false
	```
	麦粒是谷物处理过程中保存时间最长的形式，长达 10 个月零 7 天。若放在小缸之类的容器中，则可以储存长达 1 年零 9 个月零 7 天。
+ _untitled_
	```tfc:quern_recipe
	tfc:quern/food/oat_flour
	```
	接下来，将麦粒放在[手推磨](mechanics/quern)上磨成面粉。
+ _untitled_
	```patchouli:crafting
	tfc:crafting/food/barley_dough_1
	```
	将面粉和一桶\$(thing)淡水\$()合成成面团。
+ _untitled_
	```tfc:heat_recipe
	tfc:heating/food/barley_bread
	```
	最后，只要将面团[加热](mechanics/heating)就可以烤出面包。面包可以做成[三明治](mechanics/sandwiches)。
#流道浇铸

```patchouli-entry
id: mechanics/channels
name: 流道浇铸
category: tfc:mechanics
icon: tfc:channel
read_by_default: true
```

+ _untitled_
	你可以使用\$(thing)流道\$()和\$(thing)模具台\$()一次从[坩埚](mechanics/crucible)浇铸到多个模具。只需用\$(thing)流道\$()将\$(thing)模具台\$()连接到\$(thing)坩埚\$()，然后右键点击坩埚旁边的\$(thing)流道\$()即可开始浇铸。手持[模具](getting_started/pottery#mold)时按住\$(item)\$(k:key.sneak)\$()右键点击\$(thing)模具台\$()可以放置或移除模具。
+ _untitled_
	```tfc:knapping_recipe
	tfc:knapping/ceramic/unfired_channel_2
	```
	[塑形](getting_started/pottery#knapping)几个\$(thing)未烧制的流道\$()。
+ _untitled_
	```tfc:knapping_recipe
	tfc:knapping/ceramic/unfired_mold_table
	```
	[塑形](getting_started/pottery#knapping)一个\$(thing)未烧制的模具台\$()。
+ _untitled_
	```tfc:heat_recipe
	tfc:heating/channel
	```
	流道和模具台塑形后，需要像其他陶器一样\$(thing)烧制\$()。
+ 浇铸装置
	```patchouli:multiblock
	multiblock_id: tfc:channel_casting
	enable_visualize: false
	```
+ 自动化
	\$(li)在\$(thing)模具台\$()上使用[风箱](mechanics/bellows)会使金属冷却得更快。\$()\$(li)用红石脉冲激活\$(thing)流道\$()会开始浇铸金属。\$()\$(li)\$(thing)模具台\$()会输出比较器信号。
#木炭炉

```patchouli-entry
id: mechanics/charcoal_forge
name: 木炭炉
category: tfc:mechanics
icon: tfc:textures/block/molten_lit.png
read_by_default: true
```

+ _untitled_
	\$(thing)木炭炉\$()是一种用于[加热](mechanics/heating)和熔化物品的设备。[坩埚](mechanics/crucible)也必须配合炉才能使用。木炭炉最大的作用是将物品加热到可以在[砧](mechanics/anvils)上锻造的温度。
	将 5 块\$(thing)石头\$()围绕一个 7 或 8 层的[木炭堆](mechanics/charcoal_pit#charcoal_pile)就能搭建成木炭炉了。
+ 木炭炉
	```patchouli:multiblock
	multiblock_id: tfc:charcoal_forge
	enable_visualize: true
	```
	一个构建完成的木炭炉多方块结构，准备点燃。
+ _untitled_
	木炭炉只能在通风良好的地方正常工作。木炭炉方块的正上方必须是空气或一口[坩埚](mechanics/crucible)。另外，木炭炉方块或它周围两格十字形的区域内（由右侧示意图中的蓝色染色玻璃标注）必须至少有一格\$(thing)露天\$()方块。
	
	可以在木炭炉正上方一格的相邻位置放置一个[风箱](mechanics/bellows)来提高木炭炉的最大温度。
+ _untitled_
	```patchouli:multiblock
	multiblock:
	  pattern:
	    - - "  G  "
	      - "  G  "
	      - GGCGG
	      - "  G  "
	      - "  G  "
	    - - XXXXX
	      - XXXXX
	      - XX0XX
	      - XXBXX
	      - XXXXX
	  mapping:
	    "0": tfc:charcoal_forge[heat_level=7]
	    X: tfc:rock/smooth/gabbro
	    G: minecraft:light_blue_stained_glass
	    C: tfc:crucible
	    B: tfc:bellows
	enable_visualize: false
	```
+ _untitled_
	```patchouli:image
	images:
	  - tfc:textures/gui/book/gui/charcoal_forge.png
	border: false
	```
	木炭炉界面
+ _untitled_
	木炭炉底部的五个空格用于放置燃料。木炭炉燃烧时会不时地消耗燃料。燃料可以是\$(thing)木炭\$()或\$()其他自然[煤炭](the_world/ores_and_minerals#bituminous_coal)。上面的五个空格用于放置需要加热的物品。左侧的指示器显示了木炭炉当前的温度。右侧的空格可放置可容纳液态金属的容器，例如\$(thing)小缸\$()和\$(thing)模具\$()。在熔炉中熔化的物品将自动注入这些容器。
#木炭坑

```patchouli-entry
id: mechanics/charcoal_pit
name: 木炭坑
category: tfc:mechanics
icon: minecraft:charcoal
read_by_default: true
extra_recipe_mappings:
  minecraft:charcoal: 0
```

+ _untitled_
	搭建\$(thing)木炭坑\$()是一种烧制\$(thing)木炭\$()的方法。木炭坑是用\$(thing)原木堆\$()构成的。手持\$(thing)原木\$()时按住\$(item)\$(k:key.sneak)\$()并按\$(item)\$(k:key.use)\$()就能在地上放置一个原木堆。手持原木对准原木堆按\$(item)\$(k:key.use)\$()，或直接打开原木堆界面就能放入更多原木。
+ 原木堆
	```patchouli:multiblock
	multiblock:
	  pattern:
	    - - X
	    - - "0"
	  mapping:
	    X: tfc:log_pile
	enable_visualize: false
	```
	原木堆需要下方有一个实心块。它们很容易着火。
+ _untitled_
	木炭坑必须由实心、且不易燃的方块将原木堆密封而成。最终产出的木炭的量与原木堆内的原木数量成正比。要开始烧制木炭，在密封起来的木炭坑上挖一个小孔，点燃一个原木堆，然后迅速再把孔填上。当看到整个木炭坑中有\$(thing)烟雾\$()升起时就说明成功了。
+ _untitled_
	```tfc:multimultiblock
	```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - "     "
		    - "     "
		    - "     "
		    - "     "
		    - "     "
		  - - "     "
		    - "     "
		    - "     "
		    - "     "
		    - "     "
		  - - XXXXX
		    - XXXXX
		    - XX0XX
		    - XXXXX
		    - XXXXX
		mapping:
		  "0": tfc:dirt/aridisol
		  X: tfc:dirt/aridisol
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - "     "
		    - "     "
		    - "     "
		    - "     "
		    - "     "
		  - - XXXXX
		    - XYYYX
		    - XYYYX
		    - XYYYX
		    - XXXXX
		  - - XXXXX
		    - XXXXX
		    - XX0XX
		    - XXXXX
		    - XXXXX
		mapping:
		  "0": tfc:dirt/aridisol
		  X: tfc:dirt/aridisol
		  Y: tfc:log_pile
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - "     "
		    - "     "
		    - "     "
		    - "     "
		    - "     "
		  - - XXXXX
		    - XYYYX
		    - XYYYX
		    - XYYYX
		    - XXXXX
		  - - XXXXX
		    - XXXXX
		    - XX0XX
		    - XXXXX
		    - XXXXX
		mapping:
		  "0": tfc:dirt/aridisol
		  X: tfc:dirt/aridisol
		  Y: tfc:burning_log_pile
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - "     "
		    - " XXX "
		    - " XXX "
		    - " XXX "
		    - "     "
		  - - XXXXX
		    - XYYYX
		    - XYYYX
		    - XYYYX
		    - XXXXX
		  - - XXXXX
		    - XXXXX
		    - XX0XX
		    - XXXXX
		    - XXXXX
		mapping:
		  "0": tfc:dirt/aridisol
		  X: tfc:dirt/aridisol
		  Y: tfc:log_pile
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - "     "
		    - "     "
		    - "     "
		    - "     "
		    - "     "
		  - - XXXXX
		    - XYYYX
		    - XYYYX
		    - XYYYX
		    - XXXXX
		  - - XXXXX
		    - XXXXX
		    - XX0XX
		    - XXXXX
		    - XXXXX
		mapping:
		  "0": tfc:dirt/aridisol
		  X: tfc:dirt/aridisol
		  Y: tfc:charcoal_pile[layers=7]
		```
	分层展示如何搭建木炭坑。坑的具体大小是可变的。
+ _untitled_
	[](#charcoal_pile)
	等到木炭坑停止燃烧之后就可以把它挖开了。坑里面应该会留下许多\$(thing)木炭堆\$()。每个木炭堆最多包含 8 层\$(thing)木炭\$()，用铲子挖掘就可以获得木炭。挖出来的木炭也可以通过按\$(item)\$(k:key.use)\$()重新放置下来。
+ _untitled_
	```tfc:multimultiblock
	```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - "0"
		mapping:
		  X: tfc:charcoal_pile[layers=1]
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - "0"
		mapping:
		  X: tfc:charcoal_pile[layers=2]
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - "0"
		mapping:
		  X: tfc:charcoal_pile[layers=3]
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - "0"
		mapping:
		  X: tfc:charcoal_pile[layers=4]
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - "0"
		mapping:
		  X: tfc:charcoal_pile[layers=5]
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - "0"
		mapping:
		  X: tfc:charcoal_pile[layers=6]
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - "0"
		mapping:
		  X: tfc:charcoal_pile[layers=7]
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - "0"
		mapping:
		  X: tfc:charcoal_pile[layers=8]
		```
	木炭堆。
#凿子

```patchouli-entry
id: mechanics/chisel
name: 凿子
category: tfc:mechanics
icon: tfc:metal/chisel/wrought_iron
read_by_default: true
extra_recipe_mappings:
  tag:c:tools/chisel: 0
```

+ _untitled_
	凿子是一种用来将方块加工成它们的装饰版本（比如楼梯和台阶）的工具。\$(thing)凿子\$()必须配合任意材质的\$(thing)锤\$()一起使用。将锤置于副手的同时手持凿子就可以加工瞄准的方块了。
+ _untitled_
	如果一个方块可以被凿制，它的轮廓会根据你目前选择的\$(thing)凿子模式\$()变成\$(c)红色\$()。
	
	凿子有三种模式：\$(thing)台阶\$()、\$(thing)楼梯\$()和\$(thing)平滑\$()。可以按下\$(item)\$(k:tfc.key.cycle_chisel_mode)\$()来切换。凿子的模式指示器会显示在快捷栏旁边。
+ _untitled_
	对准方块按\$(item)\$(k:key.use)\$()就能将它加工成红色轮廓显示的样子。如果选择的是台阶模式，另一半台阶会以物品的形式掉落。凿成的方块朝向会根据你面朝的方向和准心所指的位置而改变。简而言之，凿成的方块的朝向会和你自己手持那个方块放置时的朝向相同。
+ _untitled_
	```patchouli:image
	images:
	  - tfc:textures/gui/book/tutorial/chisel_block.png
	  - tfc:textures/gui/book/tutorial/chisel_stair.png
	  - tfc:textures/gui/book/tutorial/chisel_slab.png
	border: true
	```
	在\$(thing)天然石灰岩\$()上使用三种凿子模式（注意观察红色轮廓的位置）。
+ _untitled_
	```patchouli:crafting
	tfc:crafting/rock/smooth/marble
	```
	直接用凿子在合成栏合成以便批量制作方块。
+ _untitled_
	当心！在矿井中直接凿成的方块依然受重力影响，而且你每次凿方块的时候，都有可能导致[塌方](mechanics/support_beams)。
#堆肥桶

```patchouli-entry
id: mechanics/composter
name: 堆肥桶
category: tfc:mechanics
icon: tfc:textures/gui/book/icons/composter.png
read_by_default: true
```

+ _untitled_
	堆肥桶是制作肥料的基本工具。它需要同时添加\$(2)绿色\$()和\$(4)棕色\$()物品才能工作。不同物品对堆肥产量的贡献不同。要添加物品，只需\$(item)\$(k:key.use)\$()。可添加的物品将在后续页面中描述。
+ _untitled_
	```patchouli:crafting
	tfc:crafting/composter
	```
	制作堆肥桶只需要一些\$(thing)木材\$()和\$(thing)泥土\$()！
+ 工作条件
	堆肥桶在特定条件下工作效率更高。位于降雨量低于 150mm 或高于 350mm 区域的堆肥桶，工作效率会大幅降低，且越接近降雨量极限，效果越明显。此外，与其他堆肥桶相邻的堆肥桶工作效率也会降低。
+ _untitled_
	```tfc:multimultiblock
	```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - "0"
		mapping:
		  X: tfc:composter[stage=0,type=normal]
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - "0"
		mapping:
		  X: tfc:composter[stage=8,type=normal]
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - "0"
		mapping:
		  X: tfc:composter[stage=8,type=ready]
		```
	堆肥桶的空置、工作中和完成阶段。
+ _untitled_
	在平均条件下，堆肥桶需要 12 天完成。完成后，它会呈现泥土般的颜色，并从顶部散发灰色粒子。此时可以空手按住\$(item)\$(k:key.sneak)\$()的同时按\$(item)\$(k:key.use)\$()取出堆肥。向堆肥中添加\$(c)肉\$()和\$(c)骨头\$()等物体会使其变质，变成红色并散发恶心的粒子。腐败的堆肥的取出方法与好堆肥相同。施用在作物上会立即杀死它。
+ 腐败的堆肥
	```patchouli:multiblock
	multiblock:
	  pattern:
	    - - X
	    - - "0"
	  mapping:
	    X: tfc:composter[stage=8,type=rotten]
	enable_visualize: false
	```
	一个腐败的堆肥桶。
+ 堆肥绿色物品
	```patchouli:spotlight
	item: tag:tfc:compost_greens/low
	link_recipes: false
	```
	有些\$(2)绿色\$()物品对堆肥进度贡献较小，例如草和类似的植物。要满足堆肥桶对绿色物品的需求，你需要 16 个这类物品。
+ 堆肥绿色物品
	```patchouli:spotlight
	item: tag:tfc:compost_greens/medium
	link_recipes: false
	```
	有些\$(2)绿色\$()物品对堆肥桶贡献中等，例如谷物。要满足堆肥桶对绿色物品的需求，你需要 8 个这类物品。
+ 堆肥绿色物品
	```patchouli:spotlight
	item: tag:tfc:compost_greens/high
	link_recipes: false
	```
	有些\$(2)绿色\$()物品对堆肥桶贡献很大，例如水果和蔬菜。要满足堆肥桶对绿色物品的需求，你需要 4 个这类物品。
+ 堆肥棕色物品
	```patchouli:spotlight
	item: tag:tfc:compost_browns/low
	link_recipes: false
	```
	有些\$(4)棕色\$()物品对堆肥桶贡献较小，例如干芦苇、蕨类、藤蔓、以及落叶。要满足堆肥桶对棕色物品的需求，你需要 16 个这类物品。
+ 堆肥棕色物品
	```patchouli:spotlight
	item: tag:tfc:compost_browns/medium
	link_recipes: false
	```
	有些\$(4)棕色\$()物品对堆肥桶贡献中等，例如草木灰和黄麻。要满足堆肥桶对棕色物品的需求，你需要 8 个这类物品。
+ 堆肥棕色物品
	```patchouli:spotlight
	item: tag:tfc:compost_browns/high
	link_recipes: false
	```
	有些\$(4)棕色\$()物品对堆肥桶贡献很大，例如枯草、松果、腐殖质以及浮木。要满足堆肥桶对棕色物品的需求，你需要 4 个这类物品。
+ 堆肥毒物
	```patchouli:spotlight
	item: tag:tfc:compost_poisons
	link_recipes: false
	```
	有些物品会\$(c)污染\$()你的堆肥桶。比如\$(c)肉\$()和\$(c)骨头\$()。用腐败的堆肥施肥会立刻使农作物死亡。
#曲轴

```patchouli-entry
id: mechanics/crankshaft
name: 曲轴
category: tfc:mechanics
icon: tfc:crankshaft
read_by_default: true
```

+ _untitled_
	\$(thing)曲轴\$()是一种将[旋转动力](mechanics/mechanical_power)转化为\$(thing)往复运动动力\$()的方式。这对于为[风箱](mechanics/bellows)或[水泵](mechanics/pumps)等设备提供动力非常有用。
	
	\$(thing)曲轴\$()由两部分组成：基座和连杆。基座必须连接到[传动杆](mechanics/mechanical_power#axle)，设备可以连接到连杆的末端。
+ _untitled_
	```patchouli:multiblock
	multiblock_id: tfc:crankshaft
	enable_visualize: false
	```
	一个由[传动杆](mechanics/mechanical_power#axle)提供动力的\$(thing)曲轴\$()
+ _untitled_
	```patchouli:crafting
	tfc:crafting/crankshaft
	```
	基座可以用[黄铜](getting_started/primitive_alloys#brass)制作。基座放置后，可以用\$(thing)钢棒\$()右键点击基座来添加连杆。如果曲轴侧方有空间，连杆就会被放置。
+ _untitled_
	曲轴可以通过在连杆旁放置一个[风箱](mechanics/bellows)来连接。这样，每次连杆伸出和缩回时，风箱都会自动推拉。连接到曲轴后，风箱就不能手动操作了。
	
	曲轴也可以连接到[泵](mechanics/pumps)，用于输送流体。
#农作物

```patchouli-entry
id: mechanics/crops
name: 农作物
category: tfc:mechanics
icon: tfc:textures/item/food/wheat.png
read_by_default: true
extra_recipe_mappings:
  tfc:seeds/barley: 8
  tfc:food/barley: 8
  tfc:seeds/oat: 10
  tfc:food/oat: 10
  tfc:seeds/rye: 12
  tfc:food/rye: 12
  tfc:seeds/maize: 14
  tfc:food/maize: 14
  tfc:seeds/wheat: 16
  tfc:food/wheat: 16
  tfc:seeds/rice: 18
  tfc:food/rice: 18
  tfc:seeds/cassava: 20
  tfc:food/cassava: 20
  tfc:seeds/green_bean: 22
  tfc:food/green_bean: 22
  tfc:seeds/lentil: 24
  tfc:food/lentil: 24
  tfc:seeds/peanut: 26
  tfc:food/peanut: 26
  tfc:seeds/soybean: 28
  tfc:food/soybean: 28
  tfc:seeds/beet: 30
  tfc:food/beet: 30
  tfc:seeds/cabbage: 32
  tfc:food/cabbage: 32
  tfc:seeds/carrot: 34
  tfc:food/carrot: 34
  tfc:seeds/garlic: 36
  tfc:food/garlic: 36
  tfc:seeds/potato: 38
  tfc:food/potato: 38
  tfc:seeds/pumpkin: 40
  tfc:seeds/melon: 42
  tfc:seeds/tomato: 44
  tfc:food/tomato: 44
  tfc:seeds/red_bell_pepper: 46
  tfc:seeds/yellow_bell_pepper: 48
  tfc:seeds/onion: 50
  tfc:food/onion: 50
  tfc:seeds/squash: 52
  tfc:food/squash: 52
  tfc:seeds/alfalfa: 54
  tfc:alfalfa: 54
  tfc:seeds/canola: 56
  tfc:canola: 56
  tfc:seeds/radish: 58
  tfc:food/radish: 58
  tfc:seeds/sugarcane: 60
  tfc:food/sugarcane: 60
  tfc:seeds/jute: 62
  tfc:jute: 62
  tfc:seeds/papyrus: 64
  tfc:papyrus: 64
```

+ _untitled_
	农作物是食物和其他一些材料的来源。虽然每种作物都略有不同，但其实都大同小异。要种植农作物，你需要先找一些\$(thing)种子\$()，破坏[野生作物](the_world/wild_crops)可以就得到一点。
	
	有了种子，你还需要一把\$(thing)锄\$()。种子也可以作为[鱼饵](mechanics/fishing)。
+ _untitled_
	除了寻找野生作物，种子也可以从现有作物中产生。当完全成熟的作物死亡时——无论是由于天气还是任其腐烂——它会结籽，掉落更多的种子，可以在下一个季节种植更多的作物。
+ _untitled_
	```tfc:rock_knapping_recipe
	tfc:knapping/stone/hoe_head/sedimentary
	tfc:knapping/stone/hoe_head/metamorphic
	tfc:knapping/stone/hoe_head/igneous_extrusive
	tfc:knapping/stone/hoe_head/igneous_intrusive
	```
	开始时，可以如上图所示\$(thing)敲制\$()一把\$(thing)石锄\$()。
+ _untitled_
	```patchouli:crafting
	tfc:crafting/stone/hoe/sedimentary
	```
	用锄头和木棍制作锄。
	
	锄和原版一样，\$(item)\$(k:key.use)\$()点击泥土方块就能将它们变成\$(thing)耕地\$()。除此之外，它还可以用来将\$(thing)缠根泥土\$()转化为普通\$(thing)泥土\$()。
+ 种植作物
	所有作物都需要种植在[耕地](mechanics/farmland)上才能生长。有些作物还有额外要求，比如需要浸水或需要木棍攀附。
	
	作物生长不需要\$(thing)养分\$()，但养分确实有帮助。有三种养分：\$(3)氮\$()、\$(6)磷\$()和\$(d)钾\$()。每种作物可能会消耗或补充这三种养分的某种组合。
+ _untitled_
	消耗养分会使作物生长得更快，并提高收获时的产量。这意味着消耗更多养分的作物在破坏时会掉落更多食物！消耗养分也会提高作物补充其他养分的速度。
+ 作物分类
	虽然每种作物对肥料的需求可能各有不同，但大多数作物可分为四大类：谷类、豆类、蔬菜类和覆盖作物。
	
	^谷类^消耗大量\$(3)氮\$()，但补充\$(6)磷\$()和\$(d)钾\$()。它们产出富含谷物的食物。
+ _untitled_
	^豆类^产生大量\$(3)氮\$()，消耗\$(6)磷\$()和\$(d)钾\$()。它们产出富含蔬菜和蛋白质的食物。
	
	^蔬菜类^消耗所有三种养分，产出富含蔬菜的食物。
	
	^覆盖作物^产生所有三种养分，但它们的产物用途有限。
+ 大麦
	[](#barley)
	\$(bold)[温度](the_world/climate#temperature): -7 - 23 °C
	\$(bold)[湿度](mechanics/hydration): 10 - 70 %
	^类别^: 谷类
	
	^\$(3)氮^: 75 ^\$(6)磷^: +20 ^\$(d)钾^: +20\$()
	大麦是单格作物。大麦种子可以种植在耕地上，产出\$(thing)大麦\$()和\$(thing)大麦种子\$()。
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
		  X: tfc:crop/barley[age=0]
		  Y: tfc:farmland/entisol
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - Y
		  - - "0"
		mapping:
		  X: tfc:crop/barley[age=1]
		  Y: tfc:farmland/entisol
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - Y
		  - - "0"
		mapping:
		  X: tfc:crop/barley[age=2]
		  Y: tfc:farmland/entisol
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - Y
		  - - "0"
		mapping:
		  X: tfc:crop/barley[age=3]
		  Y: tfc:farmland/entisol
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - Y
		  - - "0"
		mapping:
		  X: tfc:crop/barley[age=4]
		  Y: tfc:farmland/entisol
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - Y
		  - - "0"
		mapping:
		  X: tfc:crop/barley[age=5]
		  Y: tfc:farmland/entisol
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - Y
		  - - "0"
		mapping:
		  X: tfc:crop/barley[age=6]
		  Y: tfc:farmland/entisol
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - Y
		  - - "0"
		mapping:
		  X: tfc:crop/barley[age=7]
		  Y: tfc:farmland/entisol
		```
+ 燕麦
	[](#oat)
	\$(bold)[温度](the_world/climate#temperature): -7 - 22 °C
	\$(bold)[湿度](mechanics/hydration): 25 - 85 %
	^类别^: 谷类
	
	^\$(3)氮^: 100 ^\$(6)磷^: +40 ^\$(d)钾^: +30\$()
	燕麦是单格作物。燕麦种子可以种植在耕地上，产出\$(thing)燕麦\$()和\$(thing)燕麦种子\$()。
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
		  X: tfc:crop/oat[age=0]
		  Y: tfc:farmland/entisol
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - Y
		  - - "0"
		mapping:
		  X: tfc:crop/oat[age=1]
		  Y: tfc:farmland/entisol
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - Y
		  - - "0"
		mapping:
		  X: tfc:crop/oat[age=2]
		  Y: tfc:farmland/entisol
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - Y
		  - - "0"
		mapping:
		  X: tfc:crop/oat[age=3]
		  Y: tfc:farmland/entisol
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - Y
		  - - "0"
		mapping:
		  X: tfc:crop/oat[age=4]
		  Y: tfc:farmland/entisol
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - Y
		  - - "0"
		mapping:
		  X: tfc:crop/oat[age=5]
		  Y: tfc:farmland/entisol
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - Y
		  - - "0"
		mapping:
		  X: tfc:crop/oat[age=6]
		  Y: tfc:farmland/entisol
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - Y
		  - - "0"
		mapping:
		  X: tfc:crop/oat[age=7]
		  Y: tfc:farmland/entisol
		```
+ 黑麦
	[](#rye)
	\$(bold)[温度](the_world/climate#temperature): -7 - 18 °C
	\$(bold)[湿度](mechanics/hydration): 15 - 80 %
	^类别^: 谷类
	
	^\$(3)氮^: 100 ^\$(6)磷^: +20 ^\$(d)钾^: +40\$()
	黑麦是单格作物。黑麦种子可以种植在耕地上，产出\$(thing)黑麦\$()和\$(thing)黑麦种子\$()。
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
		  X: tfc:crop/rye[age=0]
		  Y: tfc:farmland/entisol
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - Y
		  - - "0"
		mapping:
		  X: tfc:crop/rye[age=1]
		  Y: tfc:farmland/entisol
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - Y
		  - - "0"
		mapping:
		  X: tfc:crop/rye[age=2]
		  Y: tfc:farmland/entisol
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - Y
		  - - "0"
		mapping:
		  X: tfc:crop/rye[age=3]
		  Y: tfc:farmland/entisol
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - Y
		  - - "0"
		mapping:
		  X: tfc:crop/rye[age=4]
		  Y: tfc:farmland/entisol
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - Y
		  - - "0"
		mapping:
		  X: tfc:crop/rye[age=5]
		  Y: tfc:farmland/entisol
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - Y
		  - - "0"
		mapping:
		  X: tfc:crop/rye[age=6]
		  Y: tfc:farmland/entisol
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - Y
		  - - "0"
		mapping:
		  X: tfc:crop/rye[age=7]
		  Y: tfc:farmland/entisol
		```
+ 玉米
	[](#maize)
	\$(bold)[温度](the_world/climate#temperature): -7 - 27 °C
	\$(bold)[湿度](mechanics/hydration): 50 - 100 %
	^类别^: 谷类
	
	^\$(3)氮^: 90 ^\$(6)磷^: +25 ^\$(d)钾^: +25\$()
	玉米是两格高的作物。玉米种子可以种植在耕地上，会长到两格高，产出\$(thing)玉米\$()和\$(thing)玉米种子\$()。
+ _untitled_
	```tfc:multimultiblock
	```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - Y
		  - - Z
		  - - "0"
		mapping:
		  X: minecraft:air
		  Y: tfc:crop/maize[age=0,part=bottom]
		  Z: tfc:farmland/aridisol
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - Y
		  - - Z
		  - - "0"
		mapping:
		  X: minecraft:air
		  Y: tfc:crop/maize[age=1,part=bottom]
		  Z: tfc:farmland/aridisol
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - Y
		  - - Z
		  - - "0"
		mapping:
		  X: minecraft:air
		  Y: tfc:crop/maize[age=2,part=bottom]
		  Z: tfc:farmland/aridisol
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - Y
		  - - Z
		  - - "0"
		mapping:
		  X: tfc:crop/maize[age=3,part=top]
		  Y: tfc:crop/maize[age=3,part=bottom]
		  Z: tfc:farmland/aridisol
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - Y
		  - - Z
		  - - "0"
		mapping:
		  X: tfc:crop/maize[age=4,part=top]
		  Y: tfc:crop/maize[age=4,part=bottom]
		  Z: tfc:farmland/aridisol
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - Y
		  - - Z
		  - - "0"
		mapping:
		  X: tfc:crop/maize[age=5,part=top]
		  Y: tfc:crop/maize[age=5,part=bottom]
		  Z: tfc:farmland/aridisol
		```
+ 小麦
	[](#wheat)
	\$(bold)[温度](the_world/climate#temperature): -7 - 22 °C
	\$(bold)[湿度](mechanics/hydration): 15 - 85 %
	^类别^: 谷类
	
	^\$(3)氮^: 100 ^\$(6)磷^: +30 ^\$(d)钾^: +30\$()
	小麦是单格作物。小麦种子可以种植在耕地上，产出\$(thing)小麦\$()和\$(thing)小麦种子\$()。
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
		  X: tfc:crop/wheat[age=0]
		  Y: tfc:farmland/mollisol
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - Y
		  - - "0"
		mapping:
		  X: tfc:crop/wheat[age=1]
		  Y: tfc:farmland/mollisol
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - Y
		  - - "0"
		mapping:
		  X: tfc:crop/wheat[age=2]
		  Y: tfc:farmland/mollisol
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - Y
		  - - "0"
		mapping:
		  X: tfc:crop/wheat[age=3]
		  Y: tfc:farmland/mollisol
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - Y
		  - - "0"
		mapping:
		  X: tfc:crop/wheat[age=4]
		  Y: tfc:farmland/mollisol
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - Y
		  - - "0"
		mapping:
		  X: tfc:crop/wheat[age=5]
		  Y: tfc:farmland/mollisol
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - Y
		  - - "0"
		mapping:
		  X: tfc:crop/wheat[age=6]
		  Y: tfc:farmland/mollisol
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - Y
		  - - "0"
		mapping:
		  X: tfc:crop/wheat[age=7]
		  Y: tfc:farmland/mollisol
		```
+ 水稻
	[](#rice)
	\$(bold)[温度](the_world/climate#temperature): 8 - 31 °C
	\$(bold)[湿度](mechanics/hydration): 35 - 100 %
	^类别^: 谷类
	
	^\$(3)氮^: 40 ^\$(6)磷^: 30 ^\$(d)钾^: 30\$()
	水稻是单格作物。水稻必须在水中种植——它必须种植在耕地上，且上方有一格深的淡水。它会产出\$(thing)水稻\$()和\$(thing)水稻种子\$()。与大多数谷类作物不同，水稻需要均衡的养分。
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
		  X: tfc:crop/rice[age=0,fluid=water]
		  Y: tfc:farmland/fluvisol
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - Y
		  - - "0"
		mapping:
		  X: tfc:crop/rice[age=1,fluid=water]
		  Y: tfc:farmland/fluvisol
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - Y
		  - - "0"
		mapping:
		  X: tfc:crop/rice[age=2,fluid=water]
		  Y: tfc:farmland/fluvisol
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - Y
		  - - "0"
		mapping:
		  X: tfc:crop/rice[age=3,fluid=water]
		  Y: tfc:farmland/fluvisol
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - Y
		  - - "0"
		mapping:
		  X: tfc:crop/rice[age=4,fluid=water]
		  Y: tfc:farmland/fluvisol
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - Y
		  - - "0"
		mapping:
		  X: tfc:crop/rice[age=5,fluid=water]
		  Y: tfc:farmland/fluvisol
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - Y
		  - - "0"
		mapping:
		  X: tfc:crop/rice[age=6,fluid=water]
		  Y: tfc:farmland/fluvisol
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - Y
		  - - "0"
		mapping:
		  X: tfc:crop/rice[age=7,fluid=water]
		  Y: tfc:farmland/fluvisol
		```
	种植水稻种子的方块必须\$(thing)含水\$()。
+ 木薯
	[](#cassava)
	\$(bold)[温度](the_world/climate#temperature): 10 - 31 °C
	\$(bold)[湿度](mechanics/hydration): 45 - 100 %
	^类别^: 豆类
	
	^\$(3)氮^: +50 ^\$(6)磷^: 40 ^\$(d)钾^: 20\$()
	木薯是单格作物。木薯种子可以种植在耕地上，产出\$(thing)木薯\$()和\$(thing)木薯种子\$()。
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
		  X: tfc:crop/cassava[age=0]
		  Y: tfc:farmland/oxisol
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - Y
		  - - "0"
		mapping:
		  X: tfc:crop/cassava[age=1]
		  Y: tfc:farmland/oxisol
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - Y
		  - - "0"
		mapping:
		  X: tfc:crop/cassava[age=2]
		  Y: tfc:farmland/oxisol
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - Y
		  - - "0"
		mapping:
		  X: tfc:crop/cassava[age=3]
		  Y: tfc:farmland/oxisol
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - Y
		  - - "0"
		mapping:
		  X: tfc:crop/cassava[age=4]
		  Y: tfc:farmland/oxisol
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - Y
		  - - "0"
		mapping:
		  X: tfc:crop/cassava[age=5]
		  Y: tfc:farmland/oxisol
		```
+ 四季豆
	[](#green_bean)
	\$(bold)[温度](the_world/climate#temperature): -2 - 25 °C
	\$(bold)[湿度](mechanics/hydration): 25 - 90 %
	^类别^: 豆类
	
	^\$(3)氮^: +80 ^\$(6)磷^: 50 ^\$(d)钾^: 40\$()
	四季豆是攀爬作物，两格高。四季豆种子可以种植在耕地上，如果有木棍，会长到两格高，产出\$(thing)四季豆\$()和\$(thing)四季豆种子\$()。
+ _untitled_
	```tfc:multimultiblock
	```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - Y
		  - - Z
		  - - "0"
		mapping:
		  X: tfc:crop/green_bean[age=0,part=top,stick=true]
		  Y: tfc:crop/green_bean[age=0,part=bottom,stick=true]
		  Z: tfc:farmland/entisol
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - Y
		  - - Z
		  - - "0"
		mapping:
		  X: tfc:crop/green_bean[age=1,part=top,stick=true]
		  Y: tfc:crop/green_bean[age=1,part=bottom,stick=true]
		  Z: tfc:farmland/entisol
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - Y
		  - - Z
		  - - "0"
		mapping:
		  X: tfc:crop/green_bean[age=2,part=top,stick=true]
		  Y: tfc:crop/green_bean[age=2,part=bottom,stick=true]
		  Z: tfc:farmland/entisol
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - Y
		  - - Z
		  - - "0"
		mapping:
		  X: tfc:crop/green_bean[age=3,part=top,stick=true]
		  Y: tfc:crop/green_bean[age=3,part=bottom,stick=true]
		  Z: tfc:farmland/entisol
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - Y
		  - - Z
		  - - "0"
		mapping:
		  X: tfc:crop/green_bean[age=4,part=top,stick=true]
		  Y: tfc:crop/green_bean[age=4,part=bottom,stick=true]
		  Z: tfc:farmland/entisol
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - Y
		  - - Z
		  - - "0"
		mapping:
		  X: tfc:crop/green_bean[age=5,part=top,stick=true]
		  Y: tfc:crop/green_bean[age=5,part=bottom,stick=true]
		  Z: tfc:farmland/entisol
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - Y
		  - - Z
		  - - "0"
		mapping:
		  X: tfc:crop/green_bean[age=6,part=top,stick=true]
		  Y: tfc:crop/green_bean[age=6,part=bottom,stick=true]
		  Z: tfc:farmland/entisol
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - Y
		  - - Z
		  - - "0"
		mapping:
		  X: tfc:crop/green_bean[age=7,part=top,stick=true]
		  Y: tfc:crop/green_bean[age=7,part=bottom,stick=true]
		  Z: tfc:farmland/entisol
		```
	需要插木棍才能使作物充分生长。
+ 扁豆
	[](#lentil)
	\$(bold)[温度](the_world/climate#temperature): -5 - 25 °C
	\$(bold)[湿度](mechanics/hydration): 15 - 50 %
	^类别^: 豆类
	
	^\$(3)氮^: +80 ^\$(6)磷^: 20 ^\$(d)钾^: 20\$()
	扁豆是单格作物。扁豆种子可以种植在耕地上，产出\$(thing)扁豆\$()和\$(thing)扁豆种子\$()。
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
		  X: tfc:crop/lentil[age=0]
		  Y: tfc:farmland/andisol
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - Y
		  - - "0"
		mapping:
		  X: tfc:crop/lentil[age=1]
		  Y: tfc:farmland/andisol
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - Y
		  - - "0"
		mapping:
		  X: tfc:crop/lentil[age=2]
		  Y: tfc:farmland/andisol
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - Y
		  - - "0"
		mapping:
		  X: tfc:crop/lentil[age=3]
		  Y: tfc:farmland/andisol
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - Y
		  - - "0"
		mapping:
		  X: tfc:crop/lentil[age=4]
		  Y: tfc:farmland/andisol
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - Y
		  - - "0"
		mapping:
		  X: tfc:crop/lentil[age=5]
		  Y: tfc:farmland/andisol
		```
+ 花生
	[](#peanut)
	\$(bold)[温度](the_world/climate#temperature): 11 - 31 °C
	\$(bold)[湿度](mechanics/hydration): 20 - 80 %
	^类别^: 豆类
	
	^\$(3)氮^: +90 ^\$(6)磷^: 50 ^\$(d)钾^: 50\$()
	花生是单格作物。花生种子可以种植在耕地上，产出\$(thing)花生\$()和\$(thing)花生种子\$()。
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
		  X: tfc:crop/peanut[age=0]
		  Y: tfc:farmland/oxisol
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - Y
		  - - "0"
		mapping:
		  X: tfc:crop/peanut[age=1]
		  Y: tfc:farmland/oxisol
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - Y
		  - - "0"
		mapping:
		  X: tfc:crop/peanut[age=2]
		  Y: tfc:farmland/oxisol
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - Y
		  - - "0"
		mapping:
		  X: tfc:crop/peanut[age=3]
		  Y: tfc:farmland/oxisol
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - Y
		  - - "0"
		mapping:
		  X: tfc:crop/peanut[age=4]
		  Y: tfc:farmland/oxisol
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - Y
		  - - "0"
		mapping:
		  X: tfc:crop/peanut[age=5]
		  Y: tfc:farmland/oxisol
		```
+ 大豆
	[](#soybean)
	\$(bold)[温度](the_world/climate#temperature): -7 - 22 °C
	\$(bold)[湿度](mechanics/hydration): 25 - 90 %
	^类别^: 豆类
	
	^\$(3)氮^: +80 ^\$(6)磷^: 60 ^\$(d)钾^: 30\$()
	大豆是单格作物。大豆种子可以种植在耕地上，产出\$(thing)大豆\$()和\$(thing)大豆种子\$()。
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
		  X: tfc:crop/soybean[age=0]
		  Y: tfc:farmland/entisol
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - Y
		  - - "0"
		mapping:
		  X: tfc:crop/soybean[age=1]
		  Y: tfc:farmland/entisol
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - Y
		  - - "0"
		mapping:
		  X: tfc:crop/soybean[age=2]
		  Y: tfc:farmland/entisol
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - Y
		  - - "0"
		mapping:
		  X: tfc:crop/soybean[age=3]
		  Y: tfc:farmland/entisol
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - Y
		  - - "0"
		mapping:
		  X: tfc:crop/soybean[age=4]
		  Y: tfc:farmland/entisol
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - Y
		  - - "0"
		mapping:
		  X: tfc:crop/soybean[age=5]
		  Y: tfc:farmland/entisol
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - Y
		  - - "0"
		mapping:
		  X: tfc:crop/soybean[age=6]
		  Y: tfc:farmland/entisol
		```
+ 甜菜
	[](#beet)
	\$(bold)[温度](the_world/climate#temperature): -10 - 27 °C
	\$(bold)[湿度](mechanics/hydration): 10 - 70 %
	^类别^: 蔬菜类
	
	^\$(3)氮^: 40 ^\$(6)磷^: 30 ^\$(d)钾^: 50\$()
	甜菜是单格作物。甜菜种子可以种植在耕地上，产出\$(thing)甜菜\$()和\$(thing)甜菜种子\$()。
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
		  X: tfc:crop/beet[age=0]
		  Y: tfc:farmland/alfisol
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - Y
		  - - "0"
		mapping:
		  X: tfc:crop/beet[age=1]
		  Y: tfc:farmland/alfisol
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - Y
		  - - "0"
		mapping:
		  X: tfc:crop/beet[age=2]
		  Y: tfc:farmland/alfisol
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - Y
		  - - "0"
		mapping:
		  X: tfc:crop/beet[age=3]
		  Y: tfc:farmland/alfisol
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - Y
		  - - "0"
		mapping:
		  X: tfc:crop/beet[age=4]
		  Y: tfc:farmland/alfisol
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - Y
		  - - "0"
		mapping:
		  X: tfc:crop/beet[age=5]
		  Y: tfc:farmland/alfisol
		```
+ 卷心菜
	[](#cabbage)
	\$(bold)[温度](the_world/climate#temperature): -10 - 27 °C
	\$(bold)[湿度](mechanics/hydration): 10 - 65 %
	^类别^: 蔬菜类
	
	^\$(3)氮^: 50 ^\$(6)磷^: 20 ^\$(d)钾^: 40\$()
	卷心菜是单格作物。卷心菜种子可以种植在耕地上，产出\$(thing)卷心菜\$()和\$(thing)卷心菜种子\$()。
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
		  X: tfc:crop/cabbage[age=0]
		  Y: tfc:farmland/entisol
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - Y
		  - - "0"
		mapping:
		  X: tfc:crop/cabbage[age=1]
		  Y: tfc:farmland/entisol
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - Y
		  - - "0"
		mapping:
		  X: tfc:crop/cabbage[age=2]
		  Y: tfc:farmland/entisol
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - Y
		  - - "0"
		mapping:
		  X: tfc:crop/cabbage[age=3]
		  Y: tfc:farmland/entisol
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - Y
		  - - "0"
		mapping:
		  X: tfc:crop/cabbage[age=4]
		  Y: tfc:farmland/entisol
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - Y
		  - - "0"
		mapping:
		  X: tfc:crop/cabbage[age=5]
		  Y: tfc:farmland/entisol
		```
+ 胡萝卜
	[](#carrot)
	\$(bold)[温度](the_world/climate#temperature): -10 - 27 °C
	\$(bold)[湿度](mechanics/hydration): 15 - 85 %
	^类别^: 蔬菜类
	
	^\$(3)氮^: 50 ^\$(6)磷^: 30 ^\$(d)钾^: 40\$()
	胡萝卜是单格作物。胡萝卜种子可以种植在耕地上，产出\$(thing)胡萝卜\$()和\$(thing)胡萝卜种子\$()。
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
		  X: tfc:crop/carrot[age=0]
		  Y: tfc:farmland/alfisol
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - Y
		  - - "0"
		mapping:
		  X: tfc:crop/carrot[age=1]
		  Y: tfc:farmland/alfisol
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - Y
		  - - "0"
		mapping:
		  X: tfc:crop/carrot[age=2]
		  Y: tfc:farmland/alfisol
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - Y
		  - - "0"
		mapping:
		  X: tfc:crop/carrot[age=3]
		  Y: tfc:farmland/alfisol
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - Y
		  - - "0"
		mapping:
		  X: tfc:crop/carrot[age=4]
		  Y: tfc:farmland/alfisol
		```
+ 大蒜
	[](#garlic)
	\$(bold)[温度](the_world/climate#temperature): -3 - 22 °C
	\$(bold)[湿度](mechanics/hydration): 10 - 70 %
	^类别^: 蔬菜类
	
	^\$(3)氮^: 40 ^\$(6)磷^: 20 ^\$(d)钾^: 50\$()
	大蒜是单格作物。大蒜种子可以种植在耕地上，产出\$(thing)大蒜\$()和\$(thing)大蒜种子\$()。
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
		  X: tfc:crop/garlic[age=0]
		  Y: tfc:farmland/podzol
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - Y
		  - - "0"
		mapping:
		  X: tfc:crop/garlic[age=1]
		  Y: tfc:farmland/podzol
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - Y
		  - - "0"
		mapping:
		  X: tfc:crop/garlic[age=2]
		  Y: tfc:farmland/podzol
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - Y
		  - - "0"
		mapping:
		  X: tfc:crop/garlic[age=3]
		  Y: tfc:farmland/podzol
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - Y
		  - - "0"
		mapping:
		  X: tfc:crop/garlic[age=4]
		  Y: tfc:farmland/podzol
		```
+ 马铃薯
	[](#potato)
	\$(bold)[温度](the_world/climate#temperature): -7 - 22 °C
	\$(bold)[湿度](mechanics/hydration): 35 - 90 %
	^类别^: 蔬菜类
	
	^\$(3)氮^: 40 ^\$(6)磷^: 20 ^\$(d)钾^: 60\$()
	马铃薯是单格作物。马铃薯种子可以种植在耕地上，产出\$(thing)马铃薯\$()和\$(thing)马铃薯种子\$()。
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
		  X: tfc:crop/potato[age=0]
		  Y: tfc:farmland/andisol
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - Y
		  - - "0"
		mapping:
		  X: tfc:crop/potato[age=1]
		  Y: tfc:farmland/andisol
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - Y
		  - - "0"
		mapping:
		  X: tfc:crop/potato[age=2]
		  Y: tfc:farmland/andisol
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - Y
		  - - "0"
		mapping:
		  X: tfc:crop/potato[age=3]
		  Y: tfc:farmland/andisol
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - Y
		  - - "0"
		mapping:
		  X: tfc:crop/potato[age=4]
		  Y: tfc:farmland/andisol
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - Y
		  - - "0"
		mapping:
		  X: tfc:crop/potato[age=5]
		  Y: tfc:farmland/andisol
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - Y
		  - - "0"
		mapping:
		  X: tfc:crop/potato[age=6]
		  Y: tfc:farmland/andisol
		```
+ 南瓜
	[](#pumpkin)
	\$(bold)[温度](the_world/climate#temperature): -7 - 27 °C
	\$(bold)[湿度](mechanics/hydration): 20 - 85 %
	^类别^: 蔓延性蔬菜
	
	^\$(3)氮^: 40 ^\$(6)磷^: 30 ^\$(d)钾^: 60\$()
	南瓜是蔓延性作物。南瓜种子可以种植在耕地上，成熟时会在旁边地上放置最多两个\$(thing)南瓜块\$()。如果收获南瓜块，植株再次成熟时可以长出更多南瓜。南瓜可以做成[南瓜灯](mechanics/lighting#jack_o_lanterns)。
+ _untitled_
	```tfc:multimultiblock
	```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - "   "
		    - " CP"
		    - "   "
		  - - GGG
		    - G0G
		    - GGG
		mapping:
		  "0": tfc:farmland/entisol
		  G: tfc:farmland/entisol
		  C: tfc:crop/pumpkin[age=0]
		  P: minecraft:air
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - "   "
		    - " CP"
		    - "   "
		  - - GGG
		    - G0G
		    - GGG
		mapping:
		  "0": tfc:farmland/entisol
		  G: tfc:farmland/entisol
		  C: tfc:crop/pumpkin[age=1]
		  P: minecraft:air
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - "   "
		    - " CP"
		    - "   "
		  - - GGG
		    - G0G
		    - GGG
		mapping:
		  "0": tfc:farmland/entisol
		  G: tfc:farmland/entisol
		  C: tfc:crop/pumpkin[age=2]
		  P: minecraft:air
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - "   "
		    - " CP"
		    - "   "
		  - - GGG
		    - G0G
		    - GGG
		mapping:
		  "0": tfc:farmland/entisol
		  G: tfc:farmland/entisol
		  C: tfc:crop/pumpkin[age=3]
		  P: minecraft:air
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - "   "
		    - " CP"
		    - "   "
		  - - GGG
		    - G0G
		    - GGG
		mapping:
		  "0": tfc:farmland/entisol
		  G: tfc:farmland/entisol
		  C: tfc:crop/pumpkin[age=4]
		  P: minecraft:air
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - "   "
		    - " CP"
		    - "   "
		  - - GGG
		    - G0G
		    - GGG
		mapping:
		  "0": tfc:farmland/entisol
		  G: tfc:farmland/entisol
		  C: tfc:crop/pumpkin[age=5]
		  P: minecraft:air
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - "   "
		    - " CP"
		    - "   "
		  - - GGG
		    - G0G
		    - GGG
		mapping:
		  "0": tfc:farmland/entisol
		  G: tfc:farmland/entisol
		  C: tfc:crop/pumpkin[age=6]
		  P: minecraft:air
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - "   "
		    - " CP"
		    - "   "
		  - - GGG
		    - G0G
		    - GGG
		mapping:
		  "0": tfc:farmland/entisol
		  G: tfc:farmland/entisol
		  C: tfc:crop/pumpkin[age=7]
		  P: tfc:pumpkin
		```
+ 西瓜
	[](#melon)
	\$(bold)[温度](the_world/climate#temperature): 5 - 31 °C
	\$(bold)[湿度](mechanics/hydration): 35 - 100 %
	^类别^: 蔓延性蔬菜
	
	^\$(3)氮^: 30 ^\$(6)磷^: 40 ^\$(d)钾^: 65\$()
	西瓜是蔓延性作物。西瓜种子可以种植在耕地上，成熟时会在旁边地上放置最多两个\$(thing)西瓜块\$()。如果收获西瓜块，植株再次成熟时可以长出更多西瓜。
+ _untitled_
	```tfc:multimultiblock
	```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - "   "
		    - " CP"
		    - "   "
		  - - GGG
		    - G0G
		    - GGG
		mapping:
		  "0": tfc:farmland/entisol
		  G: tfc:farmland/entisol
		  C: tfc:crop/melon[age=0]
		  P: minecraft:air
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - "   "
		    - " CP"
		    - "   "
		  - - GGG
		    - G0G
		    - GGG
		mapping:
		  "0": tfc:farmland/entisol
		  G: tfc:farmland/entisol
		  C: tfc:crop/melon[age=1]
		  P: minecraft:air
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - "   "
		    - " CP"
		    - "   "
		  - - GGG
		    - G0G
		    - GGG
		mapping:
		  "0": tfc:farmland/entisol
		  G: tfc:farmland/entisol
		  C: tfc:crop/melon[age=2]
		  P: minecraft:air
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - "   "
		    - " CP"
		    - "   "
		  - - GGG
		    - G0G
		    - GGG
		mapping:
		  "0": tfc:farmland/entisol
		  G: tfc:farmland/entisol
		  C: tfc:crop/melon[age=3]
		  P: minecraft:air
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - "   "
		    - " CP"
		    - "   "
		  - - GGG
		    - G0G
		    - GGG
		mapping:
		  "0": tfc:farmland/entisol
		  G: tfc:farmland/entisol
		  C: tfc:crop/melon[age=4]
		  P: minecraft:air
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - "   "
		    - " CP"
		    - "   "
		  - - GGG
		    - G0G
		    - GGG
		mapping:
		  "0": tfc:farmland/entisol
		  G: tfc:farmland/entisol
		  C: tfc:crop/melon[age=5]
		  P: minecraft:air
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - "   "
		    - " CP"
		    - "   "
		  - - GGG
		    - G0G
		    - GGG
		mapping:
		  "0": tfc:farmland/entisol
		  G: tfc:farmland/entisol
		  C: tfc:crop/melon[age=6]
		  P: minecraft:air
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - "   "
		    - " CP"
		    - "   "
		  - - GGG
		    - G0G
		    - GGG
		mapping:
		  "0": tfc:farmland/entisol
		  G: tfc:farmland/entisol
		  C: tfc:crop/melon[age=7]
		  P: tfc:melon
		```
+ 番茄
	[](#tomatoes)
	\$(bold)[温度](the_world/climate#temperature): 2 - 31 °C
	\$(bold)[湿度](mechanics/hydration): 20 - 85 %
	^类别^: 蔬菜类
	
	^\$(3)氮^: 40 ^\$(6)磷^: 50 ^\$(d)钾^: 60\$()
	番茄是攀爬作物，两格高。番茄种子可以种植在耕地上，如果有木棍，会长到两格高，产出\$(thing)番茄\$()和\$(thing)番茄种子\$()。
+ _untitled_
	```tfc:multimultiblock
	```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - Y
		  - - Z
		  - - "0"
		mapping:
		  X: tfc:crop/tomato[age=0,part=top,stick=true]
		  Y: tfc:crop/tomato[age=0,part=bottom,stick=true]
		  Z: tfc:farmland/oxisol
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - Y
		  - - Z
		  - - "0"
		mapping:
		  X: tfc:crop/tomato[age=1,part=top,stick=true]
		  Y: tfc:crop/tomato[age=1,part=bottom,stick=true]
		  Z: tfc:farmland/oxisol
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - Y
		  - - Z
		  - - "0"
		mapping:
		  X: tfc:crop/tomato[age=2,part=top,stick=true]
		  Y: tfc:crop/tomato[age=2,part=bottom,stick=true]
		  Z: tfc:farmland/oxisol
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - Y
		  - - Z
		  - - "0"
		mapping:
		  X: tfc:crop/tomato[age=3,part=top,stick=true]
		  Y: tfc:crop/tomato[age=3,part=bottom,stick=true]
		  Z: tfc:farmland/oxisol
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - Y
		  - - Z
		  - - "0"
		mapping:
		  X: tfc:crop/tomato[age=4,part=top,stick=true]
		  Y: tfc:crop/tomato[age=4,part=bottom,stick=true]
		  Z: tfc:farmland/oxisol
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - Y
		  - - Z
		  - - "0"
		mapping:
		  X: tfc:crop/tomato[age=5,part=top,stick=true]
		  Y: tfc:crop/tomato[age=5,part=bottom,stick=true]
		  Z: tfc:farmland/oxisol
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - Y
		  - - Z
		  - - "0"
		mapping:
		  X: tfc:crop/tomato[age=6,part=top,stick=true]
		  Y: tfc:crop/tomato[age=6,part=bottom,stick=true]
		  Z: tfc:farmland/oxisol
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - Y
		  - - Z
		  - - "0"
		mapping:
		  X: tfc:crop/tomato[age=7,part=top,stick=true]
		  Y: tfc:crop/tomato[age=7,part=bottom,stick=true]
		  Z: tfc:farmland/oxisol
		```
	需要插木棍才能使作物充分生长。
+ 红甜椒
	[](#red_bell_pepper)
	\$(bold)[温度](the_world/climate#temperature): 11 - 31 °C
	\$(bold)[湿度](mechanics/hydration): 30 - 95 %
	^类别^: 可采摘蔬菜
	
	^\$(3)氮^: 30 ^\$(6)磷^: 40 ^\$(d)钾^: 50\$()
	红甜椒是可采摘作物。当它们接近成熟时，可以用\$(item)\$(k:key.use)\$()收获，得到绿甜椒。用\$(item)\$(k:key.use)\$()收获可以让植物在未来结出更多辣椒，而不是破坏植株。
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
		  X: tfc:crop/red_bell_pepper[age=0]
		  Y: tfc:farmland/oxisol
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - Y
		  - - "0"
		mapping:
		  X: tfc:crop/red_bell_pepper[age=1]
		  Y: tfc:farmland/oxisol
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - Y
		  - - "0"
		mapping:
		  X: tfc:crop/red_bell_pepper[age=2]
		  Y: tfc:farmland/oxisol
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - Y
		  - - "0"
		mapping:
		  X: tfc:crop/red_bell_pepper[age=3]
		  Y: tfc:farmland/oxisol
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - Y
		  - - "0"
		mapping:
		  X: tfc:crop/red_bell_pepper[age=4]
		  Y: tfc:farmland/oxisol
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - Y
		  - - "0"
		mapping:
		  X: tfc:crop/red_bell_pepper[age=5]
		  Y: tfc:farmland/oxisol
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - Y
		  - - "0"
		mapping:
		  X: tfc:crop/red_bell_pepper[age=6]
		  Y: tfc:farmland/oxisol
		```
+ 黄甜椒
	[](#yellow_bell_pepper)
	\$(bold)[温度](the_world/climate#temperature): 11 - 31 °C
	\$(bold)[湿度](mechanics/hydration): 30 - 95 %
	^类别^: 可采摘蔬菜
	
	^\$(3)氮^: 30 ^\$(6)磷^: 40 ^\$(d)钾^: 50\$()
	黄甜椒是可采摘作物。当它们接近成熟时，可以用\$(item)\$(k:key.use)\$()收获，得到绿甜椒。用\$(item)\$(k:key.use)\$()收获可以让植物在未来结出更多辣椒，而不是破坏植株。
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
		  X: tfc:crop/yellow_bell_pepper[age=0]
		  Y: tfc:farmland/oxisol
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - Y
		  - - "0"
		mapping:
		  X: tfc:crop/yellow_bell_pepper[age=1]
		  Y: tfc:farmland/oxisol
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - Y
		  - - "0"
		mapping:
		  X: tfc:crop/yellow_bell_pepper[age=2]
		  Y: tfc:farmland/oxisol
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - Y
		  - - "0"
		mapping:
		  X: tfc:crop/yellow_bell_pepper[age=3]
		  Y: tfc:farmland/oxisol
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - Y
		  - - "0"
		mapping:
		  X: tfc:crop/yellow_bell_pepper[age=4]
		  Y: tfc:farmland/oxisol
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - Y
		  - - "0"
		mapping:
		  X: tfc:crop/yellow_bell_pepper[age=5]
		  Y: tfc:farmland/oxisol
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - Y
		  - - "0"
		mapping:
		  X: tfc:crop/yellow_bell_pepper[age=6]
		  Y: tfc:farmland/oxisol
		```
+ 洋葱
	[](#onion)
	\$(bold)[温度](the_world/climate#temperature): -5 - 26 °C
	\$(bold)[湿度](mechanics/hydration): 15 - 85 %
	^类别^: 蔬菜类
	
	^\$(3)氮^: 40 ^\$(6)磷^: 40 ^\$(d)钾^: 40\$()
	洋葱是单格作物。洋葱种子可以种植在耕地上，产出\$(thing)洋葱\$()和\$(thing)洋葱种子\$()。
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
		  X: tfc:crop/onion[age=0]
		  Y: tfc:farmland/alfisol
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - Y
		  - - "0"
		mapping:
		  X: tfc:crop/onion[age=1]
		  Y: tfc:farmland/alfisol
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - Y
		  - - "0"
		mapping:
		  X: tfc:crop/onion[age=2]
		  Y: tfc:farmland/alfisol
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - Y
		  - - "0"
		mapping:
		  X: tfc:crop/onion[age=3]
		  Y: tfc:farmland/alfisol
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - Y
		  - - "0"
		mapping:
		  X: tfc:crop/onion[age=4]
		  Y: tfc:farmland/alfisol
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - Y
		  - - "0"
		mapping:
		  X: tfc:crop/onion[age=5]
		  Y: tfc:farmland/alfisol
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - Y
		  - - "0"
		mapping:
		  X: tfc:crop/onion[age=6]
		  Y: tfc:farmland/alfisol
		```
+ 西葫芦
	[](#squash)
	\$(bold)[温度](the_world/climate#temperature): -7 - 25 °C
	\$(bold)[湿度](mechanics/hydration): 15 - 85 %
	^类别^: 蔬菜类
	
	^\$(3)氮^: 25 ^\$(6)磷^: 45 ^\$(d)钾^: 50\$()
	西葫芦是单格作物。西葫芦种子可以种植在耕地上，产出\$(thing)西葫芦\$()和\$(thing)西葫芦种子\$()。
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
		  X: tfc:crop/squash[age=0]
		  Y: tfc:farmland/entisol
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - Y
		  - - "0"
		mapping:
		  X: tfc:crop/squash[age=1]
		  Y: tfc:farmland/entisol
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - Y
		  - - "0"
		mapping:
		  X: tfc:crop/squash[age=2]
		  Y: tfc:farmland/entisol
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - Y
		  - - "0"
		mapping:
		  X: tfc:crop/squash[age=3]
		  Y: tfc:farmland/entisol
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - Y
		  - - "0"
		mapping:
		  X: tfc:crop/squash[age=4]
		  Y: tfc:farmland/entisol
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - Y
		  - - "0"
		mapping:
		  X: tfc:crop/squash[age=5]
		  Y: tfc:farmland/entisol
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - Y
		  - - "0"
		mapping:
		  X: tfc:crop/squash[age=6]
		  Y: tfc:farmland/entisol
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - Y
		  - - "0"
		mapping:
		  X: tfc:crop/squash[age=7]
		  Y: tfc:farmland/entisol
		```
+ 苜蓿
	[](#alfalfa)
	\$(bold)[温度](the_world/climate#temperature): -32 - 8 °C
	\$(bold)[湿度](mechanics/hydration): 40 - 100 %
	^类别^: 覆盖作物
	
	^\$(3)氮^: +24.0 ^\$(6)磷^: +15.0 ^\$(d)钾^: +18.0\$()
	苜蓿是适应寒冷温度的单格作物。苜蓿种子可以种植在耕地上，产出\$(thing)苜蓿\$()和\$(thing)苜蓿种子\$()，同时滋养土壤。苜蓿可以用作干草或堆肥的来源。
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
		  X: tfc:crop/alfalfa[age=0]
		  Y: tfc:farmland/mollisol
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - Y
		  - - "0"
		mapping:
		  X: tfc:crop/alfalfa[age=1]
		  Y: tfc:farmland/mollisol
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - Y
		  - - "0"
		mapping:
		  X: tfc:crop/alfalfa[age=2]
		  Y: tfc:farmland/mollisol
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - Y
		  - - "0"
		mapping:
		  X: tfc:crop/alfalfa[age=3]
		  Y: tfc:farmland/mollisol
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - Y
		  - - "0"
		mapping:
		  X: tfc:crop/alfalfa[age=4]
		  Y: tfc:farmland/mollisol
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - Y
		  - - "0"
		mapping:
		  X: tfc:crop/alfalfa[age=5]
		  Y: tfc:farmland/mollisol
		```
+ 油菜
	[](#canola)
	\$(bold)[温度](the_world/climate#temperature): -30 - 6 °C
	\$(bold)[湿度](mechanics/hydration): 20 - 75 %
	^类别^: 覆盖作物
	
	^\$(3)氮^: +9.0 ^\$(6)磷^: +18.0 ^\$(d)钾^: +30.0\$()
	油菜是适应寒冷温度的单格作物。油菜种子可以种植在耕地上，产出\$(thing)油菜\$()和\$(thing)油菜种子\$()，同时滋养土壤。油菜可以用作干草或堆肥的来源，种子可用于榨油。
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
		  X: tfc:crop/canola[age=0]
		  Y: tfc:farmland/mollisol
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - Y
		  - - "0"
		mapping:
		  X: tfc:crop/canola[age=1]
		  Y: tfc:farmland/mollisol
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - Y
		  - - "0"
		mapping:
		  X: tfc:crop/canola[age=2]
		  Y: tfc:farmland/mollisol
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - Y
		  - - "0"
		mapping:
		  X: tfc:crop/canola[age=3]
		  Y: tfc:farmland/mollisol
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - Y
		  - - "0"
		mapping:
		  X: tfc:crop/canola[age=4]
		  Y: tfc:farmland/mollisol
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - Y
		  - - "0"
		mapping:
		  X: tfc:crop/canola[age=5]
		  Y: tfc:farmland/mollisol
		```
+ 萝卜
	[](#radish)
	\$(bold)[温度](the_world/climate#temperature): -28 - 10 °C
	\$(bold)[湿度](mechanics/hydration): 30 - 90 %
	^类别^: 覆盖作物
	
	^\$(3)氮^: +15.0 ^\$(6)磷^: +30.0 ^\$(d)钾^: +18.0\$()
	萝卜是适应寒冷温度的单格作物。萝卜种子可以种植在耕地上，产出\$(thing)萝卜\$()和\$(thing)萝卜种子\$()，同时滋养土壤。萝卜不是很有营养的蔬菜，但可以作为许多动物的饲料。
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
		  X: tfc:crop/radish[age=0]
		  Y: tfc:farmland/mollisol
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - Y
		  - - "0"
		mapping:
		  X: tfc:crop/radish[age=1]
		  Y: tfc:farmland/mollisol
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - Y
		  - - "0"
		mapping:
		  X: tfc:crop/radish[age=2]
		  Y: tfc:farmland/mollisol
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - Y
		  - - "0"
		mapping:
		  X: tfc:crop/radish[age=3]
		  Y: tfc:farmland/mollisol
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - Y
		  - - "0"
		mapping:
		  X: tfc:crop/radish[age=4]
		  Y: tfc:farmland/mollisol
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - Y
		  - - "0"
		mapping:
		  X: tfc:crop/radish[age=5]
		  Y: tfc:farmland/mollisol
		```
+ 甘蔗
	[](#sugarcane)
	\$(bold)[温度](the_world/climate#temperature): 16 - 31 °C
	\$(bold)[湿度](mechanics/hydration): 25 - 100 %
	^类别^: 杂项
	
	^\$(3)氮^: 50 ^\$(6)磷^: 50 ^\$(d)钾^: 50\$()
	甘蔗是两格高的作物。甘蔗种子可以种植在耕地上，会长到两格高，产出\$(thing)甘蔗\$()和\$(thing)甘蔗种子\$()。甘蔗可用于制作\$(thing)糖\$()。
+ _untitled_
	```tfc:multimultiblock
	```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - Y
		  - - Z
		  - - "0"
		mapping:
		  X: minecraft:air
		  Y: tfc:crop/sugarcane[age=0,part=bottom]
		  Z: tfc:farmland/andisol
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - Y
		  - - Z
		  - - "0"
		mapping:
		  X: minecraft:air
		  Y: tfc:crop/sugarcane[age=1,part=bottom]
		  Z: tfc:farmland/andisol
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - Y
		  - - Z
		  - - "0"
		mapping:
		  X: minecraft:air
		  Y: tfc:crop/sugarcane[age=2,part=bottom]
		  Z: tfc:farmland/andisol
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - Y
		  - - Z
		  - - "0"
		mapping:
		  X: minecraft:air
		  Y: tfc:crop/sugarcane[age=3,part=bottom]
		  Z: tfc:farmland/andisol
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - Y
		  - - Z
		  - - "0"
		mapping:
		  X: tfc:crop/sugarcane[age=4,part=top]
		  Y: tfc:crop/sugarcane[age=4,part=bottom]
		  Z: tfc:farmland/andisol
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - Y
		  - - Z
		  - - "0"
		mapping:
		  X: tfc:crop/sugarcane[age=5,part=top]
		  Y: tfc:crop/sugarcane[age=5,part=bottom]
		  Z: tfc:farmland/andisol
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - Y
		  - - Z
		  - - "0"
		mapping:
		  X: tfc:crop/sugarcane[age=6,part=top]
		  Y: tfc:crop/sugarcane[age=6,part=bottom]
		  Z: tfc:farmland/andisol
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - Y
		  - - Z
		  - - "0"
		mapping:
		  X: tfc:crop/sugarcane[age=7,part=top]
		  Y: tfc:crop/sugarcane[age=7,part=bottom]
		  Z: tfc:farmland/andisol
		```
+ 黄麻
	[](#jute)
	\$(bold)[温度](the_world/climate#temperature): 2 - 25 °C
	\$(bold)[湿度](mechanics/hydration): 15 - 90 %
	^类别^: 杂项
	
	^\$(3)氮^: 60 ^\$(6)磷^: 40 ^\$(d)钾^: +40\$()
	黄麻是两格高的作物。黄麻种子可以种植在耕地上，会长到两格高，产出\$(thing)黄麻\$()和\$(thing)黄麻种子\$()。
+ _untitled_
	```tfc:multimultiblock
	```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - Y
		  - - Z
		  - - "0"
		mapping:
		  X: minecraft:air
		  Y: tfc:crop/jute[age=0,part=bottom]
		  Z: tfc:farmland/entisol
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - Y
		  - - Z
		  - - "0"
		mapping:
		  X: minecraft:air
		  Y: tfc:crop/jute[age=1,part=bottom]
		  Z: tfc:farmland/entisol
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - Y
		  - - Z
		  - - "0"
		mapping:
		  X: minecraft:air
		  Y: tfc:crop/jute[age=2,part=bottom]
		  Z: tfc:farmland/entisol
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - Y
		  - - Z
		  - - "0"
		mapping:
		  X: tfc:crop/jute[age=3,part=top]
		  Y: tfc:crop/jute[age=3,part=bottom]
		  Z: tfc:farmland/entisol
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - Y
		  - - Z
		  - - "0"
		mapping:
		  X: tfc:crop/jute[age=4,part=top]
		  Y: tfc:crop/jute[age=4,part=bottom]
		  Z: tfc:farmland/entisol
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - Y
		  - - Z
		  - - "0"
		mapping:
		  X: tfc:crop/jute[age=5,part=top]
		  Y: tfc:crop/jute[age=5,part=bottom]
		  Z: tfc:farmland/entisol
		```
+ 纸莎草
	[](#papyrus)
	\$(bold)[温度](the_world/climate#temperature): 11 - 31 °C
	\$(bold)[湿度](mechanics/hydration): 50 - 100 %
	^类别^: 杂项
	
	^\$(3)氮^: 60 ^\$(6)磷^: +40 ^\$(d)钾^: 40\$()
	纸莎草是两格高的作物。纸莎草种子可以种植在耕地上，会长到两格高，产出[纸莎草](mechanics/papermaking)和\$(thing)纸莎草种子\$()。
+ _untitled_
	```tfc:multimultiblock
	```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - Y
		  - - Z
		  - - "0"
		mapping:
		  X: minecraft:air
		  Y: tfc:crop/papyrus[age=0,part=bottom]
		  Z: tfc:farmland/fluvisol
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - Y
		  - - Z
		  - - "0"
		mapping:
		  X: minecraft:air
		  Y: tfc:crop/papyrus[age=1,part=bottom]
		  Z: tfc:farmland/fluvisol
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - Y
		  - - Z
		  - - "0"
		mapping:
		  X: minecraft:air
		  Y: tfc:crop/papyrus[age=2,part=bottom]
		  Z: tfc:farmland/fluvisol
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - Y
		  - - Z
		  - - "0"
		mapping:
		  X: tfc:crop/papyrus[age=3,part=top]
		  Y: tfc:crop/papyrus[age=3,part=bottom]
		  Z: tfc:farmland/fluvisol
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - Y
		  - - Z
		  - - "0"
		mapping:
		  X: tfc:crop/papyrus[age=4,part=top]
		  Y: tfc:crop/papyrus[age=4,part=bottom]
		  Z: tfc:farmland/fluvisol
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - Y
		  - - Z
		  - - "0"
		mapping:
		  X: tfc:crop/papyrus[age=5,part=top]
		  Y: tfc:crop/papyrus[age=5,part=bottom]
		  Z: tfc:farmland/fluvisol
		```
#坩埚

```patchouli-entry
id: mechanics/crucible
name: 坩埚
category: tfc:mechanics
icon: tfc:crucible
read_by_default: true
extra_recipe_mappings:
  tfc:ceramic/unfired_crucible: 1
  tfc:crucible: 2
```

+ _untitled_
	\$(thing)坩埚\$()是一种用来制作[合金](mechanics/crucible#advanced_alloying)的高级设备。用坩埚制作合金比用[小缸](getting_started/primitive_alloys)更精确也更方便，
	
	要制作坩埚，首先你得先获取一些比普通黏土更强的[耐火黏土](mechanics/fire_clay)。耐火黏土可以通过黏土塑形制作成\$()未烧制的坩埚\$()。
+ _untitled_
	```tfc:knapping_recipe
	tfc:knapping/ceramic/unfired_crucible
	```
	黏土塑形制作\$(thing)未烧制的坩埚\$()。
+ _untitled_
	```tfc:heat_recipe
	tfc:heating/crucible
	```
	塑形之后就可以用[坑窑](getting_started/pit_kiln)或[木炭炉](mechanics/charcoal_forge)之类的设备将坩埚\$(thing)烧制\$()成型了。
	
	要使用坩埚，就得给它提供一个热源。任何位于坩埚下方的方块都可以作为其热源。[木炭炉](mechanics/charcoal_forge)就很合适。
+ _untitled_
	```patchouli:multiblock
	multiblock:
	  pattern:
	    - - "   "
	      - " C "
	      - "   "
	    - - GGG
	      - G0G
	      - GGG
	  mapping:
	    "0": tfc:charcoal_forge[heat_level=7]
	    C: tfc:crucible
	    G: tfc:rock/bricks/granite
	enable_visualize: false
	```
	用木炭炉加热坩埚
+ 高级冶金术
	[](#advanced_alloying)
	现在你就可以使用坩埚了。与坩埚互动打开\$(thing)坩埚界面\$()，如右图所示。屏幕上方的区域显示的是坩埚内目前容纳的金属。其中第一行写的是如果现在从坩埚内取出将会得到的金属或合金的名称。其他条目则是现在坩埚内的剩余金属的种类和数量。
+ _untitled_
	```patchouli:image
	images:
	  - tfc:textures/gui/book/gui/crucible.png
	border: false
	```
	坩埚界面
+ _untitled_
	坩埚有九个槽位，可以放入物品进行熔化，熔化的液态金属会直接加入坩埚。盛有熔融金属的容器，如[模具](getting_started/pottery#mold)，也可以放在这里，它们会慢慢将金属排入坩埚，从而精确控制合金成分。在将鼠标悬停在正在排液的模具或容器上时按住\$(item)\$(k:key.sneak)\$()可加快排液速度。
	
	模具或其他流体容器也可以放在输出槽中，它们会慢慢被坩埚中的当前内容物填满。
+ _untitled_
	根据热源方块的温度变化，屏幕左侧的温度指示器也会相应上升或下降。只要温度足够熔化金属，就随时可将金属取出。
	
	值得一提的是，破坏坩埚并不会销毁它的内容物。你可以用这种方法将合金转移到其他地方。
#乳制品

```patchouli-entry
id: mechanics/dairy
name: 乳制品
category: tfc:mechanics
icon: tfc:textures/item/food/cheese.png
read_by_default: true
extra_recipe_mappings:
  minecraft:milk_bucket: 0
  tfc:food/cheese: 1
```

+ 乳制品
	\$(thing)乳制品\$()是一种主要由[产奶动物](mechanics/animal_husbandry#dairy_animals)提供的[营养元素](getting_started/food_and_water#nutrients)。可以直接用陶罐喝奶，会回复[口渴度](the_world/food_and_water#thirst)，也可以将奶做成\$(thing)奶酪\$()。需要注意的是，空腹喝奶并不能摄入多少营养元素，只有在吃过其他食物之后再喝奶才能吸收营养。换句话说，连续多次喝奶的效率比吃一顿饭、喝一口奶的效率要差。
+ _untitled_
	想要制作\$(thing)奶酪\$()，第一步是将\$(thing)奶\$()和\$(thing)醋\$()以 9 比 1 的比例在[大桶](mechanics/barrels)里混合。最简单的方法是先往桶里倒 9 桶奶，然后再倒 1 桶醋。这样就能得到\$(thing)醋奶\$()。
+ _untitled_
	```tfc:sealed_barrel_recipe
	tfc:barrel/curdled_milk
	```
	将醋奶混合之后密封大桶，奶就会开始逐渐凝固成炼乳，只需静待 8 小时即可。
+ _untitled_
	```tfc:sealed_barrel_recipe
	tfc:barrel/food/cheese
	```
	制成炼乳之后先不要开盖，继续静置 8 小时就能将炼乳凝固成奶酪了。奶酪是一种保质期很长的乳制品，且可以作为某些餐点（比如[三明治](mechanics/sandwiches)）的食材以提供乳制品营养元素。
#伤害类型

```patchouli-entry
id: mechanics/damage_types
name: 伤害类型
category: tfc:mechanics
icon: tfc:metal/sword/red_steel
read_by_default: true
```

+ _untitled_
	\$(thing)物理伤害的类型\$()描述了玩家和生物可以造成的伤害的性质。一共有三种类型：\$(thing)突刺伤害\$()、\$(thing)斩击伤害\$()、和\$(thing)打击伤害\$()。有些生物对特定的伤害类型有抗性，因此部分武器对其效果不彰。
+ 突刺
	\$(thing)突刺伤害\$()是由尖利的武器（例如\$(thing)刀\$()）、投掷物（例如\$(thing)箭\$()和\$(thing)标枪\$()）、带尖牙的怪物（例如\$(thing)蜘蛛\$()）和[仙人掌](the_world/flora#cacti)造成的。\$(thing)骷髅\$()完全免疫突刺伤害，而\$(thing)僵尸\$()则对其抗性较低。
+ 斩击
	\$(thing)斩击伤害\$()是由具有长而锋利的边缘的武器造成的伤害，例如\$(thing)斧头\$()和\$(thing)剑\$()。这也包含大型[捕食者](the_world/wild_animals#predators)，例如熊和狮子等造成的伤害。\$(thing)爬行者\$()更容易受到斩击伤害。
+ 打击
	\$(thing)打击伤害\$()是由钝器造成的伤害，例如\$(thing)锤子\$()和\$(thing)狼牙棒\$()。 \$(thing)僵尸\$()的攻击也造成打击伤害，并且它们对打击伤害有抗性。\$(thing)爬行者\$()也能抵御一部分打击伤害。\$(thing)骷髅\$()则更容易受到打击伤害。
+ _untitled_
	[](#armor)
	[盔甲](mechanics/armor)对不同伤害具有不同的防御力。一般来说，盔甲的质量越高，防御力整体越好，但同等级的盔甲仍可能稍有差异。比如在几种青铜盔甲中，\$(thing)铋铜\$()盔甲更擅长防御\$(thing)打击伤害\$()，\$(thing)黑铜\$()盔甲更擅长防御\$(thing)突刺伤害\$()，而传统的\$(thing)青铜\$()对任何伤害的防御都还不错。
+ _untitled_
	对于\$(thing)彩钢\$()来说，\$(thing)蓝钢\$()更擅长防御\$(thing)打击伤害\$()，而\$(thing)红钢\$()更擅长防御\$(thing)突刺伤害\$()。
#食物保鲜

```patchouli-entry
id: mechanics/decay
name: 食物保鲜
category: tfc:mechanics
icon: minecraft:rotten_flesh
read_by_default: true
```

+ _untitled_
	在群峦传说中，食物可不会在箱子里等你一辈子！随着时间的推移，食物会\$(thing)过期\$()，变得腐烂。吃腐烂的食物不会恢复任何饥饿度，并且有可能导致\$(thing)饥饿\$()或\$(thing)中毒\$()之类的负面效果!
	
	幸运的是，你可以使用多种\$(thing)保鲜\$()手段来让你的食物储存得更久些。
+ _untitled_
	把鼠标悬停在食物上就能看到食物的保质期。比如：
	
	^\$(2)保质期: 1000年 七月5日 5:30（约5天）^
	
	通过使用各种保鲜手段，可延长食物的保质期。
+ 缸
	[](#small_vessels)
	把食物装入\$(thing)缸\$()中是保存食物最简单的方法之一。\$(thing)大缸\$()最多可以存储九组物品。\$(thing)密封\$()时，里面的物品将获得\$(5)^储存^词条。拥有储存词条的食物的保质期是平常的 2 倍。
	
	\$(thing)小缸\$()最多可以存储四组物品，放入其中的食物也会获得\$(5)^储存^词条。
+ _untitled_
	[](#large_vessels)
	```patchouli:multiblock
	multiblock:
	  pattern:
	    - - X
	    - - "0"
	  mapping:
	    X: tfc:ceramic/large_vessel[sealed=true]
	enable_visualize: false
	```
	一个密封的大缸。
+ 烹饪
	另一种十分简单的食物保鲜方法是烹饪。\$(thing)熟肉\$()比生肉的储存时间要久。
	
	注意，加热时使用的设备会影响食物的保质期。某些太热的设备，例如[木炭炉](mechanics/charcoal_forge)和[高炉](mechanics/crucible)^不适合^用来烹饪食物。它们烤出来的食物的保质期会打折扣。
+ _untitled_
	```tfc:heat_recipe
	tfc:heating/food/cooked_mutton
	```
	相反，用[篝火](getting_started/firepit)或[锻铁烤架](mechanics/grill)做出来的食物会获得保质期加成。比如，用\$(thing)篝火\$()烤制的羊肉保质期会延长 33 %，而用\$(thing)锻铁烤架\$()烤制的则会延长 66 %！
+ 抹盐
	[](#salting)
	\$(thing)抹盐\$()是一种能让肉类保存得更久的方法。将肉与\$(thing)盐\$()在合成格内合成就能把盐抹上去。只有生肉可以抹盐，但抹了盐的生肉依然可以烤制，不会失去该词条。
+ _untitled_
	```tfc:quern_recipe
	tfc:quern/powder/salt
	```
	[研磨](mechanics/quern)[石盐](the_world/ores_and_minerals#halite)可以得到盐。石盐是一种矿物。
+ 舔盐
	```patchouli:multiblock
	multiblock:
	  pattern:
	    - - X
	    - - "0"
	  mapping:
	    X: tfc:groundcover/salt_lick
	enable_visualize: false
	```
	有时森林里会在地上自然生成盐。可以从地上把盐挖走，也可以用\$(item)\$(k:key.use)\$()放回去。
+ _untitled_
	[](#vinegar)
	\$(thing)酸渍\$()是一种用来保存水果、蔬菜和肉类的方法。
	
	在装有 250 mB \$(thing)酒精饮料\$()的[大桶](mechanics/barrels)中封入一颗水果就能将其转化为\$(thing)醋\$()。酸渍前，必须先将食物在\$(thing)卤水\$()中\$(thing)腌制\$()。卤水是由 1 份\$(thing)醋\$()和 9 份\$(thing)咸水\$()在大桶中混合而成的。
+ _untitled_
	将腌制好的食物放在装有醋的大桶中并密封便能延长其保质期。每份食物必须要对应至少 125 mB 的醋。不过一旦启封大桶或将食物从中取出，延长的效果就会失效。
+ _untitled_
	[](#pests)
	食物应储存在大缸或[小缸](getting_started/pottery#vessel)中。放置在箱子或其他容器中的食物会吸引\$(thing)老鼠\$()。老鼠可以打开容器并将其中的食物吃掉，不过如果它们在几分钟内没有找到可以吃的东西就会消失。当你打开被老鼠光顾过的容器时会看到“这个容器里传来一股恶臭”的提示信息。提示：如果你在不关闭容器界面的情况下启封再密封大缸就不会招引害虫。
#染料

```patchouli-entry
id: mechanics/dye
name: 染料
category: tfc:mechanics
icon: minecraft:red_dye
read_by_default: true
```

+ _untitled_
	所有 16 种原版\$(thing)染料颜色\$()都可以作为物品获得。大多数花和其他彩色植物可以用[手推磨](mechanics/quern)研磨成染料。[金属矿石](the_world/ores_and_minerals)的粉末可以直接合成染料。[石墨](the_world/ores_and_minerals#graphite)、[高岭石](the_world/ores_and_minerals#kaolinite)、[钾石盐](the_world/ores_and_minerals#sylvite)、[青金石](the_world/ores_and_minerals#lapis_lazuli)、焦炭粉和木炭粉也可以合成染料。
+ 液体染料
	```patchouli:spotlight
	item: tfc:bucket/red_dye
	link_recipes: false
	```
	染料也可以制成液体。一份染料物品与 1000mB \$(item)水\$()在[锅](mechanics/pot)中煮沸，可以得到等量的\$(thing)液体染料\$()。液体染料用于在[大桶](mechanics/barrels)中给物品染色。
+ _untitled_
	```tfc:sealed_barrel_recipe
	tfc:barrel/red_concrete_powder
	```
	在大桶中给物品染色比使用染料物品更便宜，只需 25mB 液体染料。
+ _untitled_
	```tfc:sealed_barrel_recipe
	tfc:barrel/music_disc_chirp
	```
	液体染料可用于制作\$(item)音乐唱片\$()。
+ _untitled_
	```tfc:sealed_barrel_recipe
	tfc:barrel/red_dyeable
	```
	液体染料甚至可以为皮革染色，就像用合成方式染色一样！
+ _untitled_
	[](#lye)
	```tfc:sealed_barrel_recipe
	tfc:barrel/bleach_bed
	```
	五份\$(item)草木灰\$()与 1000mB \$(item)水\$()在[锅](mechanics/pot)中煮沸可以得到碱液。25mB 碱液可以去除彩色物品的颜色。
+ 杂项
	\$(li)\$(item)黑色染料\$()用于[命名台](mechanics/scribing_table)。\$(li)\$(item)红色染料\$()用于[火药桶](mechanics/powderkegs)。\$(li)未烧制的[小缸](mechanics/decay#small_vessels)和[大缸](mechanics/decay#large_vessels)可以染色。
#土壤肥力

```patchouli-entry
id: mechanics/farmland
name: 土壤肥力
category: tfc:mechanics
icon: tfc:farmland/mollisol
read_by_default: true
extra_recipe_mappings:
  tfc:dirt/entisol: 2
  tfc:dirt/andisol: 3
  tfc:dirt/fluvisol: 4
  tfc:dirt/alfisol: 5
  tfc:dirt/mollisol: 6
  tfc:dirt/podzol: 7
  tfc:dirt/aridisol: 8
  tfc:dirt/oxisol: 9
```

+ 土壤肥力
	世界各地不同位置分布着八种土壤类型。这些土壤的肥力各不相同，从非常肥沃——所有施用的[肥料](mechanics/fertilizers)效果提升 20%，且所有[农作物](mechanics/crops)恢复的养分也提升 20%——到非常贫瘠——效果比普通土壤低 20%。
+ _untitled_
	土壤质量仅影响肥料的效果；未施肥的作物无论种植在何种土壤上，生长速度都相同。虽然养分会被作物消耗，但土壤质量不会因后续种植而降低。
	
	以下几页将概述每种土壤类型。
+ 新成土
	[](#entisol)
	```patchouli:multiblock
	multiblock:
	  pattern:
	    - - X
	    - - "0"
	  mapping:
	    X: tfc:dirt/entisol
	enable_visualize: false
	```
	新成土是最常见的土壤类型，遍布世界各地。它是一种普通品质的土壤，无养分加成。
+ 火山土
	[](#andisol)
	```patchouli:multiblock
	multiblock:
	  pattern:
	    - - X
	    - - "0"
	  mapping:
	    X: tfc:dirt/andisol
	enable_visualize: false
	```
	火山土发现于火山地区。它是一种高品质土壤，有 10% 的养分加成。
+ 冲积土
	[](#fluvisol)
	```patchouli:multiblock
	multiblock:
	  pattern:
	    - - X
	    - - "0"
	  mapping:
	    X: tfc:dirt/fluvisol
	enable_visualize: false
	```
	冲积土发现于有旱季和雨季地区的河流沿岸。它是一种高品质土壤，有 10% 的养分加成。
+ 淋溶土
	[](#alfisol)
	```patchouli:multiblock
	multiblock:
	  pattern:
	    - - X
	    - - "0"
	  mapping:
	    X: tfc:dirt/alfisol
	enable_visualize: false
	```
	淋溶土发现于温带阔叶林中。它是一种高品质土壤，有 10% 的养分加成。
+ 软土
	[](#mollisol)
	```patchouli:multiblock
	multiblock:
	  pattern:
	    - - X
	    - - "0"
	  mapping:
	    X: tfc:dirt/mollisol
	enable_visualize: false
	```
	软土发现于[降雨量](the_world/climate#rainfall)至少 250mm 的寒冷草原。它是一种非常高品质的土壤，有 20% 的养分加成。
+ 灰化土
	[](#podzol)
	```patchouli:multiblock
	multiblock:
	  pattern:
	    - - X
	    - - "0"
	  mapping:
	    X: tfc:dirt/podzol
	enable_visualize: false
	```
	灰化土发现于针叶林中。它是一种低品质土壤，养分效果降低 10%。
+ 旱成土
	[](#aridisol)
	```patchouli:multiblock
	multiblock:
	  pattern:
	    - - X
	    - - "0"
	  mapping:
	    X: tfc:dirt/aridisol
	enable_visualize: false
	```
	旱成土发现于干旱地区。它是一种低品质土壤，养分效果降低 10%。
+ 氧化土
	[](#oxisol)
	```patchouli:multiblock
	multiblock:
	  pattern:
	    - - X
	    - - "0"
	  mapping:
	    X: tfc:dirt/oxisol
	enable_visualize: false
	```
	氧化土发现于潮湿的热带地区。它是一种非常低品质的土壤，养分效果降低 20%。
#肥料

```patchouli-entry
id: mechanics/fertilizers
name: 肥料
category: tfc:mechanics
icon: tfc:powder/sylvite
read_by_default: true
```

+ 施肥
	肥料用于为[农作物](mechanics/crops)添加养分。手持肥料，右键点击\$(thing)耕地\$()或\$(thing)作物\$()即可添加养分。应该会出现粒子效果，表示肥料已添加。
	肥料的效力受其所用[耕地](mechanics/farmland)类型的影响。
+ _untitled_
	```patchouli:spotlight
	item: tfc:compost
	link_recipes: false
	```
	堆肥是[堆肥桶](mechanics/composter)的产物。
	\$(li)\$(b)氮\$()：20\$()\$(li)\$(d)钾\$()：20\$()
+ _untitled_
	```patchouli:spotlight
	item: minecraft:bone_meal
	link_recipes: false
	```
	骨粉是由骨头制成的。
	\$(li)\$(6)磷\$()：10\$()
+ _untitled_
	```patchouli:spotlight
	item: tfc:food/shellfish
	link_recipes: false
	```
	贝类可以通过杀死一些水生无脊椎动物获得。
	\$(li)\$(6)磷\$()：15\$()
+ _untitled_
	```patchouli:spotlight
	item: tfc:powder/saltpeter
	link_recipes: false
	```
	硝石粉是由它的矿石制成的。
	\$(li)\$(b)氮\$()：10\$()\$(li)\$(d)钾\$()：40\$()
+ _untitled_
	```patchouli:spotlight
	item: tfc:groundcover/guano
	link_recipes: false
	```
	鸟粪石可以在繁茂生物群系的地下和岩石海岸线上找到。
	\$(li)\$(b)氮\$()：40\$()\$(li)\$(6)磷\$()：50\$()\$(li)\$(d)钾\$()：10\$()
+ _untitled_
	```patchouli:spotlight
	item: tfc:powder/wood_ash
	link_recipes: false
	```
	草木灰可以通过破坏篝火获得。将火把丢入水中也有几率产生。
	\$(li)\$(6)磷\$()：10\$()\$(li)\$(d)钾\$()：20\$()
+ _untitled_
	```patchouli:spotlight
	item: tfc:powder/sylvite
	link_recipes: false
	```
	钾石盐粉是由它的对应矿石磨成的。
	\$(li)\$(d)^钾^：50\$()
#耐火黏土

```patchouli-entry
id: mechanics/fire_clay
name: 耐火黏土
category: tfc:mechanics
icon: tfc:fire_clay
read_by_default: true
```

+ _untitled_
	耐火黏土能做成的东西不多，但每个都是科技进步上不可或缺的要素！耐火黏土比普通黏土能承受更高的高温，因此某些高级设备只能用耐火黏土建造。
+ _untitled_
	```patchouli:crafting
	tfc:crafting/fire_clay
	```
	耐火黏土由在[手推磨](mechanics/quern)中磨碎的[石墨](the_world/ores_and_minerals#graphite)粉以及[高岭石](the_world/ores_and_minerals#kaolinite)粉制成。
+ _untitled_
	```tfc:heat_recipe
	tfc:heating/powder/kaolinite
	```
	高岭石粉是通过加热[高岭土](the_world/ores_and_minerals#kaolinite)制成的。然而，这个过程并不完美，只有 20%% 的黏土能变成粉末！
+ _untitled_
	[](#crucible)
	```tfc:knapping_recipe
	tfc:knapping/ceramic/unfired_crucible
	```
	用耐火黏土塑形成未烧制的[坩埚](mechanics/crucible)。
+ _untitled_
	[](#fire_bricks)
	```tfc:knapping_recipe
	tfc:knapping/ceramic/unfired_fire_brick
	```
	作为理想的隔热材料，耐火砖是建造[高炉](mechanics/blast_furnace)的必需品。
+ _untitled_
	```tfc:knapping_recipe
	tfc:knapping/ceramic/unfired_fire_ingot_mold
	```
	\$(thing)耐火铸锭模具\$()是一种更坚固的[铸锭模具](getting_started/pottery#mold)，破裂几率仅为 1/100，而普通铸锭模具为 1/10。
#钓鱼

```patchouli-entry
id: mechanics/fishing
name: 钓鱼
category: tfc:mechanics
icon: tfc:metal/fishing_rod/copper
read_by_default: true
extra_recipe_mappings:
  tag:c:tools/fishing_rod: 0
```

+ _untitled_
	河湖大海中的鱼必须通过\$(thing)钓鱼\$()才能抓住。若鱼竿上有鱼饵，鱼儿便会试图咬钩。咬钩的鱼儿有时会把鱼饵吃掉。鱼咬钩后还要收线才能钓上来。更高级的鱼钩收线时越容易操控。
+ _untitled_
	```tfc:anvil_recipe
	tfc:anvil/metal/fish_hook/bismuth_bronze
	```
	首先，你需要在[砧](mechanics/anvils)上锻造出一只鱼钩。
+ 钓鱼竿
	```patchouli:crafting
	tfc:crafting/metal/fishing_rod/bismuth_bronze
	```
	制作钓鱼竿需要鱼钩。
+ _untitled_
	钓鱼必须要有鱼饵才行。每次钓鱼成功后，鱼饵都有一定几率被消耗掉。可以使用工作台将鱼饵添加到钓鱼竿上。普通的鱼用\$(thing)种子\$()或\$(thing)贝类\$()就行了。而更大的鱼，例如\$(thing)海豚\$()和\$(thing)逆戟鲸\$()，就需要\$(item)鳕鱼\$()、\$(item)三文鱼\$()、\$(item)热带鱼\$()或\$(item)蓝鳃鱼\$()。
+ _untitled_
	手持钓鱼竿按\$(item)\$(k:key.use)\$()就能抛竿。等待鱼儿靠近并咬钩后，按\$(item)\$(k:key.use)\$()就能收线。每按一次收线屏幕底下的蓄力条就会增加。收线太快会导致鱼儿脱钩，你的鱼饵也就没了！你要做的就是把鱼儿拖上岸，然后用别的什么东西把它敲晕。提示：可以把鱼竿放在副手上。
+ _untitled_
	```patchouli:image
	images:
	  - tfc:textures/gui/book/tutorial/fishing.png
	border: true
	```
	钓鱼时蓄力条会取代经验条。
#助焊剂

```patchouli-entry
id: mechanics/flux
name: 助焊剂
category: tfc:mechanics
icon: tfc:powder/flux
read_by_default: true
extra_recipe_mappings:
  tfc:powder/flux: 0
```

+ _untitled_
	助焊剂是[焊接](mechanics/anvils#welding)时的必需品，同时它也是[高炉](mechanics/blast_furnace)炼钢所必须的催化剂。助焊剂是在[手推磨](mechanics/quern)上制作的。
	
	助焊剂最直接的获取方式是研磨[硼砂](the_world/ores_and_minerals#borax)。
+ _untitled_
	```tfc:quern_recipe
	tfc:quern/powder/flux
	```
	除硼砂外，某些岩石，如\$(thing)石灰岩\$()、\$(thing)白云岩\$()、\$(thing)白垩岩\$()、和\$(thing)大理岩\$()等，以及\$(thing)鳞甲\$()、\$(thing)蛤蜊\$()、\$(thing)软体动物\$()、和[贝类](the_world/wild_animals#shellfish)等某些生物产品也可以被研磨成助焊剂。
#宝石

```patchouli-entry
id: mechanics/gems
name: 宝石
category: tfc:mechanics
icon: tfc:gem/opal
read_by_default: true
```

+ _untitled_
	宝石是一种矿物，生成在各种不同的地方，例如\$(thing)河流下方\$()和[火山](the_world/geology)中。有关确切条件的详细信息，请参阅[矿石和矿物章节](the_world/ores_and_minerals)。
+ _untitled_
	```patchouli:spotlight
	item: tag:tfc:gem_powders
	link_recipes: false
	```
	宝石可以用[手推磨](mechanics/quern)磨成粉末。宝石粉在[玻璃染色](mechanics/glassworking_applications#coloring)中特别有用。
+ _untitled_
	通过[洗矿](mechanics/sluices)和[淘金](mechanics/panning)可以获得\$(thing)未切割的宝石\$()。洗矿槽可能获得的宝石种类取决于所用的原材料的岩石种类。
+ _untitled_
	相比于普通的矿石，宝石矿石有更高的\$(thing)硬度\$()，因此需要特定种类的镐才能挖掘。挖掘不同种类的宝石矿石所需的\$(thing)镐\$()的等级如下：
	\$(li)紫水晶；钢镐\$(li)钻石：黑钢镐\$(li)绿宝石：钢镐\$(li)青金石：锻铁镐\$(li)蛋白石：锻铁镐\$(li)黄铁矿：铜镐\$(li)红宝石：黑钢镐\$(li)蓝宝石：黑钢镐\$(li)黄玉：钢镐
+ _untitled_
	要切割宝石，你必须制作\$(thing)砂纸\$()。砂纸由黑沙、助焊剂、胶水、任意宝石粉和纸制成。将未切割的宝石与砂纸合成即可切割宝石。
+ _untitled_
	```patchouli:crafting
	tfc:crafting/sandpaper
	```
#玻璃制品

```patchouli-entry
id: mechanics/glassworking_applications
name: 玻璃制品
category: tfc:mechanics
icon: minecraft:glass
read_by_default: true
extra_recipe_mappings:
  tag:tfc:glass_batches: 1
  tag:c:glass_panes: 2
  tag:c:glass_blocks: 4
```

+ _untitled_
	最简单的玻璃制品是\$(thing)玻璃板\$()和\$(thing)玻璃块\$()。要制作它们，必须先有装有\$(thing)玻璃配料\$()的[吹管](mechanics/glassworking#blowpipe)，然后执行\$(thing)浇注\$()。
	\$(li)^台盆浇注^用于制作\$(thing)玻璃板\$()\$(li)^盆式浇注^用于制作\$(thing)玻璃块\$()
+ _untitled_
	玻璃也可以在浇注前\$(thing)染色\$()以制作彩色玻璃。颜色取决于玻璃配料的类型以及添加的任何粉末。
	
	每种\$(thing)玻璃配料\$()制成的玻璃都有其固有的自然色。\$(thing)二氧化硅\$()玻璃配料可以制成多种颜色，而\$(thing)橄榄石质\$()和\$(thing)火山质\$()玻璃可制成的颜色相对较少。
+ 台盆浇注
	\$(thing)玻璃板\$()通过\$(thing)台盆浇注\$()制作。浇注台由最多十六个\$(thing)镀黄铜块\$()在一个连续区域内铺设而成。
	
	 1. 将[玻璃配料](mechanics/glassworking)添加到\$(thing)吹管\$()上。
	 2. 将吹管加热至\$(4)^淡红色^。
	 3. 在浇注台顶部使用\$(thing)吹管\$()。
	 4. 最后用[玻璃压板](mechanics/glassworking#paddle)右键点击以压平玻璃。
+ _untitled_
	```patchouli:image
	images:
	  - tfc:textures/gui/book/tutorial/glass_panes_1.png
	  - tfc:textures/gui/book/tutorial/glass_panes_2.png
	  - tfc:textures/gui/book/tutorial/glass_panes_3.png
	border: true
	```
	玻璃冷却后，可以用[宝石锯](mechanics/glassworking#saw)将其破坏以获得成品。
+ 盆式浇注
	\$(thing)玻璃块\$()通过\$(thing)盆式浇注\$()制作。浇注盆由\$(thing)镀黄铜块\$()围成一个除顶部外各面封闭的空格区域。
	
	 1. 将[玻璃配料](mechanics/glassworking)添加到\$(thing)吹管\$()上。
	 2. 将吹管加热至\$(4)^淡红色^。
	 3. 在浇注盆顶部使用\$(thing)吹管\$()。
+ _untitled_
	```patchouli:image
	images:
	  - tfc:textures/gui/book/tutorial/glass_block_1.png
	  - tfc:textures/gui/book/tutorial/glass_block_2.png
	  - tfc:textures/gui/book/tutorial/glass_block_3.png
	border: true
	```
	玻璃冷却后，可以用[宝石锯](mechanics/glassworking#saw)将其破坏以获得成品。
+ 玻璃染色
	[](#coloring)
	玻璃有其基于所用[玻璃配料](mechanics/glassworking)类型的自然色。其他颜色可以使用[碗](mechanics/bowls)来制作。
	
	使用时，将碗放在地上，然后用所需的\$(thing)粉末\$()右键点击碗。在\$(thing)浇注\$()之前，用\$(thing)吹管\$()右键点击碗，将粉末添加到配料中。
+ _untitled_
	
	
	接下来的几页展示了制作每种颜色所需的不同玻璃类型和粉末材料组合。
+ 染料颜色
	\$(li)^\$(7)白色^：二氧化硅或赤铁质玻璃 + \$(thing)苏打粉\$()\$(li)^\$(0)黑色^：任意玻璃 + \$(thing)石墨粉\$()\$(li)^\$(8)灰色^：任意 + \$(thing)石墨粉\$() + \$(thing)苏打粉\$()\$(li)^\$(7)淡灰色^：任意 + \$(thing)石墨粉\$() + 2x \$(thing)苏打粉\$()\$(li)^\$(5)紫色^：任意 + \$(thing)铁粉\$() + \$(thing)铜粉\$()\$(li)^\$(#964b00)棕色^：任意 + \$(thing)镍粉\$()\$(li)^\$(3)青色^：非火山质玻璃 + \$(thing)铜粉\$() + \$(thing)蓝宝石粉\$()\$(li)^\$(2)绿色^：二氧化硅或赤铁质玻璃 + \$(thing)铁粉\$()
+ _untitled_
	\$(li)^\$(a)黄绿色^：二氧化硅或赤铁质玻璃 + \$(thing)铁粉\$() + \$(thing)苏打粉\$()\$(li)^\$(b)淡蓝色^：二氧化硅玻璃 + \$(thing)青金石粉\$()\$(li)^\$(1)蓝色^：二氧化硅玻璃 + \$(thing)铜粉\$()\$(li)^\$(4)红色^：二氧化硅或赤铁质玻璃 + \$(thing)锡粉\$()\$(li)^\$(6)黄色^：二氧化硅或赤铁质玻璃 + \$(thing)银粉\$()\$(li)^\$(#ef8e38)橙色^：二氧化硅玻璃 + \$(thing)黄铁矿粉\$()\$(li)^\$(5)品红色^：二氧化硅或赤铁质玻璃 + \$(thing)红宝石粉\$()\$(li)^\$(d)粉红色^：二氧化硅玻璃 + \$(thing)金粉\$()\$(li)^\$(0)遮光^：非二氧化硅玻璃 + \$(thing)紫水晶粉\$()
+ 玻璃颜色可用性
	```raw/tfc:table_small
	{
	  "type": "tfc:table_small",
	  "strings": [
	    {
	      "text": ""
	    },
	    {
	      "text": "C"
	    },
	    {
	      "text": "T"
	    },
	    {
	      "fill": "0xff42f2"
	    },
	    {
	      "fill": "0x8af3ff"
	    },
	    {
	      "fill": "0x526cff"
	    },
	    {
	      "fill": "0xe3e3e3"
	    },
	    {
	      "fill": "0xe69407"
	    },
	    {
	      "fill": "0xc738c9"
	    },
	    {
	      "fill": "0xffe81c"
	    },
	    {
	      "fill": "0x48ff1f"
	    },
	    {
	      "fill": "0xe01414"
	    },
	    {
	      "fill": "0x0c9400"
	    },
	    {
	      "fill": "0x188a9e"
	    },
	    {
	      "fill": "0x7d4f00"
	    },
	    {
	      "fill": "0x6e059c"
	    },
	    {
	      "fill": "0x7d7d7d"
	    },
	    {
	      "fill": "0xbdbdbd"
	    },
	    {
	      "fill": "0x000000"
	    },
	    {
	      "text": "Silica"
	    },
	    {
	      "fill": "0x3d42a8"
	    },
	    {
	      "fill": "0xb33e3e"
	    },
	    {
	      "fill": "0x3eb340"
	    },
	    {
	      "fill": "0x3eb340"
	    },
	    {
	      "fill": "0x3eb340"
	    },
	    {
	      "fill": "0x3eb340"
	    },
	    {
	      "fill": "0x3eb340"
	    },
	    {
	      "fill": "0x3eb340"
	    },
	    {
	      "fill": "0x3eb340"
	    },
	    {
	      "fill": "0x3eb340"
	    },
	    {
	      "fill": "0x3eb340"
	    },
	    {
	      "fill": "0x3eb340"
	    },
	    {
	      "fill": "0x3eb340"
	    },
	    {
	      "fill": "0x3eb340"
	    },
	    {
	      "fill": "0x3eb340"
	    },
	    {
	      "fill": "0x3eb340"
	    },
	    {
	      "fill": "0x3eb340"
	    },
	    {
	      "fill": "0x3eb340"
	    },
	    {
	      "text": "Hematitic"
	    },
	    {
	      "fill": "0xb33e3e"
	    },
	    {
	      "fill": "0x3eb340"
	    },
	    {
	      "fill": "0xb33e3e"
	    },
	    {
	      "fill": "0xb33e3e"
	    },
	    {
	      "fill": "0xb33e3e"
	    },
	    {
	      "fill": "0x3eb340"
	    },
	    {
	      "fill": "0x3d42a8"
	    },
	    {
	      "fill": "0x3eb340"
	    },
	    {
	      "fill": "0x3eb340"
	    },
	    {
	      "fill": "0x3eb340"
	    },
	    {
	      "fill": "0x3eb340"
	    },
	    {
	      "fill": "0x3eb340"
	    },
	    {
	      "fill": "0x3eb340"
	    },
	    {
	      "fill": "0x3eb340"
	    },
	    {
	      "fill": "0x3eb340"
	    },
	    {
	      "fill": "0x3eb340"
	    },
	    {
	      "fill": "0x3eb340"
	    },
	    {
	      "fill": "0x3eb340"
	    },
	    {
	      "text": "Olivine"
	    },
	    {
	      "fill": "0xb33e3e"
	    },
	    {
	      "fill": "0x3eb340"
	    },
	    {
	      "fill": "0xb33e3e"
	    },
	    {
	      "fill": "0xb33e3e"
	    },
	    {
	      "fill": "0xb33e3e"
	    },
	    {
	      "fill": "0xb33e3e"
	    },
	    {
	      "fill": "0xb33e3e"
	    },
	    {
	      "fill": "0xb33e3e"
	    },
	    {
	      "fill": "0xb33e3e"
	    },
	    {
	      "fill": "0xb33e3e"
	    },
	    {
	      "fill": "0xb33e3e"
	    },
	    {
	      "fill": "0x3d42a8"
	    },
	    {
	      "fill": "0x3eb340"
	    },
	    {
	      "fill": "0x3eb340"
	    },
	    {
	      "fill": "0x3eb340"
	    },
	    {
	      "fill": "0x3eb340"
	    },
	    {
	      "fill": "0x3eb340"
	    },
	    {
	      "fill": "0x3eb340"
	    },
	    {
	      "text": "Volcanic"
	    },
	    {
	      "fill": "0xb33e3e"
	    },
	    {
	      "fill": "0x3eb340"
	    },
	    {
	      "fill": "0xb33e3e"
	    },
	    {
	      "fill": "0xb33e3e"
	    },
	    {
	      "fill": "0x3d42a8"
	    },
	    {
	      "fill": "0xb33e3e"
	    },
	    {
	      "fill": "0xb33e3e"
	    },
	    {
	      "fill": "0xb33e3e"
	    },
	    {
	      "fill": "0xb33e3e"
	    },
	    {
	      "fill": "0xb33e3e"
	    },
	    {
	      "fill": "0xb33e3e"
	    },
	    {
	      "fill": "0xb33e3e"
	    },
	    {
	      "fill": "0xb33e3e"
	    },
	    {
	      "fill": "0x3eb340"
	    },
	    {
	      "fill": "0x3eb340"
	    },
	    {
	      "fill": "0x3eb340"
	    },
	    {
	      "fill": "0x3eb340"
	    },
	    {
	      "fill": "0x3eb340"
	    }
	  ],
	  "text": "玻璃颜色的可用性。'C' 表示透明，'T' 表示遮光。某些颜色只能用特定的玻璃配料制作。",
	  "title": "玻璃颜色可用性",
	  "legend": [
	    {
	      "text": "Can be Crafted",
	      "color": "0x3eb340"
	    },
	    {
	      "text": "Cannot be Crafted",
	      "color": "0xb33e3e"
	    },
	    {
	      "text": "Default Color",
	      "color": "0x3d42a8"
	    }
	  ],
	  "columns": 18,
	  "first_column_width": 35,
	  "column_width": 10,
	  "row_height": 10,
	  "left_buffer": 5,
	  "top_buffer": 15,
	  "draw_background": true
	}
	```
+ _empty_
+ _untitled_
	[](#lamp_glass)
	```tfc:glassworking_recipe
	tfc:glassworking/lamp_glass
	```
	\$(thing)灯罩\$()是制作[灯](mechanics/lamps)的必要部件。
+ _untitled_
	[](#jar)
	```tfc:glassworking_recipe
	tfc:glassworking/empty_jar
	```
	[玻璃罐](mechanics/jarring)也是由吹制玻璃制成，但只能用二氧化硅或赤铁质玻璃。
+ _untitled_
	[](#glass_bottle)
	```tfc:glassworking_recipe
	tfc:glassworking/silica_glass_bottle
	```
	还可以制作\$(thing)玻璃瓶\$()。玻璃瓶的强度取决于制作所用的玻璃种类。
+ _untitled_
	```tfc:glassworking_recipe
	tfc:glassworking/lens
	```
	\$(thing)透镜\$()用于制作望远镜、指南针和阳光探测器。
#玻璃加工

```patchouli-entry
id: mechanics/glassworking
name: 玻璃加工
category: tfc:mechanics
icon: tfc:silica_glass_bottle
read_by_default: true
extra_recipe_mappings:
  tfc:powder/lime: 2
  tfc:powder/soda_ash: 3
  tfc:paddle: 7
  tfc:jacks: 8
  tfc:gem_saw: 9
```

+ _untitled_
	玻璃加工是将沙子转化为玻璃的过程。首先，你必须制作\$(thing)玻璃配料\$()，共有四种类型：
	
	 1. \$(thing)二氧化硅\$()，来自白沙。
	 2. \$(thing)赤铁质\$()，来自黄沙、红沙或粉红沙。
	 3. \$(thing)橄榄石质\$()，来自绿沙或棕沙。
	 4. \$(thing)火山质\$()，来自黑沙。
+ _untitled_
	```patchouli:crafting
	tfc:crafting/silica_glass_batch
	```
	然后，使用上述颜色的沙子之一，加上[石灰](mechanics/glassworking#lime)和一种[钾碱](mechanics/glassworking#potash)即可制作玻璃配料。
+ _untitled_
	[](#lime)
	```tfc:heat_recipe
	tfc:heating/powder/lime
	```
	\$(thing)石灰\$()是制作玻璃配料的原料之一。它是一种粉末，通过[加热](mechanics/heating)[助焊剂](mechanics/flux)获得。
+ _untitled_
	[](#potash)
	```tfc:heat_recipe
	tfc:heating/powder/soda_ash_from_seaweed
	```
	玻璃配料还需要一种\$(thing)钾碱\$()或等效物。可以使用\$(thing)苏打粉\$()，这是一种由加热\$(thing)干海草\$()或\$(thing)海带\$()制成的粉末。[硝石](the_world/ores_and_minerals#saltpeter)也可以使用。
+ 专业工具
	玻璃加工从玻璃配料开始，然后完成一系列步骤。这些步骤可能需要特定工具：
	\$(li)[吹管](mechanics/glassworking#blowpipe)，用于\$(thing)吹\$()和\$(thing)拉伸\$()\$(li)[玻璃压板](mechanics/glassworking#paddle)，用于\$(thing)平整\$()\$(li)[夹钳](mechanics/glassworking#jacks)，用于\$(thing)挤压\$()\$(li)[宝石锯](mechanics/glassworking#saw)，用于\$(thing)锯割\$()
+ _untitled_
	[](#blowpipe)
	```tfc:knapping_recipe
	tfc:knapping/ceramic/unfired_blowpipe
	```
	最重要的工具是\$(thing)吹管\$()。它可以用黏土\$(thing)塑形\$()，然后烧制成\$(thing)陶瓷吹管\$()。
+ _untitled_
	```tfc:anvil_recipe
	tfc:anvil/blowpipe
	```
	陶瓷吹管很脆，使用时有可能破裂。更坚固的吹管可以用\$(thing)黄铜棒\$()在砧上[锻造](mechanics/anvils#working)而成。
+ _untitled_
	[](#paddle)
	```patchouli:crafting
	tfc:crafting/paddle
	```
	\$(thing)玻璃压板\$()可以用来将玻璃\$(thing)压平\$()，可用木材制作。
+ _untitled_
	[](#jacks)
	```tfc:welding_recipe
	tfc:welding/jacks
	```
	\$(thing)玻璃夹钳\$()可进行\$(thing)挤压\$()，需要将两根黄铜棒焊接在一起。
+ _untitled_
	[](#saw)
	```patchouli:crafting
	tfc:crafting/gem_saw
	```
	\$(thing)宝石锯\$()是用来执行\$(thing)锯割\$()操作的。宝石锯还可以用来挖掘\$(thing)玻璃块\$()和\$(thing)玻璃板\$()而不使其损坏。
+ 如何加工玻璃
	首先，吹管上的玻璃必须加热到\$(4)^淡红色^。然后，手持吹管，按住\$(item)\$(k:key.use)\$()执行每个步骤。
	
	^吹^
	面朝正前方使用\$(thing)吹管\$()。
	
	^拉伸^
	面朝正下方使用\$(thing)吹管\$()。
+ _untitled_
	^平整^
	副手持有[玻璃压板](mechanics/glassworking#paddle)时使用\$(thing)吹管\$()。
	
	^挤压^
	副手持有[玻璃夹钳](mechanics/glassworking#jacks)时使用\$(thing)吹管\$()。
	
	^锯割^
	副手持有[宝石锯](mechanics/glassworking#saw)时使用\$(thing)吹管\$()。
	
	^翻转^
	副手持有[羊毛布](mechanics/weaving#wool_cloth)时使用\$(thing)吹管\$()。
#篝火烧烤

```patchouli-entry
id: mechanics/grill
name: 篝火烧烤
category: tfc:mechanics
icon: tfc:grill
read_by_default: true
extra_recipe_mappings:
  tfc:wrought_iron_grill: 0
```

+ _untitled_
	\$(thing)烤架\$()是一种可以用来升级篝火的物品。有烤架的篝火可以一次性烹饪五件物品，同时烧出的食物会获得\$(thing)原木烤制\$()词条，略微延长其[保质期](mechanics/decay)。手持\$(thing)锻铁烤架\$()对准[篝火](getting_started/firepit)按\$(item)\$(k:key.use)\$()就能将它放上去了。
+ 附有锻铁烤架的篝火
	```patchouli:multiblock
	multiblock:
	  pattern:
	    - - X
	    - - "0"
	  mapping:
	    X: tfc:grill
	enable_visualize: false
	```
+ _untitled_
	```tfc:anvil_recipe
	tfc:anvil/wrought_iron_grill
	```
	烤架是通过在[砧](mechanics/anvils)上锻造\$(thing)锻铁双层薄板\$()制成的。
	
	下一页展示了烤架界面。和篝火类似，它有四个燃料槽，必须在顶部空格中添加燃料。温度指示器也和篝火相同。唯一不同的是用于加热物品的槽的数量变成了五个。
+ _untitled_
	```patchouli:image
	images:
	  - tfc:textures/gui/book/gui/grill.png
	border: false
	```
	烤架界面
#加热

```patchouli-entry
id: mechanics/heating
name: 加热
category: tfc:mechanics
icon: tfc:textures/gui/book/icons/heating.png
read_by_default: true
```

+ _untitled_
	将物品加热可以将其转化为另一种物品或熔化为液体。[篝火](getting_started/firepit)、[坑窑](getting_started/pit_kiln)或[木炭炉](mechanics/charcoal_forge)等设备都可以加热物品，它们的工作原理都大同小异。当将物品放入这些设备时，物品就会逐渐升温。物品的工具提示中会说明它当前的温度。
+ _untitled_
	物品的温度是用颜色来表示的。每个颜色表示了物品所处温度的区间：
	
	\$(7)^暖^：1 - 80 °C
	\$(7)^热^：80 - 210 °C
	\$(7)^灼热^：210 - 480 °C
	\$(4)^淡红^：480 - 580 °C
	^\$(4)暗红^：580 - 730 °C
	\$(c)^亮红^：730 - 930 °C
	\$(6)^橙^：930 - 1100 °C
	\$(e)^\$(t:Yellow)黄^：1100 - 1300 °C
	\$(e)\$(t:Yellow White)^黄白^：1300 - 1400 °C
	\$(d)^\$(t:White)白^：1400 - 1500 °C
	\$(d)^\$(t:Brilliant White)炽白^： >1500 °C
#保持水分

```patchouli-entry
id: mechanics/hydration
name: 保持水分
category: tfc:mechanics
icon: tfc:textures/gui/book/icons/hydrated.png
read_by_default: true
```

+ _untitled_
	农耕的一个挑战是保持作物水分充足。根据该地区的[降雨量](the_world/climate#rainfall)，土壤会有一定的潜在湿度。然而，对于特别需要水分的作物来说这可能不够，或者对于其他作物来说可能过多。
	
	要查看任何特定方块的湿度，你必须手持\$(thing)锄\$()。
+ _untitled_
	然后只需看向任意\$(thing)耕地\$()方块或任何需要水分的作物。你会看到一个工具提示，显示当前的湿度百分比（0% 到 100%）。此外，在耕地和作物方块上，还会显示年度最小值和最大值。最大值和最小值相隔六个月出现，当前湿度会在这些时间点之间平滑变化。
+ _untitled_
	与作物不同，只要年平均湿度合适，[果树](the_world/wild_fruits#fruit_trees)和[浆果灌木](the_world/wild_fruits#tall_bushes)就会生长。
	
	除了降雨量，耕地四个方块范围内的\$(thing)淡水\$()也会为方块提供 40% 的固定湿度加成。
+ _untitled_
	湿度也可以通过改变耕地或种植作物的泥土下方的方块来调整。\$(thing)沙子\$()和\$(thing)砂砾\$()会增加排水，使总湿度降低 50%。相反，在耕地下方放置\$(thing)黏土块\$()会锁住水分，使湿度翻倍（但绝不会超过 100%）。
#罐装

```patchouli-entry
id: mechanics/jarring
name: 罐装
category: tfc:mechanics
icon: tfc:jar/plum
read_by_default: true
```

+ _untitled_
	\$(thing)罐子\$()用于长期保存水果。罐子最初是\$(thing)空罐子\$()，通过[玻璃加工](mechanics/glassworking_applications#jar)获得。然后需要用\$(thing)锡\$()锻造出\$(thing)罐盖\$()。将它们合成在一起得到\$(thing)带盖空罐子\$()。
+ _untitled_
	在锅中，将\$(thing)糖\$()与 2-4 份\$(thing)水果\$()一起煮沸。配方完成后，用带盖空罐子右键点击锅，即可获得\$(thing)密封的果酱罐\$()。如果使用普通的\$(thing)空罐子\$()，仍然可以取出果酱，但无法\$(thing)罐装\$()它。
+ _untitled_
	要完成罐装过程，将密封的果酱罐放入锅中，与\$(thing)水\$()一起煮沸。这会赋予它\$(thing)罐装\$()特性，使其能保存很长时间，直到被启封。
+ _untitled_
	```patchouli:crafting
	tfc:crafting/jar/plum_unsealed
	```
	启封罐子只需将其放入合成栏。盖子无法回收。启封后的罐子只能保存几天！
+ _untitled_
	```patchouli:crafting
	tfc:crafting/food/rye_bread_jam_sandwich_sjs_jar
	```
	果酱用于制作三明治。果酱三明治可以包含乳制品、熟肉和果酱。制作后会留下一个\$(thing)空罐子\$()。
+ _untitled_
	罐子可以用\$(item)\$(k:key.use)\$()放置在固体表面上。一个方块上最多可以放置四个任意类型的罐子。
+ _untitled_
	```patchouli:crafting
	tfc:crafting/wood/shelf/oak
	```
	\$(thing)架子\$()可以挂在实心墙壁上。物品（包括罐子）可以放在架子上方，只需拿着物品（包括罐子）右键点击架子或其下方即可。
#窑

```patchouli-entry
id: mechanics/kilns
name: 窑
category: tfc:mechanics
icon: tfc:firebox
read_by_default: true
```

+ _untitled_
	\$(thing)窑\$()是一种用于在玩家定义的区域内大量熔炼物品的结构。窑由\$(thing)火箱\$()、至少一个\$(thing)格栅\$()和防火材料构成。
+ _untitled_
	```patchouli:crafting
	tfc:crafting/firebox
	tfc:crafting/metal/grate/bronze
	```
+ _untitled_
	\$(thing)火箱\$()的界面有一个温度指示器和 16 个槽位。这些槽位全部用于燃料。任何燃料都可以使用。在开放空间中，火箱不会加热任何东西。温度低于亮红色时，它可以加热 64 个方块，高于亮红色时则可以加热 128 个。火箱加热一定体积所需的时间与方块数量和目标温度成正比。
+ _untitled_
	火箱从其上方第一个方块开始加热。火箱的热量可以穿过不遮挡的方块以及格栅。因此，建议在火箱顶部放置一个格栅，让热量向上传入你的结构，并从下方提供维护通道。
+ _untitled_
	窑的外壁必须由黏土砖、耐火砖、遮光玻璃或防火门的某种组合构成。石砖不行。如果在加热过程中结构被破坏，加热进度就会丢失，必须重新密封后才能重新开始。如果温度偏离初始设定点，计时器也会重启。
+ _untitled_
	```patchouli:crafting
	tfc:crafting/fireproof_door
	```
	防火门可以用铸铁薄板制作。
#灯

```patchouli-entry
id: mechanics/lamps
name: 灯
category: tfc:mechanics
icon: tfc:metal/lamp/bismuth_bronze
read_by_default: true
extra_recipe_mappings:
  tag:tfc:lamps: 1
```

+ _untitled_
	灯是一种长效光源。它们燃烧液体燃料。灯被破坏时会保留其燃料含量。用桶右键点击灯可以添加燃料。然后用\$(thing)起火器\$()或任何能点火的物品即可点亮。\$(thing)橄榄油\$()和\$(thing)蜡脂\$()是灯的燃料。用箭射中点亮的灯可能引发火灾。
+ 灯
	```patchouli:multiblock
	multiblock:
	  pattern:
	    - - X
	    - - Y
	    - - "0"
	  mapping:
	    X: tfc:metal/chain/copper[axis=y]
	    Y: tfc:metal/lamp/copper[hanging=true,lit=true]
	enable_visualize: false
	```
	一盏悬挂在链子上的点亮的灯。
+ _untitled_
	```patchouli:crafting
	tfc:crafting/metal/lamp/bronze
	```
	灯在[砧](mechanics/anvils)上锻造，并与[灯罩](mechanics/glassworking_applications#lamp_glass)合成完成制作。
+ _untitled_
	[](#olives)
	```tfc:quern_recipe
	tfc:quern/olive_paste
	```
	\$(thing)橄榄油\$()就可以作为灯的燃料。要获得橄榄油，首先要制作橄榄糊。
+ _untitled_
	```patchouli:crafting
	tfc:crafting/jute_net
	```
	你得做一张黄麻网。
+ _untitled_
	在[锅](mechanics/pot)里用\$(thing)水\$()煮\$(thing)橄榄糊\$()可以得到\$(thing)橄榄油水\$(). 把它和\$(thing)黄麻网\$()一起密封在[大桶](mechanics/barrels)里可以得到\$(thing)橄榄油\$(). 每单位橄榄油的燃烧时间是 6 游戏内小时。
+ _untitled_
	[](#tallow)
	另一种较弱的燃料是\$(thing)蜡脂\$()。要制作蜡脂，在[陶锅](mechanics/pot)中用淡水中煮 5 份\$(thing)鲸脂\$()。每单位蜡脂的燃烧时间为 2 游戏内小时。蜡脂可以用于制作[蜡烛](mechanics/lighting#candles)。
+ 熔岩灯
	```patchouli:multiblock
	multiblock:
	  pattern:
	    - - X
	    - - "0"
	  mapping:
	    X: tfc:metal/lamp/blue_steel[lit=true]
	enable_visualize: false
	```
	熔岩灯是一种\$(thing)永久光源\$()。不过，只有[蓝钢](mechanics/steel#blue_steel)灯才能盛装熔岩。
+ _untitled_
	```tfc:anvil_recipe
	tfc:anvil/metal/chain/black_steel
	```
	\$(thing)链子\$()可以用来挂灯，在[砧](mechanics/anvils)上就能锻造。
#制皮术

```patchouli-entry
id: mechanics/leather_making
name: 制皮术
category: tfc:mechanics
icon: minecraft:leather
read_by_default: true
extra_recipe_mappings:
  tfc:small_raw_hide: 1
  tfc:medium_raw_hide: 1
  tfc:large_raw_hide: 1
  tfc:small_soaked_hide: 3
  tfc:medium_soaked_hide: 3
  tfc:large_soaked_hide: 3
  tfc:small_scraped_hide: 4
  tfc:medium_scraped_hide: 4
  tfc:large_scraped_hide: 4
  tfc:small_prepared_hide: 6
  tfc:medium_prepared_hide: 6
  tfc:large_prepared_hide: 6
  minecraft:leather: 7
```

+ _untitled_
	\$(thing)皮革\$()是一种由兽皮制成的结实耐用的材料。它可以用来制作\$(thing)皮革盔甲\$()、\$(thing)鞍\$()、以及[风箱](mechanics/bellows)。\$()兽皮\$()必须经过一系列复杂的工序之后才能变成\$(thing)皮革\$()。首先是[浸灰](mechanics/leather_making#soaking)，然后是[剖层](mechanics/leather_making#scraping)，接着要[脱灰](mechanics/leather_making#preparing)，最后还要[浸酸](mechanics/leather_making#tanning)。
+ 兽皮
	```patchouli:spotlight
	item: tfc:small_raw_hide,tfc:medium_raw_hide,tfc:large_raw_hide
	link_recipes: true
	```
	制皮的第一步自然是得先找到\$(thing)兽皮\$()。世界各地的[野生动物](the_world/wild_animals)都会掉落兽皮。不同的动物掉落的兽皮大小会有所不同。
+ _untitled_
	制皮还需要几件其他工具：
	\$(li)一大桶[石灰水](mechanics/barrels#limewater) - 将[助焊剂](mechanics/flux)在大桶中溶于\$(thing)淡水\$()就能得到了。\$(li)一大桶淡水。\$(li)一大桶[鞣酸](mechanics/barrels#tannin) - 这是一种用某些树的树皮制成的酸液。\$(li)一把\$(thing)小刀\$()。
	
	有了这些工具，你就可以准备开始制皮了！
+ _untitled_
	[](#soaking)
	```tfc:sealed_barrel_recipe
	tfc:barrel/medium_soaked_hide
	```
	第一步是\$(thing)浸灰\$()。这一步是用来清洗并软化兽皮上的杂质的。将\$(thing)兽皮\$()密封浸泡在装有[石灰水](mechanics/barrels#limewater)的大桶中 8 个小时即可。
+ 刮削
	[](#scraping)
	```patchouli:spotlight
	item: tfc:small_scraped_hide,tfc:medium_scraped_hide,tfc:large_scraped_hide
	link_recipes: true
	```
	\$(thing)浸泡\$()好了的皮革还需要刮削，以此来移除皮革上残留的杂质。将一根原木横放在地上，然后再将皮革放置在原木上方。接着手持\$(thing)小刀\$()对准皮革的每一个部分按\$(item)\$(k:key.use)\$()。已经刮好了的部分会改变其外观。
+ _untitled_
	```patchouli:image
	images:
	  - tfc:textures/gui/book/tutorial/soaked_hide_1.png
	  - tfc:textures/gui/book/tutorial/soaked_hide_2.png
	  - tfc:textures/gui/book/tutorial/soaked_hide_3.png
	  - tfc:textures/gui/book/tutorial/soaked_hide_4.png
	border: true
	```
	皮革完全刮干净之后就可以将其从原木上取下了。你应该会得到一块\$(thing)刮制皮革\$()。
+ _untitled_
	[](#preparing)
	```tfc:sealed_barrel_recipe
	tfc:barrel/medium_prepared_hide
	```
	\$(thing)刮制皮革\$()还需要在装有淡水的[大桶](mechanics/barrels)里密封至少 8 小时。这是在\$(thing)鞣制\$()前的最后一步清理步骤。
+ _untitled_
	[](#tanning)
	```tfc:sealed_barrel_recipe
	tfc:barrel/medium_leather
	```
	最后，将脱完灰的\$(thing)预制皮革\$()封入装有[鞣酸](mechanics/barrels#tannin)的大桶中，等待 8 个小时。待鞣酸反应完全之后就能从桶中获得\$(thing)皮革\$()啦！
#光源

```patchouli-entry
id: mechanics/lighting
name: 光源
category: tfc:mechanics
icon: tfc:candle
read_by_default: true
extra_recipe_mappings:
  tfc:candle: 4
  tag:tfc:colored_candles: 4
  tfc:jack_o_lantern: 6
```

+ _untitled_
	群峦传说中有很多不同的光源，比如[灯](mechanics/lamps)，但是点灯需要燃料。其他一些光源则只需要一个火花就能点亮。
+ 目录
	\$(li)1. [火把](mechanics/lighting#torches)\$(li)2. [蜡烛](mechanics/lighting#candles)\$(li)3. [南瓜灯](mechanics/lighting#jack_o_lanterns)
+ _untitled_
	[](#torches)
	```tfc:heat_recipe
	tfc:heating/torch_from_stick
	```
	要制作火把，只需要用[篝火](getting_started/firepit)或其他热源来加热木棍或木棍堆。
+ _untitled_
	火把在\$(thing)燃尽\$()前可以燃烧 3 天。手持另一根火把或起火器并点击\$(item)\$(k:key.use)\$()就能重新点燃燃尽的火把。
+ 蜡烛
	[](#candles)
	```patchouli:multiblock
	multiblock:
	  pattern:
	    - - X
	    - - "0"
	  mapping:
	    X: tfc:candle[candles=3,lit=true]
	enable_visualize: false
	```
	蜡烛可以燃烧 11 天, 并且同样可以重新点燃。
+ _untitled_
	```tfc:sealed_barrel_recipe
	tfc:barrel/candle
	```
	将\$(thing)线\$()封入装有\$(thing)蜡脂\$()的\$(thing)大桶\$()中凝固就能制成蜡烛。
+ 南瓜灯
	[](#jack_o_lanterns)
	```patchouli:multiblock
	multiblock:
	  pattern:
	    - - X
	    - - "0"
	  mapping:
	    X: tfc:jack_o_lantern
	enable_visualize: false
	```
	点亮\$(thing)雕刻过的南瓜\$()就可以将其变成南瓜灯，它可以持续发光 4.5 天，然后就会变回雕刻过的南瓜。
+ _untitled_
	用\$(thing)剪刀\$()或\$(thing)刀\$()\$(item)\$(k:key.use)\$()键点击新鲜的[南瓜](mechanics/crops#pumpkin)可以得到\$(thing)雕刻过的南瓜\$()。雕刻过的南瓜不会腐败，并且可以戴在头上。
#机械动力

```patchouli-entry
id: mechanics/mechanical_power
name: 机械动力
category: tfc:mechanics
icon: tfc:wood/water_wheel/oak
read_by_default: true
extra_recipe_mappings:
  tag:tfc:water_wheels: 6
  tag:tfc:axles: 10
  tag:tfc:gear_boxes: 12
  tag:tfc:clutches: 14
```

+ _untitled_
	机械动力是一门利用风或水等自然力量使物体旋转或移动的技艺。
	
	实际上，许多设备可以接入机械动力网络，以实现自动化运动，或为其他功能提供动力。
+ _untitled_
	要开始利用机械动力，你首先需要一个动力\$(thing)来源\$()。
	
	[风车](mechanics/mechanical_power#windmill)是一种利用风力的方式。只要有足够的空间，它们几乎可以在任何地方建造。
	
	[水车](mechanics/mechanical_power#water_wheel)是一种略强的动力来源，因为它们利用\$(thing)河流\$()中的水流。
+ 风车
	[](#windmill)
	\$(thing)风车\$()是一种利用风力旋转[传动杆](mechanics/mechanical_power#axle)的方式。它们体积庞大，需要一块 13 x 13 x 1 的完全无遮挡区域才能放置。要建造一座风车，你首先需要一根\$(thing)传动杆\$()，然后需要一片或多片\$(thing)风车叶片\$()。
+ _untitled_
	```patchouli:crafting
	tfc:crafting/windmill_blade/white
	```
	\$(thing)风车叶片\$()可以用布制作。一个风车最多可以有五片叶片，叶片越多，旋转速度越快。
+ _untitled_
	要建造风车，首先以任意水平方向放置一根[传动杆](mechanics/mechanical_power#axle)。然后，用\$(item)\$(k:key.use)\$()在传动杆上添加最多五片\$(thing)风车叶片\$()，即可建成风车。它会慢慢开始旋转。
	
	如果传动杆已连接到其他动力源，或者空间不够空旷，风车可能会损坏。
+ _untitled_
	```patchouli:multiblock
	multiblock_id: tfc:windmill
	enable_visualize: false
	```
+ 水车
	[](#water_wheel)
	\$(thing)水车\$()是一种利用\$(3)河流\$()中水流力量产生动力的方式。如果放置得当，它们可以达到一些极快的旋转速度。
	
	水车需要一块 5 x 5 x 1 的空间来放置。注意，如果周围区域有任何障碍物，水车可能会损坏。
+  
	```patchouli:crafting
	tfc:crafting/wood/water_wheel/oak
	```
	或者如果传动杆已经连接到其他动力源。
	
	水车可以简单地用木材制作。
+ _untitled_
	要放置\$(thing)水车\$()，只需将其连接到任意\$(thing)传动杆\$()的末端。传动杆应位于流动水源（即河流）上方一格或两格处。
	
	传动杆高度以下的水，如果是流动的，会使水车加速。其他任何位置的水，或传动杆下方的静止水，都会阻碍水车运动，使其减速或停止。
+ _untitled_
	```patchouli:multiblock
	multiblock_id: tfc:water_wheel
	enable_visualize: false
	```
	一个\$(thing)水车\$()
+ 传动杆
	[](#axle)
	```patchouli:crafting
	tfc:crafting/wood/axle/oak
	```
	传动杆是旋转网络的基础，是将旋转动力从一个位置传输到另一个位置的方块。它们可以连接长达五个方块，但再长就会断裂！
+ 封闭式传动杆
	```patchouli:crafting
	tfc:crafting/wood/encased_axle/oak
	```
	传动杆也可以制作成\$(thing)封闭式\$()的。它们可以单独放置，也可以放在现有传动杆上方。
	
	然而，要传输更远的距离，你需要一个[齿轮箱](mechanics/mechanical_power#gearbox)。
+ 齿轮箱
	[](#gearbox)
	```patchouli:crafting
	tfc:crafting/wood/gear_box/oak
	```
	\$(thing)齿轮箱\$()是一种通过使用[齿轮](https://en.wikipedia.org/wiki/Gear)来改变旋转动力\$(thing)方向\$()的装置。它们也用于连接长距离的[传动杆](mechanics/mechanical_power#axle)链而不会断裂。
+ _untitled_
	要使用齿轮箱，必须配置其侧面。手持\$(thing)锤\$()右键点击齿轮箱的任意面，可以启用/禁用该面的输入/输出。潜行时用锤点击齿轮箱，则会切换其相对的面。
	
	注意，由于其内部结构，齿轮箱只能同时启用两个不同旋转轴上的面。
+ 离合器
	```patchouli:crafting
	tfc:crafting/wood/clutch/oak
	```
	\$(thing)离合器\$()是一种通过\$(c)红石\$()控制旋转网络的方式。它是一个[封闭式传动杆](mechanics/mechanical_power#axle)，被充能时会断开连接，只有未充能时才允许旋转通过。
+ _untitled_
	```tfc:multimultiblock
	```
	+ `tfc:clutch_off`
	+ `tfc:clutch_on`
	一个使用中的\$(thing)离合器\$()示例。
+ 手推磨自动化
	[](#quern)
	一个可以连接到机械网络的设备是[手推磨](mechanics/quern)，只需在其上方放置一根竖直方向的传动杆即可。连接后，手推磨不能手动转动，而是会随着上方传动杆的旋转自动研磨物品。
	
	上方传动杆旋转得越快，手推磨研磨得也越快。
+ _untitled_
	```patchouli:multiblock
	multiblock_id: tfc:rotating_quern
	enable_visualize: false
	```
	一个连接到[传动杆](mechanics/mechanical_power#axle)的\$(thing)手推磨\$()。
+ 杵锤
	[](#trip_hammer)
	另一种机械设备是\$(thing)杵锤\$()。杵锤会在[砧](mechanics/anvils)上自动进行锻造。杵锤需要一根\$(thing)带刃传动杆\$()才能工作。带刃传动杆的工作原理与普通传动杆相同，但上面有一个用来激活锤子的叶片。
+ _untitled_
	```patchouli:crafting
	tfc:crafting/wood/bladed_axle/oak
	tfc:crafting/trip_hammer
	```
+ _untitled_
	```patchouli:multiblock
	multiblock:
	  pattern:
	    - - "X "
	    - - YZ
	    - - "0 "
	  mapping:
	    X: tfc:wood/bladed_axle/oak[axis=x]
	    Y: tfc:trip_hammer[facing=south]
	    Z: tfc:metal/anvil/copper[facing=west]
	enable_visualize: false
	```
	一个杵锤的装置。
+ _untitled_
	在传动杆下方放置杵锤，然后用\$(item)\$(k:key.use)\$()将锤子添加到其上。锤子必须是金属锤。确保杵锤的朝向正确，使带刃传动杆能向下推动锤柄。然后锤子会敲击放置在它前方的砧。杵锤总是记录\$(thing)“轻击”\$()动作，并且总是使指针向目标靠近。如果锭不够热或砧的等级不正确，会发出沉闷的金属撞击声提醒你。
+ _untitled_
	通过使用[动力织布机](mechanics/weaving#power_loom)，可以让织布过程实现自动化。有关[动力织布机](mechanics/weaving#power_loom)的详细信息，请参看这一章节。
#矿车

```patchouli-entry
id: mechanics/minecarts
name: 矿车
category: tfc:mechanics
icon: tfc:wood/chest_minecart/kapok
read_by_default: true
extra_recipe_mappings:
  minecraft:minecart: 0
```

+ _untitled_
	\$(thing)矿车\$()是一种运输玩家、实体和大型方块的手段。那些通常会让玩家[负担过重](getting_started/size_and_weight#overburdening)的方块可以用矿车运输。[大缸](mechanics/decay#large_vessels)、[大桶](mechanics/barrels)、[火药桶](mechanics/powderkegs)、[砧](mechanics/anvils)和[坩埚](mechanics/crucible)可以通过同时按住\$(item)\$(k:key.sneak)\$()和\$(item)\$(k:key.use)\$()添加到矿车上。空手按住\$(item)\$(k:key.sneak)\$()右键点击可以移除方块。矿车相关物品可以用\$(thing)铁\$()或\$(thing)钢\$()锻造，用钢的配方更便宜。
+ _untitled_
	```patchouli:crafting
	minecraft:activator_rail
	tfc:crafting/activator_rail
	```
+ _untitled_
	```patchouli:crafting
	minecraft:detector_rail
	tfc:crafting/detector_rail
	```
+ _untitled_
	```patchouli:crafting
	minecraft:rail
	tfc:crafting/rail
	```
+ _untitled_
	```patchouli:crafting
	minecraft:powered_rail
	```
+ _untitled_
	```patchouli:crafting
	tfc:crafting/wood/chest_minecart/kapok
	```
	\$(thing)运输矿车\$()的操作方式与普通群峦传说箱子相同，只有 18 个槽位，不能存放非常大的物品，如原木。
#我怎么搜不到高岭石和石墨？

```patchouli-entry
id: mechanics/mineral_prospector
name: 我怎么搜不到高岭石和石墨？
category: tfc:mechanics
icon: precisionprospecting:metal/mineral_prospector/copper
read_by_default: true
extra_recipe_mappings:
  precisionprospecting:metal/mineral_prospector/bismuth_bronze: 1
  precisionprospecting:metal/mineral_prospector/black_bronze: 1
  precisionprospecting:metal/mineral_prospector/bronze: 1
  precisionprospecting:metal/mineral_prospector/copper: 1
  precisionprospecting:metal/mineral_prospector/wrought_iron: 1
  precisionprospecting:metal/mineral_prospector/steel: 1
  precisionprospecting:metal/mineral_prospector/black_steel: 1
  precisionprospecting:metal/mineral_prospector/blue_steel: 1
  precisionprospecting:metal/mineral_prospector/red_steel: 1
```

+ _untitled_
	你是不是已经觉得勘矿稿寻找 建筑材料比如 \$(thing)石膏\$() 或者建造 [高炉](mechanics/blast_furnace) 所需的 \$(thing)高岭土\$() 和 \$(thing)石墨\$() 却一直探查到的是别的金属矿物烦的想关游戏？ 那你有福啦! \$(thing)非金属勘探者\$() 就能让你不再痛苦!
+ 非金属勘矿镐
	```patchouli:spotlight
	item: precisionprospecting:metal/mineral_prospector/bismuth_bronze
	```
	非金属勘矿镐是原版群峦普通 [勘矿镐](mechanics/prospecting) 的一类变种勘矿镐。 在使用时，它不会告诉你点击方块为中心 45x45x45 的其他金属 [矿物](the_world/ores_and_minerals)，它只会显示周围的非金属矿物。
+ _untitled_
	```tfc:knapping_recipe
	precisionprospecting:knapping/mineral_prospector_head_mold
	```
	非金属勘矿镐 头 模具 可以通过 粘土 [塑形](getting_started/pottery)而成，就像这样。
+ _untitled_
	```tfc:anvil_recipe
	precisionprospecting:anvil/mineral_prospector/bronze_head
	```
	当然，非金属勘矿镐 头 也能在 [砧](mechanics/anvils) 上用 \$(thing)双层金属\$() 敲制出来。 搭配任意木棍做出完整的 非金属勘探稿。
#淘金

```patchouli-entry
id: mechanics/panning
name: 淘金
category: tfc:mechanics
icon: tfc:textures/gui/book/icons/panning.png
read_by_default: true
extra_recipe_mappings:
  tag:tfc:ore_deposits: 0
```

+ _untitled_
	\$(thing)淘金\$()是一种通过在河流和其他水道中寻找来获得某些原生矿粒的方法。
	
	淘金利用的是\$(thing)矿石沉积物\$()，它们存在于湖泊和河流底部的砾石斑块中。
	
	要开始淘金，你需要一个空淘金盘。
+ _untitled_
	```tfc:knapping_recipe
	tfc:knapping/ceramic/unfired_pan
	```
	黏土可以[塑形](getting_started/pottery)成淘金盘，如上图所示。
+ _untitled_
	```tfc:heat_recipe
	tfc:heating/pan/empty
	```
	\$(thing)塑形\$()完成后别忘了[烧制](mechanics/heating)。
	
	你找到的\$(thing)沉积物\$()可能包含几种不同的矿石：原生铜、原生银、原生金或锡石。
+ 示例
	```patchouli:multiblock
	multiblock:
	  pattern:
	    - - X
	    - - "0"
	  mapping:
	    X: tfc:deposit/native_gold/slate
	enable_visualize: false
	```
	板岩地貌中的原生金沉积物。
+ _untitled_
	接下来你就可以开始淘金啦！
	
	^1. ^对着含矿沉积物\$(thing)使用\$()淘金盘。
	
	^2. ^站在水中时，手持淘金盘按住\$(item)\$(k:key.use)\$()就可以开始淘洗盘中的砂砾。
	
	^3. ^一小段时间后，如果你足够走运，你就会获得一小块矿粒。
+ _untitled_
	```patchouli:image
	images:
	  - tfc:textures/gui/book/tutorial/panning.png
	border: true
	```
+ 淘金产物
	淘金可能产出三种产物：\$(thing)矿石\$()、\$(thing)石子\$()和[宝石](mechanics/gems)。概率如下：
	\$(li)矿石：50%%\$(li)石子：25%%\$(li)宝石：1%%\$()每种岩石类型会掉落特定的宝石，该宝石为该岩石类型独有。
#造纸术

```patchouli-entry
id: mechanics/papermaking
name: 造纸术
category: tfc:mechanics
icon: tfc:unrefined_paper
read_by_default: true
```

+ _untitled_
	\$(thing)纸\$()可以用经过加工的[纸莎草](mechanics/crops#papyrus)茎秆制作，也可以用[动物皮毛](mechanics/papermaking#parchment)制作。纸可用于制作\$(thing)书\$()和\$(thing)地图\$()等书写材料。
+ _untitled_
	```patchouli:crafting
	tfc:crafting/papyrus_strip
	```
	必须先用\$(thing)小刀\$()将纸莎草切成条。
+ _untitled_
	```tfc:sealed_barrel_recipe
	tfc:barrel/soaked_papyrus_strip
	```
	然后，将纸莎草条浸泡在装有\$(thing)水\$()的[大桶](mechanics/barrels)中。
+ _untitled_
	```tfc:loom_recipe
	tfc:loom/unrefined_paper
	```
	然后，将浸泡过的纸莎草条在织机上编织成\$(thing)粗制纸\$()。最后，将其放在原木上并[刮削](mechanics/leather_making#scraping)，制成\$(thing)纸\$()。
+ _untitled_
	```patchouli:crafting
	minecraft:map
	tfc:crafting/name_tag
	```
+ _untitled_
	```patchouli:crafting
	minecraft:writable_book
	minecraft:book
	```
+ _untitled_
	```patchouli:crafting
	tfc:crafting/wood/lectern/kapok
	tfc:crafting/wood/bookshelf/kapok
	```
+ _untitled_
	翻到下一页了解关于通过羊皮纸工艺造纸的信息。
+ 羊皮纸
	[](#parchment)
	\$(thing)羊皮纸\$()由刮制皮革制成。请回顾[制皮术章节](mechanics/leather_making)了解其制作方法。羊皮纸需要用几种不同的物品处理。首先需要\$(thing)浮石\$()。浮石可以在[火山](the_world/geology)附近的地上找到，也可以通过[洗矿](mechanics/sluices)或[淘金](mechanics/panning)含有安山岩、流纹岩或英安岩的矿石沉积物获得。
+ 浮石
	```patchouli:multiblock
	multiblock:
	  pattern:
	    - - X
	    - - "0"
	  mapping:
	    X: tfc:groundcover/pumice
	enable_visualize: false
	```
	地上的一块浮石。
+ _untitled_
	```patchouli:crafting
	tfc:crafting/treated_hide_from_large
	```
	将浮石、锤子和刮制皮革合成可以得到几份\$(thing)处理过的皮革\$()。
+ _untitled_
	```patchouli:crafting
	tfc:crafting/paper
	```
	处理过的皮革、[石灰粉](mechanics/glassworking#lime)、面粉和一个新鲜鸡蛋可以完成处理过程，得到可用的纸。
#宠物

```patchouli-entry
id: mechanics/pets
name: 宠物
category: tfc:mechanics
icon: minecraft:lead
read_by_default: true
```

+ _untitled_
	\$(thing)宠物\$()是一种与[牲畜](mechanics/animal_husbandry)行为类似的动物。它们不会产出资源，但会听从玩家的指令、跟随玩家、并且帮你做捕猎和捕杀害虫等事情。
+ _untitled_
	宠物会认某个玩家为自己的\$(thing)主人\$()。要成为宠物的主人，需要喂食将其亲密度提升到 15%% 以上。宠物只会听从主人的命令。
	
	用[染料](mechanics/dye)右键点击宠物可以改变其项圈颜色。
+ _untitled_
	```patchouli:entity
	entity: tfc:dog{NoAI:1b,birth:-100000000L,oldDay:9223372036854775807L,geneticSize:16}
	scale: 0.7
	```
	狗。
+ _untitled_
	狗是一种喜欢吃谷物、蔬菜和肉类（无论是否腐败）的宠物。它会帮助你狩猎大多数的陆地捕食者或猎物。
+ _untitled_
	```patchouli:entity
	entity: tfc:cat{NoAI:1b,birth:-100000000L,oldDay:9223372036854775807L,geneticSize:16}
	scale: 0.7
	```
	猫。
+ _untitled_
	猫是一种喜欢吃谷物、熟肉以及乳制品的宠物。它们会帮助你狩猎陆地猎物和小型鱼类。在家里的时候，猫会自行捕杀害虫，不需要命令。当被要求坐下的时候，猫可能不总是会听话。
+ _untitled_
	负责任的宠物主人需要学习如何管理自己的宠物。好在这并不是件难事。在空手的状态下按住\$(item)\$(k:key.sneak)\$()并按下\$(item)\$(k:key.use)\$()就可以打开\$(thing)宠物面板\$()。这个面板包含了一系列可以命令宠物做的事情，例如\$(thing)休息\$()、\$(thing)我们到家了\$()、\$(thing)坐下\$()、\$(thing)跟着我\$()、以及\$(thing)跟我打猎\$()。
+ _untitled_
	\$(thing)休息\$()是宠物的默认状态，点击这个命令就能让宠物回到这个状态。在休息状态下，在家里的宠物会绕着家闲逛，但是不会跑远，并且会每天睡一次觉。如果宠物离家很远，它就会毫无目的的闲逛。
+ _untitled_
	\$(thing)我们到家了\$()会设置这个宠物的“家”的位置。这样就可以告诉宠物，在休息的时候呆在这附近，不要跑太远。这个命令不会改变宠物现在正在做的事情。
	
	\$(thing)坐下\$()会命令宠物原地坐下。然而宠物会有自己的想法，坐久了感觉无聊，就会自己站起来溜达！
+ _untitled_
	\$(thing)跟我打猎\$()会告诉宠物跟着你，并且在你发动攻击或被攻击的时候参加战斗。宠物只会攻击他们力所能及的敌人（例如, 猫肯定不会帮你猎杀熊！）。
	
	\$(thing)跟着我\$()和“跟我打猎”类似，不同之处在于宠物不会冒险加入你的战斗。
#篝火大锅

```patchouli-entry
id: mechanics/pot
name: 篝火大锅
category: tfc:mechanics
icon: tfc:pot
read_by_default: true
extra_recipe_mappings:
  tfc:pot: 0
  tfc:ceramic/unfired_pot: 2
  tfc:ceramic/pot: 3
```

+ _untitled_
	\$(thing)陶锅\$()是一种可以用来升级篝火的物品。有陶锅的篝火可以用来制作特殊的餐点或实用的物品。
	
	手持\$(thing)陶锅\$()对准[篝火](getting_started/firepit)按\$(item)\$(k:key.use)\$()就能将它放上去了。
+ _untitled_
	```patchouli:multiblock
	multiblock:
	  pattern:
	    - - X
	    - - "0"
	  mapping:
	    X: tfc:pot
	enable_visualize: false
	```
	附有陶锅的篝火。
+ _untitled_
	```tfc:knapping_recipe
	tfc:knapping/ceramic/unfired_pot
	```
	陶锅必须先用黏土[塑形](getting_started/pottery)。
+ _untitled_
	```tfc:heat_recipe
	tfc:heating/ceramic/pot
	```
	然后它必须[烧制](mechanics/heating)成\$(thing)陶锅\$()才可以放在篝火上。
+ _untitled_
	和普通篝火类似，陶锅有四个燃料槽，必须在顶部空格中添加燃料。温度指示器也和篝火相同。唯一不同的是它不再能直接加热物品了，取而代之的是五个用于放置食材的空格。陶锅还可容纳最多 \$(thing)1000 mB\$() 的液体。
	
	要用锅炖汤，先必须手持任何类型的液体容器（如木桶）对准陶锅按\$(item)\$(k:key.use)\$()。然后添加物品，点燃篝火。汤会沸腾一段时间，直到制作完成。
+ _untitled_
	```patchouli:image
	images:
	  - tfc:textures/gui/book/gui/pot.png
	border: false
	```
	正在用陶锅炖汤。
+ 炖汤配方
	[](#soup)
	```patchouli:spotlight
	item: tfc:food/fruit_soup
	link_recipes: false
	```
	汤由 3-5 份\$(thing)水果\$()、\$(thing)蔬菜\$()或\$(thing)肉类\$()在一锅\$(thing)水\$()中制成。配方完成后，锅中的水会变红。用[碗](mechanics/bowls)右键点击锅即可取出。汤将多种营养素组合成一定数量的餐点，具体数量取决于加入的食物量。它们更节省食材，但营养密度不如其他餐点。
+ 简单配方
	```patchouli:spotlight
	item: tfc:bucket/red_dye
	link_recipes: false
	```
	陶锅还可以将某些液体转化为其他液体。例如，在水中煮沸 5 份\$(thing)草木灰\$()可以制成\$(thing)碱液\$()。
#火药桶

```patchouli-entry
id: mechanics/powderkegs
name: 火药桶
category: tfc:mechanics
icon: tfc:powderkeg
read_by_default: true
```

+ _untitled_
	\$(thing)火药桶\$()是用来爆破的装置。它有12个只能放\$(thing)火药\$()的物品槽。爆炸的强度和内部火药的数量成正比。
+ 火药桶
	```patchouli:multiblock
	multiblock:
	  pattern:
	    - - X
	    - - "0"
	  mapping:
	    X: tfc:powderkeg[sealed=true]
	enable_visualize: false
	```
	与[大桶](mechanics/barrels)类似，火药桶可以用\$(item)\$(k:key.use)\$()键来密封和解除密封。只有密封的火药桶可以被点燃。
+ _untitled_
	引爆火药桶会导致其他火药桶也被点燃和爆炸。被爆炸破坏的所有方块都会以物品形式掉落，但是可能被炸到远处。
+ _untitled_
	```patchouli:crafting
	tfc:crafting/powderkeg
	```
	火药桶可以通过在大桶的合成配方中添加[红色染料](mechanics/dye)和线来制作。
+ _untitled_
	```patchouli:crafting
	tfc:crafting/gunpowder
	tfc:crafting/gunpowder_with_graphite
	```
+ _untitled_
	有两种方式可以制造火药：第一种配方是用[硝石](the_world/ores_and_minerals#saltpeter)、[硫磺](the_world/ores_and_minerals#saltpeter)、和[木炭](mechanics/charcoal_pit)粉混合而成。粉末是在[手推磨](mechanics/quern)磨制对应矿物而成的。如果你有[石墨](the_world/ores_and_minerals#graphite)，就可以使用第二钟更高效的合成配方。
#勘探

```patchouli-entry
id: mechanics/prospecting
name: 勘探
category: tfc:mechanics
icon: tfc:metal/propick/wrought_iron
read_by_default: true
extra_recipe_mappings:
  tfc:metal/propick/bismuth_bronze: 2
  tfc:metal/propick/black_bronze: 2
  tfc:metal/propick/bronze: 2
  tfc:metal/propick/copper: 2
  tfc:metal/propick/wrought_iron: 2
  tfc:metal/propick/steel: 2
  tfc:metal/propick/black_steel: 2
  tfc:metal/propick/blue_steel: 2
  tfc:metal/propick/red_steel: 2
```

+ _untitled_
	你还记得你是在哪里捡到那些[小矿粒](getting_started/finding_ores)的，对吧？寻找更多矿石需要花费大量精力来勘探和开采。现在，你应该已经通读[矿石和矿物](the_world/ores_and_minerals)这一章节。你应该明白，如果你在寻找特定的矿石，则必须先找到它生成的岩石类型——不论是就在你家门口，或是千里之外。
+ _untitled_
	当仅靠捡拾小矿粒不能满足你的发展需要时就应考虑开始勘矿了。
	\$(li)小矿粒只会生成在矿脉水平 15 格以内，垂直 35 格以内的地表上。当地表上有一片矿粒时，它们的几何中心的正下方很可能就有一支矿脉。\$(li)有些时候，矿石也会暴露在断崖或水底，这种矿脉就很好发现了。
+ 勘矿镐
	[](#propick)
	```patchouli:spotlight
	item: tfc:metal/propick/copper
	link_recipes: false
	```
	如果你挖了好久都没有找到想找的矿石或矿物（顺便一提，只有矿石会在地表生成矿粒），那么就是时候做一把\$(thing)勘矿镐\$()了。勘矿镐会搜索点击的块中心 25x25x25 的区域，并报告所找到矿石的数量和类型。
+ _untitled_
	```tfc:knapping_recipe
	tfc:knapping/ceramic/unfired_propick_head_mold
	```
	你可以用黏土按上图[塑形](getting_started/pottery)成一个未烧制的勘矿镐头模具。
+ _untitled_
	```tfc:heat_recipe
	tfc:heating/ceramic/propick_head_mold
	```
	模具[塑形](getting_started/pottery)完之后还需要[烧制](mechanics/heating)。
	
	将液态金属倒入到烧制好的模具中就能[铸造](getting_started/finding_ores#casting)出勘矿镐了。
+ _untitled_
	```tfc:anvil_recipe
	tfc:anvil/metal/propick_head/wrought_iron
	```
	勘矿镐头也可以在[砧](mechanics/anvils)上使用任何可以制造工具的金属\$(thing)锭\$()[锻造](mechanics/anvils#working)而成。
	
	最后用木棍和工具头在合成栏合成就能做出勘矿镐了。
+ _untitled_
	勘矿镐说有矿就是有矿，它说没矿也有可能有矿，但如果没矿它绝不会说有矿。更高等级的工具会降低甚至完全消除误报的概率。
	
	用同一等级的勘矿镐点击同一个方块不会改变报告的结果。
	
	如果在勘探处的周围有多种矿物，勘矿镐只会选择其中一种报告。
+ _untitled_
	勘矿镐会报告以下几种结果之一：
	\$(li)没发现什么有意思的。（可能是假阴性）\$(li)发现微量\$(li)发现少量\$(li)发现中量\$(li)发现大量\$(li)发现巨量
	
	发现巨量表明至少有 80 个方块。
#泵

```patchouli-entry
id: mechanics/pumps
name: 泵
category: tfc:mechanics
icon: tfc:steel_pipe
read_by_default: true
extra_recipe_mappings:
  tfc:steel_pipe: 0
  tfc:steel_pump: 0
```

+ _untitled_
	\$(thing)钢泵\$()和\$(thing)钢管\$()是用于输送流体的方块，例如\$(thing)水\$()、\$(thing)咸水\$()和\$(thing)温泉水\$()。它们也可用于移动水源方块，并填充小型封闭区域。与[引水桥](mechanics/aqueducts)不同，它们还可以向上输送水源方块。
+ _untitled_
	```tfc:anvil_recipe
	tfc:anvil/steel_pipe
	```
	钢管，顾名思义，可以用[钢](mechanics/steel)在[砧](mechanics/anvils)上锻造而成。\$(thing)钢泵\$()可以用一些\$(thing)钢管\$()和[黄铜机件](getting_started/primitive_alloys#brass)合成。
+ _untitled_
	```patchouli:crafting
	tfc:crafting/steel_pump
	```
	要操作泵，你还需要一个[曲轴](mechanics/crankshaft)和一个[机械动力](mechanics/mechanical_power)源：
	\$(li)泵的^底部^必须连接到一根管道。
+ _untitled_
	\$(li)泵的窄边必须与[曲轴](mechanics/crankshaft)的工作端相邻。\$(li)泵的有效距离可达^16^格。管道的末端必须^浸没^在目标流体中，并与一个水源流体方块相邻。\$(li)如果曲轴在工作，流体就会被抽上来，出现在\$(thing)泵\$()的宽端。\$(li)泵可以用水源方块填充一个最多^32^格的封闭区域。
#手推磨

```patchouli-entry
id: mechanics/quern
name: 手推磨
category: tfc:mechanics
icon: tfc:quern
read_by_default: true
```

+ _untitled_
	\$(thing)手推磨\$()是一种研磨物品的设备。它可以制作粉末、[染料](mechanics/dye)和其他一些物品。它由\$(thing)底座\$()和\$(thing)磨盘\$()组装而成。
	
	手推磨也可以连接到[机械动力](mechanics/mechanical_power#quern)网络。
+ _untitled_
	```patchouli:crafting
	tfc:crafting/quern
	```
	合成底座需要三个\$(thing)平滑岩石\$()以及任意三个\$(thing)岩石\$()方块。
+ _untitled_
	```patchouli:crafting
	tfc:crafting/handstone
	```
	手推磨还需要一个\$(thing)磨盘\$()才能使用。
+ _untitled_
	```patchouli:image
	images:
	  - tfc:textures/gui/book/tutorial/quern_empty.png
	border: true
	```
	对准手推磨底座的顶面按\$(item)\$(k:key.use)\$()放上磨盘。
+ _untitled_
	```patchouli:image
	images:
	  - tfc:textures/gui/book/tutorial/quern_add_item.png
	border: true
	```
	手持需要研磨的物品对准磨盘顶部的小孔按\$(item)\$(k:key.use)\$()放入。
+ _untitled_
	```patchouli:image
	images:
	  - tfc:textures/gui/book/tutorial/quern_handle.png
	border: true
	```
	对准磨盘的把手按\$(item)\$(k:key.use)\$()旋转。
+ _untitled_
	```patchouli:image
	images:
	  - tfc:textures/gui/book/tutorial/quern_result.png
	border: true
	```
	产品会在手推磨底座周围一圈出现。\$(item)\$(k:key.use)\$()点击底座就能取出。
+ _untitled_
	```tfc:quern_recipe
	tfc:quern/powder/sulfur
	```
	手推磨可以将各种矿物磨成\$(thing)粉末\$()，例如\$(thing)硫磺\$()。
+ _untitled_
	```tfc:quern_recipe
	tfc:quern/red_dye
	```
	[染料](mechanics/dye)可以从各种花中获得。
+ _untitled_
	```tfc:quern_recipe
	tfc:quern/powder/emerald
	```
	\$(thing)宝石\$()也可以磨成粉末。
+ _untitled_
	```tfc:quern_recipe
	tfc:quern/food/barley_flour
	```
	\$(thing)面粉\$()也可以用手推磨获得。
+ _untitled_
	```tfc:quern_recipe
	tfc:quern/powder/flux
	```
	[助焊剂](mechanics/flux)也可以用手推磨获得。
#红石装置

```patchouli-entry
id: mechanics/redstone_devices
name: 红石装置
category: tfc:mechanics
icon: tfc:calendar_clock
read_by_default: true
```

+ _untitled_
	当你在世界中发展到一定程度时，你可能想要测量某些条件，例如风速或一天中的时间。有几种装置可以满足你的需求。
+ _untitled_
	```patchouli:image
	images:
	  - tfc:textures/gui/book/tutorial/redstone_devices.png
	border: true
	```
+ _untitled_
	```patchouli:crafting
	tfc:crafting/calendar_clock
	```
	第一个是\$(thing)精密时钟\$()。时钟可以检测小时，或者用\$(item)\$(k:key.use)\$()切换后检测月份。
+ _untitled_
	在小时模式下，时钟会输出强模拟信号，信号 0 表示午夜或正午，信号 11 表示 11:00 或 23:00。在月份模式下，时钟会输出强模拟信号，信号 0 表示一月，信号 11 表示十二月。读取时钟的信号强度不需要比较器。
+ _untitled_
	```patchouli:crafting
	tfc:crafting/thermometer
	```
	接下来是\$(thing)温度计\$()，它可以检测环境温度，或它所放置的设备的温度。
+ _untitled_
	读取环境温度时，温度计会输出强模拟信号，信号 0 表示 -40°C，信号 15 表示 +40°C。读取设备温度时，温度计会输出弱模拟信号，信号 0 表示无热量，信号 15 表示炽白色。读取温度计的信号强度不需要比较器。
+ _untitled_
	```patchouli:crafting
	tfc:crafting/anemometer
	```
+ _untitled_
	\$(thing)风速计\$()检测风速。它输出强模拟信号，信号 0 表示 0km/h，信号 15 表示 115km/h。读取风速计的信号强度不需要比较器。
+ _untitled_
	```patchouli:crafting
	tfc:crafting/vane
	```
+ _untitled_
	\$(thing)风向标\$()检测风向。它输出强模拟信号，信号 0 表示北，信号 8 表示南。信号随着风向顺时针转动而增加。读取风向标的信号强度不需要比较器。
#沙拉

```patchouli-entry
id: mechanics/salad
name: 沙拉
category: tfc:mechanics
icon: tfc:textures/item/food/protein_salad.png
read_by_default: true
extra_recipe_mappings:
  tfc:food/fruit_salad: 0
  tfc:food/dairy_salad: 0
  tfc:food/vegetables_salad: 0
  tfc:food/protein_salad: 0
  tfc:food/grain_salad: 0
```

+ _untitled_
	\$(thing)沙拉\$()是一种在\$(thing)碗\$()中制作的食物，最多可由五种\$(thing)水果\$()、\$(thing)蔬菜\$()或\$(thing)熟肉\$()制成。
	
	沙拉是最简单的餐点之一，只需要一个[碗](mechanics/bowls)。首先，手持\$(thing)碗\$()，按住\$(item)\$(k:key.sneak)\$()的同时按\$(item)\$(k:key.use)\$()，即可打开沙拉界面。
+ _untitled_
	```patchouli:spotlight
	item: tag:c:foods/salad
	link_recipes: false
	```
	最多可以在顶部槽位添加五种食材。\$(thing)碗\$()可以放在左下角的槽位。完成后，可以从右下角的槽位取出沙拉。
#三明治

```patchouli-entry
id: mechanics/sandwiches
name: 三明治
category: tfc:mechanics
icon: tfc:textures/item/food/barley_bread_sandwich.png
read_by_default: true
extra_recipe_mappings:
  tfc:food/barley_bread_sandwich: 0
  tfc:food/maize_bread_sandwich: 0
  tfc:food/oat_bread_sandwich: 0
  tfc:food/rice_bread_sandwich: 0
  tfc:food/rye_bread_sandwich: 0
  tfc:food/wheat_bread_sandwich: 0
```

+ _untitled_
	制作\$(thing)三明治\$()能将最多三种\$(thing)蔬菜\$()、\$(thing)熟肉\$()、或[奶酪](mechanics/dairy)，和两片[面包](mechanics/bread)组合成一顿\$(thing)餐点\$()。
+ _untitled_
	```patchouli:crafting
	tfc:crafting/food/wheat_bread_sandwich_sss
	```
	在\$(thing)工作台\$()上合成三明治。
+ _untitled_
	做出来的三明治会结合所用食材以及面包所提供的营养元素、水分、和饱和度。三明治会包含面包 50% 的营养和其他食材 80% 的营养。制作三明治所用的食材不能腐败。三明治本身的保质期和所用食材剩余的保质期无关。
#命名台

```patchouli-entry
id: mechanics/scribing_table
name: 命名台
category: tfc:mechanics
icon: minecraft:black_dye
read_by_default: true
extra_recipe_mappings:
  tag:tfc:scribing_tables: 2
```

+ _untitled_
	\$(thing)命名台\$()是用来给物品重命名的。重命名需要消耗\$(thing)黑色染料\$()。可以直接用染料物品，也可以用一桶黑色染液代替。
+ _untitled_
	```patchouli:multiblock
	multiblock:
	  pattern:
	    - - X
	    - - "0"
	  mapping:
	    X: tfc:wood/scribing_table/kapok
	enable_visualize: false
	```
	命名台
+ _untitled_
	```patchouli:crafting
	tfc:crafting/wood/scribing_table/birch
	```
	命名台的合成配方
+ _untitled_
	```patchouli:image
	images:
	  - tfc:textures/gui/book/gui/scribing.png
	border: false
	```
	命名界面顶部是文本输入栏，左侧是物品输入槽，中间是染料槽。成品从右侧槽取出。如果可能，使用流体染料只需消耗 250mb 而非 1000mb。
#缝纫台

```patchouli-entry
id: mechanics/sewing_table
name: 缝纫台
category: tfc:mechanics
icon: tfc:wood/sewing_table/oak
read_by_default: true
```

+ _untitled_
	\$(thing)缝纫台\$()用于制作旗帜图案和锻造模板。它需要[羊毛布](mechanics/weaving#wool_cloth)、[粗麻布](mechanics/weaving#burlap_cloth)、线或纱线，以及针。
+ _untitled_
	```patchouli:crafting
	tfc:crafting/bone_needle
	```
	缝纫用的针可以用骨头制作。
+ _untitled_
	```patchouli:crafting
	tfc:crafting/wood/sewing_table/oak
	```
	缝纫台可以用木头、皮革和一把剪刀制作。
+ _untitled_
	缝纫台的界面与工作台类似。如果操作失误，只需退出界面，物品就会返还给你。界面中有一本配方书，点击打开菜单可以选择配方。选择后，工作台上会出现小提示，指示要执行的步骤。
+ _untitled_
	```patchouli:image
	images:
	  - tfc:textures/gui/book/gui/sewing_table.png
	border: true
	```
	缝纫界面。
+ _untitled_
	左侧的槽位用于放置线和针。底部两个槽位可以放置任意组合的粗麻布和羊毛布。右侧的槽位在成品准备好后显示结果。从结果槽取出成品即完成制作，并消耗物品。
+ _untitled_
	每块布料可以在缝纫面上放置 8 个该材料的方块。同样，每卷纱线可以缝 16 针。选择配方后，只需使用屏幕右上角的按钮放置方块，并按照指引将它们缝合在一起。想要移除缝合？使用红色的“X”按钮移除方块。
+ _untitled_
	```patchouli:crafting
	minecraft:loom
	```
	旗帜织布机，用于制作带旗帜图案的物品，可以通过合成获得，用于处理旗帜图案。
+ _untitled_
	关于锻造模板的使用信息，请参阅[盔甲纹饰](mechanics/armor_trims)章节。
#洗矿槽

```patchouli-entry
id: mechanics/sluices
name: 洗矿槽
category: tfc:mechanics
icon: tfc:textures/gui/book/icons/sluice.png
read_by_default: true
extra_recipe_mappings:
  tag:tfc:sluices: 0
```

+ _untitled_
	\$(thing)洗矿槽\$()是一种用于处理\$(thing)矿石沉积物\$()的设备，产出与[淘金](mechanics/panning)相同的结果，但概率不同。
+ _untitled_
	```patchouli:crafting
	tfc:crafting/wood/sluice/sequoia
	```
	使用木棍和木材制作洗矿槽。
+ _untitled_
	洗矿槽被放置后会占据两个方块。为了让它正常工作，水必须流过洗矿槽的顶部并从底部流出。如果水看起来流过了整个洗矿槽，就表示它在正常工作。流进洗矿槽的水必须是水流的最后一格水，且在洗矿槽的出口处必须有一个空方块让水能够流进去。
+ _untitled_
	```patchouli:image
	images:
	  - tfc:textures/gui/book/tutorial/sluice_cross.png
	border: true
	```
	一个正确安装的洗矿槽。
+ _untitled_
	要使用洗矿槽，只需要把矿石沉积物方块以物品形式丢到上游水流中，让水流把物品冲进洗矿槽，沉积物会出现在洗矿槽中。一段时间之后，洗矿的产物就有可能从下游吐出。
+ _untitled_
	```patchouli:image
	images:
	  - tfc:textures/gui/book/tutorial/sluice_in_use.png
	border: true
	```
	一个正常工作的、里面有沉积物的洗矿槽。
+ 淘金产物
	洗矿可能产出三种产物：\$(thing)矿石\$()、\$(thing)石子\$()和[宝石](mechanics/gems)。概率如下：
	\$(li)矿石：55%%\$(li)石子：22.5%%\$(li)宝石：0.9%%\$()每种岩石类型会掉落特定的宝石，该宝石为该岩石类型独有。
#更细致的勘探

```patchouli-entry
id: mechanics/smaller_prospecting
name: 更细致的勘探
category: tfc:mechanics
icon: precisionprospecting:metal/prospector_hammer/bronze
read_by_default: true
extra_recipe_mappings:
  precisionprospecting:metal/prospector_hammer/bismuth_bronze: 1
  precisionprospecting:metal/prospector_hammer/black_bronze: 1
  precisionprospecting:metal/prospector_hammer/bronze: 1
  precisionprospecting:metal/prospector_hammer/copper: 1
  precisionprospecting:metal/prospector_hammer/wrought_iron: 1
  precisionprospecting:metal/prospector_hammer/steel: 1
  precisionprospecting:metal/prospector_hammer/black_steel: 1
  precisionprospecting:metal/prospector_hammer/blue_steel: 1
  precisionprospecting:metal/prospector_hammer/red_steel: 1
  precisionprospecting:metal/prospector_drill/bismuth_bronze: 4
  precisionprospecting:metal/prospector_drill/black_bronze: 4
  precisionprospecting:metal/prospector_drill/bronze: 4
  precisionprospecting:metal/prospector_drill/copper: 4
  precisionprospecting:metal/prospector_drill/wrought_iron: 4
  precisionprospecting:metal/prospector_drill/steel: 4
  precisionprospecting:metal/prospector_drill/black_steel: 4
  precisionprospecting:metal/prospector_drill/blue_steel: 4
  precisionprospecting:metal/prospector_drill/red_steel: 4
```

+ _untitled_
	你是否觉得 [勘矿镐](mechanics/prospecting) 的范围实在是太大了？ 烦透了要到处挖洞寻找埋藏在地底的财富的日子？ 不用担心！因为 \$(thing)小勘矿稿\$() 和 \$(thing)定向勘矿镐\$() 来了！我们有救了！
+ 小勘矿镐
	```patchouli:spotlight
	item: precisionprospecting:metal/prospector_hammer/bismuth_bronze
	```
	小勘矿镐和普通的勘矿镐在使用上一模一样，除了一点———范围， 它只搜索使用方块为中心 13x13x13 范围内的矿。 对于身处其中的你而言非常好用。
+ _untitled_
	```tfc:knapping_recipe
	precisionprospecting:knapping/prospector_hammer_head_mold
	```
	和勘矿镐模具一样，小勘矿镐模具也能通过粘土 [塑形](getting_started/pottery) 得到，就像上图所示一样，并且也能烧制后通过 [灌注](getting_started/finding_ores#casting) 液态金属制作。
+ _untitled_
	```tfc:anvil_recipe
	precisionprospecting:anvil/prospector_hammer/bronze_head
	```
	小勘探稿头 也同时可以由 任意\$(thing)双层金属\$() 锭 在 [砧](mechanics/anvils) 上 [锻造](mechanics/anvils#working) 而成。搭配任意木棍，制作出完整的小勘探稿。
+ 定向勘探稿
	```patchouli:spotlight
	item: precisionprospecting:metal/prospector_drill/bismuth_bronze
	```
	如果你不知道矿脉在哪个方向， 那你就应该拿出 \$(thing)定向勘探稿\$()了。 他会搜索一个 7x25x7 的范围， 长边和点击方块的方向平行， 以此为中心开始10个方块。
+ _untitled_
	```tfc:knapping_recipe
	precisionprospecting:knapping/prospector_drill_head_mold
	```
	如图所示，定向勘矿镐模具也能通过粘土 [塑形](getting_started/pottery) 而成
+ _untitled_
	```tfc:anvil_recipe
	precisionprospecting:anvil/prospector_drill/bronze_head
	```
	定向勘探稿头 同时也可以通过任意金属的鼓风口在砧上锻造得到。
+ _untitled_
	```patchouli:crafting
	precisionprospecting:crafting/metal/prospector_drill/bronze
	```
	结合两根木棍制作出完整的定向勘矿镐。
+ _untitled_
	注意：小勘探稿和定向勘探稿很少会出现 \$(thing)巨量的\$() 矿脉形容，毕竟它们的范围比正常的勘矿镐要小得多。
	 （范围一直都是这个范围啊，你好好想想这些天有没有好好挖矿，多找找自己的原因（x
#炼钢

```patchouli-entry
id: mechanics/steel
name: 炼钢
category: tfc:mechanics
icon: tfc:metal/ingot/steel
read_by_default: true
extra_recipe_mappings:
  tfc:metal/ingot/pig_iron: 1
  tfc:metal/ingot/high_carbon_steel: 1
  tfc:metal/ingot/steel: 1
  tfc:metal/ingot/weak_steel: 3
  tfc:metal/ingot/high_carbon_black_steel: 4
  tfc:metal/ingot/black_steel: 4
  tfc:metal/ingot/weak_blue_steel: 7
  tfc:metal/ingot/high_carbon_blue_steel: 8
  tfc:metal/ingot/blue_steel: 8
  tfc:metal/ingot/weak_red_steel: 11
  tfc:metal/ingot/high_carbon_red_steel: 12
  tfc:metal/ingot/red_steel: 12
```

+ _untitled_
	[高炉](mechanics/blast_furnace)烧炼出的\$(thing)生铁\$()并不能直接使用，必须先将其转化为\$(thing)钢\$()后才能进一步加工成工具或[盔甲](mechanics/armor)。根据生产工艺的不同，可以将生铁锻造成几种不同的钢：普通\$(thing)钢\$()、\$(thing)黑钢\$()、\$(thing)红钢\$()和\$(thing)蓝钢\$()。
+ _untitled_
	```tfc:anvil_recipe
	tfc:anvil/metal/ingot/high_carbon_steel
	```
	将从高炉中炼出的\$(thing)生铁锭\$()在砧上反复锤炼就能制成最普通的\$(thing)钢锭\$()。具体而言，将\$(thing)生铁锭\$()置于砧上后先选择\$(thing)高碳钢锭\$()为目标，成功后再以\$(thing)钢锭\$()为目标锤炼\$(thing)高碳钢锭\$()即可获得。
+ 黑钢
	[](#black_steel)
	当你获得了一定数量的\$(thing)钢\$()后，就可以开始制作三种有色钢之一，\$(thing)黑钢\$()了。黑钢是三种高级有色钢合金中最基础的一种。要合成黑钢，首先得先在[坩埚](mechanics/crucible)中制作\$(thing)脆钢\$()。
+ 脆钢
	```patchouli:spotlight
	item: tfc:metal/ingot/weak_steel
	link_recipes: false
	```
	
	^条件：^
	\$(li)\$(thing)钢\$()：50 - 70 % \$(li)\$(thing)镍\$()：15 - 25 % \$(li)\$(thing)黑铜\$()：15 - 25 % 
	
	可用铸锭模具将熔融\$(thing)脆钢\$()制成锭。
+ _untitled_
	```tfc:welding_recipe
	tfc:welding/metal/ingot/high_carbon_black_steel
	```
	接着，将\$(thing)脆钢锭\$()和\$(thing)生铁锭\$()焊接在一起便能合成\$(thing)高碳黑钢锭\$()。最后，将高碳黑钢锭在[砧](mechanics/anvils)上锤炼成\$(thing)黑钢锭\$()即可。
+ _untitled_
	\$(thing)黑钢\$()可以用来制造工具和[盔甲](mechanics/armor), 同时也是制造[蓝钢](mechanics/steel#blue_steel)和[红钢](mechanics/steel#red_steel)的关键原材料。
+ 蓝钢
	[](#blue_steel)
	\$(thing)蓝钢\$()是群峦传说中最高级的两种合金之一。另一种是[红钢](mechanics/steel#red_steel)。烧炼蓝钢的第一步和烧炼[黑钢](mechanics/steel#black_steel)类似，要先在[坩埚](mechanics/crucible)中合成\$(thing)脆蓝钢锭\$()。
+ 脆蓝钢
	```patchouli:spotlight
	item: tfc:metal/ingot/weak_blue_steel
	link_recipes: false
	```
	
	^条件：^
	\$(li)\$(thing)黑钢\$()：50 - 55 % \$(li)\$(thing)钢\$()：20 - 25 % \$(li)\$(thing)铋铜\$()：10 - 15 % \$(li)\$(thing)纯银\$()：10 - 15 % 
	
	
+ _untitled_
	```tfc:welding_recipe
	tfc:welding/metal/ingot/high_carbon_blue_steel
	```
	接着，将\$(thing)脆蓝钢锭\$()和\$(thing)黑钢锭\$()焊接在一起便能合成\$(thing)高碳蓝钢锭\$()。最后，将高碳蓝钢锭在[砧](mechanics/anvils)上锤炼成\$(thing)蓝钢锭\$()即可。
+ _untitled_
	\$(thing)蓝钢\$()可用于制作工具和[盔甲](mechanics/armor)，以及\$(thing)蓝钢桶\$()，后者可以运输 1000 mB 的液体，包括\$(6)熔岩\$()。
+ 红钢
	[](#red_steel)
	\$(thing)红钢\$()是群峦传说中最高级的两种合金之一。另一种是[蓝钢](mechanics/steel#blue_steel)。烧炼红钢的第一步和烧炼[黑钢](mechanics/steel#black_steel)类似，要先在[坩埚](mechanics/crucible)中合成\$(thing)脆红钢锭\$()。
+ 脆红钢
	```patchouli:spotlight
	item: tfc:metal/ingot/weak_red_steel
	link_recipes: false
	```
	
	^条件：^
	\$(li)\$(thing)黑钢\$()：50 - 55 % \$(li)\$(thing)钢\$()：20 - 25 % \$(li)\$(thing)黄铜\$()：10 - 15 % \$(li)\$(thing)玫瑰金：10 - 15 % \$()
	
	
+ _untitled_
	```tfc:welding_recipe
	tfc:welding/metal/ingot/high_carbon_red_steel
	```
	接着，将\$(thing)脆红钢锭\$()和\$(thing)黑钢锭\$()焊接在一起便能合成\$(thing)高碳红钢锭\$()。最后，将高碳红钢锭在[砧](mechanics/anvils)上锤炼成\$(thing)红钢锭\$()即可。
+ _untitled_
	\$(thing)红钢\$()可用于制作工具和[盔甲](mechanics/armor)，以及\$(thing)红钢桶\$()，后者可以运输 1000 mB 的液体，包括\$(6)熔岩\$()。
#炉灶

```patchouli-entry
id: mechanics/stove
name: 炉灶
category: tfc:mechanics
icon: tfc:stove
read_by_default: true
```

+ _untitled_
	```patchouli:crafting
	tfc:crafting/stove
	```
	\$(thing)炉灶\$()是\$(thing)篝火\$()的一种变体，使用它不用担心点燃附近的方块。它拥有篝火的所有功能，也可以添加锅。但是，炉灶不能添加烤架。
+ _untitled_
	```patchouli:multiblock
	multiblock:
	  pattern:
	    - - X
	    - - "0"
	  mapping:
	    X: tfc:stove
	enable_visualize: false
	```
#支撑梁与塌方

```patchouli-entry
id: mechanics/support_beams
name: 支撑梁与塌方
category: tfc:mechanics
icon: tfc:wood/support/oak
read_by_default: true
extra_recipe_mappings:
  tag:tfc:support_beams: 0
```

+ 支撑梁
	群峦传说中，天然岩石并不稳定，有发生\$(thing)塌方\$()的危险。如果不加防范，\$(thing)天然岩石\$()、\$(thing)矿石\$()、\$(thing)平滑岩石\$()、和钟乳\$(thing)石锥\$()等方块都可能从天而降，把你砸成肉饼！
	
	为了防止发生这等惨剧，你必须确保周围的方块都\$(thing)受到支撑\$()。
+ _untitled_
	每次玩家挖掘任何\$(thing)天然岩石\$()时，若附近存在\$(thing)未被支撑的\$()天然岩石，就有可能发生塌方。一旦塌方开始，即便是已经\$(thing)有支撑的\$()岩石也可能开始塌方。
	
	自然生成的洞穴顶部的岩石\$(thing)自然承重\$()，无需人工支撑。若天然岩石的正下方存在无法发生塌方的固体方块，那么这个方块也被算作是\$(thing)被支撑的\$()。此外，使用\$(thing)支撑梁\$()可以一次支撑一大片区域。
+ _untitled_
	当分级[矿石](the_world/ores_and_minerals)（可以是贫瘠、普通或富集的矿石）塌方时，其品质会降低。富集矿石会变成普通，普通会变成贫瘠，贫瘠会变成圆石。矿物矿石会直接变成圆石。
+ _untitled_
	泥土、草方块、黏土、砂砾、圆石和沙子也受重力影响。但与原版重力方块不同，这些方块会沿斜坡滑落，且如果没有周围方块的支撑，它们不能堆叠超过一层高。[矿石沉积物](mechanics/sluices)也会滑坡，但不会降低品质。
+ 支撑梁
	```patchouli:crafting
	tfc:crafting/wood/support/oak
	```
	\$(thing)支撑梁\$()可以用\$(thing)锯\$()和任意类型的\$(thing)原木\$()合成。
	
	在其他方块上放置\$(thing)支撑梁\$()就可以产生三格高的垂直支撑梁，在梁的下方必须有固体方块作为支撑。
+ _untitled_
	```tfc:multimultiblock
	```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - "   "
		    - CRD
		    - "   "
		  - - "   "
		    - V W
		    - "   "
		  - - "   "
		    - V W
		    - "   "
		  - - GGG
		    - G0G
		    - GGG
		  - - "   "
		    - "   "
		    - "   "
		mapping:
		  "0": tfc:rock/raw/andesite
		  R: air
		  C: air
		  D: air
		  V: air
		  W: air
		  G: tfc:rock/raw/andesite
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - "   "
		    - CRD
		    - "   "
		  - - "   "
		    - V W
		    - "   "
		  - - "   "
		    - V W
		    - "   "
		  - - GGG
		    - G0G
		    - GGG
		  - - "   "
		    - "   "
		    - "   "
		mapping:
		  "0": tfc:rock/raw/andesite
		  R: air
		  C: tfc:wood/vertical_support/oak
		  D: air
		  V: tfc:wood/vertical_support/oak
		  W: air
		  G: tfc:rock/raw/andesite
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - "   "
		    - CRD
		    - "   "
		  - - "   "
		    - V W
		    - "   "
		  - - "   "
		    - V W
		    - "   "
		  - - GGG
		    - G0G
		    - GGG
		  - - "   "
		    - "   "
		    - "   "
		mapping:
		  "0": tfc:rock/raw/andesite
		  R: air
		  C: tfc:wood/vertical_support/oak
		  D: tfc:wood/vertical_support/oak
		  V: tfc:wood/vertical_support/oak
		  W: tfc:wood/vertical_support/oak
		  G: tfc:rock/raw/andesite
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - "   "
		    - CRD
		    - "   "
		  - - "   "
		    - V W
		    - "   "
		  - - "   "
		    - V W
		    - "   "
		  - - GGG
		    - G0G
		    - GGG
		  - - "   "
		    - "   "
		    - "   "
		mapping:
		  "0": tfc:rock/raw/andesite
		  R: tfc:wood/horizontal_support/oak[north=true,south=true]
		  C: tfc:wood/vertical_support/oak[south=true]
		  D: tfc:wood/vertical_support/oak[north=true]
		  V: tfc:wood/vertical_support/oak
		  W: tfc:wood/vertical_support/oak
		  G: tfc:rock/raw/andesite
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - "   "
		    - CRD
		    - "   "
		  - - "   "
		    - V W
		    - "   "
		  - - "   "
		    - V W
		    - "   "
		  - - GGG
		    - G0G
		    - GGG
		  - - "   "
		    - "   "
		    - "   "
		mapping:
		  "0": tfc:rock/raw/andesite
		  R: tfc:wood/horizontal_support/oak[north=true,south=true]
		  C: tfc:wood/vertical_support/oak[south=true]
		  D: tfc:wood/vertical_support/oak[north=true]
		  V: tfc:wood/vertical_support/oak
		  W: tfc:wood/vertical_support/oak
		  G: tfc:rock/raw/andesite
		```
	放置\$(thing)水平\$()支撑梁可以连接距离不超过 5 个方块的两个\$(thing)垂直\$()支撑梁（如上图所示）。
+ _untitled_
	只有\$(thing)水平支撑梁\$()才能起到\$(thing)支撑\$()效果，垂直的和转角的都不行。每一根水平支撑梁可以支撑以自身为中心，^9 x 5 x 9^范围内的任何方块。
	
	除了可以用支撑梁作为支撑，岩石下面的其他固体方块（例如其他有支撑的岩石）也会提供支撑。但是需要注意的是，\$(thing)楼梯\$()和\$(thing)台阶\$()等\$(thing)非固体方块\$()，以及\$(thing)平滑岩石\$()，是^无法^提供支撑的。
+ 凿制
	最后注意，[凿制](mechanics/chisel)岩石和挖掘岩石一样可能导致塌方。
	
	
	
	北京第三区矿业委提醒您：矿道千万条，安全第一条。承重不规范，亲人两行泪！
#札札弄机杼

```patchouli-entry
id: mechanics/weaving
name: 札札弄机杼
category: tfc:mechanics
icon: tfc:spindle
read_by_default: true
extra_recipe_mappings:
  tfc:spindle: 1
  tfc:wool: 2
  tag:tfc:looms: 3
  tfc:wool_cloth: 4
  minecraft:white_wool: 6
  tfc:silk_cloth: 7
  tfc:burlap_cloth: 8
  tfc:power_loom: 10
```

+ _untitled_
	\$(thing)织布术\$()是一种将线变为\$(thing)布匹\$()的工艺。虽然将线织成布只需要\$(thing)织机\$()就行了，但想要将[产毛动物的](mechanics/animal_husbandry#wooly_animals)\$(thing)毛\$()捻成\$(thing)羊毛纱\$()线就得先做一只\$(thing)纺锤\$()。
+ _untitled_
	```tfc:knapping_recipe
	tfc:knapping/ceramic/unfired_spindle_head
	```
	\$(thing)纺锤头\$()可以通过黏土塑形来制作。先将黏土如图捏成\$(thing)未烧制的纺锤头\$()\$，然后在将其[加热](mechanics/heating)即可。将纺锤头与\$(thing)木棍\$()合成便能做出纺锤了
+ _untitled_
	```patchouli:crafting
	tfc:crafting/wool_yarn
	```
	将\$(thing)羊毛\$()与纺锤合成，得到\$(thing)羊毛纱\$()。
+ _untitled_
	```patchouli:crafting
	tfc:crafting/wood/loom/acacia
	```
	可以用\$(thing)木材\$()和\$(thing)木棍\$()制作织机。
+ _untitled_
	[](#wool_cloth)
	```tfc:loom_recipe
	tfc:loom/wool_cloth
	```
	每 16 卷\$(thing)羊毛纱\$()能够织成一匹\$(thing)羊毛布\$()。首先，手持羊毛纱对准织机按\$(item)\$(k:key.use)\$()。接着持续\$(item)\$(k:key.use)\$()点击织机。待织机处理完整匹毛布后再次按\$(item)\$(k:key.use)\$()就可以取下布匹了。
+ _untitled_
	```patchouli:image
	images:
	  - tfc:textures/gui/book/tutorial/loom_empty.png
	  - tfc:textures/gui/book/tutorial/loom_full.png
	  - tfc:textures/gui/book/tutorial/loom_working.png
	  - tfc:textures/gui/book/tutorial/loom_done.png
	border: true
	```
	织机织布的几个不同阶段。
+ _untitled_
	```tfc:loom_recipe
	tfc:loom/white_wool
	```
	\$(thing)羊毛布\$()可以重新织成\$(thing)羊毛块\$()。羊毛块可以用[染料](mechanics/dye)染色。
+ _untitled_
	```tfc:loom_recipe
	tfc:loom/silk_cloth
	```
	织机可以将\$(thing)蛛丝\$()织成\$(thing)丝绸\$()。丝绸在某些配方中可以代替羊毛布。
+ _untitled_
	[](#burlap_cloth)
	```tfc:loom_recipe
	tfc:loom/burlap_cloth
	```
	[黄麻纤维](mechanics/crops#jute)可以织成\$(thing)粗麻布\$()，但现在看来它还是没有什么用的样子。
+ _untitled_
	```patchouli:crafting
	minecraft:light_blue_bed
	minecraft:painting
	```
+ _untitled_
	[](#power_loom)
	```patchouli:crafting
	tfc:crafting/power_loom
	```
	通过使用[动力织布机](mechanics/weaving#power_loom)，可以让织布过程实现自动化。
+ _untitled_
	动力织布机与普通织机类似，可以从侧面的漏斗接收原料，并从底部的漏斗提取成品。在织机的右侧，它可以接收来自\$(thing)传动杆\$()的动力。像普通织机一样放入原料后，它会慢慢为你织出最终产品。动力织布机无法手动操作。
#木桶

```patchouli-entry
id: mechanics/wooden_buckets
name: 木桶
category: tfc:mechanics
icon: tfc:wooden_bucket
read_by_default: true
```

+ _untitled_
	\$(thing)木桶\$()是游戏早期的液体容器。它可以盛装任何可被用于合成的液体，例如[锅](mechanics/pot)或[大桶](mechanics/barrels)的某些配方中的所需的液体，最多 1000 mB。木桶不能放置水源方块，把木桶里的液体倒在地上只会出现少量的液体并很快消失。
+ _untitled_
	```patchouli:crafting
	tfc:crafting/wooden_bucket
	```
	木桶需要使用\$(thing)木材\$()制作。
