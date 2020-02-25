module.exports = require("marko-widgets").defineComponent({
  template: require("./template.marko"),
  getInitialState: function() {
    return {
      size: "normal",
      variant: "primary"
    };
  }
});
