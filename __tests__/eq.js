/* __tests__/eq.js */

import eq from '../src/eq.js';

const object = { 'a': 1 }
const other = { 'a': 1 }

describe('#eq()', function () {
   test('should return Boolean', function () {
      expect(typeof eq(object, object)).toBe('boolean');
   });

   test('should return an empty array', function () {
      expect(eq(object, object)).toStrictEqual(true);
   });

   test('should return an empty array', function () {
      expect(eq(object, other)).toStrictEqual(false);
   });
});