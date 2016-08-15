function create(__markoHelpers) {
  return function render(data, out) {
    if (true) {
      out.w("A");
    }

    out.w("B");

    if (true) {
      out.w("C");
    }
  };
}

(module.exports = require("marko").c(__filename)).c(create);
