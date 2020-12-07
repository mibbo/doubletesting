/* __tests__/filter.js */

import filter from '../src/filter.js';

const users = [
  { 'user': 'matti', 'active': true },
  { 'user': 'teppo', 'active': false }
]

describe('#filter()', function () {
  test('should return an Array', function () {
    expect(Array.isArray(filter(users, ({ active }) => active))).toBe(true);
  });

  test('should return empty Array', function () {
    expect(filter(null)).toEqual([[]]);
  });

  test('should return Array with object for matti', function () {
    expect(filter(users, ({ active }) => active)).toEqual([{ "active": true, "user": "matti", },]);
  });
});