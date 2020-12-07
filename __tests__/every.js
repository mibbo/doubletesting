/* __tests__/every.js */

import every from '../src/every.js';

var array = [true, 1, null, 'yes']

describe('#every()', function () {
   test('should return Boolean', function () {
      expect(typeof every([true, 1, null, 'yes'], Boolean)).toBe('boolean');
   });

   test('should return an empty array', function () {
      expect(every(null, Boolean)).toStrictEqual(true);
   });

   test('should return an empty array', function () {
      expect(every([true, 1, null, 'yes'], Boolean)).toStrictEqual(false);
   });
});