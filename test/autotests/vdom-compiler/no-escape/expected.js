function create(__markoHelpers) {
  var marko_str = __markoHelpers.s;

  return function render(data, out) {
    out.t("Hello " +
      marko_str(name) +
      "! ");

    out.h(marko_str(message));
  };
}

module.exports = require("marko/vdom").c(__filename, create);
