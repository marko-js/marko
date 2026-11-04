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
const $await_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $await_content__input_tag__OR__Inner = /*@__PURE__*/ _or_patch("__tests__/template.marko_4_input_tag#0:5_Inner#2:2/setup", 2, ($scope) => $await_content__dynamicTag($scope, $scope._._._.input_tag, ($_) => ({ content: $scope._.Inner })));
const $await_content__input_tag = /*@__PURE__*/ _closure_get_patch("__tests__/template.marko_4_input_tag#0:5/subscribe", "input_tag/8", $await_content__input_tag__OR__Inner, ($scope) => $scope._._._, "__tests__/template.marko_0_input_tag#5/subscribers", 1);
const $await_content__setup = ($scope) => {
	$await_content__input_tag($scope);
	$await_content__Inner($scope);
};
const $await_content__Inner = /*@__PURE__*/ _closure_get("Inner/10", $await_content__input_tag__OR__Inner);
const $await_content__$params = ($scope, $params2) => _text($scope["#text/1"], $params2[0]);
const $Inner_content__input_label = /*@__PURE__*/ _closure_get_patch("__tests__/template.marko_3_input_label#0:4/subscribe", "input_label/7", ($scope) => _text($scope["#text/1"], $scope._._._.input_label), ($scope) => $scope._._._, "__tests__/template.marko_0_input_label#4/subscribers", 0);
const $Inner_content__setup__script = _script("__tests__/template.marko_3", ($scope) => _on($scope["#b/0"], "click", function() {
	console.log("inner", $scope._._._.input_label);
}));
const $Inner_content__setup = ($scope) => {
	$Inner_content__input_label($scope);
	$Inner_content__setup__script($scope);
};
const $Inner_content = _content("__tests__/template.marko_3*content", "<b> </b>", " D ", $Inner_content__setup);
const $card_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $card_content__input_tag__OR__Inner = /*@__PURE__*/ _or_patch("__tests__/template.marko_2_input_tag#0:5_Inner#2/setup", 3, ($scope) => $card_content__dynamicTag($scope, $scope._._.input_tag, ($_) => ({ content: $scope.Inner })));
const $card_content__input_tag = /*@__PURE__*/ _closure_get_patch("__tests__/template.marko_2_input_tag#0:5/subscribe", "input_tag/8", $card_content__input_tag__OR__Inner, ($scope) => $scope._._, "__tests__/template.marko_0_input_tag#5/subscribers", 0);
const $card_content__Inner = /*@__PURE__*/ _const("Inner", $card_content__input_tag__OR__Inner);
const $card_content__setup = ($scope) => {
	$card_content__input_tag($scope);
	$card_content__input_p($scope);
	$await_content($scope);
	$card_content__Inner($scope, { content: $Inner_content($scope) });
};
const $await_content = /*@__PURE__*/ _await_content("#text/1", "<!><!><!>", "b%b%", $await_content__setup);
const $card_content__await_promise = /*@__PURE__*/ _await_promise("#text/1", $await_content__$params);
const $card_content__input_p = /*@__PURE__*/ _closure_get_patch("__tests__/template.marko_2_input_p#0:6/subscribe", "input_p/9", ($scope) => $card_content__await_promise($scope, $scope._._.input_p), ($scope) => $scope._._, "__tests__/template.marko_0_input_p#6/subscribers", 0);
const $card_content = /*@__PURE__*/ _content("__tests__/template.marko_2*content", "<!><!><!><!>", "b%b%", $card_content__setup);
const $if_content__setup = ($scope) => {
	$setup$1($scope["#childScope/0"]);
	$input_content($scope["#childScope/0"], $card_content($scope));
};
const $if = /*@__PURE__*/ _if("#text/0", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_label($scope, input.label);
	$input_show($scope, input.show);
	$input_tag($scope, input.tag);
	$input_p($scope, input.p);
};
const $input_label__closure = /*@__PURE__*/ _closure($Inner_content__input_label);
const $input_label = /*@__PURE__*/ _const("input_label", $input_label__closure);
const $input_tag__closure = /*@__PURE__*/ _closure($card_content__input_tag, $await_content__input_tag);
const $input_tag = /*@__PURE__*/ _const("input_tag", $input_tag__closure);
const $input_p__closure = /*@__PURE__*/ _closure($card_content__input_p);
const $input_p = /*@__PURE__*/ _const("input_p", $input_p__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);
