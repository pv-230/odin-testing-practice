const reverseString = (str) => {
  if (typeof str !== 'string') throw new Error('Argument must be as string.');

  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str.charAt(i);
  }

  return reversed;
};

module.exports = reverseString;
