/* __tests__/defaultToAny.js */

import defaultToAny from '../src/defaultToAny.js';

describe('#defaultToAny()', function() {
  test('should return the same value when it is not "empty"', function() {
    expect(defaultToAny('lumiukko', undefined, 'juu')).toBe('lumiukko');
  });
  test('should return the first allowed defaultValue when value is Nan', function() {
    expect(defaultToAny(NaN, undefined, 'default')).toBe('default');
  });
  test('should return the first allowed defaultValue when value is null', function() {
    expect(defaultToAny(null, NaN, 'default')).toBe('default');
  });
  test('should return the first allowed defaultValue when value is undefined', function() {
    expect(defaultToAny(undefined, null, 'default')).toBe('default');
  });
});