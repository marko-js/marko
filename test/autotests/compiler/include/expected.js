function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      escapeXml = __helpers.x,
      loadTemplate = __helpers.l,
      __target = loadTemplate(require.resolve("./target.marko"));

  return function render(data, out) {
    __target.render({}, out);
  };
}

(module.exports = require("marko").c(__filename)).c(create);
