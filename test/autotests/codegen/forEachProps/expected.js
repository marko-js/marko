function create(__markoHelpers) {
  var marko_forEachProp = __markoHelpers.fp;

  return function render(data, out) {
    marko_forEachProp(myObject, function(k, v) {
      console.log("k:", k, "v:", v);
    });
  };
}

module.exports = require("marko").c(__filename, create);
