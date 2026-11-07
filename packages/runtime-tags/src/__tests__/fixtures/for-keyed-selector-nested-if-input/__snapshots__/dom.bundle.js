// template.marko
const $for_content__selected = /*@__PURE__*/ _for_selector(0, 5, ($scope) => _attr_class_item($scope.a, "danger", $scope._._.f === $scope.M), ($scope) => $scope._);
const $for_content__setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$selected($scope._._, $scope.M);
}));
const $if_content__selected = /*@__PURE__*/ _if_closure(0, 0, $for_content__selected);
const $selected = /*@__PURE__*/ _let(5, $if_content__selected);
