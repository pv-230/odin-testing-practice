const caesarCipher = require('./caesarCipher');

test('Rotate lowercase word', () => {
  expect(caesarCipher('abc')).toBe('bcd');
});

test('Rotate uppercase word', () => {
  expect(caesarCipher('ABC')).toBe('BCD');
});

test('Rotate mixed case word', () => {
  expect(caesarCipher('aBc')).toBe('bCd');
});

test('Rotate word with punctuation', () => {
  expect(caesarCipher("Can't")).toBe("Dbo'u");
});

test('Rotate word with wrapped characters', () => {
  expect(caesarCipher('xyz')).toBe('yza');
});
