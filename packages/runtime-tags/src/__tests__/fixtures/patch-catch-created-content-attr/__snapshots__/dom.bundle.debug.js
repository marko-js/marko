// tags/error-wrapper.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
function boom() {
	throw new Error("SHOWN_message");
}
const $try_content__input_fail = /*@__PURE__*/ _init_resume("__tests__/tags/error-wrapper.marko_2_input_fail#0:4/init", /*@__PURE__*/ _closure_get("input_fail/6", ($scope) => _text($scope["#text/0"], $scope._.input_fail ? boom() : "ok"), 0, "__tests__/tags/error-wrapper.marko_2_input_fail#0:4/subscribe"));
const $try_content__setup = $try_content__input_fail;
const $catch_content__input_fallback = /*@__PURE__*/ _init_resume("__tests__/tags/error-wrapper.marko_1_input_fallback#0:3/init", /*@__PURE__*/ _fill_join_closure("__tests__/tags/error-wrapper.marko_fill0", "input_fallback", /*@__PURE__*/ _closure_get("input_fallback/5", ($scope) => _attr_content($scope, "#div/1", $scope._.input_fallback), 0, "__tests__/tags/error-wrapper.marko_1_input_fallback#0:3/subscribe"), 0));
const $catch_content__setup = $catch_content__input_fallback;
const $catch_content__err_message = ($scope, err_message) => _text($scope["#text/0"], err_message);
const $catch_content__$params = ($scope, $params2) => $catch_content__err_message($scope, $params2[0]?.message);
const $catch_content = _content("__tests__/tags/error-wrapper.marko_1*content", "<b> </b><div></div>", "D l ", $catch_content__setup, $catch_content__$params);
const $try = /*@__PURE__*/ _try("#text/0", "<p> </p>", "D ", $try_content__setup, 0, $catch_content);
function $setup$1($scope) {
	$try($scope);
}
const $input$1 = ($scope, input) => {
	$input_fallback($scope, input.fallback);
	$input_fail$1($scope, input.fail);
};
const $input_fallback__closure = /*@__PURE__*/ _closure($catch_content__input_fallback);
const $input_fallback = /*@__PURE__*/ _fill_const("__tests__/tags/error-wrapper.marko_fill0", "input_fallback", $input_fallback__closure);
const $input_fail__closure = /*@__PURE__*/ _closure($try_content__input_fail);
const $input_fail$1 = /*@__PURE__*/ _const("input_fail", $input_fail__closure);
var error_wrapper_default = /*@__PURE__*/ _template("__tests__/tags/error-wrapper.marko", $template$1, "b%c", $setup$1, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<button> </button>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` D l/${_w0}&b`)("b%c");
const $fallback_content__input_label = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_input_label#0:6/init", /*@__PURE__*/ _fill_join_closure("__tests__/template.marko_fill0", "input_label", /*@__PURE__*/ _closure_get("input_label/8", ($scope) => _text($scope["#text/0"], $scope._.input_label), 0, "__tests__/template.marko_1_input_label#0:6/subscribe"), 0));
const $fallback_content__setup = ($scope) => {
	$fallback_content__input_label($scope);
	$fallback_content__count($scope);
};
const $fallback_content__count = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_count#0:7/init", /*@__PURE__*/ _closure_get("count/9", ($scope) => _text($scope["#text/1"], $scope._.count)));
const $fallback_content = _content("__tests__/template.marko_1*content", "<i><!> <!></i>", "D%c%", $fallback_content__setup);
const $count__closure = /*@__PURE__*/ _closure($fallback_content__count);
const $count = _let("count/7", ($scope) => {
	_text($scope["#text/1"], $scope.count);
	$count__closure($scope);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$setup$1($scope["#childScope/2"]);
	$input_fallback($scope["#childScope/2"], attrTag({ content: $fallback_content($scope) }));
	$count($scope, 0);
	$setup__script($scope);
}
const $input_fail = ($scope, input_fail) => $input_fail$1($scope["#childScope/2"], input_fail);
const $input = ($scope, input) => {
	$input_fail($scope, input.fail);
	$input_label($scope, input.label);
};
const $input_label__closure = /*@__PURE__*/ _closure($fallback_content__input_label);
const $input_label = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_label", $input_label__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
