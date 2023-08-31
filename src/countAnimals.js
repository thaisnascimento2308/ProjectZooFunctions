const data = require('../data/zoo_data');

const animalsInGeral = data.species.reduce((acc, specie) => {
  acc[specie.name] = specie.residents.length;
  return acc;
}, {});

const lookForAnimals = (animal) => data.species.find(({ name }) => animal.species === name);

const lookForAnimalsBySex = (animal) => data.species
  .find((specie) => animal.species === specie.name).residents
  .filter((resident) => animal.sex === resident.sex).length;

const countAnimals = (obj = {}) => {
  if (obj.sex && obj.species) {
    return lookForAnimalsBySex(obj);
  }
  if (obj.species) {
    return lookForAnimals(obj).residents.length;
  }
  return animalsInGeral;
};

module.exports = countAnimals;
