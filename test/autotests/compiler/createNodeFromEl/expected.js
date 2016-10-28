function create(__markoHelpers) {
  var marko_loadTag = __markoHelpers.t,
      test_hello_tag = marko_loadTag(require("./tags/test-hello/renderer"));

  return function render(data, out) {
    test_hello_tag({
        name: "Frank"
      }, out);

    test_hello_tag({
        name: "Frank"
      }, out);

    test_hello_tag({
        name: "Frank"
      }, out);
  };
}

module.exports = require("marko/html").c(__filename, create);
