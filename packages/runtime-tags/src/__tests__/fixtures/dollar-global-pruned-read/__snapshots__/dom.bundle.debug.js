// tags/child.marko
const $template$1 = "<span>child</span>";
const $walks$1 = "b";
const $setup$1 = () => {};
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template$1, "b");

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<div>hi</div>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&b`)("b");
const $setup = () => {};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks);
