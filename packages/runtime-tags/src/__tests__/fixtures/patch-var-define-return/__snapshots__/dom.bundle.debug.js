// template.marko
const $template = "<!><div> </div><button>+</button>";
const $walks = "0&b D l b";
const $Sum_content__a__OR__b = /*@__PURE__*/ _fill_signal("a __tests__/template.marko_fill0,b __tests__/template.marko_fill1", /*@__PURE__*/ _or(4, ($scope) => _return($scope, $scope.a + $scope.b)));
const $Sum_content__a = /*@__PURE__*/ _const("a", $Sum_content__a__OR__b);
const $Sum_content__b = /*@__PURE__*/ _const("b", $Sum_content__a__OR__b);
const $Sum_content__$params = ($scope, $params2) => $Sum_content__$temp($scope, $params2[0]);
const $Sum_content__$temp = ($scope, $temp) => {
	$Sum_content__a($scope, $temp.a);
	$Sum_content__b($scope, $temp.b);
};
const $n = /*@__PURE__*/ _let("n/8", ($scope) => $Sum_content__a($scope["#childScope/0"], $scope.n));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/4"], "click", function() {
	$n($scope, +$scope.n + 1);
}));
function $setup($scope) {
	_var($scope, "#childScope/0", $total);
	$n($scope, 0);
	$setup__script($scope);
}
const $total__script = _script("__tests__/template.marko_0_total#9", ($scope) => _el_read($scope["#div/2"]).dataset.total = String($scope.total));
const $total = _var_resume("__tests__/template.marko_0_total#9/var", /*@__PURE__*/ _const("total", ($scope) => {
	_text($scope["#text/3"], $scope.total);
	$total__script($scope);
}));
const $input_b = ($scope, input_b) => $Sum_content__b($scope["#childScope/0"], input_b);
const $input = ($scope, input) => $input_b($scope, input.b);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
