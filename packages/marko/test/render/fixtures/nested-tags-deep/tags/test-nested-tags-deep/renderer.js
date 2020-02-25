var template = require("./template.marko").default;

module.exports = function(input, out) {
  template.render(input, out);
};
