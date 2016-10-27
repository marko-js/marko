function create(__markoHelpers) {
  return function render(data, out) {
    if (true) {
      console.log("hello");
    }
  };
}

module.exports = require("marko/html").c(__filename, create);
