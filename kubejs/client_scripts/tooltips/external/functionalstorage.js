// requires: functionalstorage
// requires: create

let drawers = [
  'functionalstorage:framed_1',
  'functionalstorage:framed_2',
  'functionalstorage:framed_4',
  'functionalstorage:compacting_framed_drawer',
  'functionalstorage:framed_simple_compacting_drawer'
]

ClientEvents.lang('en_us', event => {
  for (let iterator of drawers) {
    event.addAll(
      'functionalstorage',
      createTooltip(iterator)
        .addSummary('A _customizable_ storage drawer. See below for details on how to do so. Do be _mindful_ on what your choices are as it can affect the _visibility_ of what is stored.')
        .addBehaviour([
          'Step 1 - To change texture...',
          'Prepare _two_ blocks that you will use for the _outside_ and _inside_ of the drawer. The _order_ in which you place the blocks does matter.'
        ])
        .addBehaviour([
          'Step 2 - To change texture...',
          '_Place_ the drawer on the _third column on the very right_ inside a crafting grid. Please _remember_ that the _first slot_ determines the _outside_ appearance while the _second slot_ determines the _inside_ appearance.'
        ])
        .addBehaviour([
          'Step 3 - To change texture...',
          'Take out of the output slot when you are finished. _Blocks used_ for modifying the appearance of the framed drawer will be consumed'
        ])
        .build()
    )
  }
  event.addAll(
    'kubejs',
    createTooltip('kubejs:ender_drawer_linking_guide')
      .addSummary('It is quite the _magical_ drawer. Just remember to make _two_ Ender Drawers and a _Linking Tool_.')
      .addBehaviour([
        'Linking Process',
        'To _link_ Ender Drawers together, first L-Click one drawer with the _Linking Tool_. After you have stored a frequency, _Sneak_ + R-Click on the other Ender Drawers you want to link it to.'
      ])
      .addBehaviour([
        'Unlinking Process',
        'To change the frequency of an Ender Drawer, _all_ upgrades and items will have to be emptied first. After this is done, break it. _Void Upgrades_ apply to the Ender Drawer network and are intended to be permanent as per the developer\'s response.'
      ])
      .setPalette($Palette.PURPLE)
      .build()
  )
})