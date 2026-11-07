// template.marko
const $for_content__selected__OR__hovered = /*@__PURE__*/ _or(4, ($scope) => _attr_class_items($scope.a, {
	sel: $scope._._.b === $scope.M,
	hov: $scope._.b === $scope.M
}));
const $for_content__selected = /*@__PURE__*/ _for_selector(0, 1, $for_content__selected__OR__hovered, ($scope) => $scope._);
const $for_content__setup__script = _script("a0", ($scope) => {
	_on($scope.b, "click", function() {
		$selected($scope._._, $scope.M);
	});
	_on($scope.d, "click", function() {
		$if_content__hovered($scope._, $scope.M);
	});
});
const $for_content__hovered = /*@__PURE__*/ _for_selector(0, 1, $for_content__selected__OR__hovered);
const $if_content__selected = /*@__PURE__*/ _if_closure(0, 0, $for_content__selected);
const $if_content__hovered = /*@__PURE__*/ _let(1, $for_content__hovered);
const $selected = /*@__PURE__*/ _let(1, $if_content__selected);
