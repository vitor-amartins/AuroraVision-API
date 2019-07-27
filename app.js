const { username, password, apiKey, oemKey } = require('./keys');
const { getApiToken, getListOfIDs } = require('./src/config');

(async () => {
  try {
    const ids = (await getListOfIDs(oemKey)).data;
  } catch (err) {
    console.log('getListOfIDs', err.response.status);
    return;
  }

  try {
    const apiToken = (await getApiToken(username, password, apiKey)).data.result;
  } catch (err) {
    console.log('getApiToken', err.response.status);
    return;
  }
})();
