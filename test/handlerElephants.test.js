const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Retorna a quantidade de elefantes ao passar count', () => {
    const result = handlerElephants('count');
    expect(result).toBe(4);
  });
  it('Retorna um array com a relação dos nomes de todos os elefantes incluindo "Jefferson"', () => {
    const result = handlerElephants('names');
    expect(result).toContain('Jefferson');
  });
  it('Retorna a média de idade dos elefantes ao passar averageAge', () => {
    const result = handlerElephants('averageAge');
    expect(result).toBeCloseTo(10.5, 1);
  });
  it('Retorna a localização dos elefantes dentro do Zoológico averageAge ao passar location', () => {
    const result = handlerElephants('location');
    expect(result).toBe('NW');
  });
  it('Caso não passe parâmetro, retordo deve ser undefined', () => {
    const result = handlerElephants(undefined);
    expect(result).toBeUndefined();
  });
  it('Retorna a popularidade dos elefantes ao passar popularity', () => {
    const result = handlerElephants('popularity');
    expect(result).toBeGreaterThanOrEqual(5);
  });
  it('Retorna um array com a relação de dias em que é possível visitar os elefantes availability', () => {
    const result = handlerElephants('availability');
    expect(result).toContain('Saturday');
  });
  it('Retorna null quando não tiver parâmetro', () => {
    const result = handlerElephants('parametro');
    expect(result).toBe(null);
  });
  it('Retorna null quando não tiver case', () => {
    const result = handlerElephants('case');
    expect(result).toBe(null);
  });
  it('Retornar um array com 4 itens ao receber o parârametro "names"', () => {
    const result = handlerElephants('case');
    expect(handlerElephants(result)).toHaveLength(4);
  });
});
