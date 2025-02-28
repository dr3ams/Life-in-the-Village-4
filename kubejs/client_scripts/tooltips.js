ItemEvents.tooltip(event =>{

	event.addAdvanced(['skilltree:quiver', 'skilltree:fiery_quiver', 'skilltree:armored_quiver', 'skilltree:gilded_quiver', 'skilltree:toxic_quiver', 'skilltree:diamond_quiver', 'skilltree:healing_quiver', 'skilltree:silent_quiver', 'skilltree:bone_quiver'], (item, advanced, text) => {
      text.add(1, [
        Text.of('• Place together with ').white(),
		Text.of('arrows ').blue(),
		Text.of('in a ').white(),
        Text.of('crafting grid').gold()
      ])
	})
	
	event.addAdvanced('#skilltree:gems', (item, advanced, text) => {
      text.add(1, [
        Text.of('• Use ').yellow(),
        Text.of('Smithing Table ').green().bold(true),
        Text.of('to insert it').yellow()
      ])
	})
	
	event.addAdvanced('kubejs:proofofwork', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, [
        Text.of('Hold ').gray(),
        Text.of('[Shift] ').yellow(),
        Text.of('to see more info.').gray()
      ])
    } else {
		text.add(1, [
		Text.of('• Exchange it in ').white(),
        Text.of('Coins exchange ').gold(),
        Text.of('quest chapter in the ').white(),
		Text.of('Quest Book. ').green()
      ])
	  	text.add(2, [
        Text.of('Can be acquired as: ').white()
      ])
      text.add(3, [
        Text.of('• one-time ').green().bold(true),
        Text.of('quest reward in  ').white(),
        Text.of('Minecolonies related ').gold(),
        Text.of('quests.').white()
      ])
	    text.add(4, [
        Text.of('• repeatable ').blue().bold(true),
        Text.of('random reward from some ').white(),
        Text.of('Minecolonies professions ').gold(),
        Text.of('(sifter, netherminer, miner)').white()
      ])
    }
  })
  
      event.addAdvanced('eccentrictome:tome', (item, advanced, text) => {
      text.add(1, [
        Text.of('• Used to store all your ').white(),
        Text.of('Guide Books').green()
		])
		text.add(2, [
        Text.of('• Right-click ').gold(),
        Text.of('to open the book selection screen').white()
		])
		text.add(3, [
        Text.of('• Shift + Right-click ').gold(),
        Text.of('to convert to the book for the block you`re looking at').white()
		])
		text.add(4, [
        Text.of('• Left-click ').gold(),
        Text.of('on air to revert a book back into the Tome').white()
		])
		text.add(5, [
        Text.of('• Shift + Q ').gold(),
        Text.of('to eject a book from it').white()
        ]) 
  })
  
  	event.addAdvanced(['kubejs:copper_coin', 'kubejs:iron_coin', 'kubejs:gold_coin', 'kubejs:diamond_coin'], (item, advanced, text) => {
	text.add(1, [
        Text.of('Quest coin').gold()
      ])	
    if (!event.isShift()) {
      text.add(2, [
        Text.of('Hold ').gray(),
        Text.of('[Shift] ').gold(),
        Text.of('to see more info.').gray()
      ])
    } else {
      text.add(1, [
        Text.of('• Acquired through doing ').white(),
        Text.of('quests ').gold(),
		Text.of('from the ').white(),
		Text.of('Quest Book ').green()
      ])
	    text.add(2, [
        Text.of('• Exchange it in ').white(),
        Text.of('⭐ Coin Exchange ').gold(),
        Text.of('quest chapter in the ').white(),
		Text.of('Quest Book ').green(),
		Text.of('for valuable ').white(),
		Text.of('Loot').gold().bold(true)

      ])
    }
  })
  
  event.addAdvanced('kubejs:monster_coin', (item, advanced, text) => {
    if (!event.isShift()) {
      text.add(1, [
        Text.of('Hold ').gray(),
        Text.of('[Shift] ').blue(),
        Text.of('to see more info.').gray()
      ])
    } else {
      text.add(1, [
        Text.of('• Acquired from ').white(),
        Text.of('dungeon chests ').gold(),
        Text.of('and breaking ').white(),
        Text.of('spawners').gold()
      ])
	    text.add(2, [
        Text.of('• Exchange it in ').white(),
        Text.of('Coins exchange ').gold(),
        Text.of('quest chapter in the ').white(),
		Text.of('Quest Book ').green(),
		Text.of('for valuable ').white(),
		Text.of('Loot').gold().bold(true)
      ])
    }
  })
  
  
  
  
  
    event.addAdvanced(['waystones:waystone', 'waystones:mossy_waystone', 'waystones:sandy_waystone'], (item, advanced, text) => {
	text.add(1, [
        Text.of('Can rarely generate in the world and in the villages').gray()
      ])	
    if (!event.isShift()) {
      text.add(2, [
        Text.of('Hold ').gray(),
        Text.of('[Shift] ').gold(),
        Text.of('to see more info.').gray()
      ])
    } else {
      text.add(1, [
        Text.of('• Players can activate waystones, ').white()
      ])
	  text.add(2, [
        Text.of('which will allow them to teleport back ').white()
      ])
	  text.add(3, [
        Text.of('to those waystones using items such as ').white()
      ])
	  text.add(4, [
        Text.of('the Bound Scroll or Warp Scroll').white()
      ])
    }
  })
  
    event.addAdvanced('waystones:sharestone', (item, advanced, text) => {
	text.add(1, [
        Text.of('This item can be bought in the shop').gray()
      ])	
    if (!event.isShift()) {
      text.add(2, [
        Text.of('Hold ').gray(),
        Text.of('[Shift] ').gold(),
        Text.of('to see more info.').gray()
      ])
    } else {
      text.add(1, [
        Text.of('• The sharestone is a block that can be used to teleport to other sharestones of the same color. Unlike waystones, sharestones do not require the player to activate it first').white()
      ])
	  text.add(2, [
        Text.of('• Right-click a sharestone to choose a sharestone of the same color to teleport to').white()
      ])
    }
  })
  
    event.addAdvanced('waystones:bound_scroll', (item, advanced, text) => {	
    if (!event.isShift()) {
      text.add(1, [
        Text.of('Hold ').gray(),
        Text.of('[Shift] ').gold(),
        Text.of('to see more info.').gray()
      ])
    } else {
      text.add(1, [
        Text.of('• Can be tied to a specific waystone by right-clicking the waystone with it').white()
      ])
	  text.add(2, [
        Text.of('• Could be given to another player and allow them to easily get to the bound waystone even if they have not activated it yet').white()
      ])
    }
  })
  
    event.addAdvanced('waystones:warp_scroll', (item, advanced, text) => {	
    if (!event.isShift()) {
      text.add(1, [
        Text.of('Hold ').gray(),
        Text.of('[Shift] ').gold(),
        Text.of('to see more info.').gray()
      ])
    } else {
      text.add(1, [
        Text.of('• Can be used to teleport to any of your activated waystones.').white()
      ])
    }
  })
  
    event.addAdvanced('waystones:warp_stone', (item, advanced, text) => {
	text.add(1, [
        Text.of('This item can be bought in the shop').gray()
      ])	
    if (!event.isShift()) {
      text.add(2, [
        Text.of('Hold ').gray(),
        Text.of('[Shift] ').gold(),
        Text.of('to see more info.').gray()
      ])
    } else {
      text.add(1, [
        Text.of('• The warp stone allows you to teleport to any of your activated waystones').white()
      ])
	  text.add(2, [
        Text.of('• Once used, a cooldown period starts before you can use a warp stone again').white()
      ])
	  text.add(3, [
        Text.of('• This cooldown is tied to your player, not the warp stone itself, so there is no use in having multiple warp stones').white()
      ])
    }
  })
  
  
	 event.addAdvanced('waystones:portstone', (item, advanced, text) => {
	text.add(1, [
        Text.of('This item can be bought in the shop').gray()
      ])	
	})
  
    event.addAdvanced('waystones:warp_plate', (item, advanced, text) => {
	text.add(1, [
        Text.of('This item can be bought in the shop').gray()
      ])	
	})
	
	
////////////////////
})