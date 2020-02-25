module.exports = require("marko/legacy-components").defineComponent({
  template: require("./template.marko"),
  getTemplateData: function(state, input) {
    return input.model;
  }
});
