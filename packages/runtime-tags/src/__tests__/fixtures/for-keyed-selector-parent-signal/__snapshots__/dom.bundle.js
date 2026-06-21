// template.marko
const $for_content__selected__OR__enabled__OR__row_id = /* @__PURE__ */ _or(6, ($scope) => _attr_class($scope.a, $scope._.d && $scope.Pa && "danger"), 2);
const $for_content__selected = /* @__PURE__ */ _for_selector(0, 2, 5, $for_content__selected__OR__enabled__OR__row_id);
const $for_content__enabled = /* @__PURE__ */ _for_closure(0, $for_content__selected__OR__enabled__OR__row_id);
const $for_content__row_id__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$selected($scope._, $scope.f);
}));
const $selected = /* @__PURE__ */ _let(2, $for_content__selected);
const $enabled__script = _script("a1", ($scope) => _on($scope.b, "click", function() {
	$enabled($scope, !$scope.d);
}));
const $enabled = /* @__PURE__ */ _let(3, ($scope) => {
	$for_content__enabled($scope);
	$enabled__script($scope);
});
