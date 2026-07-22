// template.marko
const $for_content__selected = /*@__PURE__*/ _for_selector(0, 1, 5, ($scope) => _attr_class($scope.a, $scope._.b === $scope.f && "danger"));
const $for_content__setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$selected($scope._, $scope._.b === $scope.f ? void 0 : $scope.f);
}));
const $selected = /*@__PURE__*/ _let(1, $for_content__selected);
