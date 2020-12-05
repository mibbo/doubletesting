/* test/camelCase.js */

import camelCase from '../src/camelCase.js';
import chai from 'chai';
const expect = chai.expect;

describe('#camelCase()', function() {
  it('should return string', function() {
    expect(camelCase('this is a string')).to.be.a('string');
  });

  it('should return camel cased string from string with spaces', function() {
    expect(camelCase('I want To be a Camel')).to.equal('iWantTobeACamel');
  });

  it('should return camel cased string with only letters from string with random marks and spaces', function() {
    expect(camelCase('__I AM   t£he., fINA+<l...BosS!')).to.equal('iAmTheFinalBoss');
  });

  it('should return camel cased string without removing the numbers', function() {
    expect(camelCase('mambo number 5')).to.equal('mamboNumber5');
  });
});
