var template = require("./template.marko").default;

exports.renderer = function (input, out) {
  template.render({}, out);
};
