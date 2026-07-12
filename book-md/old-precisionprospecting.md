```patchouli-category
id: precisionprospecting
name: 更细致的勘探
description: 这里是 $(thing)@Precision Prospecting$() 这个模组的所有教程
icon: precisionprospecting:metal/mineral_prospector/bronze
sortnum: 30
```

#小勘矿稿

```patchouli-entry
id: precisionprospecting/prospector_hammer
name: 小勘矿稿
category: tfc:precisionprospecting
icon: precisionprospecting:metal/prospector_hammer/steel
read_by_default: true
sortnum: 1
extra_recipe_mappings:
  precisionprospecting:metal/prospector_hammer/bismuth_bronze: 1
  precisionprospecting:metal/prospector_hammer/black_bronze: 1
  precisionprospecting:metal/prospector_hammer/black_steel: 1
  precisionprospecting:metal/prospector_hammer/blue_steel: 1
  precisionprospecting:metal/prospector_hammer/bronze: 1
  precisionprospecting:metal/prospector_hammer/copper: 1
  precisionprospecting:metal/prospector_hammer/red_steel: 1
  precisionprospecting:metal/prospector_hammer/steel: 1
  precisionprospecting:metal/prospector_hammer/wrought_iron: 1
```

+ 小勘矿稿
	```patchouli:spotlight
	item: precisionprospecting:metal/prospector_hammer/bismuth_bronze
	link_recipe: false
	```
	 \$(thing)小勘矿稿\$() 和普通的勘矿镐在使用上一模一样，除了一点——范围， 它只会搜索以你点击的方块为中心 13x13x13 范围内的矿物。 
	
	 对于身处岩石中的你而言非常好用。
