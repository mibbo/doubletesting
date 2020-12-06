/* test/capitalize.js */

import capitalize from '../src/capitalize.js';
import chai from 'chai';
const expect = chai.expect;

describe('#capitalize()', function() {
  it('should return string', function() {
    expect(capitalize('this is a string')).to.be.a('string');
  });

  it('should return string with only first letter capitalized from a string with both cases', function() {
    expect(capitalize('oMEnahiLLoPURisTIn')).to.equal('Omenahillopuristin');
  });

  it('should return string with only first letter capitalized from a string with spaces', function() {
    expect(capitalize('this is a string with spaces')).to.equal('This is a string with spaces');
  });
});
