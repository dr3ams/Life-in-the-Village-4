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
	
	event.addLootTypeModifier(LootType.CHEST).anyDimension("the_bumblezone:the_bumblezone").addLoot(
	LootEntry.of("kubejs:coin_bumblezone").when((c) => c.randomChance(0.5)).limitCount([1, 1])
	);	
	
	event.addLootTypeModifier(LootType.CHEST).anyDimension("minecraft:the_nether").addLoot(
	LootEntry.of("kubejs:coin_nether").when((c) => c.randomChance(0.6)).limitCount([1, 1]),
	LootEntry.of("aquaculture:lockbox").when((c) => c.randomChance(0.1)).limitCount([1, 1]),
	LootEntry.of("aquaculture:box").when((c) => c.randomChance(0.1)).limitCount([1, 2]),
	LootEntry.of("aquaculture:treasure_chest").when((c) => c.randomChance(0.05)).limitCount([1, 1]),
	LootEntry.of("spelunkery:dust_bun").when((c) => c.randomChance(0.2)).limitCount([1, 2])
	);	
	
	
//THE END		
})