+ _untitled_
	```tfc:knapping_recipe
	precisionprospecting:knapping/prospector_hammer_head_mold
	```
	和勘矿镐模具一样，小勘矿稿模具也能通过粘土 [塑形](getting_started/pottery) 得到，就像上图所示一样。
	你问我怎么获得成品？喏，这样子 [灌注](getting_started/finding_ores#casting) 就行。
+ _untitled_
	```tfc:anvil_recipe
	precisionprospecting:anvil/metal/prospector_hammer/wrought_iron
	```
	  \$(thing)小勘矿稿 头\$() 也同时可以由任意 \$(thing)双层金属\$() 在 [砧](mechanics/anvils#working) 上锻造而成。搭配任意木棍，就可以制作出完整的小勘矿稿了。
#定向勘探稿

```patchouli-entry
id: precisionprospecting/prospector_drill
name: 定向勘探稿
category: tfc:precisionprospecting
icon: precisionprospecting:metal/prospector_drill/steel
read_by_default: true
sortnum: 2
extra_recipe_mappings:
  precisionprospecting:metal/prospector_drill/bismuth_bronze: 1
  precisionprospecting:metal/prospector_drill/black_bronze: 1
  precisionprospecting:metal/prospector_drill/black_steel: 1
  precisionprospecting:metal/prospector_drill/blue_steel: 1
  precisionprospecting:metal/prospector_drill/bronze: 1
  precisionprospecting:metal/prospector_drill/copper: 1
  precisionprospecting:metal/prospector_drill/red_steel: 1
  precisionprospecting:metal/prospector_drill/steel: 1
  precisionprospecting:metal/prospector_drill/wrought_iron: 1
```

+ 定向勘探稿
	```patchouli:spotlight
	item: precisionprospecting:metal/prospector_drill/bismuth_bronze
	link_recipe: false
	```
	 如果你不知道矿脉在哪个方向， 那你就应该拿出 \$(thing)定向勘探稿\$() 了。
	
	 他会搜索一个 7x25x7 的范围， 长边和面向点击方块的方向平行，此外，扫描区域会从点击的面开始向前偏移10个方块。
	
	 现在知道什么叫偏心了吗？ 
+ _untitled_
	```tfc:knapping_recipe
	precisionprospecting:knapping/prospector_drill_head_mold
	```
	如图所示，定向勘矿镐模具也能通过粘土 [塑形](getting_started/pottery) 而成。
	怎么又问我怎么 [灌注](getting_started/finding_ores#casting) 出成品？
+ _untitled_
	```tfc:anvil_recipe
	precisionprospecting:anvil/metal/prospector_drill/blue_steel
	```
	 \$(thing)定向勘探稿头\$() 同时也可以通过任意金属的 \$(thing)鼓风口\$() 在 [砧](mechanics/anvils#working) 上锻造得到。 
+ _untitled_
	```patchouli:crafting
	precisionprospecting:crafting/metal/prospector_drill/bismuth_bronze
	```
	结合两根木棍就能制作出完整的定向勘矿镐。
#非金属勘矿镐

```patchouli-entry
id: precisionprospecting/mineral_prospector
name: 非金属勘矿镐
category: tfc:precisionprospecting
icon: precisionprospecting:metal/mineral_prospector/steel
read_by_default: true
sortnum: 3
extra_recipe_mappings:
  precisionprospecting:metal/mineral_prospector/bismuth_bronze: 1
  precisionprospecting:metal/mineral_prospector/black_bronze: 1
  precisionprospecting:metal/mineral_prospector/black_steel: 1
  precisionprospecting:metal/mineral_prospector/blue_steel: 1
  precisionprospecting:metal/mineral_prospector/bronze: 1
  precisionprospecting:metal/mineral_prospector/copper: 1
  precisionprospecting:metal/mineral_prospector/red_steel: 1
  precisionprospecting:metal/mineral_prospector/steel: 1
  precisionprospecting:metal/mineral_prospector/wrought_iron: 1
```

+ 非金属勘矿镐
	```patchouli:spotlight
	item: precisionprospecting:metal/mineral_prospector/black_bronze
	link_recipe: false
	```
	 \$(thing)非金属勘矿镐\$() 是原版群峦普通 [勘矿镐](mechanics/prospecting) 的一类变种勘矿镐。
	
	 在使用时，它不会告诉你点击方块为中心 45x45x45 的 [金属矿物](the_world/ores_and_minerals) ，它只会显示周围的 \$(thing)非金属\$() 矿物。
+ _untitled_
	```tfc:knapping_recipe
	precisionprospecting:knapping/mineral_prospector_head_mold
	```
	非金属勘矿镐模具同样也可以通过粘土 [塑形](getting_started/pottery) 而成，就像这样。
	什么？你怎么还在问怎么 [灌注](getting_started/finding_ores#casting) 出东西？
+ _untitled_
	```tfc:anvil_recipe
	precisionprospecting:anvil/metal/mineral_prospector/black_steel
	```
	当然，\$(thing)非金属勘矿镐头\$() 也能在 [砧](mechanics/anvils) 上用 \$(thing)双层金属\$() 敲制出来。 搭配任意木棍就能做出完整的 非金属勘探稿。
#更细致的勘探

```patchouli-entry
id: precisionprospecting/precisionprospecting
name: 更细致的勘探
category: tfc:precisionprospecting
icon: precisionprospecting:metal/mineral_prospector_head/blue_steel
read_by_default: true
```

+ _untitled_
	你是否觉得 [勘矿镐](mechanics/prospecting) 的范围实在是太大了？ 烦透了要到处挖洞寻找埋藏在地底的财富的日子？
	 
	不用担心！因为 \$(thing)小勘矿稿\$() 和 \$(thing)定向勘矿镐\$() 还有 \$(thing)非金属勘矿镐\$() 来了！我们有救了！
+ _untitled_
	\$(li)首先登场的是 [小勘矿稿](precisionprospecting/prospector_hammer) 他和普通的 \$(thing)勘矿镐\$() 类似，唯一的区别就是他的范围更小更精确。
	\$(li)紧随其后的是 [定向勘矿镐](precisionprospecting/prospector_drill) 他拥有着非立方体的偏心探测范围。不知道什么叫偏心？就是对矿石很偏心（x）
	\$(li)最后压轴登场的便是 [非金属勘矿镐](precisionprospecting/mineral_prospector) 他拥有 \$(thing)最巨大\$() 的搜索范围，所以副作用也物如其名：他只能找到 \$(thing)非金属的矿物\$()。
