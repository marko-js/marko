// template.marko
const $for_content__row_id = ($scope, row_id) => _text($scope.a, row_id);
const $for_content__$params = ($scope, $params2) => $for_content__row_id($scope, $params2[0]?.id);
const $for = /*@__PURE__*/ _for_of(0, "<li> </li>", "D l", 0, $for_content__$params);
const $rows_0__OR__rows_1__OR__rows_3__OR__rows_ = _script("a2", ($scope) => _on($scope.b, "click", function() {
	$rows($scope, [
		$scope.f,
		$scope.g,
		$scope.h,
		$scope.i
	]);
}));
const $rows_0__OR__rows_ = _script("a1", ($scope) => _on($scope.c, "click", function() {
	$rows($scope, [$scope.g, $scope.f]);
}));
const $rows = /*@__PURE__*/ _let(4, ($scope) => {
	$rows_($scope, $scope.e?.[0]);
	$rows_2($scope, $scope.e?.[1]);
	$rows_3($scope, $scope.e?.[3]);
	$rows_4($scope, $scope.e?.[2]);
	$for($scope, [$scope.e, "id"]);
	$rows_0__OR__rows_1__OR__rows_3__OR__rows_($scope);
	$rows_0__OR__rows_($scope);
});
const $rows_ = /*@__PURE__*/ _const(5);
const $rows_2 = /*@__PURE__*/ _const(6);
const $rows_3 = /*@__PURE__*/ _const(7);
const $rows_4 = /*@__PURE__*/ _const(8);
const $setup__script = _script("a0", ($scope) => _on($scope.d, "click", function() {
	$rows($scope, [...$scope.e, { id: 9 }]);
}));
