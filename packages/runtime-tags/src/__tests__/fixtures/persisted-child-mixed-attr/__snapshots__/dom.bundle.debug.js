// tags/price-card/index.marko
const $template$1 = "<p><!> x<!></p>";
const $walks$1 = "D%c%l";
const $setup$1 = () => {};
const $input_label$1 = ($scope, input_label) => _text($scope["#text/0"], input_label);
const $input_qty = ($scope, input_qty) => _text($scope["#text/1"], input_qty);
const $input$1 = ($scope, input) => {
	$input_label$1($scope, input.label);
	$input_qty($scope, input.qty);
};
var price_card_default = /*@__PURE__*/ _template("__tests__/tags/price-card/index.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<main>${_w0}<button>+</button></main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D/${_w0}& l`)($walks$1);
const $count = /*@__PURE__*/ _let("count/5", ($scope) => $input_qty($scope["#childScope/0"], $scope.count));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
const $input_label = ($scope, input_label) => $input_label$1($scope["#childScope/0"], input_label);
const $input = ($scope, input) => $input_label($scope, input.label);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
