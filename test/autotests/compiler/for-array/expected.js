function create(__markoHelpers) {
  var marko_escapeXml = __markoHelpers.x;

  return function render(data, out) {
    var color,
        color__i,
        color__array,
        color__len;

    for (color__i = 0, color__array = [
        "red",
        "green",
        "blue"
      ], color__len = color__array && color__array.length; color__i < color__len; color__i++) {
      color = color__array[color__i];

      out.w(marko_escapeXml(color));
    }
  };
}

module.exports = require("marko/html").c(__filename, create);
