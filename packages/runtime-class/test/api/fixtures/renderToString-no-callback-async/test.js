const assert = require("assert/strict");

var nodePath = require("path");

exports.check = function (marko, markoCompiler, helpers, done) {
  var template = marko.load(nodePath.join(__dirname, "template.marko"));
  assert.throws(function () {
    template.renderToString({ name: "John" });
  }, /beginAsync\(\) not allowed when using renderSync\(\)/);
  done();
};
