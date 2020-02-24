var expect = require("chai").expect;

exports.checkError = function(e) {
    expect(e.toString()).to.contain("Tag not nested within a");
    expect(e.toString()).to.contain("<div>");
    expect(e.toString()).to.contain("<@header>");
};
