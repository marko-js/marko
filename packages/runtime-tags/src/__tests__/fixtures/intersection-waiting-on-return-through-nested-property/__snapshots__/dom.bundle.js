// tags/child.marko
const $input_x__OR__input_y = /*@__PURE__*/ _or(4, ($scope) => _return($scope, { a: $scope.c + $scope.d }));
const $input_x = /*@__PURE__*/ _const(2, $input_x__OR__input_y);
const $input_y = /*@__PURE__*/ _const(3, $input_x__OR__input_y);

// template.marko
const $count = /*@__PURE__*/ _let(4, ($scope) => $input_x($scope.a, $scope.e));
const $other__OR__q_inner_a = /*@__PURE__*/ _or(11, ($scope) => _text($scope.c, $scope.k + $scope.f), 1, 1);
const $other = /*@__PURE__*/ _let(5, ($scope) => {
	$input_y($scope.a, $scope.f);
	$other__OR__q_inner_a($scope);
});
const $setup__script = _script("a1", ($scope) => _on($scope.d, "click", function() {
	$count($scope, +$scope.e + 1);
	$other($scope, +$scope.f + 1);
}));
const $q = ($scope, q) => $q_inner_a($scope, q.inner?.a);
const $r = _var_resume("a0", ($scope, r) => $q($scope, { inner: { ...r } }));
const $q_inner_a = /*@__PURE__*/ _const(10, $other__OR__q_inner_a);
