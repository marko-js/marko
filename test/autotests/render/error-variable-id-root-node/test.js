var expect = require('chai').expect;

exports.checkError = function(e) {
    var message = e.toString();
    expect(message).to.contain('Root HTML element should not have a dynamic `id` attribute');
};
