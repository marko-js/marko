var lifecycle = require("./lifecycle-recorder");

module.exports = require("marko/legacy-components").defineComponent({
  template: require.resolve("./template.marko"),
  getInitialState: function (input) {
    return {
      shouldBind: input.shouldBind,
      name: input.name,
    };
  },

  getTemplateData: function (state) {
    return {
      shouldBind: state.shouldBind,
      name: state.name,
    };
  },
});

if (typeof window === "object") {
  Object.assign(module.exports.prototype, {
    onRender: function (eventArg) {
      lifecycle.record(
        this.id,
        eventArg.firstRender ? "onRender:firstRender" : "onRender"
      );
    },

    setName: function (newName) {
      this.setState("name", newName);
    },

    onBeforeDestroy: function () {
      lifecycle.record(this.id, "onBeforeDestroy");
    },

    onDestroy: function () {
      lifecycle.record(this.id, "onDestroy");
    },

    onBeforeUpdate: function () {
      lifecycle.record(this.id, "onBeforeUpdate");
    },

    onUpdate: function () {
      lifecycle.record(this.id, "onUpdate");
    },
  });
}
