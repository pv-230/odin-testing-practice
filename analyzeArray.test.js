describe('Analyze Array', () => {
  const analyzeArray = require('./analyzeArray');
  const arr1 = [1, 8, 3, 4, 2, 6];
  const arr2 = [1];
  const arr3 = [];
  const arr4 = [-1, 2, 4, 5, -8];
  const arr5 = [5.5, 3.4, -1.5, 2];

  test('Array with multiple positive integers', () => {
    expect(analyzeArray(arr1)).toHaveProperty('average', 4);
    expect(analyzeArray(arr1)).toHaveProperty('min', 1);
    expect(analyzeArray(arr1)).toHaveProperty('max', 8);
    expect(analyzeArray(arr1)).toHaveProperty('length', 6);
  });

  test('Array with a single positive integer', () => {
    expect(analyzeArray(arr2)).toHaveProperty('average', 1);
    expect(analyzeArray(arr2)).toHaveProperty('min', 1);
    expect(analyzeArray(arr2)).toHaveProperty('max', 1);
    expect(analyzeArray(arr2)).toHaveProperty('length', 1);
  });

  test('Array with negative integers', () => {
    expect(analyzeArray(arr4)).toHaveProperty('average', 0.4);
    expect(analyzeArray(arr4)).toHaveProperty('min', -8);
    expect(analyzeArray(arr4)).toHaveProperty('max', 5);
    expect(analyzeArray(arr4)).toHaveProperty('length', 5);
  });

  test('Array with positive and negative floats', () => {
    expect(analyzeArray(arr5)).toHaveProperty('average', 2.35);
    expect(analyzeArray(arr5)).toHaveProperty('min', -1.5);
    expect(analyzeArray(arr5)).toHaveProperty('max', 5.5);
    expect(analyzeArray(arr5)).toHaveProperty('length', 4);
  });

  test('Empty array', () => {
    expect(() => analyzeArray(arr3)).toThrow();
  });

  test('Non-array (string)', () => {
    expect(() => analyzeArray('string')).toThrow();
  });
  test('Non-array (undefined)', () => {
    expect(() => analyzeArray()).toThrow();
  });
});
