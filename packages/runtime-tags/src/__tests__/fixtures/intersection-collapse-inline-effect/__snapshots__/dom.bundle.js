// template.marko
const $y = /*@__PURE__*/ _const(2);
const $z = /*@__PURE__*/ _const(3);
const $y__OR__z = _script("a0", ($scope) => document.body.dataset.sum = `${$scope.c + $scope.d}`);
const $count = /*@__PURE__*/ _let(1, ($scope) => {
	$y($scope, $scope.b + 1);
	$z($scope, $scope.b + 2);
	$y__OR__z($scope);
});
const $setup__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$count($scope, +$scope.b + 1);
}));
