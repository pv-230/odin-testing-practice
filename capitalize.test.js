const capitalize = require('./capitalize');

test('Capitalize all lowercase', () => {
  expect(capitalize('lowercase')).toBe('Lowercase');
});

test('Capitalize all uppercase', () => {
  expect(capitalize('UPPERCASE')).toBe('UPPERCASE');
});

test('Give error with non-string', () => {
  expect(() => capitalize(1234)).toThrow();
});

test('Handle empty strings', () => {
  expect(capitalize('')).toBe('');
});

test('Capitalize one letter', () => {
  expect(capitalize('a')).toBe('A');
});
