// tags/baz.marko
const $template$1 = "<div></div>";
const $walks$1 = "b";
const $setup$1 = ($_) => {};
var baz_default = /*@__PURE__*/ _template("__tests__/tags/baz.marko", $template$1, "b");

// template.marko
const $template = $template$1;
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)("b");
const $setup = ($_) => {};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
