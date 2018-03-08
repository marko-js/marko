var expect = require("chai").expect;

exports.templateData = {};

exports.checkError = function(err) {
    expect(err.toString()).to.contain(
        'Invalid <else if> tag. Only the "if" attribute is allowed.'
    );
};
