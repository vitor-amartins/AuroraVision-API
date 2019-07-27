const moment = require('moment');
const timeseriesFrequencyValues = require('./timeseriesValues/timeseriesFrequencyValues');

module.exports = {
  max: {
    onDay: (apiToken, entityID, date) => {
      return timeseriesFrequencyValues(apiToken, entityID, 'maximum', date, date, 'Day', 'America/Recife');
    },
    onDayEveryMinute: (apiToken, entityID, startDate) => {
      const endDate = moment(startDate, 'YYYYMMDD').add(1, 'days').format('YYYYMMDD');
      return timeseriesFrequencyValues(apiToken, entityID, 'maximum', startDate, endDate, 'Min1', 'America/Recife');
    },
    onDayEveryFiveMinutes: (apiToken, entityID, startDate) => {
      const endDate = moment(startDate, 'YYYYMMDD').add(1, 'days').format('YYYYMMDD');
      return timeseriesFrequencyValues(apiToken, entityID, 'maximum', startDate, endDate, 'Min5', 'America/Recife');
    },
    onDayEveryFifteenMinutes: (apiToken, entityID, startDate) => {
      const endDate = moment(startDate, 'YYYYMMDD').add(1, 'days').format('YYYYMMDD');
      return timeseriesFrequencyValues(apiToken, entityID, 'maximum', startDate, endDate, 'Min15', 'America/Recife');
    },
    onDayHourly: (apiToken, entityID, startDate) => {
      const endDate = moment(startDate, 'YYYYMMDD').add(1, 'days').format('YYYYMMDD');
      return timeseriesFrequencyValues(apiToken, entityID, 'maximum', startDate, endDate, 'Hour', 'America/Recife');
    },
  },
  avg: {
    onDay: (apiToken, entityID, date) => {
      return timeseriesFrequencyValues(apiToken, entityID, 'average', date, date, 'Day', 'America/Recife');
    },
    onDayEveryMinute: (apiToken, entityID, startDate) => {
      const endDate = moment(startDate, 'YYYYMMDD').add(1, 'days').format('YYYYMMDD');
      return timeseriesFrequencyValues(apiToken, entityID, 'average', startDate, endDate, 'Min1', 'America/Recife');
    },
    onDayEveryFiveMinutes: (apiToken, entityID, startDate) => {
      const endDate = moment(startDate, 'YYYYMMDD').add(1, 'days').format('YYYYMMDD');
      return timeseriesFrequencyValues(apiToken, entityID, 'average', startDate, endDate, 'Min5', 'America/Recife');
    },
    onDayEveryFifteenMinutes: (apiToken, entityID, startDate) => {
      const endDate = moment(startDate, 'YYYYMMDD').add(1, 'days').format('YYYYMMDD');
      return timeseriesFrequencyValues(apiToken, entityID, 'average', startDate, endDate, 'Min15', 'America/Recife');
    },
    onDayHourly: (apiToken, entityID, startDate) => {
      const endDate = moment(startDate, 'YYYYMMDD').add(1, 'days').format('YYYYMMDD');
      return timeseriesFrequencyValues(apiToken, entityID, 'average', startDate, endDate, 'Hour', 'America/Recife');
    },
  },
  min: {
    onDay: (apiToken, entityID, date) => {
      return timeseriesFrequencyValues(apiToken, entityID, 'minimum', date, date, 'Day', 'America/Recife');
    },
    onDayEveryMinute: (apiToken, entityID, startDate) => {
      const endDate = moment(startDate, 'YYYYMMDD').add(1, 'days').format('YYYYMMDD');
      return timeseriesFrequencyValues(apiToken, entityID, 'minimum', startDate, endDate, 'Min1', 'America/Recife');
    },
    onDayEveryFiveMinutes: (apiToken, entityID, startDate) => {
      const endDate = moment(startDate, 'YYYYMMDD').add(1, 'days').format('YYYYMMDD');
      return timeseriesFrequencyValues(apiToken, entityID, 'minimum', startDate, endDate, 'Min5', 'America/Recife');
    },
    onDayEveryFifteenMinutes: (apiToken, entityID, startDate) => {
      const endDate = moment(startDate, 'YYYYMMDD').add(1, 'days').format('YYYYMMDD');
      return timeseriesFrequencyValues(apiToken, entityID, 'minimum', startDate, endDate, 'Min15', 'America/Recife');
    },
    onDayHourly: (apiToken, entityID, startDate) => {
      const endDate = moment(startDate, 'YYYYMMDD').add(1, 'days').format('YYYYMMDD');
      return timeseriesFrequencyValues(apiToken, entityID, 'minimum', startDate, endDate, 'Hour', 'America/Recife');
    },
  },
};
