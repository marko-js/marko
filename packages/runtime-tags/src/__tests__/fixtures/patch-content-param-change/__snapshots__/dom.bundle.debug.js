// tags/labeler.marko
const $template$2 = "<span> </span>";
const $walks$2 = "D l";
const $setup$2 = () => {};
const $input_title = /*@__PURE__*/ _const("input_title", ($scope) => {
	_return($scope, "[" + $scope.input_title + "]");
	_text($scope["#text/0"], $scope.input_title);
});
const $input$2 = ($scope, input) => $input_title($scope, input.title);
var labeler_default = /*@__PURE__*/ _template("__tests__/tags/labeler.marko", $template$2, "D l", 0, /*@__PURE__*/ _return_setup($input$2));

// tags/wrapper.marko
const $template$1 = "<!><!><button>+</button>";
const $walks$1 = "b%b b";
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_content__OR__n = /*@__PURE__*/ _fill_join("__tests__/tags/wrapper.marko_fill0", "input_content", /*@__PURE__*/ _or(6, ($scope) => $dynamicTag($scope, $scope.input_content, () => ({ value: $scope.n }))));
const $n = /*@__PURE__*/ _fill_let("__tests__/tags/wrapper.marko_fill1", "n/5", $input_content__OR__n);
const $setup__script = _script("__tests__/tags/wrapper.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$n($scope, +$scope.n + 1);
}));
function $setup$1($scope) {
	$setup__script($scope);
	$n($scope, 0);
}
const $input_content = /*@__PURE__*/ _fill_const("__tests__/tags/wrapper.marko_fill0", "input_content", $input_content__OR__n);
const $input$1 = ($scope, input) => $input_content($scope, input.content);
var wrapper_default = /*@__PURE__*/ _template("__tests__/tags/wrapper.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&`)($walks$1);
const $wrapper_content__input_suffix__OR__value = /*@__PURE__*/ _or(6, ($scope) => $input_title($scope["#childScope/0"], $scope.value + $scope._.input_suffix));
const $wrapper_content__input_suffix = /*@__PURE__*/ _fill_join_closure("__tests__/template.marko_fill0", "input_suffix", _closure_get("input_suffix/4", $wrapper_content__input_suffix__OR__value, 0, "__tests__/template.marko_1_input_suffix#0:3/subscribe"), 0);
const $wrapper_content__setup = ($scope) => {
	$wrapper_content__input_suffix($scope);
	_var($scope, "#childScope/0", $wrapper_content__label);
};
const $wrapper_content__label = _var_resume("__tests__/template.marko_1_label#7/var", ($scope, label) => _text($scope["#text/2"], label));
const $wrapper_content__value = /*@__PURE__*/ _const("value", $wrapper_content__input_suffix__OR__value);
const $wrapper_content__$params = ($scope, $params2) => $wrapper_content__value($scope, $params2[0].value);
const $wrapper_content = _content("__tests__/template.marko_1*content", /*@__PURE__*/ ((_w0) => `${_w0}<p> </p>`)($template$2), /*@__PURE__*/ ((_w0) => `0${_w0}&D l`)("D l"), $wrapper_content__setup, $wrapper_content__$params);
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
	$input_content($scope["#childScope/0"], $wrapper_content($scope));
}
const $input = ($scope, input) => $input_suffix($scope, input.suffix);
const $input_suffix__closure = /*@__PURE__*/ _closure($wrapper_content__input_suffix);
const $input_suffix = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_suffix", $input_suffix__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
