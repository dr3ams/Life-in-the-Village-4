// requires: railways

ClientEvents.lang('en_us', event => {
  event.addAll('railways', {
    // Press and hold the _Focus Schematic Overlay_ key (default _ALT_) to select the _bogey style_ to place.
    "block.create.railway_casing.tooltip": "TRAIN CASING",
    "block.create.railway_casing.tooltip.summary": "With the presence of _Steam n' Rails_, placed train bogeys can now be customized.",
    "block.create.railway_casing.tooltip.condition1": "On holding Alt",
    "block.create.railway_casing.tooltip.behaviour1": "Allows you to select the _bogey style_ that you wish to place.",
    // A _deployer_ holding a _wrench_ can automatically assemble and disassemble trains by hitting a _station_. _Hint_: hoppers can be used to put a wrench in a deployer.
    "block.create.track_station.tooltip": "TRAIN STATION",
    "block.create.track_station.tooltip.summary": "With the presence of _Steam n' Rails_, added functionality has been added.",
    "block.create.track_station.tooltip.condition1": "On interaction with a Deployer holding a Wrench",
    "block.create.track_station.tooltip.behaviour1": "Automatically _assembles_ and _disassembles_ trains. However, to _give_ the Deployer a _Wrench_ a Hopper or Chute can be used."
  })
})