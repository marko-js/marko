var expect = require('chai').expect;

exports.test = function (helpers) {
    expect(helpers.existsSync('a/template.marko.js')).to.equal(false);
    expect(helpers.existsSync('b/template.marko.js')).to.equal(false);
    expect(helpers.existsSync('excluded/template.marko.js')).to.equal(false);

    helpers.spawnSync(['a', 'b']);

    expect(helpers.existsSync('a/template.marko.js')).to.equal(true);
    expect(helpers.existsSync('b/template.marko.js')).to.equal(true);
    expect(helpers.existsSync('excluded/template.marko.js')).to.equal(false);
};