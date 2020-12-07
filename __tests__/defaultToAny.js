/* __tests__/defaultTo.js */

import defaultTo from '../src/defaultTo.js';

describe('#defaultTo()', function() {
  test('should return the same value when it is not "empty"', function() {
    expect(defaultTo('lumiukko', undefined, 'juu')).toBe('lumiukko');
  });
  test('should return the first allowed defaultValue when value is Nan', function() {
    expect(defaultTo(NaN, undefined, 'default')).toBe('default');
  });
  test('should return the first allowed defaultValue when value is null', function() {
    expect(defaultTo(null, NaN, 'default')).toBe('default');
  });
  test('should return the first allowed defaultValue when value is undefined', function() {
    expect(defaultTo(undefined, null, 'default')).toBe('default');
  });
});