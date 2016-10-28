function create(__markoHelpers) {
  var marko_loadTemplate = __markoHelpers.l,
      hello_template = marko_loadTemplate(require.resolve("./hello.marko"));

  return function render(data, out) {
    hello_template.render({
        name: "Frank"
      }, out);
  };
}

module.exports = require("marko/html").c(__filename, create);
