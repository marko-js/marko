// template.marko
const $template = $template$1;
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1);
const $outer_content__input_label = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_input_label#0:3/init", /*@__PURE__*/ _closure_get("input_label/4", ($scope) => _text($scope["#text/0"], $scope._.input_label)));
const $outer_content__setup = $outer_content__input_label;
const $outer_content = /*@__PURE__*/ _content("__tests__/template.marko_1*content", "<em>static <!></em>", "Db%", $outer_content__setup);
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
	$input_content($scope["#childScope/0"], $outer_content($scope));
}
const $input = ($scope, input) => $input_label($scope, input.label);
const $input_label__closure = /*@__PURE__*/ _closure($outer_content__input_label);
const $input_label = /*@__PURE__*/ _const("input_label", $input_label__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);

// tags/card.marko
const $template$1 = "<section><button>clear</button><!></section>";
const $walks$1 = "D b%l";
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/1");
const $c = /*@__PURE__*/ _let("c/5", ($scope) => $dynamicTag($scope, $scope.c));
const $input_content$1 = $c;
const $setup__script$1 = _script("__tests__/tags/card.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$c($scope, undefined);
}));
const $setup$1 = $setup__script$1;
const $input$1 = ($scope, input) => $input_content$1($scope, input.content);
var card_default = /*@__PURE__*/ _template("__tests__/tags/card.marko", $template$1, $walks$1, $setup$1, $input$1);

// tags/outer.marko
const $template = /*@__PURE__*/ ((_w0) => `<button>x</button>${_w0}`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` b/${_w0}&`)($walks$1);
const $o = /*@__PURE__*/ _fill_let("__tests__/tags/outer.marko_fill0", "o/5", ($scope) => $input_content$1($scope["#childScope/1"], $scope.o));
const $input_content = $o;
const $setup__script = _script("__tests__/tags/outer.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$o($scope, undefined);
}));
function $setup($scope) {
	$setup$1($scope["#childScope/1"]);
	$setup__script($scope);
}
const $input = ($scope, input) => $input_content($scope, input.content);
var outer_default = /*@__PURE__*/ _template("__tests__/tags/outer.marko", $template, $walks, $setup, $input);
