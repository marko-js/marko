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
const $inputtag_content__r_label = /*@__PURE__*/ _closure_get_patch("__tests__/template.marko_4_r_label#1:3/subscribe", "r_label/8", ($scope) => _text($scope["#text/0"], $scope._._.r_label), ($scope) => $scope._._, "__tests__/template.marko_1_r_label#3/subscribers", 2);
const $inputtag_content__setup = $inputtag_content__r_label;
const $inputtag_content = _content("__tests__/template.marko_4*content", " ", " ", $inputtag_content__setup);
const $Inner_content__input_label = /*@__PURE__*/ _closure_get_patch("__tests__/template.marko_3_input_label#0:4/subscribe", "input_label/6", ($scope) => _text($scope["#text/2"], $scope._._._.input_label), ($scope) => $scope._._._, "__tests__/template.marko_0_input_label#4/subscribers", 0);
const $Inner_content__setup__script = _script("__tests__/template.marko_3", ($scope) => _on($scope["#b/0"], "click", function() {
	console.log($scope._._.r_label, $scope._._._.input_label);
}));
const $Inner_content__setup = ($scope) => {
	$Inner_content__input_label($scope);
	$Inner_content__r_label($scope);
	$Inner_content__setup__script($scope);
};
const $Inner_content__r_label = /*@__PURE__*/ _closure_get_patch("__tests__/template.marko_3_r_label#1:3/subscribe", "r_label/8", ($scope) => _text($scope["#text/1"], $scope._._.r_label), ($scope) => $scope._._, "__tests__/template.marko_1_r_label#3/subscribers", 1);
const $Inner_content = _content("__tests__/template.marko_3*content", "<b><!><!></b>", " D%b%", $Inner_content__setup);
const $card_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $card_content__input_tag__OR__Inner = /*@__PURE__*/ _or(4, ($scope) => $card_content__dynamicTag($scope, $scope._._.input_tag, ($_) => ({ content: $scope.Inner })));
const $card_content__dynamicTag2 = /*@__PURE__*/ _dynamic_tag("#text/1", $inputtag_content);
const $card_content__input_tag__OR__r_label = /*@__PURE__*/ _or_patch("__tests__/template.marko_2_input_tag#0:5_r_label#1:3/setup", 2, ($scope) => $card_content__dynamicTag2($scope, $scope._._.input_tag, ($_) => ({ onClick: $onClick($scope) })));
const $card_content__input_tag = /*@__PURE__*/ _closure_get_patch("__tests__/template.marko_2_input_tag#0:5/subscribe", "input_tag/7", ($scope) => {
	$card_content__input_tag__OR__Inner($scope);
	$card_content__input_tag__OR__r_label($scope);
}, ($scope) => $scope._._, "__tests__/template.marko_0_input_tag#5/subscribers", 0);
const $card_content__Inner = /*@__PURE__*/ _const("Inner", $card_content__input_tag__OR__Inner);
const $card_content__setup = ($scope) => {
	$card_content__input_tag($scope);
	$card_content__r_label($scope);
	$card_content__Inner($scope, { content: $Inner_content($scope) });
};
const $card_content__r_label = /*@__PURE__*/ _closure_get_patch("__tests__/template.marko_2_r_label#1:3/subscribe", "r_label/8", $card_content__input_tag__OR__r_label, 0, "__tests__/template.marko_1_r_label#3/subscribers", 0);
const $card_content = _content("__tests__/template.marko_2*content", "<!><!><!><!>", "b%b%", $card_content__setup);
const $for_content__setup = ($scope) => {
	$setup$1($scope["#childScope/0"]);
	$input_content($scope["#childScope/0"], $card_content($scope));
};
const $for_content__$params = ($scope, $params2) => $for_content__r_label($scope, $params2[0]?.label);
const $for_content__r_label__closure = /*@__PURE__*/ _closure($card_content__r_label, $Inner_content__r_label, $inputtag_content__r_label);
const $for_content__r_label = /*@__PURE__*/ _const("r_label", $for_content__r_label__closure);
const $for = /*@__PURE__*/ _for_of("#text/0", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1), $for_content__setup, $for_content__$params);
const $input_rows = ($scope, input_rows) => $for($scope, [input_rows, "id"]);
const $input = ($scope, input) => {
	$input_rows($scope, input.rows);
	$input_label($scope, input.label);
	$input_tag($scope, input.tag);
};
const $input_label__closure = /*@__PURE__*/ _closure($Inner_content__input_label);
const $input_label = /*@__PURE__*/ _const("input_label", $input_label__closure);
const $input_tag__closure = /*@__PURE__*/ _closure($card_content__input_tag);
const $input_tag = /*@__PURE__*/ _const("input_tag", $input_tag__closure);
const $onClick = ($scope) => function() {
	console.log("direct", $scope._.r_label);
};
_bind_resume("__tests__/template.marko_2/onClick >r_label", $onClick);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);
