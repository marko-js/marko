var template = require("marko/html").c(__filename);

module.exports = template;

var marko_helpers = require("marko/runtime/html/helpers"),
    marko_forEachProp = marko_helpers.fp;

function render(data, out) {
  marko_forEachProp(myObject, function(k, v) {
    console.log("k:", k, "v:", v);
  });
}

template._ = render;
