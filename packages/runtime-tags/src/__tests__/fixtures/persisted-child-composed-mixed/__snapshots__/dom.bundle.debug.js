// tags/relay/tags/leaf/index.marko
const $template$2 = "<b> </b>";
const $walks$2 = "D l";
const $setup$2 = () => {};
const $input_text = ($scope, input_text) => _text($scope["#text/0"], input_text);
const $input$2 = ($scope, input) => $input_text($scope, input.text);
var leaf_default = /*@__PURE__*/ _template("__tests__/tags/relay/tags/leaf/index.marko", $template$2, "D l", 0, $input$2);

// tags/relay/index.marko
const $template$1 = /*@__PURE__*/ ((_w0) => `<section>${_w0}</section>`)($template$2);
const $walks$1 = /*@__PURE__*/ ((_w0) => `D/${_w0}&l`)("D l");
const $setup$1 = () => {};
const $input_val = ($scope, input_val) => $input_text($scope["#childScope/0"], input_val);
const $input$1 = ($scope, input) => $input_val($scope, input.val);
var relay_default = /*@__PURE__*/ _template("__tests__/tags/relay/index.marko", $template$1, $walks$1, 0, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<main>${_w0}<button>+</button></main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D/${_w0}& l`)($walks$1);
const $input_base__OR__count = /*@__PURE__*/ _fill_join("__tests__/template.marko0", "input_base", /*@__PURE__*/ _or(6, ($scope) => $input_val($scope["#childScope/0"], $scope.input_base + $scope.count)));
const $count = /*@__PURE__*/ _let("count/5", $input_base__OR__count);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
const $input_base = _fill_const("__tests__/template.marko0", "input_base", $input_base__OR__count);
const $input = ($scope, input) => $input_base($scope, input.base);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
