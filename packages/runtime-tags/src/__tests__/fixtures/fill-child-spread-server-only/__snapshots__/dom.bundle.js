// template.marko
const $for_content__setup__script = _script("a0", ($scope) => _on($scope.a, "mouseenter", function() {
	$hovered($scope._, $scope.e);
}));
const $for_content__hovered__OR__item_id = /*@__PURE__*/ _or(6, ($scope) => _attr_class_item($scope.a, "hovered", $scope._.d === $scope.e));
const $for_content__hovered = /*@__PURE__*/ _for_closure(0, $for_content__hovered__OR__item_id);
const $hovered = /*@__PURE__*/ _let(3, $for_content__hovered);
