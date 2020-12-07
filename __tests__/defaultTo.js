/* __tests__/defaultTo.js */

import defaultTo from '../src/defaultTo.js';

describe('#defaultTo()', function() {
  test('should return the same value when it is not "empty"', function() {
    expect(defaultTo('lumiukko', 'default string')).toBe('lumiukko');
  });
  test('should return the defaultValue when value is Nan', function() {
    expect(defaultTo(NaN, 'default')).toBe('default');
  });
  test('should return the defaultValue when value is null', function() {
    expect(defaultTo(null, 'default')).toBe('default');
  });
  test('should return the defaultValue when value is undefined', function() {
    expect(defaultTo(undefined, 'default')).toBe('default');
  });
});