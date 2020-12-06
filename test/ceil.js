/* test/ceil.js */

import ceil from '../src/ceil.js';
import chai from 'chai';
const expect = chai.expect;

describe('#ceil()', function() {
  it('should return a number', function() {
    expect(ceil(3.1)).to.be.a('number');
  });

  it('should return 6 from a parameter 5.2', function() {
    expect(ceil(5.1)).to.equal(6);
  });

  it('should return 14.04 with parameters 14.0324 and 2 as ceiling precision', function() {
    expect(ceil(14.0324, 2)).to.equal(14.04);
  });

  it('should return 160 000 with parameters 159 432.55 and -3 as ceiling precision', function() {
    expect(ceil(159432.55, -3)).to.equal(160000);
  });
});
