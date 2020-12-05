/* test/add.js */

import add from '../src/add.js';
import chai from 'chai';
const expect = chai.expect;

describe('#add()', function () {
  it('should return number', function () {
    expect(add(10, 3)).to.be.a('number');
  });

  it('should return 12 with two parameters, 4 and 8', function () {
    expect(add(4, 8)).to.equal(12);
  });

  it('should return 10 with only one parameter 10', function () {
    expect(add(10)).to.equal(10);
  });

  it('should return -7 with negative parameters -3 and -4', function () {
    expect(add(-3, -4)).to.equal(-7);
  });

  it('should return -34 with negative and positive parameters -40 and 6', function () {
    expect(add(-40, 6)).to.equal(-34);
  });
});