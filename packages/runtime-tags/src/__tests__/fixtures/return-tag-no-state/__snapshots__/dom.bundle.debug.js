// tags/child.marko
const $template$1 = "<span>child</span>";
const $walks$1 = "b";
const $x = /*@__PURE__*/ _const("x", ($scope) => _return($scope, $scope.x));
function $setup$1($scope) {
	$x($scope, 1);
}
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template$1, "b", $setup$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<div>parent <!></div>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `0${_w0}&Db%l`)("b");
const $value = _var_resume("__tests__/template.marko_0_value/var", ($scope, value) => _text($scope["#text/2"], value));
function $setup($scope) {
	_var($scope, "#childScope/0", $value);
	$setup$1($scope["#childScope/0"]);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
