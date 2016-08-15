function create(__markoHelpers) {
  var marko_loadTemplate = __markoHelpers.l,
      __target = marko_loadTemplate(require.resolve("./target.marko"));

  return function render(data, out) {
    __target.render({}, out);
  };
}

(module.exports = require("marko").c(__filename)).c(create);
