const capitalize = (str) => {
  if (typeof str !== 'string') throw new Error('Argument must be a string.');
  return str.slice(0, 1).toUpperCase().concat(str.slice(1));
};

module.exports = capitalize;
