const analyzeArray = (arr) => {
  if (!arr.length) throw new Error('Expected array of numbers');

  // Average
  const sum = arr.reduce((prev, curr) => prev + curr, 0);
  const average = sum / arr.length;

  // Min
  const min = arr.reduce((prev, curr) => {
    if (!prev) return curr;
    if (curr > prev) return prev;
    return curr;
  });

  // Max
  const max = arr.reduce((prev, curr) => {
    if (!prev) return curr;
    if (curr > prev) return curr;
    return prev;
  });

  return {
    average,
    min,
    max,
    length: arr.length,
  };
};

module.exports = analyzeArray;
