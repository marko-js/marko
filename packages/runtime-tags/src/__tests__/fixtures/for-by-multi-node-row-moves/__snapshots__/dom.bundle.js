// template.marko
const $for_content__setup = ($scope) => {
	_text($scope.a, $scope.M);
	_text($scope.b, $scope.M);
};
const $for = /*@__PURE__*/ _for_of(0, "<dt> </dt><dd> </dd>", "D lD ", $for_content__setup);
const $rows = /*@__PURE__*/ _let(4, ($scope) => {
	$rows_($scope, $scope.e?.[0]);
	$rows_2($scope, $scope.e?.[2]);
	$rows_3($scope, $scope.e?.[1]);
	$rows_4($scope, $scope.e?.[3]);
	$for($scope, [$scope.e, "id"]);
});
const $rows_ = /*@__PURE__*/ _const(5);
const $rows_2 = /*@__PURE__*/ _const(6);
const $rows_3 = /*@__PURE__*/ _const(7);
const $rows_4 = /*@__PURE__*/ _const(8);
const $setup__script = _script("a0", ($scope) => {
	_on($scope.b, "click", function() {
		$rows($scope, [...$scope.e].reverse());
	});
	_on($scope.c, "click", function() {
		$rows($scope, [
			$scope.f,
			$scope.g,
			$scope.h,
			$scope.i
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
