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
const $wrapper_content__input_suffix = /*@__PURE__*/ _fill_join_closure("__tests__/template.marko_fill0", "input_suffix", _closure_get("input_suffix/4", ($scope) => _text($scope["#text/1"], $scope._.input_suffix), 0, "__tests__/template.marko_1_input_suffix#0:3/subscribe"), 0);
const $wrapper_content__setup = $wrapper_content__input_suffix;
const $wrapper_content__value = ($scope, value) => _text($scope["#text/0"], value);
const $wrapper_content__$params = ($scope, $params2) => $wrapper_content__value($scope, $params2[0].value);
const $wrapper_content = _content("__tests__/template.marko_1*content", "<p> </p><em> </em>", "D lD ", $wrapper_content__setup, $wrapper_content__$params);
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
	$input_content($scope["#childScope/0"], $wrapper_content($scope));
}
const $input = ($scope, input) => $input_suffix($scope, input.suffix);
const $input_suffix__closure = /*@__PURE__*/ _closure($wrapper_content__input_suffix);
const $input_suffix = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_suffix", $input_suffix__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
