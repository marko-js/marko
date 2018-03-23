var expect = require("chai").expect;

exports.templateData = {};

exports.checkError = function(err) {
    expect(err.toString()).to.contain(
        "Invalid <for> tag. Argument is missing."
    );
};
