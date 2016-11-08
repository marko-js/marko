var template = require("marko/html").c(__filename);

module.exports = template;

function render(data, out) {
  data.renderBody(out);
}

template._ = render;
