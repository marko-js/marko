// tags/wrapper.marko
const $template$2 = "<!><!><!>";
const $walks$2 = "b%c";
function boom$1() {
	throw new Error("SHOWN_message");
}
const $try_content__input_fail$1 = /*@__PURE__*/ _init_resume("__tests__/tags/wrapper.marko_2_input_fail#0:4/init", /*@__PURE__*/ _closure_get("input_fail/6", ($scope) => _text($scope["#text/0"], $scope._.input_fail ? boom$1() : "ok"), 0, "__tests__/tags/wrapper.marko_2_input_fail#0:4/subscribe"));
const $try_content__setup$1 = $try_content__input_fail$1;
const $catch_content__dynamicTag$1 = /*@__PURE__*/ _dynamic_tag("#text/0");
const $catch_content__input_fallback$1 = /*@__PURE__*/ _fill_join_closure("__tests__/tags/wrapper.marko_fill0", "input_fallback", /*@__PURE__*/ _closure_get("input_fallback/5", ($scope) => $catch_content__dynamicTag$1($scope, $scope._.input_fallback), 0, "__tests__/tags/wrapper.marko_1_input_fallback#0:3/subscribe"), 0);
const $catch_content__setup$1 = $catch_content__input_fallback$1;
const $catch_content$1 = _content("__tests__/tags/wrapper.marko_1*content", "<!><!><!>", "b%", $catch_content__setup$1);
const $try$1 = /*@__PURE__*/ _try("#text/0", "<p> </p>", "D ", $try_content__setup$1, 0, $catch_content$1);
function $setup$2($scope) {
	$try$1($scope);
}
const $input$2 = ($scope, input) => {
	$input_fallback$1($scope, input.fallback);
	$input_fail$1($scope, input.fail);
};
const $input_fallback__closure$1 = /*@__PURE__*/ _closure($catch_content__input_fallback$1);
const $input_fallback$1 = /*@__PURE__*/ _fill_const("__tests__/tags/wrapper.marko_fill0", "input_fallback", $input_fallback__closure$1);
const $input_fail__closure$1 = /*@__PURE__*/ _closure($try_content__input_fail$1);
const $input_fail$1 = /*@__PURE__*/ _const("input_fail", $input_fail__closure$1);
var wrapper_default = /*@__PURE__*/ _template("__tests__/tags/wrapper.marko", $template$2, "b%c", $setup$2, $input$2);

// tags/error-wrapper.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
function boom() {
	throw new Error("SHOWN_message");
}
const $try_content__input_fail = /*@__PURE__*/ _init_resume("__tests__/tags/error-wrapper.marko_2_input_fail#0:4/init", /*@__PURE__*/ _closure_get("input_fail/6", ($scope) => _text($scope["#text/0"], $scope._.input_fail ? boom() : "ok"), 0, "__tests__/tags/error-wrapper.marko_2_input_fail#0:4/subscribe"));
const $try_content__setup = $try_content__input_fail;
const $catch_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/1");
const $catch_content__input_fallback = /*@__PURE__*/ _init_resume("__tests__/tags/error-wrapper.marko_1_input_fallback#0:3/init", /*@__PURE__*/ _fill_join_closure("__tests__/tags/error-wrapper.marko_fill0", "input_fallback", /*@__PURE__*/ _closure_get("input_fallback/5", ($scope) => $catch_content__dynamicTag($scope, $scope._.input_fallback), 0, "__tests__/tags/error-wrapper.marko_1_input_fallback#0:3/subscribe"), 0));
const $catch_content__setup = $catch_content__input_fallback;
const $catch_content__err_message = ($scope, err_message) => _text($scope["#text/0"], err_message);
const $catch_content__$params = ($scope, $params2) => $catch_content__err_message($scope, $params2[0]?.message);
const $catch_content = _content("__tests__/tags/error-wrapper.marko_1*content", "<b> </b><!><!>", "D l%", $catch_content__setup, $catch_content__$params);
const $try = /*@__PURE__*/ _try("#text/0", "<p> </p>", "D ", $try_content__setup, 0, $catch_content);
function $setup$1($scope) {
	$try($scope);
}
const $input$1 = ($scope, input) => {
	$input_fallback($scope, input.fallback);
	$input_fail($scope, input.fail);
};
const $input_fallback__closure = /*@__PURE__*/ _closure($catch_content__input_fallback);
const $input_fallback = /*@__PURE__*/ _fill_const("__tests__/tags/error-wrapper.marko_fill0", "input_fallback", $input_fallback__closure);
const $input_fail__closure = /*@__PURE__*/ _closure($try_content__input_fail);
const $input_fail = /*@__PURE__*/ _const("input_fail", $input_fail__closure);
var error_wrapper_default = /*@__PURE__*/ _template("__tests__/tags/error-wrapper.marko", $template$1, "b%c", $setup$1, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0, _w1) => `<button> </button>${_w0}${_w1}<!>`)($template$2, $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1) => ` D l/${_w0}&/${_w1}&b`)("b%c", "b%c");
const $fallback_content2__input_label = /*@__PURE__*/ _init_resume("__tests__/template.marko_2_input_label#0:6/init", /*@__PURE__*/ _fill_join_closure("__tests__/template.marko_fill0", "input_label", /*@__PURE__*/ _closure_get("input_label/8", ($scope) => _text($scope["#text/0"], $scope._.input_label), 0, "__tests__/template.marko_2_input_label#0:6/subscribe"), 1));
const $fallback_content2__setup = $fallback_content2__input_label;
const $fallback_content2 = _content("__tests__/template.marko_2*content", "<i> </i>", "D ", $fallback_content2__setup);
const $fallback_content__input_label = /*@__PURE__*/ _fill_join_closure("__tests__/template.marko_fill0", "input_label", /*@__PURE__*/ _closure_get("input_label/8", ($scope) => _text($scope["#text/0"], $scope._.input_label), 0, "__tests__/template.marko_1_input_label#0:6/subscribe"), 0);
const $fallback_content__setup = $fallback_content__input_label;
const $fallback_content = _content("__tests__/template.marko_1*content", "<em> </em>", "D ", $fallback_content__setup);
const $count = _let("count/7", ($scope) => {
	_text($scope["#text/1"], $scope.count);
	$input_fail$1($scope["#childScope/2"], $scope.count > 1);
	$input_fail($scope["#childScope/3"], $scope.count > 1);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$setup$2($scope["#childScope/2"]);
	$input_fallback$1($scope["#childScope/2"], attrTag({ content: $fallback_content($scope) }));
	$setup$1($scope["#childScope/3"]);
	$input_fallback($scope["#childScope/3"], attrTag({ content: $fallback_content2($scope) }));
	$count($scope, 0);
	$setup__script($scope);
}
const $input = ($scope, input) => $input_label($scope, input.label);
const $input_label__closure = /*@__PURE__*/ _closure($fallback_content__input_label, $fallback_content2__input_label);
const $input_label = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_label", $input_label__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
