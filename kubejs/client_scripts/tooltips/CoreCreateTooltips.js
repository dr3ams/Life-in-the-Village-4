// priority: 500
// requires: create

/**
 * @file Lang gen for core items and blocks.
 */

let standardArmor = ['helmet', 'chestplate', 'leggings', 'boots']

const standardTools = {
  pickaxe: 'PICKAXE',
  axe: 'AXE',
  shovel: 'SHOVEL',
  hoe: 'HOE',
  sword: 'SWORD'
}

const minecraftMaterialTools = {
  wooden: 'WOODEN',
  stone: 'STONE',
  iron: 'IRON'
}

const DYE = {
  black: 'BLACK',
  gray: 'GRAY',
  light_gray: 'LIGHT GRAY',
  white: 'WHITE',
  pink: 'PINK',
  light_blue: 'LIGHT BLUE',
  brown: 'BROWN',
  red: 'RED',
  orange: 'ORANGE',
  yellow: 'YELLOW',
  lime: 'LIME',
  green: 'GREEN',
  cyan: 'CYAN',
  blue: 'BLUE',
  purple: 'PURPLE',
  magenta: 'MAGENTA'
}

let STANDARD_PALETTE_REGISTRY = [
  'minecraft:clock',
  'minecraft:wooden_pickaxe',
  'minecraft:stone_pickaxe',
  'minecraft:iron_pickaxe',
  'minecraft:fletching_table',
  'minecraft:dried_kelp_block',
  'minecraft:coal_block',
  'minecraft:diamond_block',
  'minecraft:raw_iron',
  'minecraft:raw_gold',
  'minecraft:raw_copper',
  'minecraft:iron_ingot',
  'minecraft:gold_ingot',
  'minecraft:copper_ingot',
  'create:item_vault',
  'create:raw_zinc',
  'create:zinc_ingot',
  'create:zinc_nugget',
  'farmersdelight:skillet',
  'farmersdelight:stove'
]
let BLUE_REGISTRY = [
  'minecraft:soul_campfire',
  'minecraft:beacon',
  'minecraft:lapis_lazuli'
]
let GREEN_REGISTRY = [
  'minecraft:bone_meal'
]
let YELLOW_REGISTRY = [
  'minecraft:campfire',
]
let RED_REGISTRY = [
  'kubejs:removed_item',
  'minecraft:nether_star',
  'minecraft:netherrack'
]
let PURPLE_REGISTRY = [
  'minecraft:structure_void',
  'minecraft:dragon_egg',
  'create:handheld_worldshaper',
]
let GRAY_REGISTRY = [
  'minecraft:rotten_flesh',
  'minecraft:pointed_dripstone',
  'minecraft:andesite',
  'minecraft:cobblestone',
  'minecraft:cobbled_deepslate',
  'minecraft:dirt',
  'minecraft:gravel',
  'kubejs:deepslate_shard'
]

