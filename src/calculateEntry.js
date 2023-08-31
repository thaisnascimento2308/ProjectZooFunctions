const data = require('../data/zoo_data');

const countEntrants = (entrants) => {
  const entrantsAge = { child: 0, adult: 0, senior: 0,
  };

  entrants.forEach((entrant) => {
    if (entrant.age < 18) {
      entrantsAge.child += 1;
    } else if (entrant.age >= 18 && entrant.age < 50) {
      entrantsAge.adult += 1;
    } else {
      entrantsAge.senior += 1;
    }
  });
  return entrantsAge;
};

const calculateEntry = (entrants) => {
  if (!entrants || entrants.length === 0) {
    return 0;
  }
  const totalEntrantsAge = countEntrants(entrants);
  const { child: childP, adult: adultP, senior: seniorP } = data.prices;

  const childPrice = totalEntrantsAge.child * childP;
  const adultPrice = totalEntrantsAge.adult * adultP;
  const seniorPrice = totalEntrantsAge.senior * seniorP;

  return +(childPrice + adultPrice + seniorPrice);
};

module.exports = { calculateEntry, countEntrants };
