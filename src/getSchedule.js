const data = require('../data/zoo_data');

const getSpeciesDay = (dia) => data.species.reduce((arrey, specie) => {
  const arreyNew = [...arrey];
  if (specie.availability.includes(dia)) {
    arreyNew.push(specie.name);
  }
  return arreyNew;
}, []);
const availableDay = (dia) => {
  if (dia === 'Monday') {
    return {
      officeHour: 'CLOSED',
      exhibition: 'The zoo will be closed!',
    };
  }
  const objec = data.hours[dia];
  return {
    officeHour: `Open from ${objec.open}am until ${objec.close}pm`,
    exhibition: getSpeciesDay(dia),
  };
};
const workHours = (dia) => {
  let hours = {};
  if (Object.keys(data.hours).includes(dia)) {
    hours[dia] = availableDay(dia);
  } else {
    hours = Object.keys(data.hours).reduce((objec, weekday) => {
      const newObject = objec;
      newObject[weekday] = availableDay(weekday);
      return newObject;
    }, {});
  }
  return hours;
};
const getSchedule = (scheduleTarget) => {
  const animal = data.species.find((specie) => specie.name === scheduleTarget);
  if (animal !== undefined) {
    return animal.availability;
  }
  if (scheduleTarget === 'Monday') {
    return { Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' } };
  }
  return workHours(scheduleTarget);
};

module.exports = getSchedule;
