var expect = require("chai").expect;

exports.templateData = {};

exports.checkError = function(e) {
    var message = e.toString();
    expect(message).to.contain("else-if");
    expect(message).to.contain("Unexpected identifier: (true invalid)");
};
