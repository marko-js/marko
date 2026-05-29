// total: 6819 (min) 3107 (brotli)
// template.marko: 179 (min) 142 (brotli)
const $for = /* @__PURE__ */ _for_of(1, "Child", "b");
const $children__script = _script("a0", ($scope) => {
	if ($scope.c?.length === 1) $children($scope, [...$scope.c, 2]);
});
const $children = /* @__PURE__ */ _let(2, ($scope) => {
	$children_length($scope, $scope.c?.length);
	$for($scope, [$scope.c]);
	$children__script($scope);
});
const $children_length = /* @__PURE__ */ _const(3, ($scope) => _attr($scope.a, "data-children", $scope.d));
