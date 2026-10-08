// template.marko
const $for_content__setup__script = _script("a1", ($scope) => _on($scope.a, "mouseenter", function() {
	$hovered($scope._, $scope.e);
}));
const $for_content__hovered__OR__item_id = /*@__PURE__*/ _fill_join("a2", 4, /*@__PURE__*/ _or(6, ($scope) => _attr_class_item($scope.a, "hovered", $scope._.f === $scope.e)));
const $for_content__hovered = _shell_for_closure("a6", 0, $for_content__hovered__OR__item_id);
const $hovered = /*@__PURE__*/ _fill_let("a4", 5, $for_content__hovered);
