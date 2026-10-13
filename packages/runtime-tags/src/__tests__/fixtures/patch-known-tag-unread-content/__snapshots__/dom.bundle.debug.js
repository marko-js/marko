// tags/static-child.marko
const $template$1 = "<span>static</span>";
const $walks$1 = "b";
const $setup$1 = () => {};
var static_child_default = /*@__PURE__*/ _template("__tests__/tags/static-child.marko", $template$1, "b");

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<p> </p>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&D l`)("b");
const $setup = () => {};
const $input_label = ($scope, input_label) => _text($scope["#text/1"], input_label);
const $input = ($scope, input) => $input_label($scope, input.label);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, 0, $input);
