// template.marko
const $template = "Hello John &amp; Suzy Invalid Entity: &b ; Valid Numeric Entity: &#34; Valid Hexadecimal Entity: &#x00A2;";
const $walks = "b";
const $setup = () => {};
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, "b", $setup);
