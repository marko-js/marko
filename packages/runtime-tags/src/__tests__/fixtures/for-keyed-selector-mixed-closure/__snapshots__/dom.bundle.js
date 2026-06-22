// template.marko
const $for_content__enabled__OR__selected__OR__row_id = /* @__PURE__ */ _or(5, ($scope) => _attr_class($scope.a, $scope._.c && $scope._.d === $scope.e && "danger"), 2);
const $for_content__enabled = /* @__PURE__ */ _for_closure(1, $for_content__enabled__OR__selected__OR__row_id);
const $enabled__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$enabled($scope, !$scope.c);
}));
const $enabled = /* @__PURE__ */ _let(2, ($scope) => {
	$for_content__enabled($scope);
	$enabled__script($scope);
});
