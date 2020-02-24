var expect = require("chai").expect;
var svgNS = "http://www.w3.org/2000/svg";
var mathNS = "http://www.w3.org/1998/Math/MathML";

module.exports = function(helpers) {
    var component = helpers.mount(require.resolve("./index"));
    var root = component.getEl("root");
    var svgEl = root.firstChild;
    var mathEl = svgEl.nextSibling;
    expect(svgEl.namespaceURI).to.equal(svgNS);
    expect(svgEl.firstChild.namespaceURI).to.equal(svgNS);
    expect(mathEl.namespaceURI).to.equal(mathNS);
    expect(mathEl.firstChild.namespaceURI).to.equal(mathNS);
};
