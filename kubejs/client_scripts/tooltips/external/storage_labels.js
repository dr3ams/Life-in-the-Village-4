// requires: labels
// requires: create

ClientEvents.lang('en_us', event => {
  event.addAll(
    'labels',
    createTooltip('labels:label')
      .addSummary('A _simple_ storage label, most similar to Item Frames and can be used on all surfaces. Useful for reminding you what\'s stored in what. Does it obstruct access? _Nope!_')
      .addBehaviour([
        'To change label image...',
        '_Sneak_ + _R-Click_ with the item you want to change it to in your main hand.'
      ])
      .addBehaviour([
        'On Sneak + R-Click with dye',
        'Changes the _color_ of the label\'s image and text, if applicable.'
      ])
      .addBehaviour([
        'On Sneak + R-Click with Glow Ink Sacs',
        'Makes the label _glow_ in the dark.'
      ])
      .addBehaviour([
        'On Sneak + R-Click with a Feather',
        'Makes the label _display_ the _item name_.'
      ])
      .build()
  )
})