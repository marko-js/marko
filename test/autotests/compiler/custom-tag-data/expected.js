function create(__markoHelpers) {
  var marko_loadTag = __markoHelpers.t,
      custom_tag_data_tag = marko_loadTag(require("./custom-tag-data-tag")),
      marko_merge = __markoHelpers.m;

  return function render(data, out) {
    custom_tag_data_tag({
        name: "Frank",
        age: 32
      }, out);

    custom_tag_data_tag({
        name: "Frank".toUpperCase(),
        age: 32
      }, out);

    custom_tag_data_tag(marko_merge({
        age: 10
      }, {
        name: "Frank",
        age: 32
      }), out);
  };
}

module.exports = require("marko/html").c(__filename, create);
