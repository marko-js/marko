// tags/duo/index.marko
const $template$1 = "<h2> </h2><p> </p>";
const $walks$1 = "D lD l";
const $setup$1 = () => {};
const $input_label = ($scope, input_label) => _text($scope["#text/0"], input_label);
const $input$1 = ($scope, input) => {
	_text($scope["#text/1"], JSON.stringify(input));
	$input_label($scope, input.label);
};
var duo_default = /*@__PURE__*/ _template("__tests__/tags/duo/index.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<main>${_w0}<button>+</button></main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D/${_w0}& l`)($walks$1);
const $input_title__OR__count = /*@__PURE__*/ _fill_join("__tests__/template.marko0", "input_title", /*@__PURE__*/ _or(6, ($scope) => $input$1($scope["#childScope/0"], {
	label: $scope.input_title,
	value: $scope.count
})));
const $count = /*@__PURE__*/ _let("count/5", $input_title__OR__count);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
const $input_title = /*@__PURE__*/ _fill_const("__tests__/template.marko0", "input_title", $input_title__OR__count);
const $input = ($scope, input) => $input_title($scope, input.title);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
