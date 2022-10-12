const Calculator = require('./calculator');

test('Add two positive numbers', () => {
  expect(Calculator.add(1, 2)).toBe(3);
});

test('Add one positive number and one negative', () => {
  expect(Calculator.add(-1, 2)).toBe(1);
});

test('Add two negative numbers', () => {
  expect(Calculator.add(-1, -2)).toBe(-3);
});

test('Subtract two positive numbers', () => {
  expect(Calculator.subtract(1, 2)).toBe(-1);
});

test('Subtract one positive number and one negative', () => {
  expect(Calculator.subtract(-1, 2)).toBe(-3);
});

test('Subtract two negative numbers', () => {
  expect(Calculator.subtract(-1, -2)).toBe(1);
});

test('Divide two positive numbers', () => {
  expect(Calculator.divide(1, 2)).toBeCloseTo(0.5);
});

test('Divide one positive number and one negative', () => {
  expect(Calculator.divide(-1, 2)).toBeCloseTo(-0.5);
});

test('Divide two negative numbers', () => {
  expect(Calculator.divide(-1, -2)).toBeCloseTo(0.5);
});

test('Divide by zero', () => {
  expect(() => Calculator.divide(1, 0)).toThrow();
});

test('Multiply two positive numbers', () => {
  expect(Calculator.multiply(1, 2)).toBe(2);
});

test('Multiply one positive number and one negative', () => {
  expect(Calculator.multiply(-1, 2)).toBe(-2);
});

test('Multiply two negative numbers', () => {
  expect(Calculator.multiply(-1, -2)).toBe(2);
});

test('Multiply by zero', () => {
  expect(Calculator.multiply(1, 0)).toBe(0);
});
