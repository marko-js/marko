function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      escapeXml = __helpers.x,
      __loadTag = __helpers.t,
      custom_tag_data = __loadTag(require("./custom-tag-data-tag")),
      __merge = __helpers.m;

  return function render(data, out) {
    custom_tag_data({
        name: "Frank",
        age: 32
      }, out);

    custom_tag_data({
        name: "Frank".toUpperCase(),
        age: 32
      }, out);

    custom_tag_data(__merge({
        age: 10
      }, {
        name: "Frank",
        age: 32
      }), out);
  };
}

(module.exports = require("marko").c(__filename)).c(create);
