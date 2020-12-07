/* __tests__/countBy.js */

import countBy from '../src/countBy.js';

const cars = [
  { 'owner': 'barney', 'brand': 'volvo' },
  { 'owner': 'betty', 'brand': 'bmw' },
  { 'owner': 'fred', 'brand': 'volvo' },
  { 'owner': 'pate', 'brand': 'nissan' },
  { 'owner': 'rykä', 'brand': 'lada' },
]

describe('#countBy()', function() {
  test('should return an object', function() {
    expect(typeof countBy(cars, value => value.brand)).toBe('object');
  });

  test('should return an object', function() {
    expect(countBy(cars, value => value.brand)).toEqual({'volvo': 2, 'bmw': 1, 'nissan': 1, 'lada': 1});
  });
});