/* __tests__/slice.js */

import slice from '../src/slice.js';

var array = [1, 2, 3, 4]

describe('#slice()', function () {
   test('should return an Array', function () {
      expect(Array.isArray(slice(array, 2))).toBe(true);
   });

   test('should return an empty array', function () {
      expect(slice([])).toStrictEqual([]);
   });

   test('test null array, should return an empty array', function () {
      expect(slice(null)).toStrictEqual([]);
   });

   test('test null start parameter and undefined end parameter', function () {
      expect(slice(array, null, undefined)).toStrictEqual([1, 2, 3, 4]);
   });

   test('test if start > length', function () {
      expect(slice(array, 5, 2)).toStrictEqual([]);
   });

   test('test if start > end', function () {
      expect(slice(array, 3, 2)).toStrictEqual([]);
   });

   test('should return the same array', function () {
      expect(slice(array)).toStrictEqual(array);
   });

   test('should return contents from the beginning of the array', function () {
      expect(slice(array, 0, 2)).toStrictEqual([1, 2]);
   });

   test('should return contents from the middle of the array', function () {
      expect(slice(array, 1, 3)).toStrictEqual([2, 3]);
   });

   test('should return contents from the end of the array', function () {
      expect(slice(array, 2)).toStrictEqual([3, 4]);
   });

   test('test negative index with only start parameter', function () {
      expect(slice(array, -2)).toStrictEqual([3, 4]);
   });

   test('test negative index with start and end parameter', function () {
      expect(slice(array, -3, -1)).toStrictEqual([2, 3]);
   });
});