// tags/card.marko
const $template$1 = "<button class=switch>switch</button><!><!>";
const $walks$1 = " b%c";
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/1");
const $c = _let("c/6", ($scope) => $dynamicTag($scope, $scope.c));
const $input_a = $c;
const $setup__script = _script("__tests__/tags/card.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$c($scope, $scope.input_b);
}));
const $setup$1 = $setup__script;
const $input$1 = ($scope, input) => {
	$input_a($scope, input.a);
	$input_b($scope, input.b);
};
const $input_b = /*@__PURE__*/ _const("input_b");
var card_default = /*@__PURE__*/ _template("__tests__/tags/card.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&b`)($walks$1);
const $b_content__input_label = /*@__PURE__*/ _closure_get_patch("__tests__/template.marko_2_input_label#0:3/subscribe", "input_label/4", ($scope) => _text($scope["#text/0"], $scope._.input_label), 0, "__tests__/template.marko_0_input_label#3/subscribers", 1);
const $b_content__setup = $b_content__input_label;
const $b_content = _content_resume("__tests__/template.marko_2*content", "<i>B <!></i>", "Db%", $b_content__setup);
const $a_content__input_label = /*@__PURE__*/ _closure_get_patch("__tests__/template.marko_1_input_label#0:3/subscribe", "input_label/4", ($scope) => _text($scope["#text/0"], $scope._.input_label), 0, "__tests__/template.marko_0_input_label#3/subscribers", 0);
const $a_content__setup = $a_content__input_label;
const $a_content = _content_resume("__tests__/template.marko_1*content", "<b>A <!></b>", "Db%", $a_content__setup);
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
	$input_a($scope["#childScope/0"], attrTag({ content: $a_content($scope) }));
	$input_b($scope["#childScope/0"], attrTag({ content: $b_content($scope) }));
}
const $input = ($scope, input) => $input_label($scope, input.label);
const $input_label__closure = /*@__PURE__*/ _closure($a_content__input_label, $b_content__input_label);
const $input_label = /*@__PURE__*/ _const("input_label", $input_label__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
