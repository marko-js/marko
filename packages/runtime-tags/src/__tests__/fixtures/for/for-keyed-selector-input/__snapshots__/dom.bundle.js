// template.marko
const $for_content__input_selected__OR__enabled = /*@__PURE__*/ _or(2, ($scope) => _attr_class($scope.a, $scope._.g && $scope._.f === $scope.M && "sel"));
const $for_content__enabled = /*@__PURE__*/ _for_closure(1, $for_content__input_selected__OR__enabled);
const $enabled = /*@__PURE__*/ _let(6, $for_content__enabled);
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$enabled($scope, !$scope.g);
}));
