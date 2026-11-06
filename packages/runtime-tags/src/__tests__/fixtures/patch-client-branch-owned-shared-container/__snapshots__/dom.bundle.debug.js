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
const $card_content3__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $card_content3__input_tag__OR__A = /*@__PURE__*/ _or_patch("__tests__/template.marko_5_input_tag#0:5_A#2:2/setup", 1, ($scope) => $card_content3__dynamicTag($scope, $scope._._._.input_tag, ($_) => ({ content: $scope._.A })));
const $card_content3__input_tag = /*@__PURE__*/ _closure_get_patch("__tests__/template.marko_5_input_tag#0:5/subscribe", "input_tag/7", $card_content3__input_tag__OR__A, ($scope) => $scope._._._, "__tests__/template.marko_0_input_tag#5/subscribers", 1);
const $card_content3__setup = ($scope) => {
	$card_content3__input_tag($scope);
	$card_content3__A($scope);
};
const $card_content3__A = /*@__PURE__*/ _closure_get("A/8", $card_content3__input_tag__OR__A);
const $card_content3 = /*@__PURE__*/ _content("__tests__/template.marko_5*content", "<!><!><!>", "b%", $card_content3__setup);
const $card_content2__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $card_content2__input_tag__OR__A = /*@__PURE__*/ _or_patch("__tests__/template.marko_4_input_tag#0:5_A#2:2/setup", 1, ($scope) => $card_content2__dynamicTag($scope, $scope._._._.input_tag, ($_) => ({ content: $scope._.A })));
const $card_content2__input_tag = /*@__PURE__*/ _closure_get_patch("__tests__/template.marko_4_input_tag#0:5/subscribe", "input_tag/7", $card_content2__input_tag__OR__A, ($scope) => $scope._._._, "__tests__/template.marko_0_input_tag#5/subscribers", 0);
const $card_content2__setup = ($scope) => {
	$card_content2__input_tag($scope);
	$card_content2__A($scope);
};
const $card_content2__A = /*@__PURE__*/ _closure_get("A/8", $card_content2__input_tag__OR__A);
const $card_content2 = /*@__PURE__*/ _content("__tests__/template.marko_4*content", "<!><!><!>", "b%", $card_content2__setup);
const $A_content__input_label = /*@__PURE__*/ _closure_get_patch("__tests__/template.marko_3_input_label#0:4/subscribe", "input_label/6", ($scope) => _text($scope["#text/0"], $scope._._._.input_label), ($scope) => $scope._._._, "__tests__/template.marko_0_input_label#4/subscribers", 0);
const $A_content__setup = $A_content__input_label;
const $A_content = _content("__tests__/template.marko_3*content", "<b> </b>", "D ", $A_content__setup);
const $card_content__A = /*@__PURE__*/ _const("A");
const $card_content__setup = ($scope) => {
	$setup$1($scope["#childScope/0"]);
	$input_content($scope["#childScope/0"], $card_content2($scope));
	$setup$1($scope["#childScope/1"]);
	$input_content($scope["#childScope/1"], $card_content3($scope));
	$card_content__A($scope, { content: $A_content($scope) });
};
const $card_content = _content("__tests__/template.marko_2*content", /*@__PURE__*/ ((_w0, _w1) => `${_w0}${_w1}`)($template$1, $template$1), /*@__PURE__*/ ((_w0, _w1) => `/${_w0}&/${_w1}&`)($walks$1, $walks$1), $card_content__setup);
const $if_content__setup = ($scope) => {
	$setup$1($scope["#childScope/0"]);
	$input_content($scope["#childScope/0"], $card_content($scope));
};
const $if = /*@__PURE__*/ _if("#text/0", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_label($scope, input.label);
	$input_tag($scope, input.tag);
};
const $input_label__closure = /*@__PURE__*/ _closure($A_content__input_label);
const $input_label = /*@__PURE__*/ _const("input_label", $input_label__closure);
const $input_tag__closure = /*@__PURE__*/ _closure($card_content2__input_tag, $card_content3__input_tag);
const $input_tag = /*@__PURE__*/ _const("input_tag", $input_tag__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);
