module.exports = require("marko-widgets").defineComponent({
  template: require("./template.marko"),
  getInitialState(input) {
    return { count: input.count || 0 };
  },
  increment() {
    this.setState("count", this.state.count + 1);
  }
});
