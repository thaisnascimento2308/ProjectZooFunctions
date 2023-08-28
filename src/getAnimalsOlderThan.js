const data = require('../data/zoo_data');

const { species } = data;

const getAnimalsOlderThan = (animal, age) => {
  const ageSpecie = species.find((specie) => specie.name.includes(animal));

  if (ageSpecie === age) return true;

  return ageSpecie.residents.every((resident) => resident.age >= age);
};

module.exports = getAnimalsOlderThan;
