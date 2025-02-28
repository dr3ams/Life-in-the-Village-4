// priority: 0
console.info('Starting recipe removals scripts...')

const removals = [
	"gag:time_sand_pouch",
	"gag:escape_rope",
	"gag:hearthstone",
	"gag:sacred_salt",
	"gag:sacred_salve",
	"gag:sacred_balm",	
	
	"explorerscompass:explorerscompass",
	"spelunkery:compression_blast_miner",
  
	'usefulhats:aquanaut_helmet',
	'usefulhats:bunny_ears',
	'usefulhats:chopping_hat',
	'usefulhats:ender_helmet',
	'usefulhats:halo',
	'usefulhats:lucky_hat',
	'usefulhats:mining_hat',
	'usefulhats:mushroom_hat',
	'usefulhats:postman_hat',
	'usefulhats:shulker_helmet',
	'usefulhats:stocking_cap',
	'usefulhats:straw_hat',
	'usefulhats:wing_helmet',
	
	'waystones:waystone',
	'waystones:mossy_waystone',
	'waystones:sandy_waystone',
	'waystones:sharestone',
	'waystones:bound_scroll',
	'waystones:warp_scroll',
	'waystones:warp_plate',
	'waystones:warp_stone',
	'waystones:return_scroll',
	'waystones:portstone',

    'gag:time_sand_pouch',
    'gag:escape_rope',
    'gag:hearthstone',
    'gag:sacred_salt',
    'gag:sacred_salve',
    'gag:sacred_balm',
	'gag:mining_dynamite',
	'gag:labeling_tool',
	
	'skilltree:copper_ring',
	'skilltree:iron_ring',
	'skilltree:golden_ring',
	'skilltree:simple_necklace',
	'skilltree:traveler_necklace',
	'skilltree:fisherman_necklace',
	'skilltree:assassin_necklace',
	'skilltree:healer_necklace',
	'skilltree:scholar_necklace',
	'skilltree:arsonist_necklace',
	
	'tombstone:book_of_recycling',

	"regions_unexplored:raw_redstone_block",
	
	"supplementaries:altimeter",
	
	"villagertools:lure", 
	"villagertools:gears", 
	"villagertools:bribe", 
	"villagertools:restock", 
	"villagertools:forget", 
	"villagertools:contract", 
	"villagertools:darkness", 
	"villagertools:guard", 
	"villagertools:knowledge", 
	"villagertools:key", 
	"villagertools:badge", 
	"villagertools:cure",
	
	'skilltree:copper_nugget',
	'caverns_and_chasms:copper_nugget',
	
	'productivebees:centrifuge', 
	'productivebees:powered_centrifuge', 
	'productivebees:heated_centrifuge', 
	'productivebees:upgrade_productivity', 
	'productivebees:upgrade_productivity_2', 
	'productivebees:upgrade_productivity_3', 
	'productivebees:upgrade_productivity_4', 
	'productivebees:upgrade_comb_block',
	'productivebees:upgrade_time'
];



ServerEvents.recipes(event => {
	
  removals.forEach((element) => {
    event.remove({ output: element });
  });
  
	
})

