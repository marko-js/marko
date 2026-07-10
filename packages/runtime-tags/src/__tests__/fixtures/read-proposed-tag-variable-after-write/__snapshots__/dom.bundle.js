// template.marko
const $clickCount = /*@__PURE__*/ _let(4, ($scope) => _text($scope.b, $scope.e));
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$scope.c.innerHTML = $clickCount($scope, ("e" in $scope ? $scope.e : 0) + 1) - 1;
	$scope.d.innerHTML = "e" in $scope ? $scope.e : 0;
}));
