// tags/field.marko
const $template$1 = "<input><label> </label>";
const $walks$1 = " b D l";
const $setup$1 = ($_) => {};
const $input_id__OR__input_label = /*@__PURE__*/ _or(7, ($scope) => _attr($scope["#input/0"], "title", $scope.input_label + " " + $scope.input_id));
const $input_id = /*@__PURE__*/ _const("input_id", ($scope) => {
	_attr($scope["#input/0"], "id", $scope.input_id);
	_attr($scope["#label/1"], "for", $scope.input_id);
	$input_id__OR__input_label($scope);
});
const $input_label$1 = /*@__PURE__*/ _const("input_label", ($scope) => {
	_text($scope["#text/2"], $scope.input_label);
	$input_id__OR__input_label($scope);
});
const $input$1 = ($scope, input) => {
	$input_id($scope, input.id);
	$input_label$1($scope, input.label);
};
var field_default = /*@__PURE__*/ _template("__tests__/tags/field.marko", $template$1, $walks$1, 0, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<!>`)($template$2);
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&b`)($walks$2);
const $card_content__input_label = /*@__PURE__*/ _closure_get("input_label/4", ($scope) => $input_label$1($scope["#childScope/0"], $scope._.input_label), 0, "__tests__/template.marko_1_input_label#0:3/subscribe");
const $card_content__setup = ($scope) => {
	$card_content__input_label($scope);
	$input_id($scope["#childScope/0"], _id($scope));
};
const $card_content = /*@__PURE__*/ _content("__tests__/template.marko_1*content", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1), $card_content__setup);
function $setup($scope) {
	$setup$2($scope["#childScope/0"]);
	$input_content($scope["#childScope/0"], $card_content($scope));
}
const $input = ($scope, input) => $input_label($scope, input.label);
const $input_label__closure = /*@__PURE__*/ _closure($card_content__input_label);
const $input_label = /*@__PURE__*/ _const("input_label", $input_label__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);

// tags/card.marko
const $template = "<button>clear</button><!><!><!>";
const $walks = " b%b%c";
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
const $setup = $setup__script;
const $input = ($scope, input) => $input_content($scope, input.content);
var card_default = /*@__PURE__*/ _template("__tests__/tags/card.marko", $template, $walks, $setup, $input);
