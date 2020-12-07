/* __tests__/clamp.js */

import clamp from '../src/clamp.js';

describe('#clamp()', function() {
  test('should return a number', function() {
    expect(typeof clamp(20, -10, 25)).toBe('number');
  });

  test('should return 0 when no boundaries are given', function() {
    expect(clamp(20, 0, 0)).toBe(0);
  });

  test('should return the same number as given when it was in bounds', function() {
    expect(clamp(30, 20, 45)).toBe(30);
  });

  test('should return the lower bound when given number is under bounds', function() {
    expect(clamp(10, 20, 45)).toBe(20);
  });

  test('should return the upper bound when given number is over bounds', function() {
    expect(clamp(56, 3, 33)).toBe(33);
  });
});