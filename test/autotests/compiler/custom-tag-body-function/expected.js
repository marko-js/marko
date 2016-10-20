function create(__markoHelpers) {
  var marko_loadTag = __markoHelpers.t,
      test_body_function = marko_loadTag(require("./tags/test-body-function/renderer"));

  return function render(data, out) {
    test_body_function({
        name: "World",
        myBody: function myBody(foo, bar) {
          out.w("This is the body content");
        }
      }, out);
  };
}

module.exports = require("marko").c(__filename, create);
