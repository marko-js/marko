// tags/card.marko
const $template$1 = "<section><button>clear</button><!></section>";
const $walks$1 = "D b%l";
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/1");
const $c = _let("c/5", ($scope) => $dynamicTag($scope, $scope.c));
const $input_content = $c;
const $setup__script = _script("__tests__/tags/card.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$c($scope, undefined);
}));
const $setup$1 = $setup__script;
const $input$1 = ($scope, input) => $input_content($scope, input.content);
var card_default = /*@__PURE__*/ _template("__tests__/tags/card.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $Inner_content__row_label = /*@__PURE__*/ _closure_get_patch("__tests__/template.marko_3_row_label#1:3/subscribe", "row_label/6", ($scope) => _text($scope["#text/0"], $scope._._.row_label), ($scope) => $scope._._, "__tests__/template.marko_1_row_label#3/subscribers", 0);
const $Inner_content__setup = $Inner_content__row_label;
const $Inner_content = _content("__tests__/template.marko_3*content", "<b> </b>", "D ", $Inner_content__setup);
_content_resume($Inner_content);
const $card_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $card_content__input_tag__OR__Inner = /*@__PURE__*/ _or_patch("__tests__/template.marko_2_input_tag#0:4_Inner#1/setup", 2, ($scope) => $card_content__dynamicTag($scope, $scope._._.input_tag, ($_) => ({ content: $scope.Inner })));
const $card_content__input_tag = /*@__PURE__*/ _closure_get_patch("__tests__/template.marko_2_input_tag#0:4/subscribe", "input_tag/5", $card_content__input_tag__OR__Inner, ($scope) => $scope._._, "__tests__/template.marko_0_input_tag#4/subscribers", 0);
const $card_content__Inner = /*@__PURE__*/ _const("Inner", $card_content__input_tag__OR__Inner);
const $card_content__setup = ($scope) => {
	$card_content__input_tag($scope);
	$card_content__Inner($scope, { content: $Inner_content($scope) });
};
const $card_content = /*@__PURE__*/ _content("__tests__/template.marko_2*content", "<!><!><!>", "b%", $card_content__setup);
const $for_content__setup = ($scope) => {
	$setup$1($scope["#childScope/0"]);
	$input_content($scope["#childScope/0"], $card_content($scope));
};
const $for_content__$params = ($scope, $params2) => $for_content__row_label($scope, $params2[0]?.label);
const $for_content__row_label__closure = /*@__PURE__*/ _closure($Inner_content__row_label);
const $for_content__row_label = /*@__PURE__*/ _const("row_label", $for_content__row_label__closure);
const $for = /*@__PURE__*/ _for_of("#text/0", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1), $for_content__setup, $for_content__$params);
const $input_rows = ($scope, input_rows) => $for($scope, [input_rows, "id"]);
const $input = ($scope, input) => {
	$input_rows($scope, input.rows);
	$input_tag($scope, input.tag);
};
const $input_tag__closure = /*@__PURE__*/ _closure($card_content__input_tag);
const $input_tag = /*@__PURE__*/ _const("input_tag", $input_tag__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);
