var template = require("./template.marko").default;

exports.renderer = function (input, out) {
  var tabs = input.tabs;

  template.render(
    {
      tabs: tabs
    },
    out
  );
};
