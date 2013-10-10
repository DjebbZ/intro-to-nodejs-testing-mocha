var should = require('chai').should(),
    expect = require('chai').expect,
    assert = require('assert'),
    cat = require('../cat.js');

describe.skip('Array', function() {

  describe('.length', function() {

    it('should return the length of the array', function() {
        assert.equal(0, [].length);
    });

  });

});

describe('Cat', function() {

  describe('.name', function() {

    it('should be named Felix', function() {
        // assert.equal(cat.name, 'Felix');
        cat.should.have.property('name', 'Felix');
        expect(cat).to.have.property('name', 'Felix');
    });

  });

  describe('#mew', function() {

    it('should "mew!"', function() {

        assert.equal(cat.mew(), "mew!");

        cat.mew().should.equal('mew!');
    });

  });

  describe('.babies', function() {

    it('should have more than 5 babies', function() {
        assert(cat.babies > 5);
        cat.babies.should.be.above(8);
    });

  });

  describe('.brother', function() {

    it('should not have a brother', function () {
        should.not.exist(cat.brother);
    })

  });

});