function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      escapeXml = __helpers.x,
      forEachProp = __helpers.fp;

  return function render(data, out) {
    forEachProp(myObject, function(k, v) {
      console.log("k:", k, "v:", v);
    });
  };
}

(module.exports = require("marko").c(__filename)).c(create);
