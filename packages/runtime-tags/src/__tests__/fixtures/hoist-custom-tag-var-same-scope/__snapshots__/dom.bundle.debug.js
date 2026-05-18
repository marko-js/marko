// tags/thing.marko
const $template$2 = "";
const $walks$2 = "";
const $setup$2 = () => {};
const $input_value__script = _script("__tests__/tags/thing.marko_0_input_value", ($scope) => $scope.input_value);
const $input_value = /* @__PURE__ */ _const("input_value", $input_value__script);
const $input = ($scope, input) => $input_value($scope, input.value);
var thing_default = /* @__PURE__ */ _template("__tests__/tags/thing.marko", "", "", $setup$2, $input);

// tags/child.marko
const $template$1 = "<div></div>";
const $walks$1 = " b";
function $setup$1($scope) {
	_return($scope, $_return($scope));
}
function $_return($scope) {
	return () => (html) => _el_read($scope["#div/0"]).innerHTML = html;
}
_resume("__tests__/tags/child.marko_0/_return", $_return);
var child_default = /* @__PURE__ */ _template("__tests__/tags/child.marko", $template$1, " b", $setup$1);

// template.marko
const $template = /* @__PURE__ */ ((_w0, _w1) => `${_w0}${_w1}`)("", $template$1);
const $walks = /* @__PURE__ */ ((_w0, _w1) => `/${_w0}&0${_w1}&`)("", " b");
const $setHtml_getter = _hoist_resume("__tests__/template.marko_0_setHtml/hoist", "setHtml");
function $setup($scope) {
	/* @__PURE__ */ $setup$2($scope["#childScope/0"]);
	$input_value($scope["#childScope/0"], $setHtml_getter($scope));
	_var($scope, "#childScope/1", $setHtml);
	$setup$1($scope["#childScope/1"]);
}
const $setHtml = _var_resume("__tests__/template.marko_0_setHtml/var", /* @__PURE__ */ _const("setHtml", ($scope) => _assert_hoist($scope.setHtml)));
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
