var marko_template = require("marko/html").t(__filename);

module.exports = marko_template;

function render(data, out) {
  out.w("Hello John &amp; Suzy Invalid Entity: &b ; Valid Numeric Entity: &#34; Valid Hexadecimal Entity: &#x00A2;");
}

marko_template._ = render;
