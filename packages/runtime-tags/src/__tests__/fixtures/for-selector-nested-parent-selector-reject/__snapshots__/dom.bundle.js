// template.marko
const $for_content2__selected = /*@__PURE__*/ _closure_get(3, ($scope) => _attr_class_item($scope.a, "danger", $scope._._.b === $scope.M), ($scope) => $scope._._, "a1");
const $for_content2__setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$selected($scope._._, $scope.M);
}));
const $for_content__selected = /*@__PURE__*/ _for_selector(0, 1, ($scope) => _attr_class_item($scope.a, "group", $scope._.b === $scope.M));
const $selected__closure = /*@__PURE__*/ _closure($for_content2__selected);
const $selected = /*@__PURE__*/ _let(1, ($scope) => {
	$for_content__selected($scope);
	$selected__closure($scope);
});
