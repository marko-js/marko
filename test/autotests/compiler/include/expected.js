function create(__markoHelpers) {
  var marko_loadTemplate = __markoHelpers.l,
      target_template = marko_loadTemplate(require.resolve("./target.marko"));

  return function render(data, out) {
    target_template.render({}, out);
  };
}

module.exports = require("marko/html").c(__filename, create);
