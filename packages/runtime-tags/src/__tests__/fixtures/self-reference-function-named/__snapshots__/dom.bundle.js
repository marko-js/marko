// template.marko
const $items = /*@__PURE__*/ _let(2, ($scope) => _text($scope.b, function sum(i = 0) {
	return i >= $scope.c.length ? 0 : $scope.c[i] + sum(i + 1);
}()));
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$items($scope, [...$scope.c, $scope.c.length]);
}));
