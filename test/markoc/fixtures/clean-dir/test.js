var expect = require('chai').expect;

exports.test = function (helpers) {

    helpers.spawnSync(['template1.marko']);
    helpers.spawnSync(['template2.marko']);

    expect(helpers.existsSync('template1.marko.js')).to.equal(true);
    expect(helpers.existsSync('template2.marko.js')).to.equal(true);

    helpers.spawnSync(['.', '--clean']);

    expect(helpers.existsSync('template1.marko.js')).to.equal(false);
    expect(helpers.existsSync('template2.marko.js')).to.equal(false);
};