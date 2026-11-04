// tags/field.marko
const $template$1 = "<input><label> </label>";
const $walks$1 = " b D l";
const $uid = ($scope, uid) => {
	_attr($scope["#input/0"], "id", uid);
	_attr($scope["#label/1"], "for", uid);
};
function $setup$1($scope) {
	$uid($scope, _id($scope));
}
const $input_label$1 = ($scope, input_label) => _text($scope["#text/2"], input_label);
const $input$1 = ($scope, input) => $input_label$1($scope, input.label);
var field_default = /*@__PURE__*/ _template("__tests__/tags/field.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $card_content__input_label = /*@__PURE__*/ _closure_get("input_label/5", ($scope) => $input_label$1($scope["#childScope/0"], $scope._._.input_label), ($scope) => $scope._._, "__tests__/template.marko_2_input_label#0:4/subscribe");
const $card_content__setup = ($scope) => {
	$card_content__input_label($scope);
	$setup$1($scope["#childScope/0"]);
};
const $card_content = /*@__PURE__*/ _content("__tests__/template.marko_2*content", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1), $card_content__setup);
const $for_content__setup = ($scope) => {
	$setup$2($scope["#childScope/0"]);
	$input_content($scope["#childScope/0"], $card_content($scope));
};
const $for = /*@__PURE__*/ _for_of("#text/0", /*@__PURE__*/ ((_w0) => `${_w0}<!>`)($template$2), /*@__PURE__*/ ((_w0) => `/${_w0}&b`)($walks$2), $for_content__setup);
const $input_rows = ($scope, input_rows) => $for($scope, [input_rows, "id"]);
const $input = ($scope, input) => {
	$input_rows($scope, input.rows);
	$input_label($scope, input.label);
};
const $input_label__closure = /*@__PURE__*/ _closure($card_content__input_label);
const $input_label = /*@__PURE__*/ _const("input_label", $input_label__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);

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
