// tags/wrap.marko
const $template$1 = /*@__PURE__*/ ((_w0) => `${_w0}<!>`)($template$2);
const $walks$1 = /*@__PURE__*/ ((_w0) => `/${_w0}&b`)($walks$2);
const $card_content__input_label = /*@__PURE__*/ _closure_get("input_label/4", ($scope) => _text($scope["#text/0"], $scope._.input_label), 0, "__tests__/tags/wrap.marko_1_input_label#0:3/subscribe");
const $card_content__setup = $card_content__input_label;
const $card_content = /*@__PURE__*/ _content("__tests__/tags/wrap.marko_1*content", "<em> </em>", "D ", $card_content__setup);
function $setup$1($scope) {
	$setup$2($scope["#childScope/0"]);
	$input_content($scope["#childScope/0"], $card_content($scope));
}
const $input_label__closure = /*@__PURE__*/ _closure($card_content__input_label);
const $input_label$1 = /*@__PURE__*/ _const("input_label", ($scope) => {
	$input_fn($scope["#childScope/0"], function() {
		return "f:" + $scope.input_label;
	});
	$input_label__closure($scope);
});
const $input$1 = ($scope, input) => $input_label$1($scope, input.label);
var wrap_default = /*@__PURE__*/ _template("__tests__/tags/wrap.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&b`)($walks$1);
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
}
const $input_label = ($scope, input_label) => $input_label$1($scope["#childScope/0"], input_label);
const $input = ($scope, input) => $input_label($scope, input.label);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);

// tags/card.marko
const $template = "<button> </button><!><!>";
const $walks = " D l%c";
const $f = /*@__PURE__*/ _let("f/7", ($scope) => _text($scope["#text/1"], $scope.f()));
const $input_fn = $f;
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/2");
const $c = /*@__PURE__*/ _let("c/8", ($scope) => $dynamicTag($scope, $scope.c));
const $input_content = $c;
const $setup__script = _script("__tests__/tags/card.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$f($scope, () => "x");
	$c($scope, undefined);
}));
const $setup = $setup__script;
const $input = ($scope, input) => {
	$input_fn($scope, input.fn);
	$input_content($scope, input.content);
};
var card_default = /*@__PURE__*/ _template("__tests__/tags/card.marko", $template, $walks, $setup, $input);
