// template.marko
const $graph_byId__OR__graph_current__OR__graph_all = /*@__PURE__*/ _or(6, _script("a0", ($scope) => _on($scope.a, "click", function() {
	$result($scope, [
		$scope.d.get(1) === $scope.e,
		$scope.d.get(2) === $scope.e.next,
		$scope.f.has($scope.e),
		$scope.e.next.prev === $scope.e
	].join(","));
})), 2);
const $result = /*@__PURE__*/ _let(7, ($scope) => _text($scope.b, $scope.h));
