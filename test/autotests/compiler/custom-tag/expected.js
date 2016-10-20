function create(__markoHelpers) {
  var marko_loadTag = __markoHelpers.t,
      test_hello = marko_loadTag(require("./tags/test-hello/renderer"));

  return function render(data, out) {
    test_hello({
        name: "World"
      }, out);
  };
}

module.exports = require("marko").c(__filename, create);
