const data = require('../data/zoo_data');

const { employees, species } = data;

const employeesData = (employee) => {
  const employeeInf = {
    id: employee.id,
    fullName: `${employee.firstName} ${employee.lastName}`,
    species: employee.responsibleFor.map((specieId) => {
      const specie = species.find((speciess) => speciess.id === specieId);
      return specie.name;
    }),
    locations: employee.responsibleFor.map((specieId) => {
      const specie = species.find((speciess) => speciess.id === specieId);
      return specie.location;
    }),
  };

  return employeeInf;
};
const getEmployeesCoverage = (object) => {
  if (!object) {
    return employees.map((info) => employeesData(info));
  }
  const worker = employees.find((info) => [info.firstName, info.lastName]
    .includes(object.name) || [info.id]
    .includes(object.id));
  if (worker) {
    return employeesData(worker);
  }
  throw new Error('Informações inválidas');
};

module.exports = getEmployeesCoverage;
