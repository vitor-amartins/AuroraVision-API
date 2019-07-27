const moment = require('moment');
const timeseriesTemperatureValues = require('./timeseriesValues/timeseriesTemperatureValues');

module.exports = {
  ambient: {
    max: {
      onDay: (apiToken, entityID, date) => {
        return timeseriesTemperatureValues(apiToken, entityID, 'AmbientTemp', 'maximum', date, date, 'Day', 'America/Recife');
      },
      onDayEveryMinute: (apiToken, entityID, startDate) => {
        const endDate = moment(startDate, 'YYYYMMDD').add(1, 'days').format('YYYYMMDD');
        return timeseriesTemperatureValues(apiToken, entityID, 'AmbientTemp', 'maximum', startDate, endDate, 'Min1', 'America/Recife');
      },
      onDayEveryFiveMinutes: (apiToken, entityID, startDate) => {
        const endDate = moment(startDate, 'YYYYMMDD').add(1, 'days').format('YYYYMMDD');
        return timeseriesTemperatureValues(apiToken, entityID, 'AmbientTemp', 'maximum', startDate, endDate, 'Min5', 'America/Recife');
      },
      onDayEveryFifteenMinutes: (apiToken, entityID, startDate) => {
        const endDate = moment(startDate, 'YYYYMMDD').add(1, 'days').format('YYYYMMDD');
        return timeseriesTemperatureValues(apiToken, entityID, 'AmbientTemp', 'maximum', startDate, endDate, 'Min15', 'America/Recife');
      },
      onDayHourly: (apiToken, entityID, startDate) => {
        const endDate = moment(startDate, 'YYYYMMDD').add(1, 'days').format('YYYYMMDD');
        return timeseriesTemperatureValues(apiToken, entityID, 'AmbientTemp', 'maximum', startDate, endDate, 'Hour', 'America/Recife');
      },
    },
    avg: {
      onDay: (apiToken, entityID, date) => {
        return timeseriesTemperatureValues(apiToken, entityID, 'AmbientTemp', 'average', date, date, 'Day', 'America/Recife');
      },
      onDayEveryMinute: (apiToken, entityID, startDate) => {
        const endDate = moment(startDate, 'YYYYMMDD').add(1, 'days').format('YYYYMMDD');
        return timeseriesTemperatureValues(apiToken, entityID, 'AmbientTemp', 'average', startDate, endDate, 'Min1', 'America/Recife');
      },
      onDayEveryFiveMinutes: (apiToken, entityID, startDate) => {
        const endDate = moment(startDate, 'YYYYMMDD').add(1, 'days').format('YYYYMMDD');
        return timeseriesTemperatureValues(apiToken, entityID, 'AmbientTemp', 'average', startDate, endDate, 'Min5', 'America/Recife');
      },
      onDayEveryFifteenMinutes: (apiToken, entityID, startDate) => {
        const endDate = moment(startDate, 'YYYYMMDD').add(1, 'days').format('YYYYMMDD');
        return timeseriesTemperatureValues(apiToken, entityID, 'AmbientTemp', 'average', startDate, endDate, 'Min15', 'America/Recife');
      },
      onDayHourly: (apiToken, entityID, startDate) => {
        const endDate = moment(startDate, 'YYYYMMDD').add(1, 'days').format('YYYYMMDD');
        return timeseriesTemperatureValues(apiToken, entityID, 'AmbientTemp', 'average', startDate, endDate, 'Hour', 'America/Recife');
      },
    },
    min: {
      onDay: (apiToken, entityID, date) => {
        return timeseriesTemperatureValues(apiToken, entityID, 'AmbientTemp', 'minimum', date, date, 'Day', 'America/Recife');
      },
      onDayEveryMinute: (apiToken, entityID, startDate) => {
        const endDate = moment(startDate, 'YYYYMMDD').add(1, 'days').format('YYYYMMDD');
        return timeseriesTemperatureValues(apiToken, entityID, 'AmbientTemp', 'minimum', startDate, endDate, 'Min1', 'America/Recife');
      },
      onDayEveryFiveMinutes: (apiToken, entityID, startDate) => {
        const endDate = moment(startDate, 'YYYYMMDD').add(1, 'days').format('YYYYMMDD');
        return timeseriesTemperatureValues(apiToken, entityID, 'AmbientTemp', 'minimum', startDate, endDate, 'Min5', 'America/Recife');
      },
      onDayEveryFifteenMinutes: (apiToken, entityID, startDate) => {
        const endDate = moment(startDate, 'YYYYMMDD').add(1, 'days').format('YYYYMMDD');
        return timeseriesTemperatureValues(apiToken, entityID, 'AmbientTemp', 'minimum', startDate, endDate, 'Min15', 'America/Recife');
      },
      onDayHourly: (apiToken, entityID, startDate) => {
        const endDate = moment(startDate, 'YYYYMMDD').add(1, 'days').format('YYYYMMDD');
        return timeseriesTemperatureValues(apiToken, entityID, 'AmbientTemp', 'minimum', startDate, endDate, 'Hour', 'America/Recife');
      },
    },
  },
  cell: {
    max: {
      onDay: (apiToken, entityID, date) => {
        return timeseriesTemperatureValues(apiToken, entityID, 'CellTemp', 'maximum', date, date, 'Day', 'America/Recife');
      },
      onDayEveryMinute: (apiToken, entityID, startDate) => {
        const endDate = moment(startDate, 'YYYYMMDD').add(1, 'days').format('YYYYMMDD');
        return timeseriesTemperatureValues(apiToken, entityID, 'CellTemp', 'maximum', startDate, endDate, 'Min1', 'America/Recife');
      },
      onDayEveryFiveMinutes: (apiToken, entityID, startDate) => {
        const endDate = moment(startDate, 'YYYYMMDD').add(1, 'days').format('YYYYMMDD');
        return timeseriesTemperatureValues(apiToken, entityID, 'CellTemp', 'maximum', startDate, endDate, 'Min5', 'America/Recife');
      },
      onDayEveryFifteenMinutes: (apiToken, entityID, startDate) => {
        const endDate = moment(startDate, 'YYYYMMDD').add(1, 'days').format('YYYYMMDD');
        return timeseriesTemperatureValues(apiToken, entityID, 'CellTemp', 'maximum', startDate, endDate, 'Min15', 'America/Recife');
      },
      onDayHourly: (apiToken, entityID, startDate) => {
        const endDate = moment(startDate, 'YYYYMMDD').add(1, 'days').format('YYYYMMDD');
        return timeseriesTemperatureValues(apiToken, entityID, 'CellTemp', 'maximum', startDate, endDate, 'Hour', 'America/Recife');
      },
    },
    avg: {
      onDay: (apiToken, entityID, date) => {
        return timeseriesTemperatureValues(apiToken, entityID, 'CellTemp', 'average', date, date, 'Day', 'America/Recife');
      },
      onDayEveryMinute: (apiToken, entityID, startDate) => {
        const endDate = moment(startDate, 'YYYYMMDD').add(1, 'days').format('YYYYMMDD');
        return timeseriesTemperatureValues(apiToken, entityID, 'CellTemp', 'average', startDate, endDate, 'Min1', 'America/Recife');
      },
      onDayEveryFiveMinutes: (apiToken, entityID, startDate) => {
        const endDate = moment(startDate, 'YYYYMMDD').add(1, 'days').format('YYYYMMDD');
        return timeseriesTemperatureValues(apiToken, entityID, 'CellTemp', 'average', startDate, endDate, 'Min5', 'America/Recife');
      },
      onDayEveryFifteenMinutes: (apiToken, entityID, startDate) => {
        const endDate = moment(startDate, 'YYYYMMDD').add(1, 'days').format('YYYYMMDD');
        return timeseriesTemperatureValues(apiToken, entityID, 'CellTemp', 'average', startDate, endDate, 'Min15', 'America/Recife');
      },
      onDayHourly: (apiToken, entityID, startDate) => {
        const endDate = moment(startDate, 'YYYYMMDD').add(1, 'days').format('YYYYMMDD');
        return timeseriesTemperatureValues(apiToken, entityID, 'CellTemp', 'average', startDate, endDate, 'Hour', 'America/Recife');
      },
    },
    min: {
      onDay: (apiToken, entityID, date) => {
        return timeseriesTemperatureValues(apiToken, entityID, 'CellTemp', 'minimum', date, date, 'Day', 'America/Recife');
      },
      onDayEveryMinute: (apiToken, entityID, startDate) => {
        const endDate = moment(startDate, 'YYYYMMDD').add(1, 'days').format('YYYYMMDD');
        return timeseriesTemperatureValues(apiToken, entityID, 'CellTemp', 'minimum', startDate, endDate, 'Min1', 'America/Recife');
      },
      onDayEveryFiveMinutes: (apiToken, entityID, startDate) => {
        const endDate = moment(startDate, 'YYYYMMDD').add(1, 'days').format('YYYYMMDD');
        return timeseriesTemperatureValues(apiToken, entityID, 'CellTemp', 'minimum', startDate, endDate, 'Min5', 'America/Recife');
      },
      onDayEveryFifteenMinutes: (apiToken, entityID, startDate) => {
        const endDate = moment(startDate, 'YYYYMMDD').add(1, 'days').format('YYYYMMDD');
        return timeseriesTemperatureValues(apiToken, entityID, 'CellTemp', 'minimum', startDate, endDate, 'Min15', 'America/Recife');
      },
      onDayHourly: (apiToken, entityID, startDate) => {
        const endDate = moment(startDate, 'YYYYMMDD').add(1, 'days').format('YYYYMMDD');
        return timeseriesTemperatureValues(apiToken, entityID, 'CellTemp', 'minimum', startDate, endDate, 'Hour', 'America/Recife');
      },
    },
  },
};
