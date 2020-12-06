/* __tests__/add.js */

import add from '../src/add.js';

describe('#add()', function() {
  test('should return number', function() {
    expect(typeof add(10, 3)).toBe('number');
  });

  test('should return 12 with two parameters, 4 and 8', function() {
    expect(add(4, 8)).toBe(12);
  });

  test('should return 10 with only one parameter 10', function() {
    expect(add(10)).toBe(10);
  });

  test('should return -7 with negative parameters -3 and -4', function() {
    expect(add(-3, -4)).toBe(-7);
  });

  test('should return -34 with negative and positive parameters -40 and 6', function() {
    expect(add(-40, 6)).toBe(-34);
  });
});