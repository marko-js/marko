// total: 2946 (min) 1491 (brotli)
// template.marko: 195 (min) 129 (brotli)
const $for_content__selected__OR__num = /* @__PURE__ */ _or(4, ($scope) => {
	_attr($scope.a, "data-selected", $scope._.b === $scope.d);
	_attr($scope.a, "data-multiple", $scope.d % $scope._.b === 0);
});
const $for_content__selected = /* @__PURE__ */ _for_closure(0, $for_content__selected__OR__num);
const $for_content__num__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$selected($scope._, $scope.d);
}));
const $selected = /* @__PURE__ */ _let(1, $for_content__selected);
