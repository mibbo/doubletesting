/* __tests__/divide.js */

import divide from '../src/divide.js';

describe('#divide()', function() {
  test('should return a number', function() {
    expect(typeof divide(4, 2)).toBe('number');
  });

  test('should return a positive and even number', function() {
    expect(divide(4, 2)).toBe(2);
  });

  test('should return a positive and not even number', function() {
    expect(divide(13, 2)).toBe(6.5);
  });

  test('should return a negative and even number', function() {
    expect(divide(-80, 4)).toBe(-20);
  });

  test('should return a negative and not even number', function() {
    expect(divide(-30, 4)).toBe(-7.5);
  });
});