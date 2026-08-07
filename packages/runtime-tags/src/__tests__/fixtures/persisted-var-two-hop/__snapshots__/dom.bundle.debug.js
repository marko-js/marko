// tags/doubler/index.marko
const $template$2 = "<span>x2</span>";
const $walks$2 = "b";
const $setup$2 = () => {};
const $double$1 = /*@__PURE__*/ _const("double", ($scope) => _return($scope, $scope.double));
const $input_value$1 = ($scope, input_value) => $double$1($scope, input_value * 2);
const $input$1 = ($scope, input) => $input_value$1($scope, input.value);
var doubler_default = /*@__PURE__*/ _template("__tests__/tags/doubler/index.marko", $template$2, "b", $setup$2, $input$1);

// tags/shower/index.marko
const $template$1 = "<em> </em>";
const $walks$1 = "D l";
const $setup$1 = () => {};
const $input_value = ($scope, input_value) => _text($scope["#text/0"], input_value);
const $input = ($scope, input) => $input_value($scope, input.value);
var shower_default = /*@__PURE__*/ _template("__tests__/tags/shower/index.marko", $template$1, "D l", $setup$1, $input);

// template.marko
const $template = /*@__PURE__*/ ((_w0, _w1) => `<main>${_w0}${_w1}<button>+</button></main>`)($template$2, $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1) => `D0${_w0}&/${_w1}& l`)("b", "D l");
const $count = /*@__PURE__*/ _let("count/4", ($scope) => $input_value$1($scope["#childScope/0"], $scope.count));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/3"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	_var($scope, "#childScope/0", $double);
	$count($scope, 1);
	$setup__script($scope);
}
const $double = _var_resume("__tests__/template.marko_0_double/var", ($scope, double) => $input_value($scope["#childScope/2"], double));
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
