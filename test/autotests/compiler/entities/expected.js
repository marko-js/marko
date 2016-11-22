var template = require("marko/html").c(__filename);

module.exports = template;

function render(data, out) {
  out.w("Hello John &amp; Suzy Invalid Entity: &b ; Valid Numeric Entity: &#34; Valid Hexadecimal Entity: &#x00A2;");
}

template._ = render;
