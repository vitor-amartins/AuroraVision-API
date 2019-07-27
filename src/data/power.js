const maxGenerationPower = require('./power/generationPower/max');
const avgGenerationPower = require('./power/generationPower/avg');
const minGenerationPower = require('./power/generationPower/min');
const maxGrossUsagePower = require('./power/grossUsagePower/max');
const avgGrossUsagePower = require('./power/grossUsagePower/avg');
const minGrossUsagePower = require('./power/grossUsagePower/min');
const maxNetUsagePower = require('./power/netUsagePower/max');
const avgNetUsagePower = require('./power/netUsagePower/avg');
const minNetUsagePower = require('./power/netUsagePower/min');
const maxIrradiance = require('./power/irradiance/max');
const avgIrradiance = require('./power/irradiance/avg');
const minIrradiance = require('./power/irradiance/min');
const maxStorageInPower = require('./power/storageInPower/max');
const avgStorageInPower = require('./power/storageInPower/avg');
const minStorageInPower = require('./power/storageInPower/min');
const maxStorageOutPower = require('./power/storageOutPower/max');
const avgStorageOutPower = require('./power/storageOutPower/avg');
const minStorageOutPower = require('./power/storageOutPower/min');
const maxGridPowerExport = require('./power/gridPowerExport/max');
const avgGridPowerExport = require('./power/gridPowerExport/avg');
const minGridPowerExport = require('./power/gridPowerExport/min');
const maxLoadsPowerConsumption = require('./power/loadsPowerConsumption/max');
const avgLoadsPowerConsumption = require('./power/loadsPowerConsumption/avg');
const minLoadsPowerConsumption = require('./power/loadsPowerConsumption/min');
const maxDCPVPower = require('./power/dcpvPower/max');
const avgDCPVPower = require('./power/dcpvPower/avg');
const minDCPVPower = require('./power/dcpvPower/min');
const maxStoredPower = require('./power/storedPower/max');
const avgStoredPower = require('./power/storedPower/avg');
const minStoredPower = require('./power/storedPower/min');

module.exports = {
  max: {
    generationPower: maxGenerationPower,
    grossUsagePower: maxGrossUsagePower,
    netUsagePower: maxNetUsagePower,
    irradiance: maxIrradiance,
    storageInPower: maxStorageInPower,
    storageOutPower: maxStorageOutPower,
    gridPowerExport: maxGridPowerExport,
    loadsPowerConsumption: maxLoadsPowerConsumption,
    dcpvPower: maxDCPVPower,
    storedPower: maxStoredPower,
  },
  avg: {
    generationPower: avgGenerationPower,
    grossUsagePower: avgGrossUsagePower,
    netUsagePower: avgNetUsagePower,
    irradiance: avgIrradiance,
    storageInPower: avgStorageInPower,
    storageOutPower: avgStorageOutPower,
    gridPowerExport: avgGridPowerExport,
    loadsPowerConsumption: avgLoadsPowerConsumption,
    dcpvPower: avgDCPVPower,
    storedPower: avgStoredPower,
  },
  min: {
    generationPower: minGenerationPower,
    grossUsagePower: minGrossUsagePower,
    netUsagePower: minNetUsagePower,
    irradiance: minIrradiance,
    storageInPower: minStorageInPower,
    storageOutPower: minStorageOutPower,
    gridPowerExport: minGridPowerExport,
    loadsPowerConsumption: minLoadsPowerConsumption,
    dcpvPower: minDCPVPower,
    storedPower: minStoredPower,
  },
};
