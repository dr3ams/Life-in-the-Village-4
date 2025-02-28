// priority: 10
// requires: create

ClientEvents.lang('en_us', event => {
  event.addAll(
    'minecraft',
    createTooltip('minecraft:music_disc_13')
      .addSummary('_Cjbeards_ - _Mirror Mirror (Instrumental)_')
      .setPalette($Palette.YELLOW)
      .build()
  )
  event.addAll(
    'minecraft',
    createTooltip('minecraft:music_disc_cat')
      .addSummary('C418 - cat')
      .setPalette($Palette.GREEN)
      .build()
  )
  event.addAll(
    'minecraft',
    createTooltip('minecraft:music_disc_blocks')
      .addSummary('C418 - blocks')
      .setPalette($Palette.RED)
      .build()
  )
  event.addAll(
    'minecraft',
    createTooltip('minecraft:music_disc_chirp')
      .addSummary('_Farabi Hasan Music_ - _Arlecchino Battle Theme Phase 1 & 2 (Fan-Made) | Genshin Impact_')
      .setPalette($Palette.RED)
      .build()
  )

  event.addAll(
    'minecraft',
    createTooltip('minecraft:music_disc_far')
      .addSummary('C418 - far')
      .setPalette($Palette.GREEN)
      .build()
  )
  event.addAll(
    'minecraft',
    createTooltip('minecraft:music_disc_mall')
      .addSummary('C418 - mall')
      .setPalette($Palette.PURPLE)
      .build()
  )
  event.addAll(
    'minecraft',
    createTooltip('minecraft:music_disc_mellohi')
      .addSummary('C418 - mellohi')
      .setPalette($Palette.PURPLE)
      .build()
  )
  event.addAll(
    'minecraft',
    createTooltip('minecraft:music_disc_stal')
      .addSummary('_Cjbeards_ - _Bad Deeds (Instrumental)_') // originally C418 - stal
      .setPalette($Palette.GRAY)
      .build()
  )
  event.addAll(
    'minecraft',
    createTooltip('minecraft:music_disc_strad')
      .addSummary('C418 - strad')
      .setPalette($Palette.ALL_GRAY)
      .build()
  )
  event.addAll(
    'minecraft',
    createTooltip('minecraft:music_disc_ward')
      .addSummary('C418 - ward')
      .setPalette($Palette.GREEN)
      .build()
  )
  event.addAll(
    'minecraft',
    createTooltip('minecraft:music_disc_11')
      .addSummary('_Cjbeards_ - _From the Shadows_')
      .setPalette($Palette.GRAY)
      .build()
  )
  event.addAll(
    'minecraft',
    createTooltip('minecraft:music_disc_wait')
      .addSummary('C418 - wait')
      .setPalette($Palette.BLUE)
      .build()
  )
  event.addAll(
    'minecraft',
    createTooltip('minecraft:music_disc_pigstep')
      .addSummary('Lena Raine - Pigstep')
      .build()
  )
  event.addAll(
    'minecraft',
    createTooltip('minecraft:music_disc_otherside')
      .addSummary('_Lena Raine - otherside_')
      .setPalette($Palette.GREEN)
      .build()
  )
  event.addAll(
    'minecraft',
    createTooltip('minecraft:music_disc_5')
      .addSummary('_Cjbeards - Heart of the Wicked_')
      .setPalette($Palette.BLUE)
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('minecraft:composter')
      .addSummary('Primarily used for making _Bone Meal_. Both _Deployers_ and _Mechanical Arms_ are able to directly deposit items that can be composted into _Bone Meal_.')
      .addBehaviour([
        'Automated bone meal extraction',
        'Unfortunately, _chutes_ and _funnels_ are not able to extract the finished Bone Meal, so you will have to use _hoppers_ instead.'
      ])
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('minecraft:glowstone_dust')
      .addSummary('The dust form of Glowstone. An essential ingredient in crafting blocks that emit light as well as _potion brewing_.')
      .addBehaviour([
        'Renewal',
        'Can be obtained from defeating _witches_ or applying a _Night Vision Potion_ to some _Cinder Flour_.'
      ])
      .addBehaviour([
        'Uses in Potion Brewing',
        'Increases the _intensity_ of a potion. Also used in brewing a _Thick Potion_.'
      ])
      .setPalette($Palette.YELLOW)
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('minecraft:redstone')
      .addSummary('An embodiment of _game logic_ and can be used in many logic related components.')
      .addBehaviour([
        'Renewal',
        'Can be obtained from defeating _witches_ or applying a _Strength Potion_ to some _Cinder Flour_.'
      ])
      .addBehaviour([
        'Uses in Potion Brewing',
        'Increases the _duration_ of a potion. Also used in brewing a _Mundane Potion_.'
      ])
      .setPalette($Palette.RED)
      .build()
  )
})