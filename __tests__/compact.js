/* __tests__/compact.js */

import compact from '../src/compact.js';

describe('#compact()', function() {
  test('should return an array', function() {
    expect(Array.isArray(compact([3, NaN, '', 12]))).toBe(true);
  });

  test('should return the same array when no falsey values are in it', function() {
    expect(compact([30, 20, "leipä"])).toEqual([30, 20, "leipä"]);
  });

  test('should remove the falsey values and return a specific array', function() {
    expect(compact([false, 34, NaN, '', "kissa"])).toEqual([34, "kissa"]);
  });
});