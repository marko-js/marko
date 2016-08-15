function create(__markoHelpers) {
  var marko_escapeXml = __markoHelpers.x,
      marko_forEach = __markoHelpers.f;

  return function render(data, out) {
    out.w("Hello " +
      marko_escapeXml(data.name) +
      "! ");

    if (data.colors.length) {
      out.w("<ul>");

      marko_forEach(data.colors, function(color) {
        out.w("<li>" +
          marko_escapeXml(color) +
          "</li>");
      });

      out.w("</ul>");
    } else {
      out.w("<div>No colors!</div>");
    }

    if (data.colors.length) {
      out.w("<ul>");

      marko_forEach(data.colors, function(color) {
        out.w("<li>" +
          marko_escapeXml(color) +
          "</li>");
      });

      out.w("</ul>");
    } else {
      out.w("<div>No colors!</div>");
    }
  };
}

(module.exports = require("marko").c(__filename)).c(create);
