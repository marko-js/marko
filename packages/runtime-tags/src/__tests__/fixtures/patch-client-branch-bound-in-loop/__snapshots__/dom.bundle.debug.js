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
const $inputtag_content__r_label = /*@__PURE__*/ _closure_get_patch("__tests__/template.marko_4_r_label#3:3/subscribe", "r_label/10", ($scope) => _text($scope["#text/0"], $scope._.r_label));
const $inputtag_content__setup = $inputtag_content__r_label;
const $inputtag_content = _content_resume("__tests__/template.marko_4*content", " ", " ", $inputtag_content__setup);
const $for_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0", $inputtag_content);
const $for_content__input_tag__OR__input_label__OR__r_label = /*@__PURE__*/ _or_patch("__tests__/template.marko_3_input_tag#0:5_input_label#0:6_r_label#3/setup", 4, ($scope) => $for_content__dynamicTag($scope, $scope._._._.input_tag, ($_) => ({ onClick: $onClick($scope) })), 2);
const $for_content__input_tag = /*@__PURE__*/ _closure_get_patch("__tests__/template.marko_3_input_tag#0:5/subscribe", "input_tag/8", $for_content__input_tag__OR__input_label__OR__r_label, ($scope) => $scope._._._, "__tests__/template.marko_0_input_tag#5/subscribers", 0);
const $for_content__setup = ($scope) => {
	$for_content__input_tag($scope);
	$for_content__input_label($scope);
};
const $for_content__input_label = /*@__PURE__*/ _closure_get_patch("__tests__/template.marko_3_input_label#0:6/subscribe", "input_label/9", $for_content__input_tag__OR__input_label__OR__r_label, ($scope) => $scope._._._, "__tests__/template.marko_0_input_label#6/subscribers", 0);
const $for_content__r_label__closure = /*@__PURE__*/ _closure($inputtag_content__r_label);
const $for_content__r_label = /*@__PURE__*/ _const("r_label", ($scope) => {
	$for_content__input_tag__OR__input_label__OR__r_label($scope);
	$for_content__r_label__closure($scope);
});
const $for_content__$params = ($scope, $params2) => $for_content__r_label($scope, $params2[0]?.label);
const $card_content__for = /*@__PURE__*/ _for_of("#ul/0", "<li><!></li>", "D%", $for_content__setup, $for_content__$params);
const $card_content__input_rows = /*@__PURE__*/ _closure_get_patch("__tests__/template.marko_2_input_rows#0:4/subscribe", "input_rows/7", ($scope) => $card_content__for($scope, [$scope._._.input_rows, "id"]), ($scope) => $scope._._, "__tests__/template.marko_0_input_rows#4/subscribers", 0);
const $card_content__setup = $card_content__input_rows;
const $card_content = _content_resume("__tests__/template.marko_2*content", "<ul></ul>", " ", $card_content__setup);
const $if_content__setup = ($scope) => {
	$setup$1($scope["#childScope/0"]);
	$input_content($scope["#childScope/0"], $card_content($scope));
};
const $if = /*@__PURE__*/ _if("#text/0", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_rows($scope, input.rows);
	$input_tag($scope, input.tag);
	$input_label($scope, input.label);
	$input_show($scope, input.show);
};
const $input_rows__closure = /*@__PURE__*/ _closure($card_content__input_rows);
const $input_rows = /*@__PURE__*/ _const("input_rows", $input_rows__closure);
const $input_tag__closure = /*@__PURE__*/ _closure($for_content__input_tag);
const $input_tag = /*@__PURE__*/ _const("input_tag", $input_tag__closure);
const $input_label__closure = /*@__PURE__*/ _closure($for_content__input_label);
const $input_label = /*@__PURE__*/ _const("input_label", $input_label__closure);
const $onClick = ($scope) => function() {
	console.log($scope.r_label, $scope._._._.input_label);
};
_bind_resume("__tests__/template.marko_3/onClick >>>input_label r_label", $onClick);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);
