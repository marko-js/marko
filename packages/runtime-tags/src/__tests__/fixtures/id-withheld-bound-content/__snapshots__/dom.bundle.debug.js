// tags/card.marko
const $template$1 = "<button>clear</button><!><!><!>";
const $walks$1 = " b%b%c";
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/1");
const $dynamicTag2 = /*@__PURE__*/ _dynamic_tag("#text/2");
const $c = /*@__PURE__*/ _let("c/6", ($scope) => {
	$dynamicTag($scope, $scope.c);
	$dynamicTag2($scope, $scope.c);
});
const $input_content = $c;
const $setup__script = _script("__tests__/tags/card.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$c($scope, undefined);
}));
const $setup$1 = $setup__script;
const $input$1 = ($scope, input) => $input_content($scope, input.content);
var card_default = /*@__PURE__*/ _template("__tests__/tags/card.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&b`)($walks$1);
const $Inner_content__input_label = /*@__PURE__*/ _closure_get("input_label/5", ($scope) => _text($scope["#text/2"], $scope._._.input_label), ($scope) => $scope._._, "__tests__/template.marko_2_input_label#0:3/subscribe");
const $Inner_content__uid = ($scope, uid) => {
	_attr($scope["#input/0"], "id", uid);
	_attr($scope["#label/1"], "for", uid);
};
const $Inner_content__setup = ($scope) => {
	$Inner_content__input_label($scope);
	$Inner_content__uid($scope, _id($scope));
};
const $Inner_content = _content("__tests__/template.marko_2*content", "<input><label> </label>", " b D ", $Inner_content__setup);
const $card_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $card_content__input_on__OR__Inner = /*@__PURE__*/ _or(2, ($scope) => $card_content__dynamicTag($scope, $scope._.input_on ? $scope.Inner : null));
const $card_content__input_on = /*@__PURE__*/ _closure_get("input_on/6", $card_content__input_on__OR__Inner, 0, "__tests__/template.marko_1_input_on#0:4/subscribe");
const $card_content__Inner = /*@__PURE__*/ _const("Inner", $card_content__input_on__OR__Inner);
const $card_content__setup = ($scope) => {
	$card_content__input_on($scope);
	$card_content__Inner($scope, { content: $Inner_content($scope) });
};
const $card_content = /*@__PURE__*/ _content("__tests__/template.marko_1*content", "<!><!><!>", "b%", $card_content__setup);
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
	$input_content($scope["#childScope/0"], $card_content($scope));
}
const $input = ($scope, input) => {
	$input_label($scope, input.label);
	$input_on($scope, input.on);
};
const $input_label__closure = /*@__PURE__*/ _closure($Inner_content__input_label);
const $input_label = /*@__PURE__*/ _const("input_label", $input_label__closure);
const $input_on__closure = /*@__PURE__*/ _closure($card_content__input_on);
const $input_on = /*@__PURE__*/ _const("input_on", $input_on__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
