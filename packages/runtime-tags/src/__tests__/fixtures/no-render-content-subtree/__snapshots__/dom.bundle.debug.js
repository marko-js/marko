// tags/my-const.marko
const $template$2 = "";
const $walks$2 = "";
const $setup$2 = () => {};
const $input_value = /*@__PURE__*/ _const("input_value", ($scope) => _return($scope, $scope.input_value));
const $input$2 = ($scope, input) => $input_value($scope, input.value);
var my_const_default = /*@__PURE__*/ _template("__tests__/tags/my-const.marko", "", "", $setup$2, $input$2);

// tags/child.marko
const $template$1 = "";
const $walks$1 = /*@__PURE__*/ ((_w0) => `0${_w0}&`)("");
const $input__OR__x__script = _script("__tests__/tags/child.marko_0_input_x", ($scope) => $scope.input.output().innerHTML = $scope.x);
const $input__OR__x = /*@__PURE__*/ _or(6, $input__OR__x__script);
const $x = _var_resume("__tests__/tags/child.marko_0_x/var", /*@__PURE__*/ _const("x", $input__OR__x));
function $setup$1($scope) {
	_var($scope, "#childScope/0", $x);
	/* @__PURE__ */ $setup$2($scope["#childScope/0"]);
}
const $input_foo = ($scope, input_foo) => $input_value($scope["#childScope/0"], input_foo);
const $input$1 = /*@__PURE__*/ _const("input", ($scope) => {
	$input_foo($scope, $scope.input.foo);
	$input__OR__x($scope);
});
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $template = "<div></div><!><!>";
const $walks = " b%c";
const $setup = () => {};
const $if_content__setup = ($scope) => {
	$setup$1($scope["#childScope/0"]);
	$input$1($scope["#childScope/0"], {
		foo: "bar",
		output: $output_getter($scope._)
	});
};
const $output_getter = _el("__tests__/template.marko_0_#div", "#div/0");
const $if = /*@__PURE__*/ _if("#text/1", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => $input_show($scope, input.show);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
