```patchouli-category
id: firmalife
name: Firmalife扩展模组
description: 关于Firmalife扩展模组的一切
icon: firmalife:brick_oven_top
sortnum: 10
```

#与群峦传说本体的区别

```patchouli-entry
id: firmalife/differences_from_tfc
name: 与群峦传说本体的区别
category: tfc:firmalife
icon: tfc:textures/item/food/wheat_bread.png
read_by_default: true
sortnum: 0
```

+ _untitled_
	Firmalife 模组对群峦传说原版中的一些运作机制进行了改动。本章旨在帮助你了解那些差异较大的方面。
+ 奶酪的熟化
	[奶酪](firmalife/cheese)的制作流程更为复杂。它能被作为方块放置，也可以选择在[地窖](firmalife/cellar)中进行熟化。
+ 面包的制作
	[面包](firmalife/bread)的制作流程更为复杂，将需要酵母和甜味剂。群峦传说原版的面包配方制作出的是营养价值更低的粗饼。
+ 甜味剂
	Firmalife 更强调糖的使用。虽然仍然可以从甘蔗中获取糖，但请考虑使用蜂蜜（来自蜜蜂）或用甜菜制糖！
#奶酪

```patchouli-entry
id: firmalife/cheese
name: 奶酪
category: tfc:firmalife
icon: firmalife:textures/item/food/gouda.png
read_by_default: true
sortnum: 1
```

