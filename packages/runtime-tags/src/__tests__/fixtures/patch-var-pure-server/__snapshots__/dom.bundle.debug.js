// tags/doubler/index.marko
const $template$2 = "<span>x2</span>";
const $walks$2 = "b";
const $setup$2 = () => {};
const $double$1 = /*@__PURE__*/ _const("double", ($scope) => _return($scope, $scope.double));
const $input_value = ($scope, input_value) => $double$1($scope, input_value * 2);
const $input$2 = ($scope, input) => $input_value($scope, input.value);
var doubler_default = /*@__PURE__*/ _template("__tests__/tags/doubler/index.marko", $template$2, "b", 0, $input$2);

// tags/labeler/index.marko
const $template$1 = "<span>fmt</span>";
const $walks$1 = "b";
const $setup$1 = () => {};
const $input_title = /*@__PURE__*/ _const("input_title", ($scope) => _return($scope, "[" + $scope.input_title + "]"));
const $input$1 = ($scope, input) => $input_title($scope, input.title);
var labeler_default = /*@__PURE__*/ _template("__tests__/tags/labeler/index.marko", $template$1, "b", 0, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0, _w1) => `<main>${_w0}${_w1}</main>`)($template$2, $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1) => `D0${_w0}&/${_w1}&l`)("b", "b");
const $double = _var_resume("__tests__/template.marko_0_double#6/var", ($scope, double) => $input_title($scope["#childScope/2"], double));
function $setup($scope) {
	_var($scope, "#childScope/0", $double);
}
const $input_n = ($scope, input_n) => $input_value($scope["#childScope/0"], input_n);
const $input = ($scope, input) => $input_n($scope, input.n);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
