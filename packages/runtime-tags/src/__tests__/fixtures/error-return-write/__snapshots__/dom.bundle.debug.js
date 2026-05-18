// tags/child.marko
const $template$1 = "";
const $walks$1 = "";
function $setup$1($scope) {
	_return($scope, 1);
	_return_change($scope, false);
}
var child_default = /* @__PURE__ */ _template("__tests__/tags/child.marko", "", "", $setup$1);

// template.marko
const $template = /* @__PURE__ */ ((_w0) => `${_w0}<button></button>`)("");
const $walks = /* @__PURE__ */ ((_w0) => `0${_w0}& b`)("");
const $x = _var_resume("__tests__/template.marko_0_x/var", ($scope, x) => {});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/2"], "click", function() {
	_var_change($scope["#childScope/0"], 2, "x");
}));
function $setup($scope) {
	_var($scope, "#childScope/0", $x);
	$setup$1($scope["#childScope/0"]);
	$setup__script($scope);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
