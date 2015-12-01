function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      escapeXml = __helpers.x,
      forEach = __helpers.f;

  return function render(data, out) {
    out.w("Hello ! " +
      escapeXml(data.name));

    if (notEmpty(data.colors)) {
      out.w("<ul>");

      forEach(data.colors, function(color) {
        out.w("<li>" +
          escapeXml(color) +
          "</li>");
      });

      out.w("</ul>");
    } else {
      out.w("<div>No colors!</div>");
    }

    if (notEmpty(data.colors)) {
      out.w("<ul>");

      forEach(data.colors, function(color) {
        out.w("<li>" +
          escapeXml(color) +
          "</li>");
      });

      out.w("</ul>");
    } else {
      out.w("<div>No colors!</div>");
    }
  };
}

(module.exports = require("marko").c(__filename)).c(create);
