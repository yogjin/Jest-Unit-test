const Calculator = require('../Calculator');

describe('Calculator', () => {
  let calculator;
  beforeEach(() => {
    calculator = new Calculator();
  });
  // init
  it('init with 0', () => {
    expect(calculator.value).toBe(0);
  });

  // set
  it('set', () => {
    calculator.set(1);
    expect(calculator.value).toBe(1);
  });

  // clear
  it('clear', () => {
    calculator.set(1);
    calculator.clear();
    expect(calculator.value).toBe(0);
  });

  // add(num)
  it('add', () => {
    calculator.set(1);
    calculator.add(1);
    expect(calculator.value).toBe(2);
  });

  // substract(num)
  it('substract', () => {
    calculator.set(2);
    calculator.subtract(1);
    expect(calculator.value).toBe(1);
  });

  // multiply(num)
  it('multiply', () => {
    calculator.set(2);
    calculator.multiply(2);
    expect(calculator.value).toBe(4);
  });

  // divide(num)
  describe('divide', () => {
    it('0 / 0 === NaN', () => {
      calculator.divide(0);
      expect(calculator.value).toBe(NaN);
    });
    it('1 / 0 === Infinity', () => {
      calculator.set(1);
      calculator.divide(0);
      expect(calculator.value).toBe(Infinity);
    });
    it('4 / 4 === 1', () => {
      calculator.set(4);
      calculator.divide(4);
      expect(calculator.value).toBe(1);
    });
  });
});
