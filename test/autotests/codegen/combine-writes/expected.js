function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      escapeXml = __helpers.x;

  return function render(data, out) {
    out.w("<ul>");

    forEach(data.colors, function(color) {
      foo();

      out.w("<li>" +
        escapeXml(color) +
        "</li>");

      bar();
    });

    out.w("</ul>");
  };
}

(module.exports = require("marko").c(__filename)).c(create);
