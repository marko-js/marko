// template.marko
const $Sum_content__a__OR__b = /*@__PURE__*/ _fill_join("a2", 3, /*@__PURE__*/ _fill_join("a1", 2, /*@__PURE__*/ _or(4, ($scope) => _return($scope, $scope.c + $scope.d))));
const $Sum_content__a = /*@__PURE__*/ _const(2, $Sum_content__a__OR__b);
const $n = /*@__PURE__*/ _let(8, ($scope) => $Sum_content__a($scope.a, $scope.i));
const $setup__script = _script("a4", ($scope) => _on($scope.e, "click", function() {
	$n($scope, +$scope.i + 1);
}));
const $total__script = _script("a5", ($scope) => $scope.c.dataset.total = String($scope.j));
const $total = _var_resume("a3", /*@__PURE__*/ _const(9, ($scope) => {
	_text($scope.d, $scope.j);
	$total__script($scope);
}));
