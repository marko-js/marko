function create(__markoHelpers) {
  return function render(data, out) {
    out.w("Hello John");
  };
}

module.exports = require("marko/html").c(__filename, create);
