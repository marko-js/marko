function create(__markoHelpers) {
  return function render(data, out) {
    (function() {
      for (var i = 0; i <= myArray.length; i += 2) {
        console.log(i);
      }
    })();
  };
}

(module.exports = require("marko").c(__filename)).c(create);
