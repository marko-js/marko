// tags/dump/index.marko
const $template$1 = "<p> </p>";
const $walks$1 = "D l";
const $setup$1 = () => {};
const $input$1 = ($scope, input) => _text($scope["#text/0"], input.format(input.value));
var dump_default = /*@__PURE__*/ _template("__tests__/tags/dump/index.marko", $template$1, "D l", 0, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<main>${_w0}<button>+</button></main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D/${_w0}& l`)("D l");
const $input_suffix__OR__count = /*@__PURE__*/ _fill_join("__tests__/template.marko0", "input_suffix", /*@__PURE__*/ _or(6, ($scope) => $input$1($scope["#childScope/0"], {
	value: $scope.count,
	format: (v) => v + $scope.input_suffix
})));
const $count = /*@__PURE__*/ _let("count/5", $input_suffix__OR__count);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
const $input_suffix = _fill_const("__tests__/template.marko0", "input_suffix", $input_suffix__OR__count);
const $input = ($scope, input) => $input_suffix($scope, input.suffix);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
