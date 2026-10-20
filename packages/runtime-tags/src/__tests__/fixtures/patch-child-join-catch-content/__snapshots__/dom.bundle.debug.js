// tags/wrapper.marko
const $template$2 = "<!><!><!>";
const $walks$2 = "b%c";
function boom() {
	throw new Error("SHOWN_message");
}
const $try_content__input_fail = /*@__PURE__*/ _shell_init("__tests__/tags/wrapper.marko_2_input_fail#0:4/init", /*@__PURE__*/ _closure_get("input_fail/6", ($scope) => _text($scope["#text/0"], $scope._.input_fail ? boom() : "ok"), 0, "__tests__/tags/wrapper.marko_2_input_fail#0:4/subscribe"));
const $try_content__setup = $try_content__input_fail;
const $catch_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $catch_content__input_fallback = /*@__PURE__*/ _fill_join_closure("__tests__/tags/wrapper.marko_fill0", "input_fallback", /*@__PURE__*/ _closure_get("input_fallback/5", ($scope) => $catch_content__dynamicTag($scope, $scope._.input_fallback), 0, "__tests__/tags/wrapper.marko_1_input_fallback#0:3/subscribe"), 0);
const $catch_content__setup = $catch_content__input_fallback;
const $catch_content = _content("__tests__/tags/wrapper.marko_1*content", "<!><!><!>", "b%", $catch_content__setup);
const $try = /*@__PURE__*/ _try("#text/0", "<p> </p>", "D ", $try_content__setup, 0, $catch_content);
function $setup$2($scope) {
	$try($scope);
}
const $input$2 = ($scope, input) => {
	$input_fallback($scope, input.fallback);
	$input_fail$2($scope, input.fail);
};
const $input_fallback__closure = /*@__PURE__*/ _closure($catch_content__input_fallback);
const $input_fallback = /*@__PURE__*/ _fill_const("__tests__/tags/wrapper.marko_fill0", "input_fallback", $input_fallback__closure);
const $input_fail__closure = /*@__PURE__*/ _closure($try_content__input_fail);
const $input_fail$2 = /*@__PURE__*/ _const("input_fail", $input_fail__closure);
var wrapper_default = /*@__PURE__*/ _template("__tests__/tags/wrapper.marko", $template$2, "b%c", $setup$2, $input$2);

// tags/panel.marko
const $template$1 = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$2);
const $walks$1 = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c");
const $fallback_content__input_a__OR__input_b = /*@__PURE__*/ _fill_join_subscribers("__tests__/tags/panel.marko_fill1/unpatched", "input_b", /*@__PURE__*/ _fill_join_subscribers("__tests__/tags/panel.marko_fill0/unpatched", "input_a", /*@__PURE__*/ _shell_or("__tests__/tags/panel.marko_1_input_a#0:4_input_b#0:5/init", 1, ($scope) => _text($scope["#text/0"], $scope._.input_a + $scope._.input_b)), "input_a/6", 0), "input_b/7", 0);
const $fallback_content__input_a = _closure_resume("__tests__/tags/panel.marko_1_input_a#0:4/subscribe", /*@__PURE__*/ _closure_get("input_a/6", $fallback_content__input_a__OR__input_b));
const $fallback_content__setup = ($scope) => {
	$fallback_content__input_a($scope);
	$fallback_content__input_b($scope);
};
const $fallback_content__input_b = _closure_resume("__tests__/tags/panel.marko_1_input_b#0:5/subscribe", /*@__PURE__*/ _closure_get("input_b/7", $fallback_content__input_a__OR__input_b));
const $fallback_content = _content("__tests__/tags/panel.marko_1*content", "<em> </em>", "D ", $fallback_content__setup);
function $setup$1($scope) {
	$setup$2($scope["#childScope/0"]);
	$input_fallback($scope["#childScope/0"], attrTag({ content: $fallback_content($scope) }));
}
const $input_fail$1 = ($scope, input_fail) => $input_fail$2($scope["#childScope/0"], input_fail);
const $input$1 = ($scope, input) => {
	$input_fail$1($scope, input.fail);
	$input_a$1($scope, input.a);
	$input_b$1($scope, input.b);
};
const $input_a__closure = /*@__PURE__*/ _closure($fallback_content__input_a);
const $input_a$1 = /*@__PURE__*/ _const("input_a", $input_a__closure);
const $input_b__closure = /*@__PURE__*/ _closure($fallback_content__input_b);
const $input_b$1 = /*@__PURE__*/ _const("input_b", $input_b__closure);
var panel_default = /*@__PURE__*/ _template("__tests__/tags/panel.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0, _w1) => `<!>${_w0}${_w1}<button class=n>+</button>`)($template$1, $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1) => `b/${_w0}&/${_w1}& b`)($walks$1, $walks$1);
const $n = /*@__PURE__*/ _fill_let("__tests__/template.marko_fill0", "n/8", ($scope) => $input_b$1($scope["#childScope/0"], $scope.n));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/2"], "click", function() {
	$n($scope, $scope.n + "k");
}));
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
	$setup$1($scope["#childScope/1"]);
	$setup__script($scope);
	$n($scope, "k");
}
const $input_a = ($scope, input_a) => {
	$input_a$1($scope["#childScope/0"], input_a);
	$input_a$1($scope["#childScope/1"], input_a);
};
const $input_fail = ($scope, input_fail) => {
	$input_fail$1($scope["#childScope/0"], input_fail);
	$input_fail$1($scope["#childScope/1"], input_fail);
};
const $input_b = ($scope, input_b) => $input_b$1($scope["#childScope/1"], input_b);
const $input = ($scope, input) => {
	$input_a($scope, input.a);
	$input_fail($scope, input.fail);
	$input_b($scope, input.b);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
