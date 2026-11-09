// template.marko
const $for_content__selected = /*@__PURE__*/ _for_selector(2, 9, ($scope) => _attr_class_item($scope.a, "on", $scope.M === $scope._.j));
const $for_content__setup = ($scope) => {
	$for_content__selected._($scope);
	_text($scope.b, $scope.M);
};
const $for = /*@__PURE__*/ _for_of(2, "<span> </span>", " D ", $for_content__setup);
const $items__OR__r = /*@__PURE__*/ _or(11, ($scope) => $for($scope, [$scope.k ? $scope.i.slice(0, 1) : $scope.i, "id"]), 1, 1);
const $items = /*@__PURE__*/ _let(8, $items__OR__r);
const $selected = /*@__PURE__*/ _let(9, $for_content__selected);
const $setup__script = _script("a1", ($scope) => {
	_on($scope.d, "click", function() {
		$items($scope, $scope.i.slice(0, 2));
		$selected($scope, 3);
	});
	_on($scope.e, "click", function() {
		$items($scope, [...$scope.i, { id: 3 }]);
	});
});
const $r = _var_resume("a0", /*@__PURE__*/ _const(10, $items__OR__r));
