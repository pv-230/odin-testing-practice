const reverseString = require('./reverseString');

test('Reverse empty string', () => {
  expect(reverseString('')).toBe('');
});

test('Reverse string of length one', () => {
  expect(reverseString('a')).toBe('a');
});

test('Reverse string with odd length', () => {
  expect(reverseString('Racecar')).toBe('racecaR');
});

test('Reverse string with even length', () => {
  expect(reverseString('Watermelon')).toBe('nolemretaW');
});

test('Throw error with non-string', () => {
  expect(() => reverseString(1234)).toThrow();
});
