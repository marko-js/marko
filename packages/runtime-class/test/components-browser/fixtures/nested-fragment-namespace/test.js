var assert = require("assert/strict");
var svgNS = "http://www.w3.org/2000/svg";

module.exports = function (helpers) {
  var component = helpers.mount(require.resolve("./index"));
  var root = component.getEl("root");
  var svgEl = root.firstChild;
  assert.equal(svgEl.namespaceURI, svgNS);
  assert.equal(svgEl.firstElementChild.tagName, "title");
  assert.equal(svgEl.firstElementChild.namespaceURI, svgNS);
};
