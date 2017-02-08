function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      escapeXml = __helpers.x,
      classAttr = __helpers.ca,
      attr = __helpers.a,
      escapeXmlAttr = __helpers.xa;

  return function render(data, out) {
    out.w("<div" +
      classAttr(data.className) +
      attr("class2", data.className, false) +
      " foo=\"a" +
      escapeXmlAttr(data.foo) +
      "b\" bar=\"a " +
      escapeXmlAttr(data.foo) +
      " b\" baz=\"a " +
      str(data.foo) +
      " b\" nested=\"a " +
      str(data.foo + ("nested " + data.bar)) +
      " b\"></div><div" +
      classAttr([
        "non",
        "empty",
        "array"
      ]) +
      "></div><div" +
      classAttr([]) +
      "></div>");
  };
}

(module.exports = require("marko").c(__filename)).c(create);
