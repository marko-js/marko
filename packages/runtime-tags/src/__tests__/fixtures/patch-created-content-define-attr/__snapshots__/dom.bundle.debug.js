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
const $if_content__Body_content = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $input_content($scope["#childScope/0"], $scope._.Body_content));
const $if_content__setup = ($scope) => {
	$if_content__Body_content._($scope);
	$setup$1($scope["#childScope/0"]);
};
const $Body_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $Body_content__input_tag__OR__Inner = /*@__PURE__*/ _or(1, ($scope) => $Body_content__dynamicTag($scope, $scope._.input_tag, ($_) => ({ content: $scope._.Inner })));
const $Body_content__input_tag = /*@__PURE__*/ _closure_get_patch("__tests__/template.marko_2_input_tag#0:4/subscribe", "input_tag/10", $Body_content__input_tag__OR__Inner, 0, "__tests__/template.marko_0_input_tag#4/subscribers", 0);
const $Body_content__setup = ($scope) => {
	$Body_content__input_tag($scope);
	$Body_content__Inner($scope);
};
const $Body_content__Inner = /*@__PURE__*/ _closure_get("Inner/11", $Body_content__input_tag__OR__Inner);
const $Body_content = _content_resume("__tests__/template.marko_2*content", "<!><!><!>", "b%", $Body_content__setup);
const $Inner_content__input_label = /*@__PURE__*/ _closure_get_patch("__tests__/template.marko_1_input_label#0:3/subscribe", "input_label/9", ($scope) => _text($scope["#text/0"], $scope._.input_label), 0, "__tests__/template.marko_0_input_label#3/subscribers", 0);
const $Inner_content__setup = $Inner_content__input_label;
const $Inner_content = _content_resume("__tests__/template.marko_1*content", "<b> </b>", "D ", $Inner_content__setup);
const $Inner = /*@__PURE__*/ _const("Inner");
const $Body = ($scope, Body) => $Body_content2($scope, Body.content);
function $setup($scope) {
	$Inner($scope, { content: $Inner_content($scope) });
	$Body($scope, { content: $Body_content($scope) });
}
const $Body_content2 = /*@__PURE__*/ _const("Body_content");
const $if = /*@__PURE__*/ _if("#text/0", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_label($scope, input.label);
	$input_tag($scope, input.tag);
	$input_show($scope, input.show);
};
const $input_label__closure = /*@__PURE__*/ _closure($Inner_content__input_label);
const $input_label = /*@__PURE__*/ _const("input_label", $input_label__closure);
const $input_tag__closure = /*@__PURE__*/ _closure($Body_content__input_tag);
const $input_tag = /*@__PURE__*/ _const("input_tag", $input_tag__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", $setup, $input);
