function create(__markoHelpers) {
  var marko_escapeXml = __markoHelpers.x;

  return function render(data, out) {
    out.w("<ul>");

    forEach(data.colors, function(color) {
      foo();

      out.w("<li>" +
        marko_escapeXml(color) +
        "</li>");

      bar();
    });

    out.w("</ul>");
  };
}

module.exports = require("marko").c(__filename, create);
