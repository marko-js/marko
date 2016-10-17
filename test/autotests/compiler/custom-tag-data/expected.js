function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      escapeXml = __helpers.x,
      __loadTag = __helpers.t,
      custom_tag_data_tag = __loadTag(require("./custom-tag-data-tag")),
      __merge = __helpers.m;

  return function render(data, out) {
    custom_tag_data_tag({
        name: "Frank",
        age: 32
      }, out);

    custom_tag_data_tag({
        name: "Frank".toUpperCase(),
        age: 32
      }, out);

    custom_tag_data_tag(__merge({
        age: 10
      }, {
        name: "Frank",
        age: 32
      }), out);
  };
}

(module.exports = require("marko").c(__filename)).c(create);
