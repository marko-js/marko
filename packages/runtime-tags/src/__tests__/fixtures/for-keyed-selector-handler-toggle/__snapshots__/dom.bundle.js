// template.marko
const $for_content__selected__OR__row_id__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$selected($scope._, $scope._.b === $scope.f ? void 0 : $scope.f);
}));
const $for_content__selected__OR__row_id = /* @__PURE__ */ _or(6, ($scope) => {
	_attr_class($scope.a, $scope._.b === $scope.f && "danger");
	$for_content__selected__OR__row_id__script($scope);
});
const $for_content__selected = /* @__PURE__ */ _for_selector(0, 1, 5, $for_content__selected__OR__row_id);
const $selected = /* @__PURE__ */ _let(1, $for_content__selected);
