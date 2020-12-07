/* __tests__/endsWith.js */

import endsWith from '../src/endsWith.js';

describe('#endsWith()', function () {
  test('should return boolean', function () {
    expect(typeof endsWith('koodiapina', 's')).toBe('boolean');
  });

  test('should return true when the last character is correct', function () {
    expect(endsWith('koodiapina', 'a')).toBe(true);
  });

  test('should return false when the last character is incorrect', function () {
    expect(endsWith('koodiapina', 'b')).toBe(false);
  });

  test('should return true when the specified character is correct', function () {
    expect(endsWith('koodiapina', 'p', 7)).toBe(true);
  });

  test('should return true when the specified character is correct', function () {
    expect(endsWith('koodiapina', 'a', 7)).toBe(false);
  });
  test('should return true when the last character is correct and the position is more than the length', function () {
    expect(endsWith('koodiapina', 'a', 30)).toBe(true);
  });

  test('should return true when the last first character is correct and the position is under 0', function () {
    expect(endsWith('koodiapina', 'k', -20)).toBe(false);
  });
});
