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
  it('Para os argumentos "Thu" e "09:00-AM" deve lançar uma exceção com a mensagem: "The day must be valid. Example: Monday"', () => {
    const result = getOpeningHours('Thu', '09:00-AM');
    expect(result).toThrow('The day must be valid. Example: Monday');
  });
  it('Para os argumentos "Friday" e "09:00-ZM" deve lançar uma exceção com a mensagem: "The abbreviation must be \'AM\' or \'PM\'"', () => {
    const result = getOpeningHours('Friday', '09:00-ZM');
    expect(result).toThrow('The abbreviation must be \'AM\' or \'PM\'');
  });
  it('Para os argumentos "Saturday" e "C9:00-AM" deve lançar uma exceção com a mensagem: "The hour should represent a number"', () => {
    const result = getOpeningHours('Saturday', 'C9:00-AM');
    expect(result).toThrow('The hour should represent a number');
  });
  it('Para os argumentos "Sunday" e "09:c0-AM" deve lançar uma exceção com a mensagem: "The minutes should represent a number"', () => {
    const result = getOpeningHours('Sunday', '09:c0-AM');
    expect(result).toThrow('The minutes should represent a number');
  });
  it('Para os argumentos "Monday" e "13:00-AM" deve lançar uma exceção com a mensagem: "The hour must be between 0 and 12"', () => {
    const result = getOpeningHours('Monday', '13:00-AM');
    expect(result).toThrow('The hour must be between 0 and 12');
  });
  it('Para os argumentos "Tuesday" e "09:60-AM" deve lançar uma exceção com a mensagem: "The minutes must be between 0 and 59"', () => {
    const result = getOpeningHours('Tuesday', '09:60-AM');
    expect(result).toThrow('The minutes must be between 0 and 59');
  });
});

h: (hour === 12) ? 0 : hour,
o: (open === 12) ? 0 : open,
c: (close === 12) ? 0 : close,