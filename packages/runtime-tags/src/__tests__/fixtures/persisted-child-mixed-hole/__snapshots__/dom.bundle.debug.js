// tags/combo/index.marko
const $template$1 = "<p> </p>";
const $walks$1 = "D l";
const $setup$1 = () => {};
const $input_label__OR__input_qty = /*@__PURE__*/ _or(5, ($scope) => _text($scope["#text/0"], $scope.input_label + $scope.input_qty));
const $input_label = /*@__PURE__*/ _const("input_label", $input_label__OR__input_qty);
const $input_qty = /*@__PURE__*/ _const("input_qty", $input_label__OR__input_qty);
const $input$1 = ($scope, input) => {
	$input_label($scope, input.label);
	$input_qty($scope, input.qty);
};
var combo_default = /*@__PURE__*/ _template("__tests__/tags/combo/index.marko", $template$1, "D l", 0, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<main>${_w0}<button>+</button></main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D/${_w0}& l`)("D l");
const $count = /*@__PURE__*/ _let("count/5", ($scope) => $input_qty($scope["#childScope/0"], $scope.count));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
const $input_title = _fill_const("__tests__/template.marko0", "input_title", ($scope) => $input_label($scope["#childScope/0"], $scope.input_title));
const $input = ($scope, input) => $input_title($scope, input.title);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
