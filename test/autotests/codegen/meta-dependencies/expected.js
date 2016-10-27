function create(__markoHelpers) {
  return function render(data, out) {
    out.w("<div></div>");
  };
}

module.exports = require("marko/html").c(__filename, create, {
    deps: [
        "./foo"
      ]
  });
