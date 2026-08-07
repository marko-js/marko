// tags/echo/index.marko
const $template$1 = "<em> </em>";
const $walks$1 = "D l";
const $setup$1 = () => {};
const $input_label$1 = ($scope, rest_label) => _text($scope["#text/0"], rest_label);
const $input2 = ($scope, input) => $input_label$1($scope, input?.label);
const $input$1 = $input2;
var echo_default = /*@__PURE__*/ _template("__tests__/tags/echo/index.marko", $template$1, "D l", $setup$1, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<main>${_w0}<button>+</button></main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D/${_w0}& l`)("D l");
const $input_label__OR__other = /*@__PURE__*/ _fill_join("__tests__/template.marko0", "input_label", /*@__PURE__*/ _or(6, ($scope) => $input$1($scope["#childScope/0"], {
	label: $scope.input_label,
	other: $scope.other
})));
const $other = /*@__PURE__*/ _let("other/5", $input_label__OR__other);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$other($scope, $scope.other + 1);
}));
function $setup($scope) {
	$other($scope, 0);
	$setup__script($scope);
}
const $input_label = /*@__PURE__*/ _fill_const("__tests__/template.marko0", "input_label", $input_label__OR__other);
const $input = ($scope, input) => $input_label($scope, input.label);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
