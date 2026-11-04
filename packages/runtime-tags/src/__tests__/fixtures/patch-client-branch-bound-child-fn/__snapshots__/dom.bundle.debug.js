// tags/fnchild.marko
const $template$2 = "<!><!><!>";
const $walks$2 = "b%c";
const $setup$2 = ($_) => {};
const $inputtag_content__input_label = /*@__PURE__*/ _closure_get_patch("__tests__/tags/fnchild.marko_1_input_label#0:4/subscribe", "input_label/6", ($scope) => _text($scope["#text/0"], $scope._.input_label), 0, "__tests__/tags/fnchild.marko_0_input_label#4/subscribers", 0);
const $inputtag_content__setup = $inputtag_content__input_label;
const $inputtag_content = _content_resume("__tests__/tags/fnchild.marko_1*content", " ", " ", $inputtag_content__setup);
const $dynamicTag$1 = /*@__PURE__*/ _dynamic_tag("#text/0", $inputtag_content);
const $input_tag__OR__input_label = /*@__PURE__*/ _or_patch("__tests__/tags/fnchild.marko_0_input_tag#3_input_label#4/setup", 5, ($scope) => $dynamicTag$1($scope, $scope.input_tag, ($_) => ({ onClick: $onClick($scope) })));
const $input_tag$1 = /*@__PURE__*/ _const("input_tag", $input_tag__OR__input_label);
const $input_label__closure$1 = /*@__PURE__*/ _closure($inputtag_content__input_label);
const $input_label$1 = /*@__PURE__*/ _const("input_label", ($scope) => {
	$input_label__closure$1($scope);
	$input_tag__OR__input_label($scope);
});
const $input$2 = ($scope, input) => {
	$input_tag$1($scope, input.tag);
	$input_label$1($scope, input.label);
};
const $onClick = ($scope) => function() {
	console.log("x", $scope.input_label);
};
_bind_resume("__tests__/tags/fnchild.marko_0/onClick input_label", $onClick);
var fnchild_default = /*@__PURE__*/ _template("__tests__/tags/fnchild.marko", $template$2, "b%c", 0, $input$2);

// tags/card.marko
const $template$1 = "<section><button>clear</button><!><!></section>";
const $walks$1 = "D b%b%l";
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/1");
const $dynamicTag2 = /*@__PURE__*/ _dynamic_tag("#text/2");
const $c = _let("c/6", ($scope) => {
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
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $card_content__input_label = /*@__PURE__*/ _closure_get_patch("__tests__/template.marko_2_input_label#0:4/subscribe", "input_label/6", ($scope) => $input_label$1($scope["#childScope/0"], $scope._._.input_label), ($scope) => $scope._._, "__tests__/template.marko_0_input_label#4/subscribers", 0);
const $card_content__setup = ($scope) => {
	$card_content__input_label($scope);
	$card_content__input_tag($scope);
};
const $card_content__input_tag = /*@__PURE__*/ _closure_get_patch("__tests__/template.marko_2_input_tag#0:5/subscribe", "input_tag/7", ($scope) => $input_tag$1($scope["#childScope/0"], $scope._._.input_tag), ($scope) => $scope._._, "__tests__/template.marko_0_input_tag#5/subscribers", 0);
const $card_content = _content_resume("__tests__/template.marko_2*content", /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$2), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c"), $card_content__setup);
const $if_content__setup = ($scope) => {
	$setup$1($scope["#childScope/0"]);
	$input_content($scope["#childScope/0"], $card_content($scope));
};
const $if = /*@__PURE__*/ _if("#text/0", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_label($scope, input.label);
	$input_tag($scope, input.tag);
	$input_show($scope, input.show);
};
const $input_label__closure = /*@__PURE__*/ _closure($card_content__input_label);
const $input_label = /*@__PURE__*/ _const("input_label", $input_label__closure);
const $input_tag__closure = /*@__PURE__*/ _closure($card_content__input_tag);
const $input_tag = /*@__PURE__*/ _const("input_tag", $input_tag__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);
