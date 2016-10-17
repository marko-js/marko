function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      escapeXml = __helpers.x,
      loadTemplate = __helpers.l,
      target_template = loadTemplate(require.resolve("./target.marko"));

  return function render(data, out) {
    target_template.render({}, out);
  };
}

(module.exports = require("marko").c(__filename)).c(create);
