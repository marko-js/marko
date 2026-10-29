// tags/card.marko
const $template$2 = "<button>clear</button><!><!>";
const $walks$2 = " b%c";
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/1");
const $c = /*@__PURE__*/ _let("c/5", ($scope) => $dynamicTag($scope, $scope.c));
const $input_content$1 = $c;
const $setup__script = _script("__tests__/tags/card.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$c($scope, undefined);
}));
const $setup$2 = $setup__script;
const $input$2 = ($scope, input) => $input_content$1($scope, input.content);
var card_default = /*@__PURE__*/ _template("__tests__/tags/card.marko", $template$2, $walks$2, $setup$2, $input$2);

// tags/outer.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = ($_) => {};
const $for_content__input_content = /*@__PURE__*/ _for_closure("#text/0", ($scope) => $input_content$1($scope["#childScope/0"], $scope._.input_content));
const $for_content__setup = ($scope) => {
	$for_content__input_content._($scope);
	$setup$2($scope["#childScope/0"]);
};
const $for = /*@__PURE__*/ _for_of("#text/0", /*@__PURE__*/ ((_w0) => `${_w0}<!>`)($template$2), /*@__PURE__*/ ((_w0) => `/${_w0}&b`)($walks$2), $for_content__setup);
const $input_rows$1 = ($scope, input_rows) => $for($scope, [input_rows, "id"]);
const $input$1 = ($scope, input) => {
	$input_rows$1($scope, input.rows);
	$input_content($scope, input.content);
};
const $input_content = /*@__PURE__*/ _const("input_content", $for_content__input_content);
var outer_default = /*@__PURE__*/ _template("__tests__/tags/outer.marko", $template$1, "b%c", 0, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c");
const $outer_content__input_label = /*@__PURE__*/ _closure_get("input_label/5", ($scope) => _text($scope["#text/0"], $scope._.input_label), 0, "__tests__/template.marko_1_input_label#0:4/subscribe");
const $outer_content__setup = $outer_content__input_label;
const $outer_content = _content("__tests__/template.marko_1*content", "<em> </em>", "D ", $outer_content__setup);
function $setup($scope) {
	$input_content($scope["#childScope/0"], $outer_content($scope));
}
const $input_rows = ($scope, input_rows) => $input_rows$1($scope["#childScope/0"], input_rows);
const $input = ($scope, input) => {
	$input_rows($scope, input.rows);
	$input_label($scope, input.label);
};
const $input_label__closure = /*@__PURE__*/ _closure($outer_content__input_label);
const $input_label = /*@__PURE__*/ _const("input_label", $input_label__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
