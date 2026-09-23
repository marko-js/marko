// template.marko
const $for_content__selected__OR__enabled = /*@__PURE__*/ _or(3, ($scope) => _attr_class($scope.a, $scope._.d && $scope._.c === $scope.M && "danger"));
const $for_content__selected = /*@__PURE__*/ _for_selector(0, 2, "M", $for_content__selected__OR__enabled);
const $for_content__setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$selected($scope._, $scope.M);
}));
const $for_content__enabled = /*@__PURE__*/ _for_closure(0, $for_content__selected__OR__enabled);
const $selected = /*@__PURE__*/ _let(2, $for_content__selected);
const $enabled = /*@__PURE__*/ _let(3, $for_content__enabled);
const $setup__script = _script("a1", ($scope) => _on($scope.b, "click", function() {
	$enabled($scope, !$scope.d);
}));
