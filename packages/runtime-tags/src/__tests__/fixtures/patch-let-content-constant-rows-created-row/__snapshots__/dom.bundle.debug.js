// tags/card.marko
const $template$1 = "<button>clear</button><!><!><!>";
const $walks$1 = " b%b%c";
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
const $for_content2__input_label = /*@__PURE__*/ _closure_get_patch("__tests__/template.marko_3_input_label#0:4/subscribe", "input_label/5", ($scope) => _text($scope["#text/0"], $scope._._._.input_label), ($scope) => $scope._._._, "__tests__/template.marko_0_input_label#4/subscribers", 0);
const $for_content2__setup = $for_content2__input_label;
const $card_content__for = /*@__PURE__*/ _for_to_unkeyed("#text/0", "<b> </b>", "D ", $for_content2__setup);
const $card_content__setup = ($scope) => $card_content__for($scope, [2, 1]);
const $card_content = _content_resume("__tests__/template.marko_2*content", "<!><!><!>", "b%", $card_content__setup);
const $for_content__setup = ($scope) => {
	$setup$1($scope["#childScope/0"]);
	$input_content($scope["#childScope/0"], $card_content($scope));
};
const $for = /*@__PURE__*/ _for_of("#text/0", /*@__PURE__*/ ((_w0) => `${_w0}<!>`)($template$1), /*@__PURE__*/ ((_w0) => `/${_w0}&b`)($walks$1), $for_content__setup);
const $input_rows = ($scope, input_rows) => $for($scope, [input_rows, "id"]);
const $input = ($scope, input) => {
	$input_label($scope, input.label);
	$input_rows($scope, input.rows);
};
const $input_label__closure = /*@__PURE__*/ _closure($for_content2__input_label);
const $input_label = /*@__PURE__*/ _const("input_label", $input_label__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);
