// tags/labeler.marko
const $template$1 = "<span> </span>";
const $walks$1 = "D l";
const $setup$1 = () => {};
const $input_title = /*@__PURE__*/ _const("input_title", ($scope) => {
	_return($scope, "[" + $scope.input_title + "]");
	_text($scope["#text/0"], $scope.input_title);
});
const $input$1 = ($scope, input) => $input_title($scope, input.title);
var labeler_default = /*@__PURE__*/ _template("__tests__/tags/labeler.marko", $template$1, "D l", 0, /*@__PURE__*/ _return_setup($input$1));

// template.marko
const $Row_content__walks = /*@__PURE__*/ ((_w0) => `0${_w0}&D l`)("D l");
const $Row_content__template = /*@__PURE__*/ ((_w0) => `${_w0}<p> </p>`)($template$1);
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<button>+</button>`)($Row_content__template);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}& b`)($Row_content__walks);
const $Row_content__input_suffix__OR__value = /*@__PURE__*/ _or(6, ($scope) => $input_title($scope["#childScope/0"], $scope.value + $scope._.input_suffix));
const $Row_content__input_suffix = /*@__PURE__*/ _shell_subscribe_closure_get("__tests__/template.marko_1_input_suffix#0:4/init", "input_suffix/6", $Row_content__input_suffix__OR__value, 0, "__tests__/template.marko_1_input_suffix#0:4/subscribe");
const $Row_content__setup = /*@__PURE__*/ _child_setup(($scope) => {
	$Row_content__input_suffix($scope);
	_var($scope, "#childScope/0", $Row_content__label);
});
const $Row_content__label = _var_resume("__tests__/template.marko_1_label#7/var", ($scope, label) => _text($scope["#text/2"], label));
const $Row_content__value = /*@__PURE__*/ _const("value", $Row_content__input_suffix__OR__value);
const $Row_content__$params = ($scope, $params2) => $Row_content__$temp($scope, $params2[0]);
const $Row_content__$temp = ($scope, $temp) => $Row_content__value($scope, $temp.value);
const $n = /*@__PURE__*/ _fill_let("__tests__/template.marko_fill0", "n/5", ($scope) => $Row_content__value($scope["#childScope/0"], $scope.n));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$n($scope, +$scope.n + 1);
}));
function $setup($scope) {
	$Row_content__setup._($scope["#childScope/0"], $scope);
	$setup__script($scope);
	$n($scope, 0);
}
const $input = ($scope, input) => $input_suffix($scope, input.suffix);
const $input_suffix__closure = /*@__PURE__*/ _closure($Row_content__input_suffix);
const $input_suffix = /*@__PURE__*/ _const("input_suffix", $input_suffix__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
