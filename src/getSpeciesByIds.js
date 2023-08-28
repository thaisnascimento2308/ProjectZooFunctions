const data = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => {
  if (ids.length === 0) {
    return [];
  }

  const speciesId = data.species.filter((specie) => ids.includes(specie.id));
  return speciesId;
};

//console.log(getSpeciesByIds('ef3778eb-2844-4c7c-b66c-f432073e1c6b', '01422318-ca2d-46b8-b66c-3e9e188244ed'));

module.exports = getSpeciesByIds;
