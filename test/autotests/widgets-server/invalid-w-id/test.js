var expect = require('chai').expect;

module.exports = function(helpers) {
    expect(function() {
        require('./template.marko');
    }).to.throw(/The "ref" attribute cannot be used in conjunction with the "w-bind" attribute./);
};
