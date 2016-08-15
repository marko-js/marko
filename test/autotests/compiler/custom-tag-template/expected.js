function create(__markoHelpers) {
  var marko_loadTemplate = __markoHelpers.l,
      __hello = marko_loadTemplate(require.resolve("./hello.marko"));

  return function render(data, out) {
    __hello.render({
        name: "Frank"
      }, out);
  };
}

(module.exports = require("marko").c(__filename)).c(create);
