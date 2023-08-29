const data = require('../data/zoo_data');

const getEmployeeByName = (employeeName) => {
  if (!employeeName) {
    return {};
  }

  const locateEmployee = data.employees.find((employee) => {
    const namesEmployee = [employee.firstName, employee.lastName];
    return namesEmployee.includes(employeeName);
  });
  return locateEmployee;
};

module.exports = getEmployeeByName;
