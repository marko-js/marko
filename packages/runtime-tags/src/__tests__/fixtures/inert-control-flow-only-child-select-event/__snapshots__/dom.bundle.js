// total: 2762 (min) 1410 (brotli)
// template.marko: 141 (min) 105 (brotli)
const $for_content__selected = /* @__PURE__ */ _for_closure(0, ($scope) => _attr($scope.a, "selected", $scope._.b === $scope.M));
const $selected = /* @__PURE__ */ _let(1, $for_content__selected);
const $setup__script = _script("a0", ($scope) => _on($scope.a, "change", function(e) {
	$selected($scope, e.target.value);
}));
