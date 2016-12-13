var marko_template = require("marko/html").t(__filename);

module.exports = marko_template;

var marko_helpers = require("marko/runtime/html/helpers"),
    marko_forEachProp = marko_helpers.fp;

function render(data, out) {
  marko_forEachProp(myObject, function(k, v) {
    console.log("k:", k, "v:", v);
  });
}

marko_template._ = render;
