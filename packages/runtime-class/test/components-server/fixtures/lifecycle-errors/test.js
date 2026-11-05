var assert = require("assert/strict");
var template = require("../../../components-browser/fixtures/lifecycle-errors/index.marko").default;

module.exports = function () {
  var error = Object.freeze(new Error("lifecycle failed"));
  var stack = error.stack;
  var logged = false;
  var consoleError = console.error;
  console.error = function () {
    logged = true;
  };

  try {
    ["onCreate", "onInput", "onRender"].forEach(function (hook) {
      [error, "lifecycle failed", null].forEach(function (cause) {
        assert.throws(
          function () {
            template.renderSync({ fail: { hook: hook, error: cause } });
          },
          {
            message: new RegExp(
              "Error in " + hook +
                ' for component ".*lifecycle-errors/index.marko.*" \\(id: .+\\)\\.',
            ),
            cause: cause,
          },
        );
      });
    });
    assert.equal(logged, false);
    assert.equal(error.stack, stack);
  } finally {
    console.error = consoleError;
  }
};
