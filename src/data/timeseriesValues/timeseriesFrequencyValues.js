const axios = require('axios');

module.exports = (apiToken, entityID, valueType, startDate, endDate, sampleSize, timeZone) => {
  const url = `https://api.auroravision.net/api/rest/v1/stats/frequency/timeseries/${entityID}/LineFrequency/${valueType}`;
  axios.get(url, {
    params: {
      sampleSize,
      startDate,
      endDate,
      timeZone,
    },
    headers: {
      'X-AuroraVision-Token': apiToken,
    },
  }).then((response) => {
    return response.data.result;
  }).catch((error) => {
    console.log(error);
  });
};
