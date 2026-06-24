// tags/child.marko
const $template$1 = "<span>child</span>";
const $walks$1 = "b";
const $x__OR__y = /*@__PURE__*/ _or(2, ($scope) => _return($scope, $scope.x + $scope.y));
const $x = /*@__PURE__*/ _let("x/0", $x__OR__y);
const $y = /*@__PURE__*/ _let("y/1", $x__OR__y);
function $setup$1($scope) {
	$x($scope, 1);
	$y($scope, 2);
}
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template$1, "b", $setup$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<div> </div>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `0${_w0}&D l`)("b");
const $data = _var_resume("__tests__/template.marko_0_data/var", ($scope, data) => _text($scope["#text/2"], data));
function $setup($scope) {
	_var($scope, "#childScope/0", $data);
	$setup$1($scope["#childScope/0"]);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
