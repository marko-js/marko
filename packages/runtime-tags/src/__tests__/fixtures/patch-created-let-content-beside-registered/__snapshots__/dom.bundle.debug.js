// tags/toggle.marko
const $template$3 = "<button id=toggle>toggle</button><!><!>";
const $walks$3 = " b%c";
const $dynamicTag$2 = /*@__PURE__*/ _dynamic_tag("#text/1");
const $input_content__OR__open = /*@__PURE__*/ _fill_join("__tests__/tags/toggle.marko_fill0", "input_content", /*@__PURE__*/ _or(6, ($scope) => $dynamicTag$2($scope, $scope.open && $scope.input_content)));
const $open = /*@__PURE__*/ _fill_let("__tests__/tags/toggle.marko_fill1", "open/5", $input_content__OR__open);
const $setup__script$2 = _script("__tests__/tags/toggle.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$open($scope, !$scope.open);
}));
function $setup$3($scope) {
	$open($scope, true);
	$setup__script$2($scope);
}
const $input_content$2 = /*@__PURE__*/ _const("input_content", $input_content__OR__open);
const $input$3 = ($scope, input) => $input_content$2($scope, input.content);
var toggle_default = /*@__PURE__*/ _template("__tests__/tags/toggle.marko", $template$3, $walks$3, $setup$3, $input$3);

// tags/card.marko
const $template$2 = "<section><button>clear</button><!></section>";
const $walks$2 = "D b%l";
const $dynamicTag$1 = /*@__PURE__*/ _dynamic_tag("#text/1");
const $c = /*@__PURE__*/ _let("c/5", ($scope) => $dynamicTag$1($scope, $scope.c));
const $input_content$1 = $c;
const $setup__script$1 = _script("__tests__/tags/card.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$c($scope, undefined);
}));
const $setup$2 = $setup__script$1;
const $input$2 = ($scope, input) => $input_content$1($scope, input.content);
var card_default = /*@__PURE__*/ _template("__tests__/tags/card.marko", $template$2, $walks$2, $setup$2, $input$2);

// tags/outer.marko
const $template$1 = /*@__PURE__*/ ((_w0) => `<button>x</button>${_w0}`)($template$2);
const $walks$1 = /*@__PURE__*/ ((_w0) => ` b/${_w0}&`)($walks$2);
const $o = /*@__PURE__*/ _fill_let("__tests__/tags/outer.marko_fill0", "o/5", ($scope) => $input_content$1($scope["#childScope/1"], $scope.o));
const $input_content = $o;
const $setup__script = _script("__tests__/tags/outer.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$o($scope, undefined);
}));
function $setup$1($scope) {
	$setup$2($scope["#childScope/1"]);
	$setup__script($scope);
}
const $input$1 = ($scope, input) => $input_content($scope, input.content);
var outer_default = /*@__PURE__*/ _template("__tests__/tags/outer.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $template = "<!><!><main><!></main>";
const $walks = "b%bD%l";
const $setup = ($_) => {};
const $inputonTogglediv_content__input_note = /*@__PURE__*/ _init_resume("__tests__/template.marko_3_input_note#0:7/init", /*@__PURE__*/ _fill_join_closure("__tests__/template.marko_fill1", "input_note", /*@__PURE__*/ _closure_get("input_note/9", ($scope) => _text($scope["#text/0"], $scope._.input_note), 0, "__tests__/template.marko_3_input_note#0:7/subscribe"), 0));
const $inputonTogglediv_content__setup = $inputonTogglediv_content__input_note;
const $inputonTogglediv_content = _content("__tests__/template.marko_3*content", "<em> </em>", "D ", $inputonTogglediv_content__setup);
_content_resume($inputonTogglediv_content);
const $outer_content__input_label = /*@__PURE__*/ _init_resume("__tests__/template.marko_2_input_label#0:5/init", /*@__PURE__*/ _fill_join_closure("__tests__/template.marko_fill0", "input_label", /*@__PURE__*/ _closure_get("input_label/8", ($scope) => _text($scope["#text/0"], $scope._._.input_label), ($scope) => $scope._._), 0));
const $outer_content__setup = $outer_content__input_label;
const $outer_content = /*@__PURE__*/ _content("__tests__/template.marko_2*content", "<em>static <!></em>", "Db%", $outer_content__setup);
const $if_content__setup = ($scope) => {
	$setup$1($scope["#childScope/0"]);
	$input_content($scope["#childScope/0"], $outer_content($scope));
};
const $if = /*@__PURE__*/ _if("#text/0", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/1", $inputonTogglediv_content);
const $input_on = ($scope, input_on) => $dynamicTag($scope, input_on ? toggle_default : "div");
const $input = ($scope, input) => {
	$input_on($scope, input.on);
	$input_show($scope, input.show);
	$input_label($scope, input.label);
	$input_note($scope, input.note);
};
const $input_label__closure = /*@__PURE__*/ _closure($outer_content__input_label);
const $input_label = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_label", $input_label__closure);
const $input_note__closure = /*@__PURE__*/ _closure($inputonTogglediv_content__input_note);
const $input_note = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill1", "input_note", $input_note__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, 0, $input);
