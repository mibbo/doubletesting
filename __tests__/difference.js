/* __tests__/difference.js */

import difference from '../src/difference.js';

describe('#difference()', function() {
  test('should return an array', function() {
    expect(Array.isArray(difference([34, 'kissa'], [ 34, 'juupelis']))).toBe(true);
  });

  test('should return an empty array when the first given array is empty', function() {
    expect(difference([], [true, false])).toEqual([]);
  });

  test('should return an empty array when given non array values as parameters', function() {
    expect(difference("totally not an array", "either this")).toEqual([]);
  });

  test('should return all the items from the first array when they are not present in the second array', function() {
    expect(difference([234, 'kissa'], [ true, 'juupelis'], 2)).toEqual([234, 'kissa']);
  });

  test('should return specific items from the first array that are not present in the second array', function() {
    expect(difference(['kala', true, 37, 'kissa'], ['kala', 37])).toEqual([true, 'kissa']);
  });
});