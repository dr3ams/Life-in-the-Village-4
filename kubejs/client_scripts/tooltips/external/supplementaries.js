// requires: supplementaries
// requires: create

ClientEvents.lang('en_us', event => {
  // currently the sack and vault do not accept Create's tooltips.
  GRAY_PALETTE('supplementaries:cage')
  PURPLE_PALETTE('supplementaries:enderman_head')
  STANDARD_PALETTE('supplementaries:key')
  GRAY_PALETTE('supplementaries:pedestal')
  STANDARD_PALETTE('supplementaries:quiver')
  GRAY_PALETTE('supplementaries:statue')
  event.addAll('supplementaries', {
    "block.supplementaries.cage.tooltip": "CAGE",
    "block.supplementaries.cage.tooltip.summary": "Allows for the trapping of small animals for convenient transportation.",
    "block.supplementaries.cage.tooltip.condition1": "On R-Click on small animal",
    "block.supplementaries.cage.tooltip.behaviour1": "_Captures_ the small animal.",
    "block.supplementaries.cage.tooltip.condition2": "On R-click on ground with small animal",
    "block.supplementaries.cage.tooltip.behaviour2": "_Releases_ the small animal back into the world.",
    "block.supplementaries.cage.tooltip.condition3": "On Shift + R-Click",
    "block.supplementaries.cage.tooltip.behaviour3": "_Places_ the cage as a block.",
    "item.supplementaries.key.tooltip": "KEY",
    "item.supplementaries.key.tooltip.summary": "Able to _lock_ many Supplementaries related things. You should probably _rename_ it with some _lore_ to use as a personal passkey.",
    "item.supplementaries.key.tooltip.condition1": "On R-click",
    "item.supplementaries.key.tooltip.behaviour1": "Fully _locks_ eligible Supplementaries blocks. You _can't_ clear the lock once it is set, so _DO NOT_ lose your key.",
    "block.supplementaries.pedestal.tooltip": "PEDESTAL",
    "block.supplementaries.pedestal.tooltip.summary": "An _elegant_ display for whatever you place onto it.",
    "item.supplementaries.quiver.tooltip": "QUIVER",
    "item.supplementaries.quiver.tooltip.summary": "Easily _stores_ arrows to _save_ space in your inventory and does not have to be worn to be used. Holds _nine_ stacks of arrows.",
    "item.supplementaries.quiver.tooltip.condition1": "Storing arrows",
    "item.supplementaries.quiver.tooltip.behaviour1": "To store arrows in the Quiver, grab any stack size of arrows with your cursor then _right click_ over the Quiver.",
    // sack does not work
    //"block.supplementaries.sack.tooltip": "SACK",
    //"block.supplementaries.sack.tooltip.summary": "A convenient way to carry items on your person. Careful not to carry more than two sacks!",
    "block.supplementaries.statue.tooltip": "STATUE",
    "block.supplementaries.statue.tooltip.summary": "A small statue for decorative use and is able to _hold_ items. Some items have _special poses_ such as candles, tools and swords.",
    "block.supplementaries.statue.tooltip.condition1": "When powered by redstone",
    "block.supplementaries.statue.tooltip.behaviour1": "Proceeds to _wave_.",
    "block.supplementaries.enderman_head.tooltip": "ENDERMAN HEAD",
    "block.supplementaries.enderman_head.tooltip.summary": "It's just an Enderman head. _Stare_ at it, I dare you.",
    "block.supplementaries.enderman_head.tooltip.condition1": "When stared at",
    "block.supplementaries.enderman_head.tooltip.behaviour1": "_Provides_ redstone power."
  })
  event.addAll(
    'supplementaries',
    createTooltip('supplementaries:antique_ink')
      .addSummary('A rare item which is often found in _urns_, _fishing loot_, or _sold_ by _master cartographers_.')
      .addBehaviour([
        'When used on sign',
        'Changes the sign font to be _fancy_.'
      ])
      .build()
  )
  event.addAll(
    'supplementaries',
    createTooltip('supplementaries:slingshot')
      .addSummary('A tool that can _shoot_ blocks! Not intended to be used as a weapon.')
      .addBehaviour([
        'On R-Click then releasing',
        'Shoots out blocks. Blocks will _place themselves_ wherever they land if the position is suitable.'
      ])
      .addBehaviour([
        'When enchanted with Stasis',
        'Is able to shoot out blocks in a _straight_ line without being affected by gravity. It will also show a _white outline_ where the block will land. _Stasis_ can only be acquired from _End Cities_!'
      ])
      .addBehaviour([
        'Other eligible enchantments',
        'Can also be enchanted with _Quick Charge_ and _Multi Shot_ which should both be self-explanatory.'
      ])
      .build()
  )
  event.addAll(
    'supplementaries',
    createTooltip('supplementaries:wrench')
      .addSummary('It\'s only purpose is to _rotate_ blocks and entities. Rotation point is based on the _block face_ you click on, similar to Create\'s Wrench.')
      .addBehaviour([
        'On Sneak + R-Click',
        'Rotates in the _reverse_ direction.'
      ])
      .addBehaviour([
        'On L-Click on entities',
        'Rotates.'
      ])
      .addBehaviour([
        'Other info',
        'Works on blocks such as _signs_, _way signs_, _double skulls_, _double chests_, _beds_, etc.'
      ])
      .addBehaviour([
        'Is it a weapon?',
        'Yes, it can be used as a _weak_ weapon.'
      ])
      .build()
  )
  event.addAll(
    'supplementaries',
    createTooltip('supplementaries:soap')
      .addSummary('Need to _clean_? Soap is all you need! Can be _combined_ with many dyed items to revert them to their _default_ or _white_ state.')
      .addBehaviour([
        'On R-Click on dyed block',
        '_Washes_ the dye off.'
      ])
      .addBehaviour([
        'On R-Click on slimed pistons',
        '_Removes_ the slime from the sticky piston face.'
      ])
      .addBehaviour([
        'On R-Click on other blocks that are applicable',
        'Is able to clean _blackboards_, _antique globes and maps_, _tipped spikes_, etc.'
      ])
      .build()
  )
  event.addAll(
    'supplementaries',
    createTooltip('supplementaries:bomb_blue')
      .addSummary('The more _powerful_ version of the bomb. Also does _not explode on impact_ and has a delayed explosion time to give ample time to _RUN_.')
      .addBehaviour([
        'Explosion Info',
        'The explosion from a _blue bomb_ deals significant AoE damage to entities, _set them on fire_ and also afflict them with a _weakness_ debuff.'
      ])
      .addBehaviour([
        'Other info',
        'Explosions cause Creepers to _explode_.'
      ])
      .setPalette($Palette.BLUE)
      .build()
  )
  
    event.addAll(
    'waystones',
    createTooltip('waystones:warp_plate')
      .addSummary('Warp Plates can be compared to teleporting pressure plates. ')
      .addBehaviour([
        '• Stand on one',
		'and you will get teleported to another warp plate'
      ])
      .addBehaviour([
		'• Insert Attuned Shard of another warp plate',
        'to attune Warp Plates to each other'
      ])
      .setPalette($Palette.BLUE)
      .build()
  )
  
    event.addAll(
    'waystones',
    createTooltip('waystones:portstone')
      .addSummary('Portstones are essentially one-way waystones')
      .addBehaviour([
        '• You can use them to',
		'teleport to any other activated Waystone or colored sharestone matching its color, but they can not be teleported to themselves'
      ])
      .addBehaviour([
		'• Only the white portstone',
        'can be used to teleport to regular waystones, all other portstones are linked to their respective sharestones instead'
      ])
      .setPalette($Palette.BLUE)
      .build()
  )
  ///////////////////////
})