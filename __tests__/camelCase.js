/* __tests__/camelCase.js */

import camelCase from '../src/camelCase.js';

describe('#camelCase()', function() {
  test('should return string', function() {
    expect(typeof camelCase('this is a string')).toBe('string');
  });

  test('should return camel cased string from string with spaces', function() {
    expect(camelCase('I want To be a Camel')).toBe('iWantTobeACamel');
  });

  test('should return camel cased string with only letters from string with random marks and spaces', function() {
    expect(camelCase('__I AM   t£he., fINA+<l...BosS!')).toBe('iAmTheFinalBoss');
  });

  test('should return camel cased string without removing the numbers', function() {
    expect(camelCase('mambo number 5')).toBe('mamboNumber5');
  });
});
