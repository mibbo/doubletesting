/* __tests__/eq.js */

import eq from '../src/eq.js';

const object = { 'a': 1 }
const other = { 'a': 1 }

describe('#eq()', function () {
   test('should return Boolean', function () {
      expect(typeof eq(object, object)).toBe('boolean');
   });

   test('should return an empty array', function () {
      expect(eq(object, object)).toBe(true);
   });

   test('should return an empty array', function () {
      expect(eq(object, other)).toBe(false);
   });

   test('should return an empty array', function () {
      expect(eq(7, 7)).toBe(true);
   });

   test('should return an empty array', function () {
      expect(eq(7, 'a')).toBe(false);
   });

   test('should return an empty array', function () {
      expect(eq('a', Object('a'))).toBe(false);
   });

   test('test NAN', function () {
      expect(eq(NaN, NaN)).toBe(true);
   });
});