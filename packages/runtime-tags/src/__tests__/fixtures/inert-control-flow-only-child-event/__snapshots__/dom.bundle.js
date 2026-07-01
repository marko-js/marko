// template.marko
const $for_content__selected = /* @__PURE__ */ _for_selector(0, 1, "M", ($scope) => _attr($scope.a, "data-selected", $scope._.b === $scope.M));
const $selected__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$selected($scope, $scope.b + 1);
}));
const $selected = /* @__PURE__ */ _let(1, ($scope) => {
	$for_content__selected($scope);
	$selected__script($scope);
});
