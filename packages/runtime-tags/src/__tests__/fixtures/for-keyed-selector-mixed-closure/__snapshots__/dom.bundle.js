// template.marko
const $for_content__enabled__OR__selected = /*@__PURE__*/ _or(2, ($scope) => _attr_class($scope.a, $scope._.c && $scope._.d === $scope.M && "danger"));
const $for_content__enabled = /*@__PURE__*/ _for_closure(1, $for_content__enabled__OR__selected);
const $enabled = /*@__PURE__*/ _let(2, $for_content__enabled);
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$enabled($scope, !$scope.c);
}));
