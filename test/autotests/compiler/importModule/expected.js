function create(__markoHelpers) {
  var foo = require("./foo");

  return function render(data, out) {
    foo();
  };
}

module.exports = require("marko/html").c(__filename, create);
