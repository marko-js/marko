const assert = require("assert/strict");

exports.check = function (markoCompiler) {
  var lookup = markoCompiler.buildTaglibLookup(__dirname);

  var hasHrefAttr = false;

  lookup.forEachAttribute("a", (attr) => {
    if (attr.name === "href") {
      hasHrefAttr = true;
    }
  });

  assert.equal(hasHrefAttr, true);
};
