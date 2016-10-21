function create(__markoHelpers) {
  var marko_escapeXml = __markoHelpers.x,
      marko_str = __markoHelpers.s;

  return function render(data, out) {
    out.w("Hello " +
      marko_escapeXml(data.name) +
      "! Hello " +
      marko_str(data.name) +
      "! Hello " +
      marko_str(data.missing) +
      "!");
  };
}

module.exports = require("marko/html").c(__filename, create);
