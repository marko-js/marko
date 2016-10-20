function create(__markoHelpers) {
  var marko_forEach = __markoHelpers.f,
      marko_escapeXml = __markoHelpers.x;

  return function render(data, out) {
    marko_forEach(data.colors, function(color) {
      out.w(marko_escapeXml(color));
    });
  };
}

module.exports = require("marko").c(__filename, create);
