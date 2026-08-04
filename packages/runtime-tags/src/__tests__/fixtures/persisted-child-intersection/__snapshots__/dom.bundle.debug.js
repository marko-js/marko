// tags/price-card.marko
const $template$1 = "<div><h2> </h2><button>+</button></div>";
const $walks$1 = "E l l";
const $input_label__OR__qty = /*@__PURE__*/ _fill_join("__tests__/tags/price-card.marko0", "input_label", /*@__PURE__*/ _or(6, ($scope) => _text($scope["#text/0"], $scope.input_label + " x" + $scope.qty)));
const $qty = /*@__PURE__*/ _let("qty/5", $input_label__OR__qty);
const $setup__script = _script("__tests__/tags/price-card.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$qty($scope, $scope.qty + 1);
}));
function $setup$1($scope) {
	$qty($scope, 1);
	$setup__script($scope);
}
const $input_label$1 = /*@__PURE__*/ _fill_const("__tests__/tags/price-card.marko0", "input_label", $input_label__OR__qty);
const $input$1 = ($scope, input) => $input_label$1($scope, input.label);
var price_card_default = /*@__PURE__*/ _template("__tests__/tags/price-card.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<main><h1> </h1>${_w0}</main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `E l/${_w0}&l`)($walks$1);
const $input_title = ($scope, input_title) => _text($scope["#text/0"], input_title);
function $setup($scope) {
	$setup$1($scope["#childScope/1"]);
}
const $input_label = ($scope, input_label) => $input_label$1($scope["#childScope/1"], input_label);
const $input = ($scope, input) => {
	$input_title($scope, input.title);
	$input_label($scope, input.label);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
