function create(__markoHelpers) {
  var marko_escapeXmlAttr = __markoHelpers.xa;

  return function render(data, out) {
    out.w("<div foo=\"Hello " +
      marko_escapeXmlAttr(data.name) +
      "\"></div>");

    var foo = "Hello " + data.name;
  };
}

module.exports = require("marko").c(__filename, create);
