// template.marko
const $for_content__input_selected__OR__enabled__OR__row_id = /* @__PURE__ */ _or(5, ($scope) => _attr_class($scope.a, $scope._.g && $scope._.f === $scope.e && "sel"), 2);
const $for_content__enabled = /* @__PURE__ */ _for_closure(1, $for_content__input_selected__OR__enabled__OR__row_id);
const $enabled__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$enabled($scope, !$scope.g);
}));
const $enabled = /* @__PURE__ */ _let(6, ($scope) => {
	$for_content__enabled($scope);
	$enabled__script($scope);
});
