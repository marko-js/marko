function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      escapeXml = __helpers.x;

  return function render(data, out) {
    (function() {
      for (var i = 0; i <= myArray.length; i += 2) {
        console.log(i);
      }
    }());
  };
}

(module.exports = require("marko").c(__filename)).c(create);
