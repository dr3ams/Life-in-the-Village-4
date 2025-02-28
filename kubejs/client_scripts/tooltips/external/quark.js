// requires: quark
// requires: create

ClientEvents.lang('en_us', event => {
  STANDARD_PALETTE('quark:abacus')
  STANDARD_PALETTE('quark:crate')
  event.addAll('quark', {
    "item.quark.abacus.tooltip": "ABACUS",
    "item.quark.abacus.tooltip.summary": "A tool used to measure distance.",
    "item.quark.abacus.tooltip.condition1": "On R-click",
    "item.quark.abacus.tooltip.behaviour1": "Right click on a block face to measure distance.",
    "block.quark.crate.tooltip": "CRATE",
    "block.quark.crate.tooltip.summary": "Can store a total of 640 _unique_ items. Good for storing items with _many_ variations. Not so good for storing items that are the same _and_ stack."
  })
})