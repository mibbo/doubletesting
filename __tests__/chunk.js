/* __tests__/chunk.js */

import chunk from '../src/chunk.js';

describe('#chunk()', function() {
  test('should return an array', function() {
    expect(Array.isArray(chunk([34, 'kissa', false, 'juupelis'], 2))).toBe(true);
  });

  test('should return an empty array when giving empty array as parameter', function() {
    expect(chunk([])).toStrictEqual([]);
  });

  test('should return two specific and same sized arrays in an array', function() {
    expect(chunk([12, 15, 'kissa', 'koira'])).toBe([[12, 15], ['kissa', 'koira']]);
  });

  test('should return two specific and different sized arrays in an array', function() {
    expect(chunk(['chunk', 'me', 'to', 'three', 'pieces'])).toBe([['chunk', 'me', 'to'], ['three', 'pieces']]);
  });
});