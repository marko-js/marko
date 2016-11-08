var template = require("marko/html").c(__filename);

module.exports = template;

function render(data, out) {
  if (true) {
    console.log("hello");
  }
}

template._ = render;
