// template.marko
const $for_content__setup = ($scope) => {
	_text($scope.a, $scope.M);
	_text($scope.b, $scope.M);
};
const $for = /*@__PURE__*/ _for_of(0, "<dt> </dt><dd> </dd>", "D lD ", $for_content__setup);
const $rows = /*@__PURE__*/ _let(4, ($scope) => $for($scope, [$scope.e, "id"]));
const $setup__script = _script("a0", ($scope) => {
	_on($scope.b, "click", function() {
		$rows($scope, [...$scope.e].reverse());
	});
	_on($scope.c, "click", function() {
		$rows($scope, [
			$scope.e[0],
			$scope.e[2],
			$scope.e[1],
			$scope.e[3]
		]);
	});
	_on($scope.d, "click", function() {
		$rows($scope, [
			{ id: 9 },
			...$scope.e.slice(2),
			...$scope.e.slice(0, 2)
		]);
	});
});
