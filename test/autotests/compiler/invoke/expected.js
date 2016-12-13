var marko_template = require("marko/html").t(__filename);

module.exports = marko_template;

function render(data, out) {
  data.renderBody(out);
}

marko_template._ = render;
