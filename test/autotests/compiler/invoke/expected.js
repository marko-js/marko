var marko_template = module.exports = require("marko/html").t(__filename);

function render(data, out) {
  data.renderBody(out);
}

marko_template._ = render;