+ _untitled_
	在 Firmalife 中制作\$(thing)奶酪\$()比在原版群峦中稍复杂一些。新增了两种奶：\$(thing)牦牛奶\$()和\$(thing)山羊奶\$()。它们分别通过挤取[牦牛](mechanics/animal_husbandry#yak)和[山羊](mechanics/animal_husbandry#goat)获得。挤取[奶牛](mechanics/animal_husbandry#cow)获得的仍是原来的奶。
+ _untitled_
	和通常一样，奶首先要\$(thing)凝固\$()。要使奶凝固，你需要\$(thing)凝乳酶\$()。凝乳酶来自\$(thing)反刍\$()动物的胃。这包括[牦牛](mechanics/animal_husbandry#yak)、[奶牛](mechanics/animal_husbandry#cow)、[绵羊](mechanics/animal_husbandry#sheep)、[山羊](mechanics/animal_husbandry#goat)和[麝牛](mechanics/animal_husbandry#musk_ox)。要使奶凝固，需将其与凝乳酶一起在[大桶](mechanics/barrels)中密封4小时。
+ _untitled_
	[](#cheesecloth)
	```patchouli:crafting
	firmalife:crafting/cheesecloth
	```
	凝固后的奶和\$(thing)奶酪布\$()一起密封在大桶中就可以制成\$(thing)凝乳\$()。奶酪布是不能重复使用的。
+ _untitled_
	```patchouli:crafting
	firmalife:crafting/cheddar_wheel
	```
	现在你可以制造\$(thing)干酪\$()了。你可以用\$(thing)牦牛奶凝乳\$()制作\$(thing)西藏干酪\$()，用\$(thing)山羊奶凝乳\$()制作\$(thing)法式干酪\$()，以及用\$(thing)牛奶凝乳\$()制作\$(thing)英格兰切达干酪\$()。
+ _untitled_
	```patchouli:crafting
	firmalife:crafting/chevre_wheel
	firmalife:crafting/rajya_metok_wheel
	```
+ _untitled_
	你的另一个选择是制作\$(thing)鲜奶酪\$()。这些是通过将凝乳密封在一桶\$(thing)盐水\$()中制成的。你可以用\$(thing)牦牛奶凝乳\$()制作\$(thing)喜马拉雅奶酪\$()，用\$(thing)山羊奶凝乳\$()制作\$(thing)希腊菲达奶酪\$()，以及用\$(thing)牛奶凝乳\$()制作\$(thing)荷兰高达奶酪\$()。
+ _untitled_
	[](#aging)
	奶酪轮是方块，应放置起来以利于保存。为了提高其品质和保质期，奶酪轮应在[地窖](firmalife/cellar)中进行\$(thing)熟化\$()。为了从奶酪轮上获得可食用的奶酪，应手持\$(thing)刀\$()点击\$(item)\$(k:key.use)\$()将其切片。如果直接破坏奶酪块，将丢失熟成效果！
+ _untitled_
	```tfc:multimultiblock
	```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - "0"
		mapping:
		  X: firmalife:gouda_wheel[age=fresh]
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - "0"
		mapping:
		  X: firmalife:gouda_wheel[age=aged]
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - "0"
		mapping:
		  X: firmalife:gouda_wheel[age=vintage]
		```
	一块荷兰高达干酪轮的熟化阶段：\$(thing)新鲜\$()、\$(thing)熟成\$()和\$(thing)陈年\$()。
#气象站

```patchouli-entry
id: firmalife/climate_station
name: 气象站
category: tfc:firmalife
icon: firmalife:climate_station
read_by_default: true
sortnum: 2
```

+ _untitled_
	The \$(thing)Climate Station\$() is a block that manages the [Greenhouse](firmalife/greenhouse) and the [Cellar](firmalife/cellar). When its corresponding multiblock is built correctly, it will show water on its sides. When it is invalid, it will show ice. The Climate Station must be placed on the first level of the multiblock, touching a part of the greenhouse structure. If it is not touching the structure, you may \$(item)\$(k:key.use)\$() it with a block from that greenhouse type to tell it what to look for.
+ _untitled_
	```tfc:multimultiblock
	```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - "0"
		mapping:
		  X: firmalife:climate_station[stasis=true]
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - "0"
		mapping:
		  X: firmalife:climate_station[stasis=false]
		```
	处于有效和无效状态的气象站。
+ 气象站使用技巧
	\$(li)它会定期自动更新，或在被放置/破坏时更新。\$()\$(li)当气象站更新时，它会告知多方块结构内的所有方块可以开始运作。例如，它让[奶酪](firmalife/cheese)开始熟成。\$()\$(li)按下\$(item)\$(k:key.use)\$()可以强制更新气象站及整个多方块结构内所有方块的状态。
+ _untitled_
	```patchouli:crafting
	firmalife:crafting/climate_station
	```
	气象站的合成方法。
+ _untitled_
	关于温室建造的说明：温室的最大尺寸为以气象站为中心的31x31x31区域，即向每个方向延伸15格。将气象站置于温室中心，可以充分利用最大尺寸范围。你也可以通过在内部使用墙壁和多个气象站将温室细分为多个区域，从而建造更大的温室。
#地窖

```patchouli-entry
id: firmalife/cellar
name: 地窖
category: tfc:firmalife
icon: firmalife:sealed_bricks
read_by_default: true
sortnum: 3
```

+ _untitled_
	\$(thing)地窖\$()是一个由[气象站](firmalife/climate_station)控制的多方块结构。地窖多方块结构唯一的要求是，它必须是一个由\$(thing)密封砖\$()或\$(thing)密封门\$()在所有侧面完全封闭的空间。气象站必须放置在地窖的第一层，并紧贴墙面。
+ 地窖的一个示例
	```patchouli:multiblock
	multiblock_id: firmalife:cellar
	enable_visualize: true
	```
	这只是你可以建造的无数种地窖的一个例子!
+ _untitled_
	```patchouli:crafting
	firmalife:crafting/sealed_bricks
	firmalife:crafting/sealed_brick_door
	```
+ _untitled_
	\$(thing)蜂蜡\$()可以通过[养蜂](firmalife/beekeeping)获得。
	地窖可用于[奶酪熟化](firmalife/cheese#aging)。
+ _untitled_
	地窖可用于保存食物，例如配合[食物架](firmalife/food_shelves)和[悬挂架](firmalife/hangers)使用。在平均温度较低的环境中，地窖的食物保存效果更好。在0度以下，防腐效果稍佳；在-12度以下，效果则显著提升。
#食物架

```patchouli-entry
id: firmalife/food_shelves
name: 食物架
category: tfc:firmalife
icon: firmalife:wood/food_shelf/pine
read_by_default: true
sortnum: 4
```

+ _untitled_
	\$(thing)食物架\$()是用于存放食物的设备。它只能在有效的[地窖](firmalife/cellar)中使用。食物架可以容纳一整组的单一食品。通过\$(item)\$(k:key.use)\$()可以放入或取出物品。存放在有效食物架中的物品会获得比小缸更好的防腐效果。
+ _untitled_
	```patchouli:crafting
	firmalife:crafting/wood/food_shelf/acacia
	```
	食物架由木板和木材制成。
#悬挂架

```patchouli-entry
id: firmalife/hangers
name: 悬挂架
category: tfc:firmalife
icon: firmalife:wood/hanger/pine
read_by_default: true
sortnum: 5
```

+ _untitled_
	\$(thing)悬挂架\$()是用于存放肉类或大蒜的设备。它只能在有效的[地窖](firmalife/cellar)中使用。悬挂架可以容纳整整一组的单一物品。通过\$(item)\$(k:key.use)\$()可以放入或取出物品。存放在有效悬挂架中的物品会获得比食物架或小缸更好的防腐效果。
+ _untitled_
	```patchouli:crafting
	firmalife:crafting/wood/hanger/acacia
	```
	悬挂架由木板和线制成。
#罐头柜

```patchouli-entry
id: firmalife/jarbnet
name: 罐头柜
category: tfc:firmalife
icon: firmalife:wood/jarbnet/pine
read_by_default: true
sortnum: 6
```

+ _untitled_
	罐头柜是一种用于存储[罐子](tfc:firmalife/jars)、蜡烛和水壶的装饰性存储方块。空手并按住\$(item)\$(k:key.sneak)\$()点击可将其打开或关闭。若内部放有蜡烛，可将其点燃以产生微弱的亮光。
+ _untitled_
	```patchouli:crafting
	firmalife:crafting/wood/jarbnet/acacia
	```
#温室

```patchouli-entry
id: firmalife/greenhouse
name: 温室
category: tfc:firmalife
icon: firmalife:sealed_bricks
read_by_default: true
sortnum: 7
```

+ _untitled_
	\$(thing)温室\$()是一个由[气象站](firmalife/climate_station)控制的多方块结构。它允许作物全年生长。温室有多种类型和方块可供选择。然而，建造一个温室相当简单。与[地窖](firmalife/cellar)类似，它应该是一个由属于同一\$(thing)温室类型\$()的方块围成的封闭空间。温室的地板可以是任何非空气方块。
+ _untitled_
	温室的墙壁必须是完整的立面。板墙的放置应使方块外部的面（例如，可以放置火把的面）朝向温室内侧。这点同样适用于屋顶，不过半砖可以被视为有效的屋顶方块。活板门和门也始终有效，且无需特殊朝向。
+ _untitled_
	属于同一种\$(thing)温室类型\$()的建筑方块可以互相替换使用。大多数温室方块会随时间\$(thing)老化\$()。例如，\$(thing)防腐木\$()材质的温室方块会变成\$(thing)风化的防腐木\$()方块。由于这两种方块类型属于同一温室类型，你的温室将继续正常运作。不锈钢温室则不会老化。
+ 温室类型
	升级温室类型可让你使用更多种类的种植盆。每个等级都会解锁更多的种植盆类型。
	
	\$(li)防腐木：四槽种植盆。\$()\$(li)铜：大型种植盆和水培种植盆。\$()\$(li)铁：格子种植架\$() \$(li)不锈钢（最高等级）\$()
+ _untitled_
	常规的\$(thing)温室方块\$()有四种：墙壁、门、屋檐和屋顶。屋檐和屋顶分别是楼梯和台阶。这些方块还有更薄的版本，也称为板墙、活板门和顶板。你可以随意组合这些方块来构成温室的结构。
+ _untitled_
	```tfc:multimultiblock
	```
	+ `firmalife:treated_wood_greenhouse`
	+ `firmalife:copper_greenhouse`
	+ `firmalife:iron_greenhouse`
	+ `firmalife:stainless_steel_greenhouse`
	每种类型的温室的一个范例。
+ _untitled_
	有许多方块可以在温室内运作：
	\$(li)[种植盆](firmalife/planters)，用于种植作物\$()，以及
	\$(li)[洒水器](firmalife/irrigation)，为种植盆供水的各种装置。
+ _untitled_
	接下来的四页包含了主要温室方块的配方。虽然它们仅以铁质温室为例展示，但配方中的铁杆可以替换为\$(thing)防腐木材\$()、\$(thing)铜杆\$()或\$(thing)不锈钢杆\$()。关于不锈钢的信息，请参阅[此页](firmalife/stainless_steel)。
+ _untitled_
	```patchouli:crafting
	firmalife:crafting/iron_greenhouse_wall
	firmalife:crafting/iron_greenhouse_roof
	```
+ _untitled_
	```patchouli:crafting
	firmalife:crafting/iron_greenhouse_door
	firmalife:crafting/iron_greenhouse_roof_top
	```
+ _untitled_
	```patchouli:crafting
	firmalife:crafting/iron_greenhouse_trapdoor
	firmalife:crafting/iron_greenhouse_panel_roof
	```
+ _untitled_
	```patchouli:crafting
	firmalife:crafting/iron_greenhouse_panel_wall
	firmalife:crafting/iron_greenhouse_port
	```
#灌溉

```patchouli-entry
id: firmalife/irrigation
name: 灌溉
category: tfc:firmalife
icon: firmalife:sprinkler
read_by_default: true
sortnum: 8
```

+ _untitled_
	\$(thing)洒水器\$()是一种以洒水器方块正下方为中心，对5x6x5区域进行灌溉的装置。当它周围有水的粒子效果时，表明它正在工作。面朝上放置的洒水器会对上方相同的5x6x5区域进行灌溉。
+ _untitled_
	```tfc:anvil_recipe
	firmalife:anvil/sprinkler
	```
	洒水器由一块\$(thing)铜板\$()锻造而成。
+ _untitled_
	洒水器必须连接一个供水管道系统才能工作。这需要通过连接一系列\$(thing)铜制管道\$()来实现。铜制管道最多能将水输送到32格外的洒水器。它们被连接到\$(thing)灌溉水箱\$()或\$(thing)水泵站\$()上。
+ _untitled_
	```tfc:anvil_recipe
	firmalife:anvil/copper_pipe
	```
	铜制管道是由铜板制成的。
+ _untitled_
	```patchouli:multiblock
	multiblock:
	  pattern:
	    - - X
	    - - Y
	    - - "0"
	  mapping:
	    X: firmalife:irrigation_tank
	    Y: firmalife:pumping_station
	enable_visualize: false
	```
+ _untitled_
	水泵站必须放置在水源方块上方才能工作，并且需要连接上动力。灌溉水箱也可以通过其侧面的端口供水，前提是它们只能比水泵站或其他水箱高出最多3个方块的高度。
+ _untitled_
	```patchouli:crafting
	firmalife:crafting/pumping_station
	firmalife:crafting/irrigation_tank
	```
+ _untitled_
	```patchouli:crafting
	firmalife:crafting/oxidized_copper_pipe
	```
	氧化管道与普通铜制管道功能相同，只是不能与另一种类型的管道连接。
+ _untitled_
	```patchouli:crafting
	firmalife:crafting/iron_greenhouse_port
	```
	温室端口内部设有一根管道，可用于使水流贯通温室墙壁！
#种植盆

```patchouli-entry
id: firmalife/planters
name: 种植盆
category: tfc:firmalife
icon: firmalife:large_planter
read_by_default: true
sortnum: 9
```

+ _untitled_
	[](#planters)
	\$(thing)种植盆\$()用于在[温室](firmalife/greenhouse)内种植\$(thing)作物\$()。要查看种植盆的状态，你可以手持一把\$(thing)锄\$()观察它。种植盆中的作物会消耗[营养](mechanics/fertilizers)，其方式类似于[作物](mechanics/crops)。种植盆应放置在有效的温室内，并由一个[气象站](firmalife/climate_station)激活。种植盆需要至少一些阳光才能工作。
+ _untitled_
	```patchouli:crafting
	firmalife:crafting/watering_can
	```
	种植盆必须要\$(thing)浇水\$()才能生长。这需要使用\$(thing)喷壶\$()，它用\$(thing)木桶\$()、一个装\$(thing)水\$()的容器和\$(thing)木材\$()来合成。手持喷壶按下\$(item)\$(k:key.use)\$()可以为附近的种植盆浇水。对着水源按\$(item)\$(k:key.use)\$()就可以为其重新灌满水。
+ _untitled_
	```patchouli:crafting
	firmalife:crafting/large_planter
	```
	\$(thing)大型种植盆\$()是最简单的一种种植盆。它们从单粒种子开始种植一株作物，成熟后可使用\$(item)\$(k:key.use)\$()收获。
+ _untitled_
	大型种植盆可以种植\$(thing)绿豆\$()、\$(thing)西红柿\$()、\$(thing)甘蔗\$()、\$(thing)黄麻\$()和\$(thing)谷物\$()。但如果要种植谷物，你需要一个\$(thing)铜\$()或更高等级的温室。
+ _untitled_
	```patchouli:crafting
	firmalife:crafting/quad_planter
	```
	\$(thing)四槽种植盆\$()可以同时种植四株作物。这些作物都会从同一个养料池汲取营养，成熟后可分别使用\$(item)\$(k:key.use)\$()来单独收获。
+ _untitled_
	四槽种植盆可以种植\$(thing)甜菜\$()、\$(thing)卷心菜\$()、\$(thing)胡萝卜\$()、\$(thing)大蒜\$()、\$(thing)洋葱\$()、\$(thing)马铃薯\$()和\$(thing)大豆\$()。这些农作物都可以在任意等级的温室中种植。
+ _untitled_
	```patchouli:crafting
	firmalife:crafting/bonsai_planter
	```
	\$(thing)盆栽种植盆\$()可以用树苗来种植小型果树。按\$(item)\$(k:key.use)\$()就可以收获水果。
+ _untitled_
	盆栽种植盆可以种植除\$(thing)香蕉\$()外的任何果树，而香蕉需要\$(thing)悬挂种植盆\$()。它们都会消耗氮作为主要的营养，并且需要\$(thing)铁\$()或更高等级的温室才能种植。
+ _untitled_
	```patchouli:crafting
	firmalife:crafting/hanging_planter
	```
	\$(thing)悬挂种植盆\$()可以倒着种植农作物。成熟后可以按\$(item)\$(k:key.use)\$()收获。
+ _untitled_
	悬挂种植盆可以用种子种植\$(thing)西葫芦\$()，以及用树苗种植\$(thing)香蕉\$()。西葫芦可以在任意等级的温室种植，但香蕉需要\$(thing)铁\$()或更高等级的温室。悬挂种植盆必须被挂在一个实心方块的下方。
+ _untitled_
	```patchouli:crafting
	firmalife:crafting/trellis_planter
	```
	\$(thing)格子种植架\$()可以种植各种浆果丛。浆果可以按\$(item)\$(k:key.use)\$()收获。
+ _untitled_
	格子种植架具有\$(thing)繁殖\$()浆果丛的特性。如果一个种植架放置在另一个之上，并且下方的架子上长有成熟的浆果丛，则上方的架子有可能繁殖出新的浆果丛。格子种植架可以种植除\$(thing)蔓越莓\$()外的任何浆果丛，但需要\$(thing)铁\$()或更高级的温室才能运作。这些浆果丛偏好氮元素。
+ _untitled_
	```patchouli:crafting
	firmalife:crafting/hydroponic_planter
	```
	\$(thing)水培种植盆\$()用于种植水稻和蔓越莓。其运作方式与四格种植盆相同，只是无需浇水。
+ _untitled_
	水培种植盆必须在其下方安装一根\$(li)[洒水器管道](firmalife/irrigation)来提供水源。没有这根管道，作物将无法生长。每个水泵操作站可以供给的水培种植园没有严格的数量限制。
+ _untitled_
	```patchouli:crafting
	firmalife:crafting/sweeper
	```
	\$(thing)清扫器\$()用于收割四槽种植盆和水培种植盆以外的种植盆。其底部必须连接一个旋转的\$(thing)传动轴\$()。
+ _untitled_
	```patchouli:crafting
	firmalife:crafting/picker
	```
	\$(thing)采摘器\$()可通过上方的红石信号激活。它会向下延伸，以采集四槽种植盆和水培种植盆中的作物。
#养蜂

```patchouli-entry
id: firmalife/beekeeping
name: 养蜂
category: tfc:firmalife
icon: firmalife:beehive
read_by_default: true
sortnum: 10
```

+ _untitled_
	\$(thing)蜜蜂\$()是一种可以像家畜一样养殖的野生昆虫。它们因能生产蜂蜜、蜂蜡和其他产品的能力而备受重视。所有蜜蜂都需要生活在某种形式的蜂巢中。本节将为你讲解照料和饲养蜜蜂所需的一切知识。
+ 野生蜂巢
	```patchouli:multiblock
	multiblock:
	  pattern:
	    - - X
	    - - Y
	    - - "0"
	  mapping:
	    X: tfc:wood/log/oak[axis=z]
	    Y: firmalife:wild_beehive[facing=north,honey=true]
	enable_visualize: false
	```
	野生蜂巢生成于降水量150-450毫米、温度在5-30°C之间的森林地带。
+ _untitled_
	一般而言，蜜蜂在14°C以上活跃。\$(thing)野生蜂巢\$()在世界生成时必定包含蜜蜂，除非受到惊扰，否则不会失去蜜蜂。如果时间流逝且蜜蜂处于活跃状态，野生蜂巢会显示出正在滴落蜂蜜。
+ _untitled_
	破坏一个野生蜂巢或其附着的树，会导致蜜蜂攻击附近的玩家。这会以\$(thing)蜂群\$()攻击效果的形式出现。穿着全套\$(thing)蜜蜂护甲\$()或潜入水下可以减轻蜂群攻击的效果。野生蜂巢会掉落\$(thing)蜂蜜\$()、\$(thing)蜂蜡\$()和有用的\$(thing)野生蜂巢脾\$()。
+ _untitled_
	```patchouli:crafting
	firmalife:crafting/skep
	```
	\$(thing)蜂篮\$()是最小的人造蜂巢。
+ _untitled_
	蜂篮最有用的特点是它可以被玩家拾起并移动。但是，玩家一次只能携带一个蜂篮，否则会\$(thing)超重\$()。如果15格范围内有\$(thing)活跃\$()的野生蜂巢，一天之内它就会开始\$(thing)分蜂\$()。分蜂现象会以两个蜂巢之间出现粒子连线为标志。
+ _untitled_
	当一次分蜂完成后，蜂篮中将包含一只\$(thing)蜂王\$()。手持锄头查看蜂巢将显示此信息。蜂王代表一个蜜蜂群落的存在，它有许多属性：年龄、物种、性状，以及群落可能患有的任何疾病或感染。
+ _untitled_
	单靠蜂篮来维持蜜蜂的效用有限。这是因为蜂篮一次只能容纳1份蜂蜜。可以通过\$(item)\$(k:key.use)\$()向蜂篮添加或取出\$(thing)原蜜\$()。注意，为了避免激怒蜜蜂，你最好只在天黑时进行收获。
+ _untitled_
	```patchouli:crafting
	firmalife:crafting/beehive_frame
	firmalife:crafting/beehive
	```
+ _untitled_
	\$(thing)木质蜂箱\$()是用于养蜂的主要设备。它们最多可容纳四个\$(thing)巢脾\$()。一个巢脾可以容纳1份\$(thing)原蜜\$()。要想让你的蜜蜂进入木质蜂箱，请将包含蜂王的\$(thing)蜂篮\$()放在蜂箱5格范围内，并确保蜂箱至少有一个巢脾，且温度足够温暖。分蜂过程随后会开始，并持续一天。
+ _untitled_
	蜂箱能感知周围5格方形区域内的环境。为了生产蜂蜜，此区域内必须至少有10朵花。产蜜的概率随花朵数量增加而提高，最多可达60朵。蜜蜂的性状也会影响产蜜几率。蜂蜜只能被储存在\$(thing)空巢脾\$()中。
+ _untitled_
	```patchouli:crafting
	firmalife:crafting/beeswax
	```
	\$(thing)刮取\$()巢脾（手持刀右击它也行）可以获得\$(thing)蜂蜡\$()。
+ _untitled_
	```patchouli:crafting
	firmalife:crafting/centrifuge
	```
	\$(thing)离心机\$()用于将\$(thing)刮过的巢脾\$()加工成\$(thing)原蜜\$()。
+ _untitled_
	\$(thing)离心机\$()可以通过\$(item)\$(k:key.use)\$()操作，也可以通过方块上方的传动轴机械动力驱动。\$(item)\$(k:key.use)\$()来放入刮过的巢脾。完成后\$(thing)原蜜\$()会出现在离心机外。剩余的巢脾可以在蜂箱中重复使用。
+ _untitled_
	```patchouli:crafting
	firmalife:crafting/sugared_beehive_frame
	firmalife:crafting/honeyed_beehive_frame
	```
+ _untitled_
	蜜蜂生产蜂蜜不只是为了你，也是为了生存！当蜜蜂没有可用巢脾时，或者如果天气太冷（查看锄头提示信息），它们默认每12天会消耗一份蜂蜜。当它们蜂蜜耗尽时，每天都有一定概率\$(thing)死亡\$()。
+ _untitled_
	你可以手动把\$(thing)加糖的巢脾\$()或\$(thing)充满的巢脾\$()添加到蜂箱中，以帮助蜜蜂度过冬季。这就是为什么蜂篮难以过冬——它们只能容纳一份蜂蜜，而且没有巢脾。
+ _untitled_
	```patchouli:crafting
	firmalife:crafting/insulating_beehive_frame
	```
	添加一个\$(thing)保温的巢脾\$()可以为蜂箱增加2°C的抗寒能力。添加多个没有额外效果。
+ _untitled_
	群落仍然可以从木质蜂箱\$(thing)分蜂\$()。有益的分蜂类型涉及\$(thing)分裂\$()蜂箱。如果一个蜂箱至少有24天龄（默认）、温暖、充满蜂蜜且没有\$(thing)遗传病\$()，并且附近有可用的蜂箱，它可以分裂成两个新的群落。这也会导致\$(thing)基因突变\$()。
+ _untitled_
	分蜂也可能是由于蜂箱内食物短缺引起的。如果一个蜂箱发现另一个蜂箱有蜂蜜而自己没有，在某些情况下它会试图分蜂到那个蜂箱。感染了\$(thing)瓦螨\$()寄生虫的蜜蜂也会试图入侵并接管其他蜂箱。
+ _untitled_
	如果没有野生蜜蜂可用，也可以通过\$(thing)蜜蜂诱饵\$()吸引蜜蜂到蜂篮中。诱饵的形式是\$(thing)野生蜂巢脾\$()和\$(thing)芳香蜂巢脾\$()。用\$(item)\$(k:key.use)\$()将它们添加到\$(thing)蜂篮\$()中，并在蜂篮周围放置至少30朵花。在这种情况下，每天有1/8的几率吸引到蜜蜂。
+ _untitled_
	```patchouli:crafting
	firmalife:crafting/aromatic_honeycomb
	```
	\$(thing)芳香蜂巢脾\$()是由草药制成的野生蜂巢脾的替代品。
+ _untitled_
	```patchouli:crafting
	firmalife:crafting/jarring_food/raw_honey
	```
	如果储存在\$(thing)罐子\$()中，蜂蜜可以永久保存。
+ _untitled_
	本章涵盖了养蜂的主要方面。有关物种、性状、遗传病和寄生虫感染的信息，请参阅下一章：[养蜂参考](firmalife/beekeeping_reference)。
#养蜂参考

```patchouli-entry
id: firmalife/beekeeping_reference
name: 养蜂参考
category: tfc:firmalife
icon: firmalife:textures/item/queen_bee.png
read_by_default: true
sortnum: 11
```

+ _untitled_
	本章是[养蜂](firmalife/beekeeping)章节的延续。
	蜂箱的蜂王拥有某些性状。这些性状在蜂群分裂时会传递并可能改变。新的性状通常只能从野生蜜蜂中获得，除了「冷静度」这一性状，它在人工饲养下的分蜂过程中有一定几率出现。
+ 性状列表
	\$(li)\$(thing)耐寒性\$(): 使蜜蜂能在更低的温度下产蜜。每级耐寒性提供额外2°C的抗寒能力。\$()\$(li)\$(thing)生产力\$(): 提高蜂蜜的生产速度。\$()\$(li)\$(thing)突变性\$(): 增加分蜂时传递性状的变异性。\$()\$(li)\$(thing)生育力\$(): 增加分蜂的可能性。\$()
+ _untitled_
	\$(li)\$(thing)作物亲和力\$(): 有一定几率向附近作物传播少量营养。\$()\$(li)\$(thing)自然亲和力\$(): 导致蜂箱周围生成新的花卉和水生植物。\$()\$(li)\$(thing)冷静度\$(): 降低蜜蜂攻击你的可能性。\$()\$(li)\$(thing)感染抗性\$(): 降低患上基因病和寄生虫感染的可能性。
+ _untitled_
	具有高\$(thing)突变性\$()性状的蜜蜂有一定几率患上\$(thing)遗传病\$()。患有遗传病的蜜蜂无法繁殖。
+ _untitled_
	Bees subject to improper conditions can develop \$(thing)Parasitic Infections\$(). These conditions do not have to do with their species and may spontaneously occur in wild bees. These conditions include: the hive touching any other block besides for the block below it; temperatures below -18 or above 27°C; rainfall below 50 or above 470mm. Infected bees cannot make honey.
+ 蜜蜂物种
	\$(thing)蜜蜂物种\$()存在于不同的气候中，它们的生成条件描述了从\$(thing)野生蜂巢\$()或吸引到的野生蜂群中可能得到什么。有些物种比其他物种更稀有。
+ _untitled_
	\$(li)\$(thing)西方蜜蜂\$(): 冷静度，生产力。5-20°C，100-400毫米。极其常见。当没有其他蜜蜂物种符合生成条件时，西方蜜蜂也会生成。\$()\$(li)\$(thing)东方蜜蜂\$(): 生育力，自然亲和力。10-30°C，250-400毫米。常见。\$()\$(li)\$(thing)大蜂\$(): 生育力。15-30°C，300-450毫米。常见。\$()
+ _untitled_
	\$(li)\$(thing)小蜜蜂\$(): 生育力，生产力。20-30°C，300-400毫米。常见。\$()\$(li)\$(thing)黑小蜜蜂\$(): 突变性，自然亲和力。12-22°C，150-350毫米。不常见。\$()\$(li)\$(thing)柯氏蜜蜂\$(): 耐寒性，生产力，自然亲和力。12-16°C，200-375毫米。非常稀有。\$()\$(li)\$(thing)喜马拉雅大蜜蜂\$(): 耐寒性，突变性，生产力。10-19°C，150-250毫米，y>96。稀有。\$()
+ _untitled_
	\$(li)\$(thing)菲律宾蜜蜂\$(): 冷静度，作物亲和力。15-20°C，350-450毫米。非常稀有。\$()\$(li)\$(thing)婆罗洲山蜜蜂\$(): 耐寒性，感染抗性。13-22°C，150-400毫米，y>96。常见。\$()\$(li)\$(thing)印度尼西亚大蜜蜂\$(): 自然亲和力，生育力，感染抗性。16-20°C，350-420毫米。不常见。\$()\$(li)\$(thing)非洲化蜜蜂\$(): 耐寒性。10-25°C，100-320毫米。常见。\$()
+ _untitled_
	```patchouli:crafting
	firmalife:crafting/beekeeper_boots
	firmalife:crafting/beekeeper_leggings
	```
+ _untitled_
	```patchouli:crafting
	firmalife:crafting/beekeeper_chestplate
	firmalife:crafting/beekeeper_helmet
	```
#不锈钢

```patchouli-entry
id: firmalife/stainless_steel
name: 不锈钢
category: tfc:firmalife
icon: firmalife:metal/ingot/stainless_steel
read_by_default: true
sortnum: 11
__comment__: This file was automatically created by mcresources
```

+ _untitled_
	\$(thing)不锈钢\$()与\$(thing)铬\$()是\$(thing)钢\$()等级的金属。它们可以被用在 [不锈钢温室](tfc:firmalife/greenhouse)的建造中。
+ 不锈钢
	```patchouli:spotlight
	item: firmalife:metal/ingot/stainless_steel
	link_recipes: false
	```
	
	^合金配方：^
	\$(li)20 - 30 %：\$(thing)铬\$()\$(li)10 - 20 % ：\$(thing)镍\$()\$(li)60 - 80 % ：\$(thing)钢\$()
+ _untitled_
	```patchouli:spotlight
	item: firmalife:ore/small_chromite
	link_recipes: false
	```
	铬尖晶石是一种熔融后可以得到铬的矿石。它们在\$(thing)侵入岩\$()和\$(thing)变质岩\$()可以找到。
+ 所有可能含铬的岩石种类
	\$(li)深层矿脉：\$()花岗岩、闪长岩、辉长岩、石英岩、板岩、千枚岩、片岩、片麻岩、大理岩\$()\$(li)普通矿脉：\$()流纹岩、玄武岩、安山岩、英安岩、石英岩、板岩、千枚岩、片岩、片麻岩、大理岩
#晾干中

```patchouli-entry
id: firmalife/drying
name: 晾干中
category: tfc:firmalife
icon: firmalife:drying_mat
read_by_default: true
sortnum: 13
```

+ _untitled_
	\$(thing)干燥垫\$()是用来干燥物品的。它使用\$(thing)果树叶子\$()制成，果树叶子可以打碎\$(thing)果树\$()的叶子得到。
+ _untitled_
	```patchouli:crafting
	firmalife:crafting/drying_mat
	```
	干燥垫的合成配方。
+ _untitled_
	干燥垫需要放置在阳光下，手持物品对其按下\$(item)\$(k:key.use)\$()即可将物品放上去。经过半天时间，物品即可被晒干。如果中途下雨，干燥过程就必须重新开始。
+ _untitled_
	```patchouli:crafting
	firmalife:crafting/solar_drier
	```
	太阳能干燥器的功能与干燥垫相同，但速度是干燥垫的12倍。
+ _untitled_
	干燥垫能够实现自动化。使用活塞头推撞干燥垫会弹出物品，将物品丢在干燥垫上则会将其放置。
+ _untitled_
	```tfc:drying_recipe
	firmalife:drying/dry_fruits
	```
	干燥垫一般用来晾干水果。干燥的水果有更长的保质期，并且在某些配方中会用到。
+ _untitled_
	```tfc:drying_recipe
	firmalife:drying/food/tofu
	```
	豆腐需要用干燥垫制作。
#熏制

```patchouli-entry
id: firmalife/smoking
name: 熏制
category: tfc:firmalife
icon: tfc:textures/item/food/venison.png
read_by_default: true
sortnum: 14
```

+ _untitled_
	羊毛纱用于悬挂物品以进行\$(thing)熏制\$()。按\$(item)\$(k:key.use)\$()即可放置羊毛纱。
+ 熏制
	```patchouli:multiblock
	multiblock:
	  pattern:
	    - - X
	    - - Y
	    - - "0"
	  mapping:
	    X: firmalife:wool_string
	    Y: tfc:firepit[lit=true]
	enable_visualize: false
	```
	篝火上方的一根线。
+ _untitled_
	熏制用于保存\$(thing)肉类\$()和[奶酪](mechanics/dairy)。熏制肉类前，必须先用\$(thing)卤水\$()将其密封在\$(thing)大桶\$()中进行\$(thing)卤制\$()。你也可以先将其用盐腌制。奶酪在熏制之前没有这些要求。
+ _untitled_
	要开始熏制，首先将物品放到篝火上方的线上。篝火必须在线正下方四格范围内。在熏制过程中，线会产生一些烟雾。需要特别注意，篝火必须要使用\$(thing)原木\$()作为燃料。如果使用诸如\$(thing)泥炭\$()之类的燃料，会立刻让你的食物获得\$(thing)恶心\$()效果！
+ _untitled_
	熏制过程需要游戏内的8小时。熏制愉快！
#烤炉

```patchouli-entry
id: firmalife/ovens
name: 烤炉
category: tfc:firmalife
icon: firmalife:brick_oven_top
read_by_default: true
sortnum: 15
```

+ _untitled_
	\$(thing)烤炉\$()是一种能大量烹饪食物并延长其保质期的绝佳方式。烤炉烘烤的食物腐败速度仅为普通食物的90%。烤炉是一种多方块结构，由\$(thing)烤炉底\$()、\$(thing)烤炉顶\$()以及可选的\$(thing)烤炉烟囱\$()组成。这些方块最初是黏土状态，必须通过将其温度提升到一定程度并保持足够长的时间来\$(thing)硬化\$()。
	 [烤炉配件](firmalife/oven_appliances)可以扩展烤炉的功能。
+ _untitled_
	```tfc:knapping_recipe
	firmalife:knapping/clay_oven_top
	```
	烤炉顶的合成配方。
+ _untitled_
	```tfc:knapping_recipe
	firmalife:knapping/clay_oven_bottom
	```
	烤炉底的合成配方。
+ _untitled_
	```tfc:knapping_recipe
	firmalife:knapping/clay_oven_chimney
	```
	烤炉底的合成配方。
+ _untitled_
	```patchouli:crafting
	tfc:crafting/bricks
	```
	烤炉可以用\$(thing)砖块\$()、其他烤炉方块或任何能为木炭炉保温的方块进行包裹。这意味着你也可以使用石块，如果你愿意的话！
+ _untitled_
	```patchouli:crafting
	firmalife:crafting/peel
	```
	\$(thing)烤炉铲\$()是从烤炉中取出炙热物品的安全方式。手持烤炉铲对烤炉\$(item)\$(k:key.use)\$()即可取出物品。否则你会被烫伤！
+ _untitled_
	烤炉首先由烤炉底和上方的烤炉顶构成。然后，每个烤炉方块除正面外的所有侧面都应覆盖上隔热方块，如前文所述。你可以选择使用\$(thing)烤炉烟囱\$()作为隔热材料。在烤炉正后方堆叠烟囱，可以让炉内的烟雾向上排出。如果不这样做，烟雾会很快充满你的屋子，非常烦人！
+ _untitled_
	```tfc:multimultiblock
	```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - "     "
		    - "  C  "
		  - - "     "
		    - "  C  "
		  - - WT0TW
		    - WWCWW
		  - - WBBBW
		    - WWCWW
		mapping:
		  "0": firmalife:brick_oven_top[facing=north]
		  T: firmalife:brick_oven_top[facing=north]
		  B: firmalife:brick_oven_bottom[facing=north]
		  W: minecraft:bricks
		  C: firmalife:brick_oven_chimney
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - "     "
		    - "  C  "
		  - - "     "
		    - "  C  "
		  - - WT0TW
		    - WWCWW
		  - - WBBBW
		    - WWCWW
		mapping:
		  "0": firmalife:clay_oven_top[facing=north]
		  T: firmalife:clay_oven_top[facing=north]
		  B: firmalife:clay_oven_bottom[facing=north]
		  W: minecraft:bricks
		  C: firmalife:clay_oven_chimney
		```
	烤炉的一个示例，包括未硬化的和硬化的。
+ _untitled_
	烤炉底用来放置燃料，且只能使用原木。按下\$(item)\$(k:key.use)\$()可以添加或取出原木。烤炉底也是烤炉的一部分，可以用\$(thing)起火器\$()或其他工具点燃。它把热量传递到上方的烤炉顶。
+ _untitled_
	烤炉顶用来容纳被烹饪的食物。它会从烤炉底汲取热量，并随时间缓慢释放。这意味着即使你的燃料耗尽，烤炉顶也能继续工作一小段时间。向其中添加物品只需按下\$(item)\$(k:key.use)\$()。记住，之后要用\$(thing)烤炉铲\$()取出物品！
+ _untitled_
	硬化烤炉方块很简单，但需要耐心。只需正常地点燃你的烤炉底，然后等待就可以了。如果一个烤炉方块在超过600度的温度下保持约80秒，它就会硬化自身及其周围的任何烤炉方块。硬化效果会一直向上传导到烟囱。
+ _untitled_
	```patchouli:crafting
	firmalife:crafting/oven_insulation
	```
	为你的烤炉顶或烤炉底制作烤箱隔热层，可以让你不再需要用方块进行外部包裹。但这并不能免除烟囱的需求。使用\$(item)\$(k:key.use)\$()来安装它。
+ _untitled_
	```patchouli:crafting
	firmalife:crafting/brick_countertop
	```
	台面是装饰性方块，可以算作烤炉隔热层，且外观与烤炉方块相匹配。它们是你厨房装饰的绝佳选择。
+ _untitled_
	烤炉还有\$(thing)装饰面\$()，可用于改变其外观。这些饰面应用于烤炉的基本砖块（或砖块本身），并且是装饰性的。不同的饰面可以混合搭配。按\$(item)\$(k:key.use)\$()就可以应用它们。
+ _untitled_
	```patchouli:crafting
	firmalife:crafting/rustic_bricks
	firmalife:crafting/rustic_finish
	```
+ _untitled_
	```patchouli:crafting
	firmalife:crafting/stone_finish
	firmalife:crafting/tile_brick
	```
+ _untitled_
	```patchouli:crafting
	firmalife:crafting/tile_bricks
	firmalife:crafting/tile_finish
	```
#烤炉配件

```patchouli-entry
id: firmalife/oven_appliances
name: 烤炉配件
category: tfc:firmalife
icon: firmalife:vat
read_by_default: true
sortnum: 16
```

+ _untitled_
	[烤炉](firmalife/ovens)有多种设备可以与其交互，从而扩展其功能。这是因为烤炉在现实中本就是模块化的。
+ _untitled_
	```patchouli:crafting
	firmalife:crafting/clay_oven_hopper
	```
	\$(thing)烤炉漏斗\$()会向其朝向的任何\$(thing)烤炉底\$()输入原木。它最多可容纳16根原木（4组，每组4根，类似一个原木堆），通过从顶部丢入物品来填充其物品栏，也可以通过其他模组的自动化设备输入。
+ _untitled_
	```patchouli:crafting
	firmalife:crafting/ashtray
	```
	\$(thing)炉灰收集器\$()放置在\$(thing)烤炉底\$()下方时，会收集\$(thing)草木灰\$()。当燃料消耗时，有50%的几率获得草木灰。通过\$(item)\$(k:key.use)\$()可以取出草木灰，通过攻击（左键点击）可以放入草木灰。
+ _untitled_
	[](#vat)
	```patchouli:crafting
	firmalife:crafting/vat
	```
	\$(thing)不锈钢锅\$()能够批量制作某些特定的煮沸配方。它有一个物品槽位和10,000mB的流体存储空间，类似于一个大木桶。
+ _untitled_
	例如，不锈钢锅可以用1份橄榄酱与200mB水的比例制作\$(thing)橄榄油/水\$()。要使用不锈钢锅，手持流体与物品对其\$(item)\$(k:key.use)\$()，将其添加到锅中。空手并按住\$(item)\$(k:key.sneak)\$()点击，可以密封或解封不锈钢锅。不锈钢锅在被密封之前不会沸腾。
+ _untitled_
	不锈钢锅应放置在\$(thing)烤炉底\$()上方。如果配方完成时锅中的流体会溢出，则会停止沸腾，因此请确保不要装得太满——尤其是那些产出流体多于消耗的配方！不锈钢锅可以用\$(thing)红石\$()控制打开或关闭。
+ _untitled_
	```patchouli:multiblock
	multiblock:
	  pattern:
	    - - X
	    - - Y
	    - - "0"
	  mapping:
	    X: firmalife:vat
	    Y: firmalife:brick_oven_bottom
	enable_visualize: false
	```
+ _untitled_
	```patchouli:crafting
	firmalife:crafting/jarring_station
	```
	\$(thing)装罐台\$()用于将不锈钢锅中的流体装入罐子中。装罐台侧面的注嘴必须对准装罐台方向放置。
+ _untitled_
	使用不锈钢锅，可以通过向水中添加甜味剂来制作\$(thing)糖水\$()。当锅内反应完成时，流体的颜色会改变。手持\$(thing)带盖空罐\$()点击它，即可将其装满。
+ _untitled_
	使用\$(item)\$(k:key.use)\$()将带盖的空罐添加到装罐台。当检测到果酱时，它会自动将空罐子填充为\$(thing)果酱\$()并密封，每罐需要消耗500mB果酱。
+ _untitled_
	群峦传说的陶锅和烤架可以放置在\$(thing)烤炉底\$()上方。这些设备会自动从下方的烤炉获取热量。除了接收热量的方式不同外，它们的工作方式与普通的陶锅和烤架完全一样。
#面包

```patchouli-entry
id: firmalife/bread
name: 面包
category: tfc:firmalife
icon: tfc:textures/item/food/barley_bread.png
read_by_default: true
sortnum: 17
```

+ _untitled_
	想要制作\$(thing)面包\$()，第一要务就是获取\$(thing)酵母\$()。要获取初始酵母，可将[晒干的水果](firmalife/drying)密封在一个装满\$(thing)水\$()的木桶中。三天后，便会形成\$(thing)酵种\$()。
	从现在起，你可以通过将酵种与\$(thing)面粉\$()一起密封在桶中来喂养酵母，使其增殖。每100mB酵母加入1份面粉，可以产出600mB酵母。这很划算！
+ _untitled_
	```patchouli:crafting
	firmalife:crafting/food/barley_dough
	```
	将酵种、甜味剂和面粉混合，可以制成\$(thing)面团\$()。像平常一样把面团烤熟，就能做出\$(thing)面包\$()了！
+ 面包片
	```patchouli:crafting
	firmalife:crafting/food/barley_slice
	```
	面包烤好后，可以用\$(thing)刀\$()将其切成\$(thing)面包片\$()。这些面包片可用于[制作三明治](tfc:mechanics/sandwiches)，或者烤成\$(thing)吐司\$()，然后涂抹上\$(thing)黄油\$()或果酱。
+ 吐司
	```patchouli:crafting
	firmalife:crafting/food/toast_with_butter
	firmalife:crafting/food/toast_with_jam
	```
#更多的肥料获取途径

```patchouli-entry
id: firmalife/more_fertilizer
name: 更多的肥料获取途径
category: tfc:firmalife
icon: firmalife:compost_tumbler
read_by_default: true
sortnum: 18
```

+ _untitled_
	鉴于 Firmalife 对施肥有更高的需求，这里提供了更多获取[肥料](mechanics/fertilizers)的途径。
+ _untitled_
	\$(thing)堆肥滚筒\$()是生产更多肥料的绝佳方式。它必须连接上动力才能工作，且只能在未供能时才能被玩家操作，因此可以考虑为其连接一个离合器！
+ _untitled_
	```patchouli:crafting
	firmalife:crafting/compost_tumbler
	```
	堆肥滚筒的独特之处在于它可以处理更多类型的堆肥原料，并且不需要精确的比例即可运作。
+ _untitled_
	滚筒可以像普通的堆肥桶一样接收绿色和棕色的物品。它也可以少量接收陶片、木炭、鱼和骨头。
+ _untitled_
	```patchouli:crafting
	firmalife:crafting/pottery_sherd
	```
	用锤子砸碎陶器可获得碎片。
+ _untitled_
	绿色和棕色材料的计算方式相同，每份计为1-4个单位，但新增的鱼等材料每份始终计为1个单位。向堆肥中添加过多古怪材料会导致其产生腐烂堆肥。更糟的是，该结果直至完成时才会显现！如果堆肥中骨头、鱼或陶片的比例超过15%，或者木炭的比例超过20%，它就会腐坏。或者，如果绿色单位比棕色单位数量多出10个或以上，它也会腐坏。
+ _untitled_
	适当添加某些原料可以延长或缩短堆肥完成所需的时间。多加尝试，看看会发生什么。
	如果堆肥桶中有32个单位，将产出3份堆肥。如果至少有24个单位，将产出2份堆肥。如果有16个或更多单位，将产出1份堆肥。低于16则不会产生堆肥。
#搅拌碗

```patchouli-entry
id: firmalife/mixing_bowl
name: 搅拌碗
category: tfc:firmalife
icon: firmalife:mixing_bowl
read_by_default: true
sortnum: 19
```

+ _untitled_
	搅拌碗是把物品和液体混合在一起的好方法。拿一个\$(thing)勺子\$()对它\$(item)\$(k:key.use)\$()就可以把勺子放进碗里, 然后搅拌碗就可以使用了。
+ _untitled_
	```patchouli:crafting
	firmalife:crafting/mixing_bowl
	```
	需要一个\$(thing)勺子\$()才能使用。
#草药和香料

```patchouli-entry
id: firmalife/herbs_and_spices
name: 草药和香料
category: tfc:firmalife
icon: firmalife:spice/basil_leaves
read_by_default: true
sortnum: 20
```

+ _untitled_
	在 Firmalife 中，有许多小型植物可以收集并种植，其中一些可用于烹饪。它们被称为草药。这些植物一旦被收获，就可以在\$(thing)温室\$()中栽培，每株会消耗20点的氮、磷、钾。
+ _untitled_
	翻开下一页查看所有草药的生成地点及其用途信息。
+ _untitled_
	```patchouli:multiblock
	multiblock:
	  pattern:
	    - - X
	    - - "0"
	  mapping:
	    X: firmalife:plant/basil
	enable_visualize: false
	```
	罗勒生成于降水量100-500毫米、温度0-32°C的区域。
+ _untitled_
	```patchouli:crafting
	firmalife:crafting/spice/basil_leaves
	```
	罗勒叶由罗勒制成，用于制作披萨。
+ _untitled_
	```patchouli:multiblock
	multiblock:
	  pattern:
	    - - X
	    - - "0"
	  mapping:
	    X: firmalife:plant/bay_laurel
	enable_visualize: false
	```
	月桂生成于降水量100-300毫米、温度10-32°C的区域。
+ _untitled_
	```patchouli:crafting
	firmalife:crafting/spice/bay_leaves
	```
	月桂可以切碎成月桂叶，并与香菜一起在锅中用于制作风味米饭。
+ _untitled_
	```patchouli:multiblock
	multiblock:
	  pattern:
	    - - X
	    - - "0"
	  mapping:
	    X: firmalife:plant/cardamom
	enable_visualize: false
	```
	豆蔻生成于降水量330-500毫米、温度17-24°C的区域。
+ _untitled_
	```tfc:quern_recipe
	firmalife:quern/spice/ground_cardamom
	```
	豆蔻粉由豆蔻植株研磨而成，用于制作抓饭。
+ _untitled_
	```patchouli:multiblock
	multiblock:
	  pattern:
	    - - X
	    - - "0"
	  mapping:
	    X: firmalife:plant/cilantro
	enable_visualize: false
	```
	香菜生成于降水量90-300毫米、温度10-24°C的区域。
+ _untitled_
	```patchouli:crafting
	firmalife:crafting/spice/chopped_cilantro
	```
	香菜可以切碎后用于制作莎莎酱，也可以与月桂叶一起在锅中用于制作风味米饭。
+ _untitled_
	```patchouli:multiblock
	multiblock:
	  pattern:
	    - - X
	    - - "0"
	  mapping:
	    X: firmalife:plant/cumin
	enable_visualize: false
	```
	孜然生成于降水量100-300毫米、温度16-27°C的区域。
+ _untitled_
	```tfc:quern_recipe
	firmalife:quern/spice/ground_cumin
	```
	孜然粉由孜然植株研磨而成，用于制作墨西哥烤牛肉。
+ _untitled_
	```patchouli:multiblock
	multiblock:
	  pattern:
	    - - X
	    - - "0"
	  mapping:
	    X: firmalife:plant/oregano
	enable_visualize: false
	```
	牛至生成于降水量90-350毫米、温度20-27°C的区域。
+ _untitled_
	```patchouli:crafting
	firmalife:crafting/food/raw_lasagna
	```
	牛至用于制作千层面。
+ _untitled_
	```patchouli:multiblock
	multiblock:
	  pattern:
	    - - X
	    - - "0"
	  mapping:
	    X: firmalife:plant/pimento
	enable_visualize: false
	```
	甜椒生成于降水量200-400毫米、温度18-24°C的区域。
+ _untitled_
	```tfc:quern_recipe
	firmalife:quern/spice/allspice
	```
	多香果粉由甜椒植株研磨而成，用于制作南瓜馅饼的香料面粉。
+ _untitled_
	```patchouli:multiblock
	multiblock:
	  pattern:
	    - - X
	    - - "0"
	  mapping:
	    X: firmalife:plant/vanilla
	enable_visualize: false
	```
	香草生成于降水量350-500毫米、温度22-30°C的区域。
+ _untitled_
	```tfc:drying_recipe
	firmalife:drying/spice/vanilla
	```
	香草必须经过干燥，然后可以用来制作冰淇淋。
#Firmalife中的水果

```patchouli-entry
id: firmalife/fruit_trees
name: Firmalife中的水果
category: tfc:firmalife
icon: firmalife:plant/fig_sapling
read_by_default: true
sortnum: 21
```

+ _untitled_
	Firmalife在群峦传说原有的基础上新增了一些结果植物。
+ _untitled_
	为了提高可读性，正文将从下一页开始。
+ 可可树
	[](#cocoa)
	\$(bold)[Temperature](the_world/climate#temperature): 20 - 35 °C
	\$(bold)[Rainfall](mechanics/hydration): 220 - 400mm
	
	Cocoa trees are used to make [Chocolate](firmalife/chocolate). They fruit in June.
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
		  X: firmalife:plant/cocoa_leaves[lifecycle=dormant]
		  Y: firmalife:plant/cocoa_branch[up=true,down=true]
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - Y
		  - - "0"
		mapping:
		  X: firmalife:plant/cocoa_leaves[lifecycle=healthy]
		  Y: firmalife:plant/cocoa_branch[up=true,down=true]
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - Y
		  - - "0"
		mapping:
		  X: firmalife:plant/cocoa_leaves[lifecycle=flowering]
		  Y: firmalife:plant/cocoa_branch[up=true,down=true]
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - Y
		  - - "0"
		mapping:
		  X: firmalife:plant/cocoa_leaves[lifecycle=fruiting]
		  Y: firmalife:plant/cocoa_branch[up=true,down=true]
		```
	可可树的月度生长阶段
+ 无花果树
	[](#fig)
	\$(bold)[Temperature](the_world/climate#temperature): 20 - 35 °C
	\$(bold)[Rainfall](mechanics/hydration): 125 - 215mm
	
	They fruit in May.
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
		  X: firmalife:plant/fig_leaves[lifecycle=dormant]
		  Y: firmalife:plant/fig_branch[up=true,down=true]
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - Y
		  - - "0"
		mapping:
		  X: firmalife:plant/fig_leaves[lifecycle=healthy]
		  Y: firmalife:plant/fig_branch[up=true,down=true]
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - Y
		  - - "0"
		mapping:
		  X: firmalife:plant/fig_leaves[lifecycle=flowering]
		  Y: firmalife:plant/fig_branch[up=true,down=true]
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - X
		  - - Y
		  - - "0"
		mapping:
		  X: firmalife:plant/fig_leaves[lifecycle=fruiting]
		  Y: firmalife:plant/fig_branch[up=true,down=true]
		```
	无花果树的月度生长阶段
#浆果丛

```patchouli-entry
id: firmalife/berry_bushes
name: 浆果丛
category: tfc:firmalife
icon: firmalife:plant/pineapple_bush
read_by_default: true
sortnum: 22
```

+ _untitled_
	Firmalife 模组新增了一些浆果丛。关于野生葡萄藤的信息，请参阅[酿酒](firmalife/wine)指南。
+ _untitled_
	```patchouli:spotlight
	item: firmalife:food/nightshade_berry
	link_recipes: false
	```
	首先是龙葵。龙葵是一种有毒浆果。放入汤中可制成带毒性的\$(thing)恶臭毒汤\$()。它生成于年降雨量200-400毫米、气温7-24℃的森林地带。
+ _untitled_
	```patchouli:spotlight
	item: firmalife:food/pineapple
	link_recipes: false
	```
	菠萝灌木丛能在降雨量介于250-500mm之间与温度介于20-32摄氏度区间内的森林中找到。菠萝特性基本与其他水果一致，除了它们能被制作成 \$(thing)菠萝布\$()。
+ _untitled_
	```patchouli:crafting
	firmalife:crafting/pineapple_fiber
	```
	[晒干](tfc:firmalife/drying)的菠萝能被制成菠萝纤维。
+ _untitled_
	```patchouli:crafting
	firmalife:crafting/pineapple_yarn
	```
	菠萝线是通过使用\$(thing)纺锤\$()与菠萝纤维合成得到的。
+ _untitled_
	```tfc:loom_recipe
	firmalife:loom/pineapple_leather
	```
	最后，菠萝布能在[织机](tfc:mechanics/weaving)中被加工。它是普通皮革的植物替代品，可用于装饰、合成或其他用途！
#巧克力

```patchouli-entry
id: firmalife/chocolate
name: 巧克力
category: tfc:firmalife
icon: firmalife:textures/item/food/dark_chocolate.png
read_by_default: true
sortnum: 23
```

+ _untitled_
	\$(thing)巧克力制作\$()需要几个加工步骤，但回报并不丰厚。重要的是要记住，在玩这个模组时，成为一名巧克力师是为了个人的享受与乐趣，而不是试图从任何给定的原料中榨取最大价值。
+ _untitled_
	开始巧克力加工，必须先将可可豆在[烤炉](firmalife/ovens)中\$(thing)烘焙\$()，制成\$(thing)烘焙过的可可豆\$()。然后，用\$(thing)刀\$()处理烘焙豆，将其分离成\$(thing)可可粉\$()与\$(thing)可可脂\$()。
+ _untitled_
	使用[搅拌碗](firmalife/mixing_bowl)混合可可粉、黄油和甜味剂（糖或蜂蜜）来制作\$(thing)巧克力混合物\$()。可可脂与可可粉的比例决定了最终产物：
	\$(li)1 可可粉，1 黄油，1 甜味剂：牛奶巧克力\$()\$(li)2 可可粉，1 甜味剂：黑巧克力\$()\$(li)2 黄油，1 甜味剂：白巧克力\$()
+ _untitled_
	```tfc:drying_recipe
	firmalife:drying/food/dark_chocolate
	```
	最后，将巧克力放在[干燥垫](firmalife/drying)上干燥，制成\$(thing)巧克力\$()。
#酿酒

```patchouli-entry
id: firmalife/wine
name: 酿酒
category: tfc:firmalife
icon: firmalife:textures/item/food/white_grapes.png
read_by_default: true
sortnum: 24
```

+ _untitled_
	\$(thing)酿酒\$()是一门将葡萄转化为酒精的科学。这其中包含花费时间收集资源、将资源合成为原料，以及\$(thing)享用\$()最终产品的时间。请注意，Firmalife 中的葡萄酒（就其本身而言）除了群峦传说常规的酒精用途外，并无特殊作用。你应该只在想要获得\$(thing)乐趣\$()时才去酿造它。
+ _untitled_
	```patchouli:spotlight
	item: firmalife:plant/wild_red_grapes
	link_recipes: false
	```
	红葡萄生成于0-30°C、125-500降雨量的区域，几乎覆盖了整个宜居区。
+ _untitled_
	```patchouli:spotlight
	item: firmalife:plant/wild_white_grapes
	link_recipes: false
	```
	白葡萄生成于0-30°C、125-500降雨量的区域，几乎覆盖了整个宜居区。
+ _untitled_
	```patchouli:crafting
	firmalife:crafting/grape_trellis_post
	```
	葡萄必须生长在由这些特殊柱子和黄麻纤维搭建的葡萄架上。
+ _untitled_
	要搭建一个葡萄架，先将两根柱子上下叠放。向左或向右移动两格，重复此操作。然后，手持\$(thing)黄麻纤维\$()对着其中一根顶部或底部柱子的侧面\$(item)\$(k:key.use)\$()，以便在柱子之间拉线。葡萄架可以水平连接，形成成排的葡萄。
+ _untitled_
	```tfc:multimultiblock
	```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - XYX
		  - - X0X
		mapping:
		  "0": firmalife:grape_string_plant_red[axis=z,lifecycle=healthy,stage=0]
		  X: firmalife:grape_trellis_post[axis=x,string_plus=true,string_minus=true]
		  Y: firmalife:grape_string[axis=z]
		```
	+ multiblock
		```patchouli:multiblock
		pattern:
		  - - ZYZ
		  - - X0X
		mapping:
		  "0": firmalife:grape_string_plant_red[axis=z,lifecycle=healthy,stage=2]
		  X: firmalife:grape_trellis_post[axis=x,string_plus=true,string_minus=true]
		  Y: firmalife:grape_string_red[axis=z,lifecycle=healthy]
		  Z: firmalife:grape_trellis_post_red[axis=x,lifecycle=healthy,string_plus=true,string_minus=true]
		```
	一个葡萄架。
+ _untitled_
	只要气候条件满足，葡萄藤将在几个月的时间内沿着葡萄架向上并蔓延生长。它会在七月结果，并在前一个月开花。此后便可收获葡萄。葡萄也可以在温室内的葡萄架上种植。
+ _untitled_
	```patchouli:crafting
	firmalife:crafting/wood/stomping_barrel/acacia
	```
	踩踏桶用于捣碎葡萄。手推磨也可用于此目的。
+ _untitled_
	使用踩踏桶时，手持新鲜葡萄对其\$(item)\$(k:key.use)\$()。然后，在桶上跳上跳下16次。空手\$(item)\$(k:key.use)\$()桶以取出物品。
	
	接着，将葡萄在桶中密封5天以使其\$(thing)发酵\$()。
+ _untitled_
	```patchouli:crafting
	firmalife:crafting/wood/barrel_press/acacia
	```
	压榨是葡萄加工的最后一步。
+ _untitled_
	最左侧的槽最多可放入16个葡萄。酿造一瓶葡萄酒需要4个葡萄。中间的四个槽用于将葡萄与其他原料混合，但这是可选的。仅使用红葡萄或白葡萄会产出红葡萄酒或白葡萄酒。在白葡萄酒中加入至少一个红葡萄会制成桃红葡萄酒。在白葡萄酒中加入糖会制成甜酒。加入二次发酵混合剂（在桶中混合酵母和甜味剂）会制成起泡酒。
+ _untitled_
	```tfc:glassworking_recipe
	firmalife:glassworking/empty_olivine_wine_bottle
	```
	葡萄酒必须装入由非硅酸盐玻璃制成的专用酒瓶中。
+ _untitled_
	```patchouli:crafting
	firmalife:crafting/bottle_label
	```
	\$(thing)瓶子标签\$()可在抄写台中重命名，其名称将添加到葡萄酒的物品提示信息中。
+ _untitled_
	葡萄酒需配备一个\$(thing)软木塞\$()，其制作方法是将\$(thing)防腐木材\$()在\$(thing)石灰水\$()中浸泡一天。一切就绪后，使用酒瓶槽位灌装葡萄酒，或手持酒瓶\$(item)\$(k:key.use)\$()进行灌装。
#葡萄酒品鉴

```patchouli-entry
id: firmalife/wine_consumption
name: 葡萄酒品鉴
category: tfc:firmalife
icon: firmalife:textures/item/olivine_wine_bottle.png
read_by_default: true
sortnum: 25
```

+ _untitled_
	品味卓越的品酒师能够洞察不同条件下所产葡萄酒的微妙差异。在Firmalife的世界中，这同样可以实现——奥秘始于葡萄生长的田野，成排的葡萄藤深受周边环境与土壤的浸润。
+ _untitled_
	葡萄会孕育出三种与地形相关的特质：根据周边环境不同，可能形成「砾石育成」、「坡地育成」或「泥土育成」。葡萄酒还会记录装瓶所在地的柯本气候分类。若葡萄在蜜蜂附近生长，则会获得「蜜蜂授粉」特质。
+ _untitled_
	葡萄酒自装瓶起便开始陈酿，开启瓶塞后陈酿过程即中止。手持小刀对酒瓶使用\$(item)\$(k:key.use)\$()即可开启瓶塞。酒瓶的运作方式类似木桶，可将其内容物倾入酿造桶或其他装置中。
+ _untitled_
	```patchouli:crafting
	firmalife:crafting/wood/keg/pine
	```
	\$(thing)酿造桶\$()是一种2x2x2规格的桶状方块，能够储存大量物品或流体，实乃酿酒工坊的完美配置。
+ _untitled_
	```patchouli:crafting
	firmalife:crafting/wood/wine_shelf/hickory
	```
	\$(thing)酒架\$()是酒窖的理想配套装饰，让你能以典雅方式陈列与储存珍酿。
#馅饼

```patchouli-entry
id: firmalife/pie
name: 馅饼
category: tfc:firmalife
icon: firmalife:textures/item/food/cooked_pie.png
read_by_default: true
sortnum: 26
```

+ _untitled_
	Firmalife 允许制作各式各样的美味烘焙食品。本章将为你提供所需的一切知识，让你开始为早餐、午餐和晚餐享用美味而富有创意的餐点。
+ _untitled_
	\$(thing)黄油\$()是许多这类食品的基础。使用一个[搅拌碗](firmalife/mixing_bowl)，将1000 mB的\$(thing)奶油\$()与一份\$(thing)盐\$()混合。奶油是通过将1000 mB牛奶与一块[奶酪布](mechanics/firmalife#cheesecloth)一同密封在桶中制成的。
+ _untitled_
	一种实用的餐点是\$(thing)馅饼\$()。在你的搅拌碗中，混合黄油、面粉和一种甜味剂（糖、蜂蜜）来制作\$(thing)馅饼面团\$()。若要直接制作\$(thing)南瓜馅饼\$()，则需混合一个鸡蛋、两块南瓜块、面粉和甜味剂。将其与一个\$(thing)馅饼烤盘\$()合成，然后在[烤炉](firmalife/ovens)中烘烤，即可完成配方。
+ _untitled_
	```patchouli:crafting
	firmalife:crafting/spice/allspice
	```
	Spiced flour is used in the creation of pumpkin pie. [Pimento](firmalife/herbs_and_spices) is an herb found in warm, moderately wet climates.
+ _untitled_
	```patchouli:crafting
	firmalife:crafting/food/raw_pumpkin_pie
	```
	\$(thing)馅饼烤盘\$()可以在砧上用\$(thing)铸铁\$()锻造而成。
+ _untitled_
	```patchouli:crafting
	firmalife:crafting/food/filled_pie
	```
	面团、果酱和一个馅饼烤盘可以让你获得一个\$(thing)已填充的馅饼\$()，随后放入烤炉完成制作，即可得到一个美味的馅饼。
#披萨

```patchouli-entry
id: firmalife/pizza
name: 披萨
category: tfc:firmalife
icon: firmalife:textures/item/food/cooked_pizza.png
read_by_default: true
sortnum: 27
```

+ _untitled_
	要制作\$(thing)披萨\$()，请在[搅拌碗](firmalife/mixing_bowl)中混合面团、盐、罗勒叶和100 mB油。油可以是橄榄油或大豆油（将大豆酱密封在一桶水中制成的产物）。
+ _untitled_
	[](#shredded_cheese)
	```patchouli:crafting
	firmalife:crafting/food/shredded_cheese
	```
	首先你需要一些奶酪丝。
+ _untitled_
	[](#tomato_sauce)
	要制作\$(thing)番茄酱\$()，请把一个番茄、盐、大蒜和水一起在锅中煮沸。或者，使用[不锈钢锅](firmalife/oven_appliances#vat)煮沸这些原料的合成物，即\$(thing)番茄酱混合料\$()。
+ _untitled_
	```patchouli:crafting
	firmalife:crafting/pizza_with_ingredients_2
	```
	披萨由1-3份蔬菜、熟肉或水果，一份奶酪丝和一份番茄酱制作而成。
#意大利面

```patchouli-entry
id: firmalife/pasta
name: 意大利面
category: tfc:firmalife
icon: firmalife:textures/item/food/cooked_pasta.png
read_by_default: true
sortnum: 28
```

+ _untitled_
	\$(thing)面条\$()有两种：鸡蛋面和米线。将米粉、玉米粉、盐和1000 mB牛奶在[搅拌碗](firmalife/mixing_bowl)中混合，可以制成\$(thing)米线\$()。而将面粉、一个鸡蛋、盐和1000 mB牛奶混合，则可以制成\$(thing)鸡蛋面\$()。
+ _untitled_
	```patchouli:crafting
	firmalife:crafting/food/raw_lasagna
	```
	\$(thing)千层面\$()可以直接用鸡蛋面制作，配料需要[番茄酱](firmalife/pizza#tomato_sauce)、熟肉和牛至，然后放入[烤炉](firmalife/ovens)中烘烤。
+ _untitled_
	制作完成的意大利面需要在水中煮熟。无论是哪种面条，都必须用\$(thing)碗\$()点击锅才能取出。
+ _untitled_
	```patchouli:crafting
	firmalife:crafting/food/pasta_with_tomato_sauce
	```
	将煮熟的鸡蛋面（意面）与番茄酱一起合成，就能做出美味的番茄酱意面了！
#墨西哥卷饼与墨西哥煎饼

```patchouli-entry
id: firmalife/burritos_and_tacos
name: 墨西哥卷饼与墨西哥煎饼
category: tfc:firmalife
icon: firmalife:textures/item/food/burrito.png
read_by_default: true
sortnum: 29
```

+ _untitled_
	制作\$(thing)玉米薄饼\$()的过程虽漫长，但回报丰厚。首先从\$(thing)玉米粒\$()开始：将其放入\$(thing)石灰水\$()中煮沸，再密封于水桶中浸泡，即可制成\$(thing)碱水玉米\$()。随后用\$(thing)手推磨\$()研磨成\$(thing)湿玉米粉\$()。
+ _untitled_
	将马萨玉米面粉与一桶水合成即可得到制作薄饼的面团——\$(thing)马萨玉米面团\$()。加热该面团可制成\$(thing)墨西哥薄饼\$()，而将薄饼放入烤炉烘烤则会变成\$(thing)墨西哥煎饼壳\$()。
+ _untitled_
	```patchouli:crafting
	firmalife:crafting/food/tortilla_chips
	firmalife:crafting/food/nachos
	```
+ _untitled_
	```patchouli:crafting
	firmalife:crafting/food/salsa
	```
	将番茄、香菜、盐与刀组合即可制成\$(thing)莎莎酱\$()。
+ _untitled_
	```patchouli:crafting
	firmalife:crafting/food/burrito
	```
	\$(thing)墨西哥卷饼\$()需用熟肉、[奶酪丝](firmalife/pizza#shredded_cheese)、[番茄酱](firmalife/pizza#tomato_sauce)、蔬菜与莎莎酱共同制作。
+ _untitled_
	```patchouli:crafting
	firmalife:crafting/food/taco
	```
	\$(thing)墨西哥煎饼\$()原料与之相同，但需使用\$(thing)墨西哥煎饼壳\$()作为基底。
