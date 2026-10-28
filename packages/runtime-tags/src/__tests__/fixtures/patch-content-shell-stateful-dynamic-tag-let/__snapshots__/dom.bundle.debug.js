// card.marko
const $template$1 = "<section><!></section>";
const $walks$1 = "D%l";
const $setup$1 = ($_) => {};
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/0");
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_content = $dynamicTag;
const $input$1 = ($scope, input) => $input_content($scope, input.content);
var card_default = /*@__PURE__*/ _template("__tests__/card.marko", $template$1, "D%l", 0, $input$1);

// template.marko
const $template = $template$1;
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D%l");
const $inputonpdiv_content__input_label = /*@__PURE__*/ _fill_join_closure("__tests__/template.marko_fill1", "input_label", /*@__PURE__*/ _closure_get("input_label/6", ($scope) => _text($scope["#text/0"], $scope._._.input_label), ($scope) => $scope._._, "__tests__/template.marko_2_input_label#0:4/subscribe"), 0);
const $inputonpdiv_content__setup = $inputonpdiv_content__input_label;
const $inputonpdiv_content = /*@__PURE__*/ _content("__tests__/template.marko_2*content", " ", " ", $inputonpdiv_content__setup);
const $Card_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0", $inputonpdiv_content);
const $Card_content__input_on__OR__n = /*@__PURE__*/ _fill_join_subscribers("__tests__/template.marko_fill0", "input_on", /*@__PURE__*/ _or(4, ($scope) => $Card_content__dynamicTag($scope, $scope._.input_on ? "p" : "div", ($_) => ({ "data-n": $scope.n }))), "input_on/5", 0);
const $Card_content__input_on = /*@__PURE__*/ _closure_get("input_on/5", $Card_content__input_on__OR__n, 0, "__tests__/template.marko_1_input_on#0:3/subscribe");
const $Card_content__n = _let("n/3", ($scope) => {
	_text($scope["#text/2"], $scope.n);
	$Card_content__input_on__OR__n($scope);
});
const $Card_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _on($scope["#button/1"], "click", function() {
	$Card_content__n($scope, +$scope.n + 1);
}));
const $Card_content__setup = ($scope) => {
	$Card_content__input_on($scope);
	$Card_content__n($scope, 0);
	$Card_content__setup__script($scope);
};
const $Card_content = /*@__PURE__*/ _content("__tests__/template.marko_1*content", "<!><!><button> </button>", "b%b D ", $Card_content__setup);
function $setup($scope) {
	$input_content_direct($scope["#childScope/0"], $Card_content($scope));
}
const $input = ($scope, input) => {
	$input_on($scope, input.on);
	$input_label($scope, input.label);
};
const $input_on__closure = /*@__PURE__*/ _closure($Card_content__input_on);
const $input_on = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_on", $input_on__closure);
const $input_label__closure = /*@__PURE__*/ _closure($inputonpdiv_content__input_label);
const $input_label = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill1", "input_label", $input_label__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
