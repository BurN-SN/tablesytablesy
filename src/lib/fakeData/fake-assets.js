export const FAKE_ASSETS = [
  { value: "dishwasher", display: "Dishwasher" },
  { value: "hvac", display: "HVAC Unit" },
  { value: "airconditiner", display: "Air Conditioner" },
  { value: "heatpump", display: "Heat Pump" }
];

export const FAKE_DATA = {
  component: {
    hvac: [
      { value: "blower", display: "Blower Motor and Wheel" },
      { value: "breaker", display: "Breakers" },
      { value: "evaporator", display: "Evaporator (coil leak)" }
    ],
    dishwasher: [
      { value: "wiring", display: "Wiring" },
      { value: "leak", display: "WaterLeak" },
      { value: "circuitboard", display: "Circuit Board" }
    ],
    airconditiner: [
      { value: "blower", display: "Blower Motor and Wheel" },
      { value: "breaker", display: "Breakers" },
      { value: "compressor", display: "Compressor" },
      { value: "condenserFan", display: "Condenser Fan" }
    ],
    heatpump: [
      { value: "blower", display: "Blower Motor and Wheel" },
      { value: "breaker", display: "Breakers" },
      { value: "compressor", display: "Compressor" },
      { value: "condenserFan", display: "Condenser Fan" }
    ]
  },
  repair: {
    blower: [
      { value: "replaceBlower", display: "Replace Blower Motor" },
      { value: "replaceWheel", display: "Replace Blower Wheel" },
      { value: "replaceBoth", display: "Replace Blower Motor and Wheel" },
      {
        value: "replaceVarBlower",
        display: "Replace Variable Speed Blower Motor"
      },
      {
        value: "replaceVarWheel",
        display: "Replace Variable Speed Blower Wheel"
      },
      {
        value: "replaceVarBoth",
        display: "Replace Variable Speed Blower Motor and Wheel"
      },
      { value: "Adjust Blower Wheel*", display: "*Adjust Blower Wheel" },
      {
        value: "Pull and Clean Blower Wheel*",
        display: "*Pull and Clean Blower Wheel"
      }
    ],
    breaker: [
      { value: "replaceBreaker", display: "Replace Breaker" },
      { value: "replaceLowVoltageFuse", display: "Replace Low Voltage Fuse" },
      { value: "replaceHighVoltageFuse", display: "Replace High Voltage Fuse" },
      { value: "testTighten", display: "*Reset & Test/Tighten" },
      {
        value: "Replace 30/60 Amp Disconnect",
        display: "*Replace 30/60 Amp Disconnect"
      }
    ],
    evaporator: [
      { value: "replaceCoil", display: "Replace Evaporator Coil" },
      { value: "coilRepair", display: "Simple Coil Repair" },
      { value: "Cleaning*", display: "*Cleaning" }
    ],
    wiring: [
      { value: "replaceLowVoltageFuse", display: "Replace Low Voltage Fuse" },
      {
        value: "Minor Repair Locate Short*",
        display: "*Minor Repair Locate Short"
      },
      { value: "Replace Thermostat Wire*", display: "*Replace Thermostat Wire" }
    ],
    leak: [
      { value: "replaceCondensatePump", display: "Replace Condensate Pump" },
      { value: "replaceDrainPan", display: "Replace Drain Pan" },
      { value: "cleanDrain", display: "Clean/Blow-out Drain*" },
      {
        value: "replaceAuxDrainFloatSwitch",
        display: "*Replace Auxilliary Drain Float Switch"
      },
      {
        value: "replaceAuxDrainPan",
        display: "*Replace Auxilliary Drain Drain Pan"
      },
      { value: "replaceCondensateDrain", display: "*Replace Condensate Drain" }
    ],
    circuitboard: [
      { value: "replaceCircuitBoard", display: "Replace Circuit Board" }
    ],
    compressor: [
      { value: "repairTerminal", display: "Repair Terminal" },
      { value: "replaceCompressor", display: "Replace Compressor" },
      {
        value: "replaceCrankcase",
        display: "Replace Crankcase Heater (if factory-supplied)"
      },
      { value: "replaceStartAssist", display: "Replace Start Assist Assembly" },
      { value: "addSoundBlanket", display: "*Add Sound Blanket" },
      { value: "replaceSoundBlanket", display: "*Replace Sound Blanket" }
    ],
    condenserFan: [
      {
        value: "replaceCondensorBlade",
        display: "Replace Condensor Fan Blade"
      },
      {
        value: "replaceCondensorFanBladeAndMotor",
        display: "Replace Condensor Fan Blade And Motor"
      },
      { value: "replaceCondensorMotor", display: "Replace Condensor Motor" }
    ]
  }
};

export const repairCodes = {
  replaceBlower: "B",
  replaceWheel: "B",
  replaceBoth: "B",
  replaceVarBlower: "C",
  replaceVarWheel: "C",
  replaceVarBoth: "C",
  replaceBreaker: "A",
  replaceLowVoltageFuse: "A",
  replaceHighVoltageFuse: "A",
  replaceCoil: "E",
  coilRepair: "D",
  replaceCondensatePump: "A",
  replaceDrainPan: "D",
  replaceCircuitBoard: "A",
  repairTerminal: "A",
  replaceCompressor: "E",
  replaceCrankcase: "A",
  replaceStartAssist: "A",
  replaceCondensorBlade: "A",
  replaceCondensorFanBladeAndMotor: "B",
  replaceCondensorMotor: "B"
};

export const repairRates = {
  A: 79,
  B: 123,
  C: 158,
  D: 245,
  E: 385
};
