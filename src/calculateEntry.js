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
  const { child: childPrice, adult: adultPrice, senior: seniorPrice } = data.prices;

  const childTotalPrice = totalEntrantsAge.child * childPrice;
  const adultTotalPrice = totalEntrantsAge.adult * adultPrice;
  const seniorTotalPrice = totalEntrantsAge.senior * seniorPrice;

  return +(childTotalPrice + adultTotalPrice + seniorTotalPrice).toFixed(2);
};

module.exports = { calculateEntry, countEntrants };
