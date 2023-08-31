const data = require('../data/zoo_data');

const { employees } = data;
const { species } = data;

const getOldestFromFirstSpecies = (id) => {
  if (!id) {
    return [];
  }

  const foundEmployee = employees.find((employee) => employee.id === id);
  const foundAnimal = foundEmployee.responsibleFor[0];
  const gAnimals = species.find((animal) => animal.id === foundAnimal);
  const animalOlder = gAnimals.residents
    .reduce((older, current) => (current.age > older.age ? current : older), gAnimals.residents[0]);

  return Object.values(animalOlder);
};

module.exports = getOldestFromFirstSpecies;
