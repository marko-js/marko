var expect = require("chai").expect;
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
        expect(function () {
          template.renderSync({ fail: { hook: hook, error: cause } });
        })
          .to.throw(
            new RegExp(
              "Error in " + hook +
                ' for component ".*lifecycle-errors/index.marko.*" \\(id: .+\\)\\.',
            ),
          )
          .and.have.property("cause", cause);
      });
    });
    expect(logged).to.equal(false);
    expect(error.stack).to.equal(stack);
  } finally {
    console.error = consoleError;
  }
};
