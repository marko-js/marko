var assert = require("assert/strict");
var svgNS = "http://www.w3.org/2000/svg";
var mathNS = "http://www.w3.org/1998/Math/MathML";

module.exports = function (helpers) {
  var component = helpers.mount(require.resolve("./index"));
  var root = component.getEl("root");
  var svgEl = root.firstChild;
  var mathEl = svgEl.nextSibling;
  assert.equal(svgEl.namespaceURI, svgNS);
  assert.equal(svgEl.firstChild.namespaceURI, svgNS);
  assert.equal(mathEl.namespaceURI, mathNS);
  assert.equal(mathEl.firstChild.namespaceURI, mathNS);
};
