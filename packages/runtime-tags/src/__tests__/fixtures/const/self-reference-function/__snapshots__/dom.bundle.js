// template.marko
const $sum = /*@__PURE__*/ _const(3, ($scope) => _text($scope.b, $scope.d()));
const $items__OR__sum = ($scope) => {
	$sum($scope, (i = 0) => i >= $scope.c?.length ? 0 : $scope.c[i] + $scope.d(i + 1));
};
const $items = /*@__PURE__*/ _let(2, $items__OR__sum);
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$items($scope, [...$scope.c, $scope.c?.length]);
}));
