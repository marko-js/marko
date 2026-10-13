// tags/child.marko
const $template$1 = "<b>child</b>";
const $walks$1 = "b";
const $setup$1 = () => {};
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template$1, "b");

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = () => {};
const $if = /*@__PURE__*/ _if("#text/0", /*@__PURE__*/ ((_w0, _w1) => `${_w0}${_w1}`)($template$1, $template$1), /*@__PURE__*/ ((_w0, _w1) => `/${_w0}&/${_w1}&`)("b", "b"));
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => $input_show($scope, input.show);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);
