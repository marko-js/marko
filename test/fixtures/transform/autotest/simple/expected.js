function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      escapeXml = __helpers.x,
      forEach = __helpers.f;

  return function render(data, out) {
    if (notEmpty(data.colors)) {
      out.w("<ul class=\"colors\">");

      forEach(data.colors, function(color) {
        out.w("<li class=\"color\">" +
          escapeXml(color) +
          "</li>");
      });

      out.w("</ul>");
    }
  };
}

(module.exports = require("marko").c(__filename)).c(create);
