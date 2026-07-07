// tags/getter.marko
const $template$1 = "";
const $walks$1 = "";
const $getter2 = /*@__PURE__*/ _const("getter", ($scope) => _return($scope, $scope.getter));
function $setup$1($scope) {
	$getter2($scope, $getter);
}
function $getter() {
	return "hello";
}
_resume("__tests__/tags/getter.marko_0/getter", $getter);
var getter_default = /*@__PURE__*/ _template("__tests__/tags/getter.marko", "", "", $setup$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<div></div>`)("");
const $walks = /*@__PURE__*/ ((_w0) => `0${_w0}& b`)("");
const $get__script = _script("__tests__/template.marko_0_get", ($scope) => _el_read($scope["#div/2"]).textContent = $scope.get());
const $get = _var_resume("__tests__/template.marko_0_get/var", /*@__PURE__*/ _const("get", $get__script));
function $setup($scope) {
	_var($scope, "#childScope/0", $get);
	$setup$1($scope["#childScope/0"]);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
