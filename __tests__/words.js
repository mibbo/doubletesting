/* __tests__/words.js */

import words from '../src/words.js';
import asciiWords from '../src/words.js';

describe('#words()', function () {
   test('should return an Array', function () {
      expect(Array.isArray(words('me, ollaan, mibbo, ja, brutus'))).toBe(true);
   });

   test('should return specific array with special characters included  ', function () {
      expect(words('me, ollaan, testiapinoita ! #420 $¥[{]}', /[^, ]+/g)).toStrictEqual(['me', 'ollaan', 'testiapinoita', '!', '#420', '$¥[{]}']);
   });

});

describe('#asciiWords()', function () {
   test('should return string', function () {
      expect(asciiWords(typeof 'this is a string')).toStrictEqual(['string']);
   });
});