// tags/wrapper.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
function boom() {
	throw new Error("SHOWN_message");
}
const $try_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/1");
const $try_content__input_content = /*@__PURE__*/ _init_resume("__tests__/tags/wrapper.marko_2_input_content#0:3/init", /*@__PURE__*/ _closure_index(1, /*@__PURE__*/ _closure_get("input_content/5", ($scope) => $try_content__dynamicTag($scope, $scope._.input_content), 0, "__tests__/tags/wrapper.marko_2_input_content#0:3/subscribe")));
const $try_content__setup = ($scope) => {
	$try_content__input_content($scope);
	$try_content__input_fail($scope);
};
const $try_content__input_fail = /*@__PURE__*/ _init_resume("__tests__/tags/wrapper.marko_2_input_fail#0:4/init", /*@__PURE__*/ _closure_get("input_fail/6", ($scope) => _text($scope["#text/0"], $scope._.input_fail ? boom() : "ok"), 0, "__tests__/tags/wrapper.marko_2_input_fail#0:4/subscribe"));
const $catch_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $catch_content__input_content = /*@__PURE__*/ _fill_closure("__tests__/tags/wrapper.marko_fill0", "input_content", /*@__PURE__*/ _closure_get("input_content/5", ($scope) => $catch_content__dynamicTag($scope, $scope._.input_content), 0, "__tests__/tags/wrapper.marko_1_input_content#0:3/subscribe"), 0);
const $catch_content__setup = $catch_content__input_content;
const $catch_content = _content("__tests__/tags/wrapper.marko_1*content", "<!><!><!>", "b%", $catch_content__setup);
const $try = /*@__PURE__*/ _try("#text/0", "<p> </p><!><!>", "D l%", $try_content__setup, 0, $catch_content);
const $setup$1 = $try;
const $input$1 = ($scope, input) => {
	$input_content($scope, input.content);
	$input_fail($scope, input.fail);
};
const $input_content__closure = /*@__PURE__*/ _closure($catch_content__input_content, $try_content__input_content);
const $input_content = /*@__PURE__*/ _fill_const("__tests__/tags/wrapper.marko_fill0", "input_content", $input_content__closure);
const $input_fail__closure = /*@__PURE__*/ _closure($try_content__input_fail);
const $input_fail = /*@__PURE__*/ _const("input_fail", $input_fail__closure);
var wrapper_default = /*@__PURE__*/ _template("__tests__/tags/wrapper.marko", $template$1, "b%c", $setup$1, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<button> </button>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` D l/${_w0}&b`)("b%c");
const $wrapper_content__input_label = /*@__PURE__*/ _fill_closure("__tests__/template.marko_fill0", "input_label", /*@__PURE__*/ _closure_get("input_label/7", ($scope) => _text($scope["#text/0"], $scope._.input_label), 0, "__tests__/template.marko_1_input_label#0:5/subscribe"), 0);
const $wrapper_content__setup = $wrapper_content__input_label;
const $wrapper_content = _content("__tests__/template.marko_1*content", "<em> </em>", "D ", $wrapper_content__setup);
const $count = _let("count/6", ($scope) => {
	_text($scope["#text/1"], $scope.count);
	$input_fail($scope["#childScope/2"], $scope.count > 0);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$setup$1($scope["#childScope/2"]);
	$input_content($scope["#childScope/2"], $wrapper_content($scope));
	$count($scope, 0);
	$setup__script($scope);
}
const $input = ($scope, input) => $input_label($scope, input.label);
const $input_label__closure = /*@__PURE__*/ _closure($wrapper_content__input_label);
const $input_label = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_label", $input_label__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
