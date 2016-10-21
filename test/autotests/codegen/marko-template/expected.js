function create(__markoHelpers) {
  var marko_escapeXml = __markoHelpers.x;

  return function render(data, out) {
    out.w("Hello" +
      data.name +
      "!");

    if (notEmpty(data.colors)) {
      out.w("<ul class=\"colors\">");

      forEach(data.colors, function(color) {
        out.w("<li class=\"color\">" +
          marko_escapeXml(color) +
          "</li>");
      });

      out.w("</ul>");
    }
  };
}

module.exports = require("marko/html").c(__filename, create);
