// tags/price-card.marko
const $template$1 = "<div><h2> </h2><button class=bump>+</button></div>";
const $walks$1 = "E l l";
const $input_label__OR__qty = /*@__PURE__*/ _fill_join("__tests__/tags/price-card.marko0", "input_label", /*@__PURE__*/ _or(6, ($scope) => _text($scope["#text/0"], $scope.input_label + " x" + $scope.qty)));
const $qty = /*@__PURE__*/ _let("qty/5", $input_label__OR__qty);
const $setup__script$1 = _script("__tests__/tags/price-card.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$qty($scope, $scope.qty + 1);
}));
function $setup$1($scope) {
	$qty($scope, 1);
	$setup__script$1($scope);
}
const $input_label$1 = /*@__PURE__*/ _fill_const("__tests__/tags/price-card.marko0", "input_label", $input_label__OR__qty);
const $input$1 = ($scope, input) => $input_label$1($scope, input.label);
var price_card_default = /*@__PURE__*/ _template("__tests__/tags/price-card.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<main><h1> </h1><button class=read>read</button></main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `0${_w0}&E l l`)($walks$1);
const $card = _var_resume("__tests__/template.marko_0_card/var", /*@__PURE__*/ _const("card"));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/3"], "click", function(ev) {
	ev.target.dataset.card = typeof $scope.card;
}));
function $setup($scope) {
	_var($scope, "#childScope/0", $card);
	$setup$1($scope["#childScope/0"]);
	$setup__script($scope);
}
const $input_label = ($scope, input_label) => $input_label$1($scope["#childScope/0"], input_label);
const $input_title = ($scope, input_title) => _text($scope["#text/2"], input_title);
const $input = ($scope, input) => {
	$input_label($scope, input.label);
	$input_title($scope, input.title);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
