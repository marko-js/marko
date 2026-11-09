var assert = require("assert/strict");
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
    assert.ok(err instanceof Error);
  } else {
    assert.equal(err, undefined);
  }
}

exports.check = function (marko, markoCompiler, helpers, done) {
  try {
    requireHook.install({
      compilerOptions: {
        ignoreUnrecognizedTags: false,
      },
    }); // Reconfigure for testing

    assert.equal(markoCompiler.config.ignoreUnrecognizedTags, false);

    compileAndCheck("./invalid.marko", true /* should error */);

    requireHook.install({
      compilerOptions: {
        ignoreUnrecognizedTags: true,
      },
    });

    assert.equal(markoCompiler.config.ignoreUnrecognizedTags, true);

    compileAndCheck("./invalid.marko", false /* should not error */);
  } finally {
    markoCompiler.configure(); // Reset to defaults
    assert.equal(markoCompiler.config.ignoreUnrecognizedTags, false);
    done();
  }
};
