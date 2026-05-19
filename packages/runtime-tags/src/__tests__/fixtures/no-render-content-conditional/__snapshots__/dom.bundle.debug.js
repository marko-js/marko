// tags/my-const.marko
const $template$2 = "";
const $walks$2 = "";
const $setup$2 = () => {};
const $input_value = /* @__PURE__ */ _const("input_value", ($scope) => _return($scope, $scope.input_value));
const $input$2 = ($scope, input) => $input_value($scope, input.value);
var my_const_default = /* @__PURE__ */ _template("__tests__/tags/my-const.marko", "", "", $setup$2, $input$2);

// tags/child.marko
const $template$1 = "";
const $walks$1 = /* @__PURE__ */ ((_w0) => `0${_w0}&`)("");
const $input__OR__x__script = _script("__tests__/tags/child.marko_0_input_x", ($scope) => $scope.input.output().innerHTML = $scope.x);
const $input__OR__x = /* @__PURE__ */ _or(6, $input__OR__x__script);
const $x = _var_resume("__tests__/tags/child.marko_0_x/var", /* @__PURE__ */ _const("x", $input__OR__x));
function $setup$1($scope) {
	_var($scope, "#childScope/0", $x);
	/* @__PURE__ */ $setup$2($scope["#childScope/0"]);
}
const $input_foo$1 = ($scope, input_foo) => $input_value($scope["#childScope/0"], input_foo);
const $input$1 = /* @__PURE__ */ _const("input", ($scope) => {
	$input_foo$1($scope, $scope.input.foo);
	$input__OR__x($scope);
});
var child_default = /* @__PURE__ */ _template("__tests__/tags/child.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $template = /* @__PURE__ */ ((_w0) => `<div></div>${_w0}`)($template$1);
const $walks = /* @__PURE__ */ ((_w0) => ` b/${_w0}&`)($walks$1);
const $output_getter = _el("__tests__/template.marko_0_#div", "#div/0");
function $setup($scope) {
	$setup$1($scope["#childScope/1"]);
}
const $input_foo = ($scope, input_foo) => $input$1($scope["#childScope/1"], {
	foo: input_foo,
	output: $output_getter($scope)
});
const $input = ($scope, input) => $input_foo($scope, input.foo);
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup, $input);
