// tags/badge.marko
const $template$1 = "<span> </span>";
const $walks$1 = "D l";
const $setup$1 = ($_) => {};
const $input_tag = ($scope, input_tag) => _text($scope["#text/0"], input_tag);
const $input$1 = ($scope, input) => $input_tag($scope, input.tag);
var badge_default = /*@__PURE__*/ _template("__tests__/tags/badge.marko", $template$1, "D l", 0, $input$1);

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $card_content__input_label = /*@__PURE__*/ _closure_get_patch("__tests__/template.marko_2_input_label#0:4/subscribe", "input_label/5", ($scope) => _text($scope["#text/1"], $scope._._.input_label), ($scope) => $scope._._, "__tests__/template.marko_0_input_label#4/subscribers", 0);
const $card_content__setup = ($scope) => {
	$card_content__input_label($scope);
	$input_tag($scope["#childScope/0"], "new");
};
const $card_content = /*@__PURE__*/ _content("__tests__/template.marko_2*content", /*@__PURE__*/ ((_w0) => `${_w0}<em> </em>`)($template$1), /*@__PURE__*/ ((_w0) => `/${_w0}&D l`)("D l"), $card_content__setup);
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
const $c = _let("c/6", ($scope) => {
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