ClientEvents.lang('en_us', event => {
  STANDARD_PALETTE_REGISTRY.forEach(item => {
    STANDARD_PALETTE(item)
  })
  BLUE_REGISTRY.forEach(item => {
    BLUE_PALETTE(item)
  })
  GREEN_REGISTRY.forEach(item => {
    GREEN_PALETTE(item)
  })
  YELLOW_REGISTRY.forEach(item => {
    YELLOW_PALETTE(item)
  })
  RED_REGISTRY.forEach(item => {
    RED_PALETTE(item)
  })
  PURPLE_REGISTRY.forEach(item => {
    PURPLE_PALETTE(item)
  })
  GRAY_REGISTRY.forEach(item => {
    GRAY_PALETTE(item)
  })
  GRAY_WHITE_PALETTE('create:chromatic_compound')
  GRAY_GOLD_PALETTE('create:refined_radiance')
  GRAY_PALETTE('create:shadow_steel')
  event.addAll(
    'kubejs',
    createTooltip('minecraft:obsidian')
      .addSummary('_Infinitely_ renewable but takes forever to break automatically.')
      .addBehaviour([
        'Method 1 - Drills',
        'You can have a _deployer_ place a _lava bucket_ next to a waterlogged block or drill. This does take a while, however.'
      ])
      .addBehaviour([
        'Method 2 - Contraption Parking',
        'You can have a _Mechanical Bearing_ or _Mechanical Piston_ park blocks into place to break the obsidian instantly.'
      ])
      .addBehaviour([
        'Method 3 - Cursed Recipes',
        'You can _compact_ Water and Lava in a Basin because of Create\'s cursed recipe magic or other methods shown by the recipe viewer.'
      ])
      .setPalette($Palette.PURPLE)
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('kubejs:unstable_entropy_particles')
      .addSummary('It appears that it needs to be _stabilized_ first by something that is _very_ cold.')
      .addBehaviour([
        'Acquisition',
        'Can only be created by mixing many different materials together.'
      ])
      .setPalette($Palette.PURPLE)
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('kubejs:stable_entropy_particles')
      .addSummary('Can now be molded into other forms that may be more useful.')
      .setPalette($Palette.PURPLE)
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('kubejs:high_entropy_alloy_nugget')
      .addSummary('A nugget of alloy that seems to be constantly changing shape, awaiting your instruction.')
      .addBehaviour([
        'Acquisition',
        'Can only be made from combining many different materials consolidated with _Stable Entropy Particles_.'
      ])
      .setPalette($Palette.PURPLE)
      .build()
  )
  event.addAll('kubejs', {
    "block.minecraft.andesite.tooltip": "ANDESITE",
    "block.minecraft.andesite.tooltip.summary": "Now has _additional uses_ in recipes.",
    "block.minecraft.andesite.tooltip.condition1": "Usage",
    "block.minecraft.andesite.tooltip.behaviour1": "Used in making _Andesite Alloy_.",
    "block.minecraft.andesite.tooltip.condition2": "Renewal",
    "block.minecraft.andesite.tooltip.behaviour2": "Can be _renewed_ by _compacting_ some _Gravel_, _Flint_ and _Lava_ in a _Basin_. _Cobblestone_ and _Diorite_ can also be _mixed_ together in a shapeless recipe.",
    "block.minecraft.cobblestone.tooltip": "COBBLESTONE",
    "block.minecraft.cobblestone.tooltip.summary": "Now has _additional uses_ in recipes.",
    "block.minecraft.cobblestone.tooltip.condition1": "Usage",
    "block.minecraft.cobblestone.tooltip.behaviour1": "Can be used in making _Diorite_ which can then be used to make _Andesite_ for easy creation of _Andesite Alloy_.",
    "block.minecraft.cobblestone.tooltip.condition2": "When milled or crushed",
    "block.minecraft.cobblestone.tooltip.behaviour2": "Turns into _Gravel_ which can be _washed_ for more _useful_ materials.",
    "block.minecraft.gravel.tooltip": "GRAVEL",
    "block.minecraft.gravel.tooltip.summary": "Now has _additional uses_ in recpipes.",
    "block.minecraft.gravel.tooltip.condition1": "When washed",
    "block.minecraft.gravel.tooltip.behaviour1": "Has a chance of revealing _iron nuggets_ and _flint_.",
    "block.minecraft.beacon.tooltip": "BEACON",
    "block.minecraft.beacon.tooltip.summary": "Gives _positive_ effects to players in a certain radius. Requires a base built out of precious materials to function!",
    "item.minecraft.lapis_lazuli.tooltip": "LAPIS LAZULI",
    "item.minecraft.lapis_lazuli.tooltip.summary": "Now has _additional uses_ in recipes.",
    "item.minecraft.lapis_lazuli.tooltip.condition1": "Usage",
    "item.minecraft.lapis_lazuli.tooltip.behaviour1": "Other than _enchanting_ purposes, you can _haunt_ it to get _prismarine_ shards and crystals.",
    "block.minecraft.campfire.tooltip": "CAMPFIRE",
    "block.minecraft.campfire.tooltip.summary": "Useful for _cooking_ food and other functionalities. See below!",
    "block.minecraft.campfire.tooltip.condition2": "When placed in front of a powered Encased Fan:",
    "block.minecraft.campfire.tooltip.behaviour2": "Permits _Bulk Smoking_ for food items.",
    "block.minecraft.soul_campfire.tooltip": "SOUL CAMPFIRE",
    "block.minecraft.soul_campfire.tooltip.summary": "_Repels_ piglins in addition to cooking food and other functionalities. See below!",
    "block.minecraft.soul_campfire.tooltip.condition1": "When nearby:",
    "block.minecraft.soul_campfire.tooltip.behaviour1": "Campfires can now _regenerate_ your health. _<wave>Cozy!</wave>_",
    "block.minecraft.soul_campfire.tooltip.condition2": "When placed in front of a powered Encased Fan:",
    "block.minecraft.soul_campfire.tooltip.behaviour2": "Permits _Bulk Haunting_ for items.",,
    "item.minecraft.nether_star.tooltip": "NETHER STAR",
    "item.minecraft.nether_star.tooltip.summary": "Now has _additional uses_.",
    "item.minecraft.nether_star.tooltip.condition1": "Usage",
    "item.minecraft.nether_star.tooltip.behaviour1": "Used in waking up _The Harbinger_ in the _Ancient Factory_ located deep underground in the _Overworld_.",
    "item.minecraft.raw_iron.tooltip": "RAW IRON",
    "item.minecraft.raw_iron.tooltip.summary": "Unrefined, but an _important_ ingredient in everything Create related.",
    "item.minecraft.raw_iron.tooltip.condition1": "Renewal",
    "item.minecraft.raw_iron.tooltip.behaviour1": "Can be _renewed_ from _washing_ Gravel in the form of nuggets in addition to existing methods.",
    "item.minecraft.iron_ingot.tooltip": "IRON INGOT",
    "item.minecraft.iron_ingot.tooltip.summary": "Now in its _refined_ form, it is now _useful_ to you.",
    "item.minecraft.iron_ingot.tooltip.condition1": "When mixed with Andesite in nugget form",
    "item.minecraft.iron_ingot.tooltip.behaviour1": "Creates _Andesite Alloy_ ingots.",
    "item.minecraft.iron_ingot.tooltip.condition2": "When pressed",
    "item.minecraft.iron_ingot.tooltip.behaviour2": "Turns into an _Iron Sheet_ which has additional uses.",
    "item.minecraft.raw_copper.tooltip": "RAW COPPER",
    "item.minecraft.raw_copper.tooltip.summary": "Unrefined, but an _important_ ingredient in everything related to Create _fluid_ manipulation.",
    "item.minecraft.copper_ingot.tooltip": "COPPER INGOT",
    "item.minecraft.copper_ingot.tooltip.summary": "Now in its _refined_ form, it is now _useful_ to you.",
    "item.minecraft.copper_ingot.tooltip.condition1": "When combined with a Zinc Ingot",
    "item.minecraft.copper_ingot.tooltip.behaviour1": "Creates _two_ Brass Ingots.",
    "item.minecraft.copper_ingot.tooltip.condition2": "When pressed",
    "item.minecraft.copper_ingot.tooltip.behaviour2": "Turns into a _Copper Sheet_ which has additional uses, primarily focused on fluid manipulation.",
    "item.minecraft.raw_gold.tooltip": "RAW GOLD",
    "item.minecraft.raw_gold.tooltip.summary": "Unrefined, but an _important_ ingredient in Create components.",
    "item.minecraft.raw_gold.tooltip.condition1": "Renewal",
    "item.minecraft.raw_gold.tooltip.behaviour1": "Can be _renewed_ from _washing_ Red Sand or Soul Sand in nugget form. However, washing Soul Sand has _lower_ yields compared to washing Red Sand.",
    "item.minecraft.gold_ingot.tooltip": "GOLD INGOT",
    "item.minecraft.gold_ingot.tooltip.summary": "Now in its _refined_ form, it is now _useful_ to you.",
    "item.minecraft.gold_ingot.tooltip.condition1": "When pressed",
    "item.minecraft.gold_ingot.tooltip.behaviour1": "Turns into a _Gold Sheet_ which has additional uses.",
    "item.create.raw_zinc.tooltip": "RAW ZINC",
    "item.create.raw_zinc.tooltip.summary": "Unrefined, but an _important_ ingredient in everything Create related.",
    "item.create.zinc_ingot.tooltip": "ZINC INGOT",
    "item.create.zinc_ingot.tooltip.summary": "Now in its _refined_ form, it is now _useful_ to you.",
    "item.create.zinc_ingot.tooltip.condition1": "When combined with a Copper Ingot",
    "item.create.zinc_ingot.tooltip.behaviour1": "Creates _two_ Brass Ingots.",
    "block.create.item_vault.tooltip": "ITEM VAULT",
    "block.create.item_vault.tooltip.summary": "In addition to being a large, shared inventory, the Item Vault can't be destroyed by _any_ kind of explosion. Your valueables are _guaranteed_ to be safe.",
  })
  event.addAll(
    'kubejs',
    createTooltip('kubejs:copper_coin')
      .addSummary('The currency of _this world_.')
      .setPalette($Palette.GRAY)
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('kubejs:iron_coin')
      .addSummary('The currency of _this world_.')
      .setPalette($Palette.GRAY_AND_WHITE)
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('kubejs:gold_coin')
      .addSummary('The currency of _this world_.')
      .setPalette($Palette.YELLOW)
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('kubejs:netherite_coin')
      .addSummary('The currency of _this world_.')
      .setPalette($Palette.GRAY_AND_RED)
      .build()
  )

  event.addAll(
    'minecraft',
    createTooltip('minecraft:nether_wart')
      .addSummary('A _red_ fungus used in _potion brewing_. Primarily used for brewing _Awkward Potions_.')
      .addBehaviour([
        'When haunted',
        'Absorbs soul energy to _re-awaken_.'
      ])
      .setPalette($Palette.RED)
      .build()
  )

  if (Platform.isLoaded('summoningrituals')) {
    event.addAll(
      'summoningrituals',
      createTooltip('summoningrituals:altar')
        .addSummary('An altar that _summons_ either _mobs_, _items_ or even in-world events.')
        .addBehaviour([
          'Usage Instructions',
          'The _ritual catalyst_ has to be placed _last_ in order for the ritual to start. _Prepare_ the _ritual ingredients_ first. In the recipe viewer, the _ritual catalyst_ is located in the center. Press _[U]_ _WHILE HOVERING_ over the _summoning altar_ item in your inventory _with your cursor_ to see _all_ summoning rituals.'
        ])
        .addBehaviour([
          'On R-Click with item',
          'The altar _takes_ the item from you for ritual usage. However, the order of the ritual ingredients _does not_ matter other than the _ritual catalyst_ which must be inserted last.'
        ])
        .addBehaviour([
          'On Sneak + R-Click with empty hand',
          'The altar _returns_ items in the order you gave it.'
        ])
        .setPalette($Palette.RED)
        .build()
    )
    event.addAll(
      'summoningrituals',
      createTooltip('summoningrituals:indestructible_altar')
        .addSummary('This is the _indestructible_ version of the altar, normally found in custom structures and not planned to be craftable. Currently this is _unobtainable_ as no structures generate with it present.')
        .addBehaviour([
          'Usage Instructions',
          'The _ritual catalyst_ has to be placed _last_ in order for the ritual to start. _Prepare_ the _ritual ingredients_ first. In the recipe viewer, the _ritual catalyst_ is located in the center. Press _[U]_ _WHILE HOVERING_ over the _summoning altar_ item in your inventory _with your cursor_ to see _all_ summoning rituals.'
        ])
        .addBehaviour([
          'On R-Click with item',
          'The altar _takes_ the item from you for ritual usage. However, the order of the ritual ingredients _does not_ matter other than the _ritual catalyst_ which must be inserted last..'
        ])
        .addBehaviour([
          'On Sneak + R-Click with empty hand',
          'The altar _returns_ items in the order you gave it.'
        ])
        .setPalette($Palette.RED)
        .build()
    )
  }
  event.addAll('create', {
    "item.create.wrench.tooltip.condition3": "On R-Click on belt end",
    "item.create.wrench.tooltip.behaviour3": "Safely _shortens_ a Mechanical Belt _without breaking_ its entire length. _DO NOT_ sneak while doing this unless if you intend on picking up the full belt.",
    "item.create.wrench.tooltip.condition4": "On R-Click on extra shafts inside belts",
    "item.create.wrench.tooltip.behaviour4": "Safely _removes_ the extra shaft _without breaking_ the entire belt.",
    "block.create.seat.tooltip": "SEAT",
    "block.create.seat.tooltip.summary": "Sit yourself down and enjoy the ride! Will anchor a player onto a _moving contraption_. Great for static furniture too! Comes in a variety of colours.",
    "block.create.seat.tooltip.condition1": "R-Click on Seat",
    "block.create.seat.tooltip.behaviour1": "Sits the player on the _Seat_. Press _[Shift]_ to leave the _Seat_.",
    "item.create.blaze_cake.tooltip": "BLAZE CAKE",
    "item.create.blaze_cake.tooltip.summary": "A delicious treat for your hard-working _Blaze Burners_. Gets them all fired up!"
  })

  if (Platform.isLoaded('farmersdelight')) {
    event.addAll('farmersdelight', {
      "block.farmersdelight.skillet.tooltip": "SKILLET",
      "block.farmersdelight.skillet.tooltip.summary": "The skillet can be used to _cook_ food over an open flame or a stove. It can also be occasionally used as a weapon should the need ever arise.",
      "block.farmersdelight.skillet.tooltip.condition1": "When held over an open flame or stove",
      "block.farmersdelight.skillet.tooltip.behaviour1": "Cooks one food item at a time at a faster speed than a campfire.",
      "block.farmersdelight.skillet.tooltip.condition2": "On holding right click while holding ingredients in off-hand",
      "block.farmersdelight.skillet.tooltip.behaviour2": "Cooks ingredients over an open flame or a stove.",
      "block.farmersdelight.skillet.tooltip.condition3": "On left click",
      "block.farmersdelight.skillet.tooltip.behaviour3": "Can be utilized as a weapon."
    })
  }
})