var assert = require("assert/strict");

module.exports = function (helpers) {
  var component = helpers.mount(require.resolve("./index"), {});
  var link = component.getEl("root").querySelector("a");
  var linkHref = link.getAttribute("href");
  assert.equal(!!linkHref, true);
  assert.match(linkHref, /^#.*anchor$/);
  assert.equal(link.getAttribute("href:scoped"), null);
};
