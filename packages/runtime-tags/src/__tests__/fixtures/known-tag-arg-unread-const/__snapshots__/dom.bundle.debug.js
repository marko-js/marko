// tags/child.marko
const $template$1 = "<div>ok</div>";
const $walks$1 = "b";
const $setup$1 = ($_) => {};
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template$1, "b");

// template.marko
const $template = $template$1;
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)("b");
const $setup = ($_) => {};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks);
