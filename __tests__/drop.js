/* __tests__/drop.js */

import drop from '../src/drop.js';

var array = [1, 2, 3, 4]

describe('#drop()', function () {
   test('should return an Array', function () {
      expect(Array.isArray(drop(array, 2))).toBe(true);
   });

   test('should return an empty array', function () {
      expect(drop([])).toStrictEqual([]);
   });

   test('test null array, should return an empty array', function () {
      expect(drop(null)).toStrictEqual([]);
   });

   test('test negative number of elements', function () {
      expect(drop(array, -3)).toStrictEqual(array);
   });

   test('should return an empty array', function () {
      expect(drop(array, 2)).toStrictEqual([3, 4]);
   });
});