// requires: chalk
// requires: create

ClientEvents.lang('en_us', event => {
  // this was embarassingly broken for a while now due to a typo oops...
  STANDARD_PALETTE('chalk:chalk_box')
  for (let [itemID, name] of Object.entries(DYE)) {
    GRAY_PALETTE(`chalk:${itemID}_chalk`)
  }
  event.addAll('chalk', {
    "item.chalk.chalk_box.tooltip": "CHALK BOX",
    "item.chalk.chalk_box.tooltip.summary": "Allows you to use _store_ and _switch_ between chalks. It also allows you to add a _glowing_ effect to your chalk if you have any _glow ink sacs_ in the special slot.",
    "item.chalk.chalk_box.tooltip.condition1": "On right click while not looking at any blocks",
    "item.chalk.chalk_box.tooltip.behaviour1": "Opens the GUI for access to stored chalks.",
    "item.chalk.chalk_box.tooltip.condition2": "Additional Info",
    "item.chalk.chalk_box.tooltip.behaviour2": "Marks are drawn with the _leftmost chalk_ in order. To change _active_ chalk, simply _[Shift]_ + _[R-click]_ while _not looking_ at any block with the Chalk Box in hand."
  })
  for (let [insert, name] of Object.entries(DYE)) {
    event.add('chalk', `item.chalk.${insert}_chalk.tooltip`, `${name} CHALK`);
    event.add('chalk', `item.chalk.${insert}_chalk.tooltip.summary`, "Useful for _planning_, _navigation_ and drawing. Can be stored in the _Chalk Box_ for easier management and utility. _Additional symbols_ are _unlocked_ through advancements.");
    event.add('chalk', `item.chalk.${insert}_chalk.tooltip.condition1`, "Usage");
    event.add('chalk', `item.chalk.${insert}_chalk.tooltip.behaviour1`, "Right click on a block face to _draw_ a mark. Depending on the _angle_ and _distance_ away from the _center_ of the block, the _direction_ of your drawing will change. A _dot mark_ is drawn by clicking in the center of the block.");
    event.add('chalk', `item.chalk.${insert}_chalk.tooltip.condition2`, "On Shift + R-click");
    event.add('chalk', `item.chalk.${insert}_chalk.tooltip.behaviour2`, "Allows you to change different symbols.");
    event.add('chalk', `item.chalk.${insert}_chalk.tooltip.condition3`, "Usage with Chalk Box");
    event.add('chalk', `item.chalk.${insert}_chalk.tooltip.behaviour3`, "Simply _right click_ as if you were using the chalk by itself in the first place.");
  }
})