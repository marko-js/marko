var expect = require('chai').expect;

exports.test = function (helpers) {
    var result = helpers.spawnSync([], {
        encoding: 'utf8'
    });

    expect(result.stdout).to.contain('Usage: markoc');
};