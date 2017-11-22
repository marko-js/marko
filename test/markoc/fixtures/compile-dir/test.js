var expect = require('chai').expect;

exports.test = function (helpers) {
    expect(helpers.existsSync('template1.marko.js')).to.equal(false);
    expect(helpers.existsSync('template2.marko.js')).to.equal(false);

    helpers.spawnSync(['.']);

    expect(helpers.existsSync('template1.marko.js')).to.equal(true);
    expect(helpers.existsSync('template2.marko.js')).to.equal(true);
};