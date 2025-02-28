ServerEvents.tags('item', event => {
		

	event.removeAllTagsFrom('skilltree:copper_nugget')
	event.removeAllTagsFrom('caverns_and_chasms:copper_nugget')
	
	event.get('litv4:mortars')
		.add('kubejs:stone_mortar')
		.add('kubejs:iron_mortar')
		 
	event.get('farmersdelight:tools/pickaxes')
	.add('minecraft:iron_pickaxe')
	.add('minecraft:golden_pickaxe')
	.add('minecraft:diamond_pickaxe')
	.add('minecraft:netherite_pickaxe')
		
})