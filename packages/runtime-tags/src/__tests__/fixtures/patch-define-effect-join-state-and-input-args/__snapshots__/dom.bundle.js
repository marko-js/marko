// template.marko
const $Row_content__a__OR__b__script = _script("a1", ($scope) => document.getElementById("log").textContent = String($scope.d + $scope.e));
const $Row_content__a__OR__b = /*@__PURE__*/ _or_patch("a2", 5, ($scope) => {
	_text($scope.a, $scope.d + $scope.e);
	$Row_content__a__OR__b__script($scope);
});
const $Row_content__a = /*@__PURE__*/ _const(3, $Row_content__a__OR__b);
const $Row_content__b = /*@__PURE__*/ _const(4, $Row_content__a__OR__b);
const $input_x__OR__n = /*@__PURE__*/ _or_patch("a4", 7, ($scope) => $Row_content__a($scope.a, $scope.g + $scope.e));
const $input_y__OR__n = /*@__PURE__*/ _or_patch("a5", 8, ($scope) => $Row_content__b($scope.a, $scope.g + $scope.f));
const $n = _let(6, ($scope) => {
	$input_x__OR__n($scope);
	$input_y__OR__n($scope);
});
const $setup__script = _script("a3", ($scope) => _on($scope.b, "click", function() {
	$n($scope, +$scope.g + 1);
}));
