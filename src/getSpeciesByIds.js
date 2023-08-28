const data = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => {
  if (ids.length === 0) {
    return [];
  }

  const speciesId = data.species.filter((specie) => ids.includes(specie.id));
  return speciesId;
};

module.exports = getSpeciesByIds;
