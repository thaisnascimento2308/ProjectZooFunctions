const data = require('../data/zoo_data');

const nameLocation = ['NE', 'NW', 'SE', 'SW'];

const animalLocation = () => {
  const locations = {};

  for (const specie of data.species) {
    const { location, name } = specie;
    if (!locations[location]) {
      locations[location] = [];
    }
    locations[location].push(name);
  }

  return locations;
};

const byNames = (especie, options) => {
  let filteredResidents = especie.residents.map((resident) => resident.name);

  if (options.sex) {
    filteredResidents = especie.residents
      .filter(({ sex }) => sex === options.sex)
      .map((resident) => resident.name);
  }

  if (options.sorted) {
    filteredResidents.sort();
  }

  return filteredResidents;
};

const animalsName = (options) => {
  const array = {};
  nameLocation.forEach((local) => {
    const aimals = data.species
      .filter((specie) => specie.location
        .includes(local));
    array[local] = [];
    aimals.forEach((animal) => {
      const filterAnimals = byNames(animal, options);
      array[local]
        .push({ [animal.name]: filterAnimals });
    });
  });
  return array;
};

const getAnimalMap = (options) => {
  if (!options || !options.includeNames) {
    return animalLocation();
  }
  return animalsName(options);
};

module.exports = getAnimalMap;
