function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      escapeXml = __helpers.x,
      escapeXmlAttr = __helpers.xa;

  return function render(data, out) {
    out.w("<div foo=\"Hello " +
      escapeXmlAttr(data.name) +
      "\"></div>");

    var foo = "Hello " + data.name;
  };
}

(module.exports = require("marko").c(__filename)).c(create);
