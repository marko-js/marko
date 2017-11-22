var expect = require('chai').expect;

exports.test = function (helpers) {
    expect(helpers.existsSync('template.marko.js')).to.equal(false);
    var result = helpers.spawnSync(['template.marko']);
    expect(helpers.existsSync('template.marko.js')).to.equal(true);
    expect(result.status).to.equal(0);
};