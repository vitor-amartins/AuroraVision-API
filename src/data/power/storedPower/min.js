const moment = require('moment');
const timeseriesPowerValues = require('./../timeseriesValues/timeseriesPowerValues');

module.exports = {
  onDay: (apiToken, entityID, date) => {
    return timeseriesPowerValues(apiToken, entityID, 'StoredPower', 'minimum', date, date, 'Day', 'America/Recife');
  },
  onDayEveryMinute: (apiToken, entityID, startDate) => {
    const endDate = moment(startDate, 'YYYYMMDD').add(1, 'days').format('YYYYMMDD');
    return timeseriesPowerValues(apiToken, entityID, 'StoredPower', 'minimum', startDate, endDate, 'Min1', 'America/Recife');
  },
  onDayEveryFiveMinutes: (apiToken, entityID, startDate) => {
    const endDate = moment(startDate, 'YYYYMMDD').add(1, 'days').format('YYYYMMDD');
    return timeseriesPowerValues(apiToken, entityID, 'StoredPower', 'minimum', startDate, endDate, 'Min5', 'America/Recife');
  },
  onDayEveryFifteenMinutes: (apiToken, entityID, startDate) => {
    const endDate = moment(startDate, 'YYYYMMDD').add(1, 'days').format('YYYYMMDD');
    return timeseriesPowerValues(apiToken, entityID, 'StoredPower', 'minimum', startDate, endDate, 'Min15', 'America/Recife');
  },
  onDayHourly: (apiToken, entityID, startDate) => {
    const endDate = moment(startDate, 'YYYYMMDD').add(1, 'days').format('YYYYMMDD');
    return timeseriesPowerValues(apiToken, entityID, 'StoredPower', 'minimum', startDate, endDate, 'Hour', 'America/Recife');
  },
};
