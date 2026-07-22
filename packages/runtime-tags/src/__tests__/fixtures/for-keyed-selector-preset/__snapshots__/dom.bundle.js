// template.marko
const $for_content__selected = /*@__PURE__*/ _for_selector(0, 1, 5, ($scope) => _attr_class($scope.a, $scope._.b === $scope.f && "danger"));
const $for_content__row_id = /*@__PURE__*/ _const(5, _script("a0", ($scope) => _on($scope.b, "click", function() {
	$selected($scope._, $scope.f);
})));
const $selected = /*@__PURE__*/ _let(1, $for_content__selected);
