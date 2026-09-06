// tags/mixer/index.marko
const $template$1 = "<button>bump</button>";
const $walks$1 = " b";
const $input_value__OR__local = /*@__PURE__*/ _fill_join("__tests__/tags/mixer/index.marko1", "local", /*@__PURE__*/ _fill_join("__tests__/tags/mixer/index.marko0", "input_value", /*@__PURE__*/ _or(5, ($scope) => _return($scope, $scope.input_value + $scope.local))));
const $local = /*@__PURE__*/ _fill_let("__tests__/tags/mixer/index.marko1", "local/4", $input_value__OR__local);
const $setup__script = _script("__tests__/tags/mixer/index.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$local($scope, +$scope.local + 1);
}));
function $setup$1($scope) {
	$local($scope, 0);
	$setup__script($scope);
}
const $input_value = /*@__PURE__*/ _fill_const("__tests__/tags/mixer/index.marko0", "input_value", $input_value__OR__local);
const $input$1 = ($scope, input) => $input_value($scope, input.value);
var mixer_default = /*@__PURE__*/ _template("__tests__/tags/mixer/index.marko", $template$1, " b", $setup$1, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<main>${_w0}<p> </p></main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D0${_w0}&D m`)(" b");
const $v = _var_resume("__tests__/template.marko_0_v#6/var", ($scope, v) => _text($scope["#text/2"], v));
function $setup($scope) {
	_var($scope, "#childScope/0", $v);
	$setup$1($scope["#childScope/0"]);
}
const $input_n = ($scope, input_n) => $input_value($scope["#childScope/0"], input_n);
const $input = ($scope, input) => $input_n($scope, input.n);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
