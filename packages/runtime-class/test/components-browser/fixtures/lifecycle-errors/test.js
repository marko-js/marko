var expect = require("chai").expect;
var template = require("./index.marko").default;

module.exports = function (helpers) {
  var component = helpers.mount(require.resolve("./index"), { name: "Frank" });
  var error = new Error("lifecycle failed");
  var stack = error.stack;
  try {
    ["onCreate", "onInput", "onRender", "onMount"].forEach(function (hook) {
      expect(function () {
        template
          .renderSync({ fail: { hook: hook, error: error } })
          .appendTo(helpers.targetEl);
      })
        .to.throw(
          new RegExp(
            "Error in " + hook +
              ' for component ".*lifecycle-errors/index.marko.*" \\(id: .+\\)\\.',
          ),
        )
        .and.have.property("cause", error);
    });

    component.once("update", function () {
      throw error;
    });
    expect(function () {
      component.input = { name: "John" };
      component.update();
    }).to.throw(error);

    ["shouldUpdate", "onUpdate", "onDestroy"].forEach(function (hook) {
      component.fail = { hook: hook, error: error };
      expect(function () {
        if (hook === "onDestroy") {
          component.destroy();
        } else {
          component.input = { name: hook };
          component.update();
        }
      })
        .to.throw(
          new RegExp(
            "Error in " + hook +
              ' for component ".*lifecycle-errors/index.marko.*" \\(id: .+\\)\\.',
          ),
        )
        .and.have.property("cause", error);
    });
    expect(error.stack).to.equal(stack);
  } finally {
    component.fail = null;
  }
};
