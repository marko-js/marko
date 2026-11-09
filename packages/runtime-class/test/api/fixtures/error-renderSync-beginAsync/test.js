const assert = require("assert/strict");

var nodePath = require("path");
var promiseProvider =
  require("../../../__util__/async-helpers").promiseProvider;

exports.check = function (marko, markoCompiler, helpers, done) {
  var template = marko.load(nodePath.join(__dirname, "template.marko"));
  var output;
  var e;

  try {
    output = template.renderSync({
      nameDataProvider: promiseProvider(1, "John"),
    });
  } catch (_e) {
    e = _e;
  }

  assert.equal(output, undefined);
  assert.notEqual(e, undefined);
  done();
};
