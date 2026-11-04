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
const $Inn_content__input_label = /*@__PURE__*/ _closure_get_patch("__tests__/template.marko_4_input_label#0:4/subscribe", "input_label/6", ($scope) => _text($scope["#text/1"], $scope._._._._.input_label), ($scope) => $scope._._._._, "__tests__/template.marko_0_input_label#4/subscribers", 0);
const $Inn_content__setup__script = _script("__tests__/template.marko_4", ($scope) => _on($scope["#b/0"], "click", function() {
	console.log($scope._._._._.input_label);
}));
const $Inn_content__setup = ($scope) => {
	$Inn_content__input_label($scope);
	$Inn_content__setup__script($scope);
};
const $Inn_content = _content_resume("__tests__/template.marko_4*content", "<b> </b>", " D ", $Inn_content__setup);
const $Outer_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $Outer_content__input_tag__OR__Inn = /*@__PURE__*/ _or(2, ($scope) => $Outer_content__dynamicTag($scope, $scope._._._.input_tag, ($_) => ({ content: $scope.Inn })));
const $Outer_content__input_tag = /*@__PURE__*/ _closure_get_patch("__tests__/template.marko_3_input_tag#0:5/subscribe", "input_tag/7", $Outer_content__input_tag__OR__Inn, ($scope) => $scope._._._, "__tests__/template.marko_0_input_tag#5/subscribers", 1);
const $Outer_content__Inn = /*@__PURE__*/ _const("Inn", $Outer_content__input_tag__OR__Inn);
const $Outer_content__setup = ($scope) => {
	$Outer_content__input_tag($scope);
	$Outer_content__Inn($scope, { content: $Inn_content($scope) });
};
const $Outer_content = _content_resume("__tests__/template.marko_3*content", "<!><!><!>", "b%", $Outer_content__setup);
const $card_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $card_content__input_tag__OR__Outer = /*@__PURE__*/ _or(2, ($scope) => $card_content__dynamicTag($scope, $scope._._.input_tag, ($_) => ({ content: $scope.Outer })));
const $card_content__input_tag = /*@__PURE__*/ _closure_get_patch("__tests__/template.marko_2_input_tag#0:5/subscribe", "input_tag/7", $card_content__input_tag__OR__Outer, ($scope) => $scope._._, "__tests__/template.marko_0_input_tag#5/subscribers", 0);
const $card_content__Outer = /*@__PURE__*/ _const("Outer", $card_content__input_tag__OR__Outer);
const $card_content__setup = ($scope) => {
	$card_content__input_tag($scope);
	$card_content__Outer($scope, { content: $Outer_content($scope) });
};
const $card_content = _content_resume("__tests__/template.marko_2*content", "<!><!><!>", "b%", $card_content__setup);
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
const $input_label__closure = /*@__PURE__*/ _closure($Inn_content__input_label);
const $input_label = /*@__PURE__*/ _const("input_label", $input_label__closure);
const $input_tag__closure = /*@__PURE__*/ _closure($card_content__input_tag, $Outer_content__input_tag);
const $input_tag = /*@__PURE__*/ _const("input_tag", $input_tag__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);
