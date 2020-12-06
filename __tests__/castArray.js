/* __tests__/castArray.js */

import castArray from '../src/castArray.js';

describe('#castArray()', function() {
  test('should return array when an array is given as a parameter', function() {
    expect(typeof castArray(['kissa', -23, 3])).toBe('array');
  });

  test('should return the same array when the array is given as a parameter', function() {
    expect(castArray([1, 2, 3])).toEqual([1, 2, 3]);
  });

  test('should return specific array from string parameter', function() {
    expect(castArray('koira')).toEqual(['koira']);
  });

  test('should return specific array from integer parameter', function() {
    expect(castArray(2)).toEqual([2]);
  });

  test('should return specific array from boolean parameter', function() {
    expect(castArray(true)).toEqual([true]);
  });

  test('should return specific array from object parameter', function() {
    expect(castArray({'age': 15})).toEqual([{'age': 15}]);
  });

  test('should return empty array when called without parameters', function() {
    expect(castArray()).toEqual([]);
  });
});
