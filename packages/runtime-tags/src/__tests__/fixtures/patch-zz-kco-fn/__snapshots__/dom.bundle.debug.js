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
const $inputtag_content__input_label = /*@__PURE__*/ _closure_get_patch("__tests__/template.marko_3_input_label#0:5/subscribe", "input_label/7", ($scope) => _text($scope["#text/0"], $scope._._._.input_label), ($scope) => $scope._._._, "__tests__/template.marko_0_input_label#5/subscribers", 1);
const $inputtag_content__setup = $inputtag_content__input_label;
const $inputtag_content = _content("__tests__/template.marko_3*content", " ", " ", $inputtag_content__setup);
const $card_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0", $inputtag_content);
const $card_content__input_tag__OR__input_label = /*@__PURE__*/ _or_patch("__tests__/template.marko_2_input_tag#0:4_input_label#0:5/setup", 1, ($scope) => $card_content__dynamicTag($scope, $scope._._.input_tag, ($_) => ({ onClick: $onClick($scope) })));
const $card_content__input_tag = /*@__PURE__*/ _closure_get_patch("__tests__/template.marko_2_input_tag#0:4/subscribe", "input_tag/6", $card_content__input_tag__OR__input_label, ($scope) => $scope._._, "__tests__/template.marko_0_input_tag#4/subscribers", 0);
const $card_content__setup = ($scope) => {
	$card_content__input_tag($scope);
	$card_content__input_label($scope);
};
const $card_content__input_label = /*@__PURE__*/ _closure_get_patch("__tests__/template.marko_2_input_label#0:5/subscribe", "input_label/7", $card_content__input_tag__OR__input_label, ($scope) => $scope._._, "__tests__/template.marko_0_input_label#5/subscribers", 0);
const $card_content = /*@__PURE__*/ _content("__tests__/template.marko_2*content", "<!><!><!>", "b%", $card_content__setup);
const $if_content__setup = ($scope) => {
	$setup$1($scope["#childScope/0"]);
	$input_content($scope["#childScope/0"], $card_content($scope));
};
const $if = /*@__PURE__*/ _if("#text/0", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_tag($scope, input.tag);
	$input_label($scope, input.label);
};
const $input_tag__closure = /*@__PURE__*/ _closure($card_content__input_tag);
const $input_tag = /*@__PURE__*/ _const("input_tag", $input_tag__closure);
const $input_label__closure = /*@__PURE__*/ _closure($card_content__input_label, $inputtag_content__input_label);
const $input_label = /*@__PURE__*/ _const("input_label", $input_label__closure);
const $onClick = ($scope) => function() {
	console.log("clicked", $scope._._.input_label);
};
_bind_resume("__tests__/template.marko_2/onClick >>input_label", $onClick);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);
