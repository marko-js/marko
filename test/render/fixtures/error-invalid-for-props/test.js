var expect = require("chai").expect;

exports.templateData = {};

exports.checkError = function(e) {
    var message = e.toString();
    expect(message).to.contain(
        "An error occurred while trying to compile template at path"
    );
    expect(message).to.contain('Invalid "in" expression:');
    expect(message).to.contain(
        "Unexpected identifier: ({'foo': 'low', 'bar': 'high'} foo)"
    );
};
