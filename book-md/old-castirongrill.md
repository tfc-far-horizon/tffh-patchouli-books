```patchouli-category
id: castirongrill
name: 铸铁烤架
description: 铸铁制造的原始烤架
icon: castirongrill:cast_iron_grill_firepit
sortnum: 20
```

#铸铁烤架

```patchouli-entry
id: castirongrill/castirongrill
name: 铸铁烤架
category: tfc:castirongrill
icon: castirongrill:cast_iron_grill
read_by_default: true
sortnum: 1
extra_recipe_mappings:
  castirongrill:cast_iron_grill: 0
  castirongrill:cast_iron_grill_firepit: 0
```

+ _untitled_
	\$(thing)铸铁烤架\$()是[锻铁烤架](tfc:mechanics/grill)的铸铁版本.
	
	它们唯一的不同是 \$(thing)铸铁烤架\$()只能同时烹饪\$(item)2\$()件物品而[锻铁烤架](tfc:mechanics/grill)可以同时烹饪\$(item)5\$()件。
+ 铸铁烤架
	```patchouli:multiblock
	multiblock:
	  pattern:
	    - - X
	    - - "0"
	  mapping:
	    X: castirongrill:cast_iron_grill_firepit
	enable_visualize: false
	```
