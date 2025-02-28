// requires: ftbquests
// requires: create

ClientEvents.lang('en_us', event => {
  if (Platform.isLoaded('ftbquests')) {
    STANDARD_PALETTE('ftbquests:book')
  }
  event.addAll('kubejs', {
    "item.ftbquests.book.tooltip": "FTBQUESTS BOOK",
    "item.ftbquests.book.tooltip.summary": "This book _provides_ easy access to the quests screen and some _useful_ information in its tooltip.",
    "item.ftbquests.book.tooltip.condition1": "On R-click",
    "item.ftbquests.book.tooltip.behaviour1": "Opens the _quests_ screen. Be sure to read everything!",
    "item.ftbquests.book.tooltip.behaviour2": "You can also _access_ quests by opening your _inventory screen_ and _looking_ at the _top left_ corner of your screen.",
  })

})