// template.marko
const $for_content__selected__OR__row_id = /*@__PURE__*/ _or(5, ($scope) => _attr_class($scope.a, $scope._.e === $scope.e && "sel"));
const $for_content__selected = /*@__PURE__*/ _for_selector(0, 4, 4, $for_content__selected__OR__row_id);
const $for_content__setup = $for_content__selected;
const $for_content__row_id = /*@__PURE__*/ _const(4, $for_content__selected__OR__row_id);
const $for_content__row_label = ($scope, row_label) => _text($scope.b, row_label);
const $for_content__$params = ($scope, $params2) => {
	$for_content__row_id($scope, $params2[0]?.id);
	$for_content__row_label($scope, $params2[0]?.label);
};
const $selected = /*@__PURE__*/ _let(4, $for_content__selected);
const $for = /*@__PURE__*/ _for_of(0, "<li> </li>", " D l", $for_content__setup, $for_content__$params);
const $rows_3__OR__rows_2__OR__rows_ = _script("a0", ($scope) => _on($scope.c, "click", function() {
	$rows($scope, [
		$scope.g,
		$scope.h,
		$scope.i
	]);
	$selected($scope, 3);
}));
const $rows = /*@__PURE__*/ _let(5, ($scope) => {
	$rows_($scope, $scope.f?.[3]);
	$rows_2($scope, $scope.f?.[2]);
	$rows_3($scope, $scope.f?.[0]);
	$for($scope, [$scope.f, "id"]);
	$rows_3__OR__rows_2__OR__rows_($scope);
});
const $setup__script = _script("a1", ($scope) => {
	_on($scope.b, "click", function() {
		$selected($scope, 2);
	});
	_on($scope.d, "click", function() {
		$selected($scope, 4);
		$rows($scope, [...$scope.f].reverse());
	});
});
const $rows_ = /*@__PURE__*/ _const(6);
const $rows_2 = /*@__PURE__*/ _const(7);
const $rows_3 = /*@__PURE__*/ _const(8);
