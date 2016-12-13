var marko_template = module.exports = require("marko/html").t(__filename);

function render(data, out) {
  if (true) {
    console.log("hello");
  }
}

marko_template._ = render;
