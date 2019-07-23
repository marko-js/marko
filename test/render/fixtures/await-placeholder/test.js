var expect = require("chai").expect;

exports.templateData = {
    testDataProvider: Promise.resolve({ name: "Frank" })
};

exports.checkHtml = function(html) {
    expect(html).to.contain("Loading main...");
    expect(html).to.contain("Hello Frank");
};

exports.skip_vdom = "client-reorder/placeholders are not supported in vdom";
