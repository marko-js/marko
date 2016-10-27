function create(__markoHelpers) {
  var marko_escapeXml = __markoHelpers.x;

  var name = '${name}<div if(foo)></div>';

  return function render(data, out) {
    out.w("Hello " +
      marko_escapeXml(name) +
      "!");
  };
}

module.exports = require("marko/html").c(__filename, create);
