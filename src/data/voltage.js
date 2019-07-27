const moment = require('moment');
const timeseriesVoltageValues = require('./timeseriesValues/timeseriesVoltageValues');

module.exports = {
  max: {
    onDay: (apiToken, entityID, date) => {
      return timeseriesVoltageValues(apiToken, entityID, 'Voltage', 'maximum', date, date, 'Day', 'America/Recife');
    },
    onDayEveryMinute: (apiToken, entityID, startDate) => {
      const endDate = moment(startDate, 'YYYYMMDD').add(1, 'days').format('YYYYMMDD');
      return timeseriesVoltageValues(apiToken, entityID, 'Voltage', 'maximum', startDate, endDate, 'Min1', 'America/Recife');
    },
    onDayEveryFiveMinutes: (apiToken, entityID, startDate) => {
      const endDate = moment(startDate, 'YYYYMMDD').add(1, 'days').format('YYYYMMDD');
      return timeseriesVoltageValues(apiToken, entityID, 'Voltage', 'maximum', startDate, endDate, 'Min5', 'America/Recife');
    },
    onDayEveryFifteenMinutes: (apiToken, entityID, startDate) => {
      const endDate = moment(startDate, 'YYYYMMDD').add(1, 'days').format('YYYYMMDD');
      return timeseriesVoltageValues(apiToken, entityID, 'Voltage', 'maximum', startDate, endDate, 'Min15', 'America/Recife');
    },
    onDayHourly: (apiToken, entityID, startDate) => {
      const endDate = moment(startDate, 'YYYYMMDD').add(1, 'days').format('YYYYMMDD');
      return timeseriesVoltageValues(apiToken, entityID, 'Voltage', 'maximum', startDate, endDate, 'Hour', 'America/Recife');
    },
  },
  min: {
    onDay: (apiToken, entityID, date) => {
      return timeseriesVoltageValues(apiToken, entityID, 'Voltage', 'minimum', date, date, 'Day', 'America/Recife');
    },
    onDayEveryMinute: (apiToken, entityID, startDate) => {
      const endDate = moment(startDate, 'YYYYMMDD').add(1, 'days').format('YYYYMMDD');
      return timeseriesVoltageValues(apiToken, entityID, 'Voltage', 'minimum', startDate, endDate, 'Min1', 'America/Recife');
    },
    onDayEveryFiveMinutes: (apiToken, entityID, startDate) => {
      const endDate = moment(startDate, 'YYYYMMDD').add(1, 'days').format('YYYYMMDD');
      return timeseriesVoltageValues(apiToken, entityID, 'Voltage', 'minimum', startDate, endDate, 'Min5', 'America/Recife');
    },
    onDayEveryFifteenMinutes: (apiToken, entityID, startDate) => {
      const endDate = moment(startDate, 'YYYYMMDD').add(1, 'days').format('YYYYMMDD');
      return timeseriesVoltageValues(apiToken, entityID, 'Voltage', 'minimum', startDate, endDate, 'Min15', 'America/Recife');
    },
    onDayHourly: (apiToken, entityID, startDate) => {
      const endDate = moment(startDate, 'YYYYMMDD').add(1, 'days').format('YYYYMMDD');
      return timeseriesVoltageValues(apiToken, entityID, 'Voltage', 'minimum', startDate, endDate, 'Hour', 'America/Recife');
    },
  },
  dc: {
    max: {
      onDay: (apiToken, entityID, date) => {
        return timeseriesVoltageValues(apiToken, entityID, 'DCVoltage', 'maximum', date, date, 'Day', 'America/Recife');
      },
      onDayEveryMinute: (apiToken, entityID, startDate) => {
        const endDate = moment(startDate, 'YYYYMMDD').add(1, 'days').format('YYYYMMDD');
        return timeseriesVoltageValues(apiToken, entityID, 'DCVoltage', 'maximum', startDate, endDate, 'Min1', 'America/Recife');
      },
      onDayEveryFiveMinutes: (apiToken, entityID, startDate) => {
        const endDate = moment(startDate, 'YYYYMMDD').add(1, 'days').format('YYYYMMDD');
        return timeseriesVoltageValues(apiToken, entityID, 'DCVoltage', 'maximum', startDate, endDate, 'Min5', 'America/Recife');
      },
      onDayEveryFifteenMinutes: (apiToken, entityID, startDate) => {
        const endDate = moment(startDate, 'YYYYMMDD').add(1, 'days').format('YYYYMMDD');
        return timeseriesVoltageValues(apiToken, entityID, 'DCVoltage', 'maximum', startDate, endDate, 'Min15', 'America/Recife');
      },
      onDayHourly: (apiToken, entityID, startDate) => {
        const endDate = moment(startDate, 'YYYYMMDD').add(1, 'days').format('YYYYMMDD');
        return timeseriesVoltageValues(apiToken, entityID, 'DCVoltage', 'maximum', startDate, endDate, 'Hour', 'America/Recife');
      },
    },
    min: {
      onDay: (apiToken, entityID, date) => {
        return timeseriesVoltageValues(apiToken, entityID, 'DCVoltage', 'minimum', date, date, 'Day', 'America/Recife');
      },
      onDayEveryMinute: (apiToken, entityID, startDate) => {
        const endDate = moment(startDate, 'YYYYMMDD').add(1, 'days').format('YYYYMMDD');
        return timeseriesVoltageValues(apiToken, entityID, 'DCVoltage', 'minimum', startDate, endDate, 'Min1', 'America/Recife');
      },
      onDayEveryFiveMinutes: (apiToken, entityID, startDate) => {
        const endDate = moment(startDate, 'YYYYMMDD').add(1, 'days').format('YYYYMMDD');
        return timeseriesVoltageValues(apiToken, entityID, 'DCVoltage', 'minimum', startDate, endDate, 'Min5', 'America/Recife');
      },
      onDayEveryFifteenMinutes: (apiToken, entityID, startDate) => {
        const endDate = moment(startDate, 'YYYYMMDD').add(1, 'days').format('YYYYMMDD');
        return timeseriesVoltageValues(apiToken, entityID, 'DCVoltage', 'minimum', startDate, endDate, 'Min15', 'America/Recife');
      },
      onDayHourly: (apiToken, entityID, startDate) => {
        const endDate = moment(startDate, 'YYYYMMDD').add(1, 'days').format('YYYYMMDD');
        return timeseriesVoltageValues(apiToken, entityID, 'DCVoltage', 'minimum', startDate, endDate, 'Hour', 'America/Recife');
      },
    },
  },
};
