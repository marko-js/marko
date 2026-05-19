// tags/child.marko
const $template$2 = "<div></div>";
const $walks$2 = " b";
const $setup$2 = () => {};
const $input__script = _script("__tests__/tags/child.marko_0_input", ($scope) => _el_read($scope["#div/0"]).innerHTML = $scope.input.y());
const $input = /* @__PURE__ */ _const("input", $input__script);
var child_default = /* @__PURE__ */ _template("__tests__/tags/child.marko", $template$2, " b", $setup$2, $input);

// tags/source.marko
const $template$1 = "";
const $walks$1 = "";
function $setup$1($scope) {
	_return($scope, $_return);
}
function $_return() {
	return 1;
}
_resume("__tests__/tags/source.marko_0/_return", $_return);
var source_default = /* @__PURE__ */ _template("__tests__/tags/source.marko", "", "", $setup$1);

// template.marko
const $template = /* @__PURE__ */ ((_w0, _w1) => `${_w0}${_w1}`)($template$2, "");
const $walks = /* @__PURE__ */ ((_w0, _w1) => `/${_w0}&0${_w1}&`)(" b", "");
const $x_getter = _hoist_resume("__tests__/template.marko_0_x/hoist", "x");
function $setup($scope) {
	/* @__PURE__ */ $setup$2($scope["#childScope/0"]);
	$input($scope["#childScope/0"], { y: $x_getter($scope) });
	_var($scope, "#childScope/1", $x);
	$setup$1($scope["#childScope/1"]);
}
const $x = _var_resume("__tests__/template.marko_0_x/var", /* @__PURE__ */ _const("x", ($scope) => _assert_hoist($scope.x)));
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
