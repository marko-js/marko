exports.check = function(marko, markoCompiler, expect, done) {
    var notEmpty = require('../../../../helpers/notEmpty');
    expect(notEmpty(null)).to.equal(false);
    expect(notEmpty(undefined)).to.equal(false);
    expect(notEmpty([])).to.equal(false);
    expect(notEmpty('')).to.equal(false);

    expect(notEmpty(1)).to.equal(true);
    expect(notEmpty(0)).to.equal(true);
    expect(notEmpty(['foo'])).to.equal(true);
    expect(notEmpty('foo')).to.equal(true);

    var empty = require('../../../../helpers/empty');
    expect(empty(null)).to.equal(true);
    expect(empty(undefined)).to.equal(true);
    expect(empty([])).to.equal(true);
    expect(empty('')).to.equal(true);

    expect(empty(1)).to.equal(false);
    expect(empty(0)).to.equal(false);
    expect(empty(['foo'])).to.equal(false);
    expect(empty('foo')).to.equal(false);

    done();
};
