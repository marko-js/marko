var marko_template = module.exports = require("marko/html").t(__filename),
    marko_forEachProp = require("marko/runtime/helper-forEachProperty");

function render(data, out) {
  marko_forEachProp(myObject, function(k, v) {
    console.log("k:", k, "v:", v);
  });
}

marko_template._ = render;
