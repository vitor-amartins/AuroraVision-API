const axios = require('axios');
const qs = require('qs');


module.exports = {
  getApiToken: (username, password, apiKey) => {
    return axios.get('https://api.auroravision.net/api/rest/authenticate', {
      auth: {
        username,
        password,
      },
      headers: {
        'X-AuroraVision-ApiKey': apiKey,
      }
    });
  },
  getListOfIDs: (oemKey) => {
    const requestBody = qs.stringify({
      key: oemKey,
    });
    const config = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      }
    };
    return axios.post('http://localhost:8000/scrap/abb/ids/', requestBody, config);
  },
};
