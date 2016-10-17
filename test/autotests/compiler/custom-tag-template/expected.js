function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      escapeXml = __helpers.x,
      loadTemplate = __helpers.l,
      hello_template = loadTemplate(require.resolve("./hello.marko"));

  return function render(data, out) {
    hello_template.render({
        name: "Frank"
      }, out);
  };
}

(module.exports = require("marko").c(__filename)).c(create);
