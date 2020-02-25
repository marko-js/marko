var expect = require("chai").expect;
var requireHook = require("../../../../node-require");

function compileAndCheck(path, shouldHaveErrored) {
  var resolved = require.resolve(path);
  var err;

  try {
    require(resolved);
  } catch (_e) {
    err = _e;
  }

  if (shouldHaveErrored) {
    expect(err).is.an.instanceOf(Error);
  } else {
    expect(err).to.equal(undefined);
  }
}

exports.check = function(marko, markoCompiler, expect, helpers, done) {
  try {
    requireHook.install({
      compilerOptions: {
        ignoreUnrecognizedTags: false
      }
    }); // Reconfigure for testing

    expect(markoCompiler.config.ignoreUnrecognizedTags).to.equal(false);

    compileAndCheck("./invalid.marko", true /* should error */);

    requireHook.install({
      compilerOptions: {
        ignoreUnrecognizedTags: true
      }
    });

    expect(markoCompiler.config.ignoreUnrecognizedTags).to.equal(true);

    compileAndCheck("./invalid.marko", false /* should not error */);
  } finally {
    markoCompiler.configure(); // Reset to defaults
    expect(markoCompiler.config.ignoreUnrecognizedTags).to.equal(false);
    done();
  }
};
