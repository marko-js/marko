module.exports = require("marko/legacy-components").defineComponent({
  template: require.resolve("./template.marko"),

  getInitialState: function () {
    return {
      x: 1,
    };
  },

  update_x() {
    this.updatedX = true;
  },
});
