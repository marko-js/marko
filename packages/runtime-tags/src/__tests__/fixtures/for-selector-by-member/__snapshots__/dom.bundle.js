// template.marko
const $for_content__selected__OR__row_user_id = /* @__PURE__ */ _or(7, ($scope) => _attr_class($scope.a, $scope._.b === $scope.g && "danger"));
const $for_content__selected = /* @__PURE__ */ _for_selector(0, 1, 6, $for_content__selected__OR__row_user_id);
const $for_content__row_user_id__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$selected($scope._, $scope.g);
}));
const $selected = /* @__PURE__ */ _let(1, $for_content__selected);
