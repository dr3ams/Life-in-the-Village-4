// priority: 0

// Visit the wiki for more info - https://kubejs.com/

console.info('Hello, World! (Loaded server scripts)')
ServerEvents.recipes(event => {
	
	
	
	event.shaped('kubejs:hammer_iron', [
    'III',
    'III',
	' S '
	], {
    I: 'minecraft:iron_ingot',
	S: "minecraft:stick"
	})

	event.shaped('create:iron_sheet', [
    'H  ',
    'II ',
	'II '
	], {
    I: 'minecraft:iron_ingot',
	H: "kubejs:hammer_iron"
	}).damageIngredient('kubejs:hammer_iron')

	event.remove({output: 'minecraft:blast_furnace'})
	event.shaped('minecraft:blast_furnace', [
    'III',
    'IFI',
	'BBB'
	], {
    I: 'create:iron_sheet',
	F: "quark:deepslate_furnace",
	B: 'minecraft:bricks'
	})	
	
	event.shaped('kubejs:stone_mortar', [
	' B ',
	'ABA',
	'AAA'
	], {
	A: 'minecraft:stone',
	B: 'minecraft:flint'
	})
	
	event.shaped('kubejs:iron_mortar', [
	' B ',
	'ABA',
	'AAA'
	], {
	A: 'minecraft:stone',
	B: 'create:iron_sheet'
	})
	
	
	event.shapeless('minecraft:flint', [
	'minecraft:gravel',
	'#litv4:mortars'
	]).damageIngredient('#litv4:mortars')
	
	event.shapeless('kubejs:dust_zinc', [
	'create:zinc_ingot',
	'#litv4:mortars'
	]).damageIngredient('#litv4:mortars')
	
	event.shapeless('kubejs:dust_andesite', [
	'minecraft:andesite',
	'#litv4:mortars'
	]).damageIngredient('#litv4:mortars')
	
	event.remove({id: 'create:crafting/materials/andesite_alloy'})
	event.remove({id: 'create:crafting/materials/andesite_alloy_from_zinc'})
	event.shaped('2x kubejs:dust_andesite_alloy', [
	'ZA ',
	'AZ ',
	'   '
	], {
	Z: 'kubejs:dust_zinc',
	A: 'kubejs:dust_andesite'
	})
	event.blasting('create:andesite_alloy', 'kubejs:dust_andesite_alloy').cookingTime(100)
		
	event.shaped('minecraft:diamond', [
    'DDD',
    'DDD',
    'DDD'
	], {
    D: 'kubejs:diamond_nugget'
	})
	
	event.shaped('minecraft:emerald', [
    'EEE',
    'EEE',
    'EEE'
	], {
    E: 'kubejs:emerald_nugget'
	})	
		
	event.remove({id: 'minecraft:bread'})
	
	event.replaceInput({}, 'immersive_aircraft:propeller', 'create:propeller');
	
	event.shaped('kubejs:coin_02', [
    'CCC',
    'CCC',
    'CCC'
	], {
    C: 'kubejs:coin_01'
	})
	event.shapeless('9x kubejs:coin_01', ['kubejs:coin_02'])
	
	event.shaped('kubejs:coin_03', [
    'CCC',
    'CCC',
    'CCC'
	], {
    C: 'kubejs:coin_02'
	})
	event.shapeless('9x kubejs:coin_02', ['kubejs:coin_03'])
	
	
	event.shaped('kubejs:coin_04', [
    'CCC',
    'CCC',
    'CCC'
	], {
    C: 'kubejs:coin_03'
	})
	event.shapeless('9x kubejs:coin_03', ['kubejs:coin_04'])
	
	event.shaped('kubejs:coin_05', [
    'CCC',
    'CCC',
    'CCC'
	], {
    C: 'kubejs:coin_04'
	})
	event.shapeless('9x kubejs:coin_04', ['kubejs:coin_05'])
	
////////// END	
})