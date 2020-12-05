/* test/castArray.js */

import camelCase from '../src/castArray.js';
import chai from 'chai';
import castArray from '../src/castArray.js';
const expect = chai.expect;

describe('#castArray()', function() {
  it('should return array when an array is given as a parameter', function() {
    expect(castArray(['kissa', -23, 3])).to.be.an('array');
  });

  it('should return the same array when the array is given as a parameter', function() {
    expect(castArray([1, 2, 3])).to.eql([1, 2, 3]);
  });

  it('should return specific array from string parameter', function() {
    expect(castArray('koira')).to.eql(['koira']);
  });

  it('should return specific array from integer parameter', function() {
    expect(castArray(2)).to.eql([2]);
  });

  it('should return specific array from boolean parameter', function() {
    expect(castArray(true)).to.eql([true]);
  });

  it('should return specific array from object parameter', function() {
    expect(castArray({'age': 15})).to.eql([{'age': 15}]);
  });

  it('should return empty array when called without parameters', function() {
    expect(castArray()).to.eql([]);
  });
});
