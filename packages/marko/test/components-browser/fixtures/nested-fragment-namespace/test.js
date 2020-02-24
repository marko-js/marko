var expect = require("chai").expect;
var svgNS = "http://www.w3.org/2000/svg";

module.exports = function(helpers) {
    var component = helpers.mount(require.resolve("./index"));
    var root = component.getEl("root");
    var svgEl = root.firstChild;
    expect(svgEl.namespaceURI).to.equal(svgNS);
    expect(svgEl.firstElementChild.tagName).to.equal("title");
    expect(svgEl.firstElementChild.namespaceURI).to.equal(svgNS);
};
