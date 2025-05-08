// priority: 0

// Visit the wiki for more info - https://kubejs.com/

console.info('Hello, World! (Loaded startup scripts)')

StartupEvents.registry('item', event => {
	// Register new items here
	// e.create('example_item').displayName('Example Item')
	
event.create('copper_coin').displayName('Copper Coin').rarity('Uncommon')
event.create('iron_coin').displayName('Iron Coin').rarity('Uncommon')
event.create('gold_coin').displayName('Gold Coin').rarity('Rare')
event.create('diamond_coin').displayName('Diamond Coin').rarity('Epic')
event.create('monster_coin').displayName('Dungeon Coin').rarity('Rare')
event.create('proofofwork').displayName('Proof Of Work').rarity('Rare')

event.create('coin_bumblezone').displayName('Bumblezone Coin').rarity('Rare')
event.create('coin_nether').displayName('Nether Coin').rarity('Uncommon')

event.create('diamond_nugget').displayName('Diamond Nugget')
event.create('diamond_dust').displayName('Diamond Dust')
event.create('emerald_nugget').displayName('Emerald Nugget')

event.create('coin_01').displayName('Coin')
event.create('coin_02').displayName('Couple of Coins')
event.create('coin_03').displayName('Stack of Coins')
event.create('coin_04').displayName('Pile of Coins')
event.create('coin_05').displayName('Dozen of Coins')

//mainly quest icons
event.create('medal').displayName('Medal').glow(true)
event.create('heart').displayName('Heart')
event.create('icon_goal').displayName('Icon Goal')
event.create('icon_info').displayName('Icon Info')
event.create('icon_exclamation').displayName('Test Icon')

event.create('caution').displayName('caution')
event.create('chest').displayName('chest')
event.create('fire').displayName('fire')
event.create('forbid').displayName('forbid')
event.create('heart-half').displayName('heart-half')
event.create('help').displayName('help')
event.create('key').displayName('key')
event.create('lightning').displayName('lightning')
event.create('lock').displayName('lock')
event.create('lock-2').displayName('lock-2')
event.create('manuscript').displayName('manuscript')
event.create('mark').displayName('mark')
event.create('scaling').displayName('scaling')
event.create('scroll').displayName('scroll')
event.create('skull').displayName('skull')
event.create('star').displayName('star')




//processing recipes
event.create('hammer_iron', 'pickaxe').tier('iron').maxDamage(250)
event.create('wooden_form').displayName('Wooden Form').maxDamage(64)
event.create('stone_mortar').displayName('Stone Mortar').maxDamage(64)
event.create('iron_mortar').displayName('Iron Mortar').maxDamage(220)
event.create('dust_zinc').displayName('Zinc Dust')
event.create('dust_andesite').displayName('Andesite Dust')
event.create('dust_andesite_alloy').displayName('Andesite Alloy Dust')

event.create('rick').displayName('Pet Coal').unstackable().burnTime(60000).rarity('EPIC').tooltip('Named Rick')


//patreon recognition
event.create('fox').displayName('ShadowFoxy Patreon Supporter Icon')
event.create('kruscle').displayName('Kruscle Patreon Supporter Icon')
event.create('plua').displayName('ShadowFoxy Patreon Supporter Icon')
event.create('crankonator').displayName('Kruscle Patreon Supporter Icon')
event.create('lexileexx').displayName('LexiLeeXx Patreon Supporter Icon')
	
})

ItemEvents.modification(event => {

})

StartupEvents.postInit(event => { Platform.mods.kubejs.name = 'LITV 4'; });
