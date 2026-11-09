// template.marko
const $for_content__setup = ($scope) => _text($scope.a, $scope.M);
const $for = /*@__PURE__*/ _for_of(0, "<li> </li>", "D ", $for_content__setup);
const $rows = /*@__PURE__*/ _let(4, ($scope) => $for($scope, [$scope.e, "id"]));
const $setup__script = _script("a0", ($scope) => {
	_on($scope.b, "click", function() {
		$rows($scope, [
			$scope.e[0],
			$scope.e[1],
			$scope.e[3],
			$scope.e[2]
		]);
	});
	_on($scope.c, "click", function() {
		$rows($scope, [$scope.e[1], $scope.e[0]]);
	});
	_on($scope.d, "click", function() {
		$rows($scope, [...$scope.e, { id: 9 }]);
	});
});
