LootJS.modifiers(event => {
	
	//const lootsize = 9;//amount of unique item stacks that will be allowed to generate from a loot table (item stacks can an item with a count so a stack of 6 bones for instance)
	
	
	// keeping this as an example for future use
    //event.addBlockLootModifier(['occultism:silver_ore', 'occultism:silver_ore_deepslate'])
    //    .replaceLoot('occultism:raw_silver', 'embers:raw_silver', true)
	
	//	event.addLootTypeModifier(LootType.CHEST)
	//    .removeLoot("aether:life_shard")

		
	event
		.addLootTypeModifier(LootType.CHEST)
		.anyDimension("minecraft:overworld")
		.addLoot
			(
				LootEntry.of("kubejs:coin_dungeon").when((c) => c.randomChance(0.1)).limitCount([1, 1])
			);
	
	
	event
		.addLootTypeModifier(LootType.CHEST)
	    .replaceLoot("minecraft:gold_ingot", LootEntry.of("minecraft:gold_nugget").limitCount([1, 3]))
        .replaceLoot("minecraft:iron_ingot", LootEntry.of("minecraft:iron_nugget").limitCount([1, 5]))
        .replaceLoot("minecraft:diamond", "spelunkery:rough_diamond")
		.replaceLoot("minecraft:emerald", "spelunkery:rough_emerald")
	
	event
		.addBlockLootModifier('minecraft:spawner')
		.addLoot('kubejs:coin_dungeon')
	
	event
        .addLootTableModifier("betterfortresses:chests/beacon")
        .addLoot			
			(
				LootEntry.of("tconstruct:cobalt_nugget").when((c) => c.randomChance(0.05)).limitCount([1, 1]), 
				LootEntry.of("tconstruct:quartz_shuriken").when((c) => c.randomChance(0.1)).limitCount([5, 9]) ,
				LootEntry.of("tconstruct:necrotic_bone").when((c) => c.randomChance(0.05)).limitCount([1, 1]),
				LootEntry.of("tconstruct:ichor_slime_ball").when((c) => c.randomChance(0.1)).limitCount([1, 3]),
				LootEntry.of("tconstruct:scorched_brick").when((c) => c.randomChance(0.2)).limitCount([3, 11]),
				LootEntry.of("tconstruct:blood_slime_grass_seeds").when((c) => c.randomChance(0.1)).limitCount([1, 2]),
				LootEntry.of("create:experience_nugget").when((c) => c.randomChance(0.1)).limitCount([1, 2]),
				LootEntry.of("create:raw_zinc").when((c) => c.randomChance(0.1)).limitCount([1, 3]),
				LootEntry.of("create_central_kitchen:chocolate_cake_slice").when((c) => c.randomChance(0.2)).limitCount([1, 1]),
				LootEntry.of("tconstruct:ichor_slime_crystal_cluster").when((c) => c.randomChance(0.1)).limitCount([1, 1]),
				LootEntry.of("supplementaries:sconce").when((c) => c.randomChance(0.1)).limitCount([1, 3]),
				LootEntry.of("spelunkery:dust_bun").when((c) => c.randomChance(0.2)).limitCount([1, 2]),
				LootEntry.of("spelunkery:rough_cinnabar_shard").when((c) => c.randomChance(0.2)).limitCount([1, 3]),
				LootEntry.of("spelunkery:red_glowstick").when((c) => c.randomChance(0.1)).limitCount([1, 3]),
				LootEntry.of("nethersdelight:hoglin_loin").when((c) => c.randomChance(0.1)).limitCount([1, 1]),
				LootEntry.of("aquaculture:lockbox").when((c) => c.randomChance(0.1)).limitCount([1, 1]),
				LootEntry.of("create:brass_nugget").when((c) => c.randomChance(0.2)).limitCount([1, 1]),
				LootEntry.of("aquaculture:box").when((c) => c.randomChance(0.1)).limitCount([1, 2]),
				LootEntry.of("aquaculture:treasure_chest").when((c) => c.randomChance(0.05)).limitCount([1, 1]) 
			);
			
	event
        .addLootTableModifier("betterfortresses:chests/keep")
        .addLoot			
			(
				LootEntry.of("tconstruct:cobalt_nugget").when((c) => c.randomChance(0.05)).limitCount([1, 1]), 
				LootEntry.of("tconstruct:quartz_shuriken").when((c) => c.randomChance(0.1)).limitCount([5, 9]) ,
				LootEntry.of("tconstruct:necrotic_bone").when((c) => c.randomChance(0.05)).limitCount([1, 1]),
				LootEntry.of("tconstruct:ichor_slime_ball").when((c) => c.randomChance(0.1)).limitCount([1, 3]),
				LootEntry.of("tconstruct:scorched_brick").when((c) => c.randomChance(0.2)).limitCount([3, 11]),
				LootEntry.of("tconstruct:blood_slime_grass_seeds").when((c) => c.randomChance(0.1)).limitCount([1, 2]),
				LootEntry.of("create:experience_nugget").when((c) => c.randomChance(0.1)).limitCount([1, 2]),
				LootEntry.of("create:raw_zinc").when((c) => c.randomChance(0.1)).limitCount([1, 3]),
				LootEntry.of("create_central_kitchen:chocolate_cake_slice").when((c) => c.randomChance(0.2)).limitCount([1, 1]),
				LootEntry.of("tconstruct:ichor_slime_crystal_cluster").when((c) => c.randomChance(0.1)).limitCount([1, 1]),
				LootEntry.of("supplementaries:sconce").when((c) => c.randomChance(0.1)).limitCount([1, 3]),
				LootEntry.of("spelunkery:dust_bun").when((c) => c.randomChance(0.2)).limitCount([1, 2]),
				LootEntry.of("spelunkery:rough_cinnabar_shard").when((c) => c.randomChance(0.2)).limitCount([1, 3]),
				LootEntry.of("spelunkery:red_glowstick").when((c) => c.randomChance(0.1)).limitCount([1, 3]),
				LootEntry.of("nethersdelight:hoglin_loin").when((c) => c.randomChance(0.1)).limitCount([1, 1]),
				LootEntry.of("aquaculture:lockbox").when((c) => c.randomChance(0.1)).limitCount([1, 1]),
				LootEntry.of("create:brass_nugget").when((c) => c.randomChance(0.2)).limitCount([1, 1]),
				LootEntry.of("aquaculture:box").when((c) => c.randomChance(0.1)).limitCount([1, 2]),
				LootEntry.of("aquaculture:treasure_chest").when((c) => c.randomChance(0.05)).limitCount([1, 1]) 
			);

	event
        .addLootTableModifier("betterfortresses:chests/puzzle")
        .addLoot			
			(
				LootEntry.of("tconstruct:cobalt_nugget").when((c) => c.randomChance(0.05)).limitCount([1, 1]), 
				LootEntry.of("tconstruct:quartz_shuriken").when((c) => c.randomChance(0.1)).limitCount([5, 9]) ,
				LootEntry.of("tconstruct:necrotic_bone").when((c) => c.randomChance(0.05)).limitCount([1, 1]),
				LootEntry.of("tconstruct:ichor_slime_ball").when((c) => c.randomChance(0.1)).limitCount([1, 3]),
				LootEntry.of("tconstruct:scorched_brick").when((c) => c.randomChance(0.2)).limitCount([3, 11]),
				LootEntry.of("tconstruct:blood_slime_grass_seeds").when((c) => c.randomChance(0.1)).limitCount([1, 2]),
				LootEntry.of("create:experience_nugget").when((c) => c.randomChance(0.1)).limitCount([1, 2]),
				LootEntry.of("create:raw_zinc").when((c) => c.randomChance(0.1)).limitCount([1, 3]),
				LootEntry.of("create_central_kitchen:chocolate_cake_slice").when((c) => c.randomChance(0.2)).limitCount([1, 1]),
				LootEntry.of("tconstruct:ichor_slime_crystal_cluster").when((c) => c.randomChance(0.1)).limitCount([1, 1]),
				LootEntry.of("supplementaries:sconce").when((c) => c.randomChance(0.1)).limitCount([1, 3]),
				LootEntry.of("spelunkery:dust_bun").when((c) => c.randomChance(0.2)).limitCount([1, 2]),
				LootEntry.of("spelunkery:rough_cinnabar_shard").when((c) => c.randomChance(0.2)).limitCount([1, 3]),
				LootEntry.of("spelunkery:red_glowstick").when((c) => c.randomChance(0.1)).limitCount([1, 3]),
				LootEntry.of("nethersdelight:hoglin_loin").when((c) => c.randomChance(0.1)).limitCount([1, 1]),
				LootEntry.of("aquaculture:lockbox").when((c) => c.randomChance(0.1)).limitCount([1, 1]),
				LootEntry.of("create:brass_nugget").when((c) => c.randomChance(0.2)).limitCount([1, 1]),
				LootEntry.of("aquaculture:box").when((c) => c.randomChance(0.1)).limitCount([1, 2]),
				LootEntry.of("aquaculture:treasure_chest").when((c) => c.randomChance(0.05)).limitCount([1, 1]) 
			);

	event
        .addLootTableModifier("betterfortresses:chests/quarters")
        .addLoot			
			(
				LootEntry.of("tconstruct:cobalt_nugget").when((c) => c.randomChance(0.05)).limitCount([1, 1]), 
				LootEntry.of("tconstruct:quartz_shuriken").when((c) => c.randomChance(0.1)).limitCount([5, 9]) ,
				LootEntry.of("tconstruct:necrotic_bone").when((c) => c.randomChance(0.05)).limitCount([1, 1]),
				LootEntry.of("tconstruct:ichor_slime_ball").when((c) => c.randomChance(0.1)).limitCount([1, 3]),
				LootEntry.of("tconstruct:scorched_brick").when((c) => c.randomChance(0.2)).limitCount([3, 11]),
				LootEntry.of("tconstruct:blood_slime_grass_seeds").when((c) => c.randomChance(0.1)).limitCount([1, 2]),
				LootEntry.of("create:experience_nugget").when((c) => c.randomChance(0.1)).limitCount([1, 2]),
				LootEntry.of("create:raw_zinc").when((c) => c.randomChance(0.1)).limitCount([1, 3]),
				LootEntry.of("create_central_kitchen:chocolate_cake_slice").when((c) => c.randomChance(0.2)).limitCount([1, 1]),
				LootEntry.of("tconstruct:ichor_slime_crystal_cluster").when((c) => c.randomChance(0.1)).limitCount([1, 1]),
				LootEntry.of("supplementaries:sconce").when((c) => c.randomChance(0.1)).limitCount([1, 3]),
				LootEntry.of("spelunkery:dust_bun").when((c) => c.randomChance(0.2)).limitCount([1, 2]),
				LootEntry.of("spelunkery:rough_cinnabar_shard").when((c) => c.randomChance(0.2)).limitCount([1, 3]),
				LootEntry.of("spelunkery:red_glowstick").when((c) => c.randomChance(0.1)).limitCount([1, 3]),
				LootEntry.of("nethersdelight:hoglin_loin").when((c) => c.randomChance(0.1)).limitCount([1, 1]),
				LootEntry.of("aquaculture:lockbox").when((c) => c.randomChance(0.1)).limitCount([1, 1]),
				LootEntry.of("create:brass_nugget").when((c) => c.randomChance(0.2)).limitCount([1, 1]),
				LootEntry.of("aquaculture:box").when((c) => c.randomChance(0.1)).limitCount([1, 2]),
				LootEntry.of("aquaculture:treasure_chest").when((c) => c.randomChance(0.05)).limitCount([1, 1]) 
			);			

	event
        .addLootTableModifier("betterfortresses:chests/storage")
        .addLoot			
			(
				LootEntry.of("tconstruct:cobalt_nugget").when((c) => c.randomChance(0.05)).limitCount([1, 1]), 
				LootEntry.of("tconstruct:quartz_shuriken").when((c) => c.randomChance(0.1)).limitCount([5, 9]) ,
				LootEntry.of("tconstruct:necrotic_bone").when((c) => c.randomChance(0.05)).limitCount([1, 1]),
				LootEntry.of("tconstruct:ichor_slime_ball").when((c) => c.randomChance(0.1)).limitCount([1, 3]),
				LootEntry.of("tconstruct:scorched_brick").when((c) => c.randomChance(0.2)).limitCount([3, 11]),
				LootEntry.of("tconstruct:blood_slime_grass_seeds").when((c) => c.randomChance(0.1)).limitCount([1, 2]),
				LootEntry.of("create:experience_nugget").when((c) => c.randomChance(0.1)).limitCount([1, 2]),
				LootEntry.of("create:raw_zinc").when((c) => c.randomChance(0.1)).limitCount([1, 3]),
				LootEntry.of("create_central_kitchen:chocolate_cake_slice").when((c) => c.randomChance(0.2)).limitCount([1, 1]),
				LootEntry.of("tconstruct:ichor_slime_crystal_cluster").when((c) => c.randomChance(0.1)).limitCount([1, 1]),
				LootEntry.of("supplementaries:sconce").when((c) => c.randomChance(0.1)).limitCount([1, 3]),
				LootEntry.of("spelunkery:dust_bun").when((c) => c.randomChance(0.2)).limitCount([1, 2]),
				LootEntry.of("spelunkery:rough_cinnabar_shard").when((c) => c.randomChance(0.2)).limitCount([1, 3]),
				LootEntry.of("spelunkery:red_glowstick").when((c) => c.randomChance(0.1)).limitCount([1, 3]),
				LootEntry.of("nethersdelight:hoglin_loin").when((c) => c.randomChance(0.1)).limitCount([1, 1]),
				LootEntry.of("aquaculture:lockbox").when((c) => c.randomChance(0.1)).limitCount([1, 1]),
				LootEntry.of("create:brass_nugget").when((c) => c.randomChance(0.2)).limitCount([1, 1]),
				LootEntry.of("aquaculture:box").when((c) => c.randomChance(0.1)).limitCount([1, 2]),
				LootEntry.of("aquaculture:treasure_chest").when((c) => c.randomChance(0.05)).limitCount([1, 1]) 
			);	
			
	event
        .addLootTableModifier("betterfortresses:chests/hall")
        .addLoot			
			(
				LootEntry.of("tconstruct:cobalt_nugget").when((c) => c.randomChance(0.05)).limitCount([1, 1]), 
				LootEntry.of("tconstruct:quartz_shuriken").when((c) => c.randomChance(0.1)).limitCount([5, 9]) ,
				LootEntry.of("tconstruct:necrotic_bone").when((c) => c.randomChance(0.05)).limitCount([1, 1]),
				LootEntry.of("tconstruct:ichor_slime_ball").when((c) => c.randomChance(0.1)).limitCount([1, 3]),
				LootEntry.of("tconstruct:scorched_brick").when((c) => c.randomChance(0.2)).limitCount([3, 11]),
				LootEntry.of("tconstruct:blood_slime_grass_seeds").when((c) => c.randomChance(0.1)).limitCount([1, 2]),
				LootEntry.of("create:experience_nugget").when((c) => c.randomChance(0.1)).limitCount([1, 2]),
				LootEntry.of("create:raw_zinc").when((c) => c.randomChance(0.1)).limitCount([1, 3]),
				LootEntry.of("create_central_kitchen:chocolate_cake_slice").when((c) => c.randomChance(0.2)).limitCount([1, 1]),
				LootEntry.of("tconstruct:ichor_slime_crystal_cluster").when((c) => c.randomChance(0.1)).limitCount([1, 1]),
				LootEntry.of("supplementaries:sconce").when((c) => c.randomChance(0.1)).limitCount([1, 3]),
				LootEntry.of("spelunkery:dust_bun").when((c) => c.randomChance(0.2)).limitCount([1, 2]),
				LootEntry.of("spelunkery:rough_cinnabar_shard").when((c) => c.randomChance(0.2)).limitCount([1, 3]),
				LootEntry.of("spelunkery:red_glowstick").when((c) => c.randomChance(0.1)).limitCount([1, 3]),
				LootEntry.of("nethersdelight:hoglin_loin").when((c) => c.randomChance(0.1)).limitCount([1, 1]),
				LootEntry.of("aquaculture:lockbox").when((c) => c.randomChance(0.1)).limitCount([1, 1]),
				LootEntry.of("create:brass_nugget").when((c) => c.randomChance(0.2)).limitCount([1, 1]),
				LootEntry.of("aquaculture:box").when((c) => c.randomChance(0.1)).limitCount([1, 2]),
				LootEntry.of("aquaculture:treasure_chest").when((c) => c.randomChance(0.05)).limitCount([1, 1]) 
			);	
//THE END		
})