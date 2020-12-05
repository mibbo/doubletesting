/* test/capitalize.js */

import capitalize from '../src/capitalize.js';
import chai from 'chai';
const expect = chai.expect;

describe('#capitalize()', function() {
  it('should return string', function() {
    expect(capitalize('this is string')).to.be.a('string');
  });

  it('should return string with only first letter capitalized', function() {
    expect(capitalize('oMEnahiLLoPURisTIn')).to.equal('Omenahillopuristin');
  });
});
