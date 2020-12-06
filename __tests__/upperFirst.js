/* __tests__/upperFirst.js */

import upperFirst from '../src/upperFirst.js';

describe('#upperFirst()', function () {
   test('should return string', function () {
      expect(upperFirst(typeof 'this is a string')).toBe('String');
   });

   test('should return fully uppercased string', function () {
      expect(upperFirst('puNaJUuriPyoRItIn')).toBe('PuNaJUuriPyoRItIn');
   });

   test('should return string with uppercased first character ', function () {
      expect(upperFirst('naurista')).toBe('Naurista');
   });

   test('should return fully uppercased string', function () {
      expect(upperFirst('COCONUT')).toBe('COCONUT');
   });
});
