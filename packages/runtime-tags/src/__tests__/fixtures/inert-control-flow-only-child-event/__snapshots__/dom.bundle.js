// total: 2775 (min) 1415 (brotli)
// template.marko: 150 (min) 115 (brotli)
const $for_content__selected = /* @__PURE__ */ _for_closure(0, ($scope) => _attr($scope.a, "data-selected", $scope._.b === $scope.M));
const $selected__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$selected($scope, $scope.b + 1);
}));
const $selected = /* @__PURE__ */ _let(1, ($scope) => {
	$for_content__selected($scope);
	$selected__script($scope);
});
