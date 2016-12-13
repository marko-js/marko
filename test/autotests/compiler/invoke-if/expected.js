var marko_template = require("marko/html").t(__filename);

module.exports = marko_template;

function render(data, out) {
  if (true) {
    console.log("hello");
  }
}

marko_template._ = render;
