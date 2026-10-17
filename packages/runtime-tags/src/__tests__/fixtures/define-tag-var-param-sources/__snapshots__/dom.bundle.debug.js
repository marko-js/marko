// template.marko
const $template = "<!><div><!>|<!></div><button>+</button>";
const $walks = "0&0&bD%c%l b";
const $Sum_content__a__OR__b = /*@__PURE__*/ _or(4, ($scope) => _return($scope, $scope.a + $scope.b));
const $Sum_content__a = /*@__PURE__*/ _const("a", $Sum_content__a__OR__b);
const $Sum_content__b = /*@__PURE__*/ _const("b", $Sum_content__a__OR__b);
const $Sum_content__$params = ($scope, $params2) => $Sum_content__$temp($scope, $params2[0]);
const $Sum_content__$temp = ($scope, $temp) => {
	$Sum_content__a($scope, $temp.a);
	$Sum_content__b($scope, $temp.b);
};
const $n = /*@__PURE__*/ _let("n/10", ($scope) => $Sum_content__a($scope["#childScope/0"], $scope.n));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/6"], "click", function() {
	$n($scope, +$scope.n + 1);
}));
function $setup($scope) {
	$Sum_content__b($scope["#childScope/2"], 1);
	_var($scope, "#childScope/0", $x);
	_var($scope, "#childScope/2", $y);
	$n($scope, 0);
	$setup__script($scope);
}
const $x = _var_resume("__tests__/template.marko_0_x#11/var", ($scope, x) => _text($scope["#text/4"], x));
const $input_b = ($scope, input_b) => {
	$Sum_content__b($scope["#childScope/0"], input_b);
	$Sum_content__a($scope["#childScope/2"], input_b);
};
const $y = _var_resume("__tests__/template.marko_0_y#12/var", ($scope, y) => _text($scope["#text/5"], y));
const $input = ($scope, input) => $input_b($scope, input.b);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
