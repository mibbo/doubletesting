/* __tests__/map.js */

import map from '../src/map.js';

var array = [1, 2, 3, 4]

function square(n) {
   return n * n
}

describe('#map()', function () {
   test('should return an Array', function () {
      expect(Array.isArray(map(array, square))).toBe(true);
   });

   test('should return an empty array', function () {
      expect(map(array, square)).toStrictEqual([1, 4, 9, 16]);
   });

   test('should return an empty array', function () {
      expect(map([], square)).toStrictEqual([]);
   });

   test('should return an empty array', function () {
      expect(map(null, square)).toStrictEqual([]);
   });
});