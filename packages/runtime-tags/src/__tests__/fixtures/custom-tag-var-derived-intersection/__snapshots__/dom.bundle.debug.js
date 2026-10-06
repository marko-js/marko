// tags/child.marko
const $template$1 = "";
const $walks$1 = "";
const $setup$1 = () => {};
const $input_x__OR__input_y = /*@__PURE__*/ _or(4, ($scope) => _return($scope, $scope.input_x + $scope.input_y));
const $input_x = /*@__PURE__*/ _const("input_x", $input_x__OR__input_y);
const $input_y = /*@__PURE__*/ _const("input_y", $input_x__OR__input_y);
const $input = ($scope, input) => {
	$input_x($scope, input.x);
	$input_y($scope, input.y);
};
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", "", "", 0, /*@__PURE__*/ _return_setup($input));

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<button> </button>`)("");
const $walks = /*@__PURE__*/ ((_w0) => `0${_w0}& D l`)("");
const $x = /*@__PURE__*/ _let("x/4", ($scope) => $input_x($scope["#childScope/0"], $scope.x));
const $y = /*@__PURE__*/ _let("y/5", ($scope) => $input_y($scope["#childScope/0"], $scope.y));
const $b__OR__w = /*@__PURE__*/ _or(9, ($scope) => _text($scope["#text/3"], $scope.w + ":" + $scope.b), 1, "#scopeOffset/1");
const $b = /*@__PURE__*/ _let("b/6", $b__OR__w);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/2"], "click", function() {
	$x($scope, +$scope.x + 1);
	$b($scope, +$scope.b + 1);
}));
function $setup($scope) {
	_var($scope, "#childScope/0", $v);
	$x($scope, 0);
	$y($scope, 0);
	$b($scope, 0);
	$setup__script($scope);
}
const $w = /*@__PURE__*/ _const("w", $b__OR__w);
const $v = _var_resume("__tests__/template.marko_0_v#7/var", ($scope, v) => $w($scope, v * 10));
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
