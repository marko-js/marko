var assert = require("assert/strict");
var template = require("./index.marko").default;

module.exports = function (helpers) {
  var component = helpers.mount(require.resolve("./index"), { name: "Frank" });
  var error = new Error("lifecycle failed");
  var stack = error.stack;
  try {
    ["onCreate", "onInput", "onRender", "onMount"].forEach(function (hook) {
      assert.throws(
        function () {
          template
            .renderSync({ fail: { hook: hook, error: error } })
            .appendTo(helpers.targetEl);
        },
        {
          message: new RegExp(
            "Error in " + hook +
              ' for component ".*lifecycle-errors/index.marko.*" \\(id: .+\\)\\.',
          ),
          cause: error,
        },
      );
    });

    component.once("update", function () {
      throw error;
    });
    assert.throws(function () {
      component.input = { name: "John" };
      component.update();
    }, error);

    ["shouldUpdate", "onUpdate", "onDestroy"].forEach(function (hook) {
      component.fail = { hook: hook, error: error };
      assert.throws(
        function () {
          if (hook === "onDestroy") {
            component.destroy();
          } else {
            component.input = { name: hook };
            component.update();
          }
        },
        {
          message: new RegExp(
            "Error in " + hook +
              ' for component ".*lifecycle-errors/index.marko.*" \\(id: .+\\)\\.',
          ),
          cause: error,
        },
      );
    });
    assert.equal(error.stack, stack);
  } finally {
    component.fail = null;
  }
};
