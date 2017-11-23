var expect = require('chai').expect;

exports.test = function (helpers) {
    expect(helpers.existsSync('template.marko.xml.js')).to.equal(false);
    var result = helpers.spawnSync(['template.marko.xml']);
    expect(helpers.existsSync('template.marko.xml.js')).to.equal(true);
    expect(result.status).to.equal(0);
};