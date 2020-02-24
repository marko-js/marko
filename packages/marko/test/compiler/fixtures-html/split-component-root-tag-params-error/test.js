var expect = require("chai").expect;

exports.checkError = function(e) {
    expect(e.toString()).to.contain("tag params within a split component");
};
