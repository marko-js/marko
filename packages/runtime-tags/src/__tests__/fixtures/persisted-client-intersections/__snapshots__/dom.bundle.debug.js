// tags/price-card.marko
const $template$3 = "<section><h2> </h2><button>+</button></section>";
const $walks$3 = "E l l";
const $input_label__OR__qty = /*@__PURE__*/ _fill_join("__tests__/tags/price-card.marko1", "qty", /*@__PURE__*/ _fill_join("__tests__/tags/price-card.marko0", "input_label", /*@__PURE__*/ _or(6, ($scope) => _text($scope["#text/0"], $scope.input_label + " x" + $scope.qty))));
const $qty = /*@__PURE__*/ _fill_let("__tests__/tags/price-card.marko1", "qty/5", $input_label__OR__qty);
const $setup__script$1 = _script("__tests__/tags/price-card.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$qty($scope, +$scope.qty + 1);
}));
function $setup$3($scope) {
	$qty($scope, 1);
	$setup__script$1($scope);
}
const $input_label$1 = /*@__PURE__*/ _fill_const("__tests__/tags/price-card.marko0", "input_label", $input_label__OR__qty);
const $input$3 = ($scope, input) => $input_label$1($scope, input.label);
var price_card_default = /*@__PURE__*/ _template("__tests__/tags/price-card.marko", $template$3, $walks$3, $setup$3, $input$3);

// tags/promo-tag.marko
const $template$2 = "<aside> </aside><button class=promo>seen</button>";
const $walks$2 = "D l b";
const $input_text__OR__seen = /*@__PURE__*/ _fill_join("__tests__/tags/promo-tag.marko1", "seen", /*@__PURE__*/ _fill_join("__tests__/tags/promo-tag.marko0", "input_text", /*@__PURE__*/ _or(6, ($scope) => _text($scope["#text/0"], $scope.input_text + " (" + $scope.seen + ")"))));
const $seen = /*@__PURE__*/ _fill_let("__tests__/tags/promo-tag.marko1", "seen/5", $input_text__OR__seen);
const $setup__script = _script("__tests__/tags/promo-tag.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$seen($scope, +$scope.seen + 1);
}));
function $setup$2($scope) {
	$seen($scope, 0);
	$setup__script($scope);
}
const $input_text = /*@__PURE__*/ _fill_const("__tests__/tags/promo-tag.marko0", "input_text", $input_text__OR__seen);
const $input$2 = ($scope, input) => $input_text($scope, input.text);
var promo_tag_default = /*@__PURE__*/ _template("__tests__/tags/promo-tag.marko", $template$2, $walks$2, $setup$2, $input$2);

// tags/site-footer.marko
const $template$1 = "<footer> </footer>";
const $walks$1 = "D l";
const $input_year__OR__frozen = /*@__PURE__*/ _or(5, ($scope) => _text($scope["#text/0"], $scope.input_year + $scope.frozen));
const $frozen = /*@__PURE__*/ _let("frozen/4", $input_year__OR__frozen);
function $setup$1($scope) {
	$frozen($scope, 0);
}
const $input_year$1 = /*@__PURE__*/ _const("input_year", $input_year__OR__frozen);
const $input$1 = ($scope, input) => $input_year$1($scope, input.year);
var site_footer_default = /*@__PURE__*/ _template("__tests__/tags/site-footer.marko", $template$1, "D l", $setup$1, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0, _w1, _w2) => `<main><h1> </h1><p> </p>${_w0}${_w1}${_w2}</main>`)($template$3, $template$2, $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1, _w2) => `E l D l/${_w0}&/${_w1}&/${_w2}&l`)($walks$3, $walks$2, "D l");
const $input_title = ($scope, input_title) => _text($scope["#text/0"], input_title);
function $setup($scope) {
	_attr($scope["#p/1"], "title", $scope.$global.locale);
	_text($scope["#text/2"], $scope.$global.brand);
	$setup$3($scope["#childScope/3"]);
	$setup$2($scope["#childScope/4"]);
	$input_text($scope["#childScope/4"], "Sale");
	$setup$1($scope["#childScope/5"]);
}
const $input_label = ($scope, input_label) => $input_label$1($scope["#childScope/3"], input_label);
const $input_year = ($scope, input_year) => $input_year$1($scope["#childScope/5"], input_year);
const $input = ($scope, input) => {
	$input_title($scope, input.title);
	$input_label($scope, input.label);
	$input_year($scope, input.year);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
