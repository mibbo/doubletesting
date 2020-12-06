/* __tests__/ceil.js */

import ceil from '../src/ceil.js';

describe('#ceil()', function() {
  test('should return a number', function() {
    expect(typeof ceil(3.1)).toBe('number');
  });

  test('should return 6 from a parameter 5.2', function() {
    expect(ceil(5.1)).toBe(6);
  });

  test('should return 14.04 with parameters 14.0324 and 2 as ceiling precision', function() {
    expect(ceil(14.0324, 2)).toBe(14.04);
  });

  test('should return 160 000 with parameters 159 432.55 and -3 as ceiling precision', function() {
    expect(ceil(159432.55, -3)).toBe(160000);
  });
});