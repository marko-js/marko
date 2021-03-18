exports.check = function (marko, markoCompiler, expect, helpers, done) {
  var compiler = require("marko/compiler");
  compiler.configure(); // Use defaults
  expect(compiler.config.writeVersionComment).to.equal(true);
  expect(compiler.config.ignoreUnrecognizedTags).to.equal(false);

  compiler.configure({
    ignoreUnrecognizedTags: true
  });
  expect(compiler.config.writeVersionComment).to.equal(true);
  expect(compiler.config.ignoreUnrecognizedTags).to.equal(true);

  compiler.configure(); // Use defaults
  expect(compiler.config.writeVersionComment).to.equal(true);
  expect(compiler.config.ignoreUnrecognizedTags).to.equal(false);
  done();
};
