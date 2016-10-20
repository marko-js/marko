function create(__markoHelpers) {
  return function render(data, out) {
    out.w("Hello John &amp; Suzy Invalid Entity: &b ; Valid Numeric Entity: &#34; Valid Hexadecimal Entity: &#x00A2;");
  };
}

module.exports = require("marko").c(__filename, create);
