/* __tests__/capitalize.js */

import capitalize from '../src/capitalize.js';

describe('#capitalize()', function() {
  test('should return string', function() {
    expect(capitalize(typeof 'this is a string')).toBe('string');
  });

  test('should return string with only first letter capitalized from a string with both cases', function() {
    expect(capitalize('oMEnahiLLoPURisTIn')).toBe('Omenahillopuristin');
  });

  test('should return string with only first letter capitalized from a string with spaces', function() {
    expect(capitalize('this is a string with spaces')).toBe('This is a string with spaces');
  });
});
