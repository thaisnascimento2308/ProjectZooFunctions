const getOpeningHours = require('../src/getOpeningHours');

const daysOfTheWeek = {
  Tuesday: { open: 8, close: 6 },
  Wednesday: { open: 8, close: 6 },
  Thursday: { open: 10, close: 8 },
  Friday: { open: 10, close: 8 },
  Saturday: { open: 8, close: 10 },
  Sunday: { open: 8, close: 8 },
  Monday: { open: 0, close: 0 },
};

describe('Testes da função getOpeningHours', () => {
  it('Teste não passando argumentos. Deverá retornar o objeto com dias e horarios da semana', () => {
    expect(getOpeningHours()).toEqual(daysOfTheWeek);
  });

  it('Para os argumentos "Monday" e 09:00-AM, deve retornar "The zoo is closed"', () => {
    const result = getOpeningHours('Monday', '09:00-AM');
    expect(result).toBe('The zoo is closed');
  });

  it('Para os argumentos "Tuesday" e 09:00-AM deve retornar a string "The zoo is open"', () => {
    const result = getOpeningHours('Tuesday', '09:00-AM');
    expect(result).toBe('The zoo is open');
  });

  it('Para os argumentos "Wednesday" e 09:00-PM deve retornar a string "The zoo is closed"', () => {
    const result = getOpeningHours('Wednesday', '09:00-PM');
    expect(result).toBe('The zoo is closed');
  });
});
