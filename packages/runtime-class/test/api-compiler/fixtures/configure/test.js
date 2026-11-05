const assert = require("assert/strict");

exports.check = function (marko, markoCompiler, helpers, done) {
  var compiler = require("marko/compiler");
  compiler.configure(); // Use defaults
  assert.equal(compiler.config.writeVersionComment, true);
  assert.equal(compiler.config.ignoreUnrecognizedTags, false);

  compiler.configure({
    ignoreUnrecognizedTags: true,
  });
  assert.equal(compiler.config.writeVersionComment, true);
  assert.equal(compiler.config.ignoreUnrecognizedTags, true);

  compiler.configure(); // Use defaults
  assert.equal(compiler.config.writeVersionComment, true);
  assert.equal(compiler.config.ignoreUnrecognizedTags, false);
  done();
};
