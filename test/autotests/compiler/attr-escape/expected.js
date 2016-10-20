function create(__markoHelpers) {
  var marko_classAttr = __markoHelpers.ca,
      marko_attr = __markoHelpers.a,
      marko_escapeXmlAttr = __markoHelpers.xa,
      marko_str = __markoHelpers.s;

  return function render(data, out) {
    out.w("<div" +
      marko_classAttr(data.className) +
      marko_attr("class2", data.className, false) +
      " foo=\"a" +
      marko_escapeXmlAttr(data.foo) +
      "b\" bar=\"a " +
      marko_escapeXmlAttr(data.foo) +
      " b\" baz=\"a " +
      marko_str(data.foo) +
      " b\" nested=\"a " +
      marko_str(data.foo + ("nested " + data.bar)) +
      " b\"></div>");
  };
}

module.exports = require("marko").c(__filename, create);
