// total: 6577 (min) 3046 (brotli)
// template.marko: 185 (min) 146 (brotli)
const $for = /* @__PURE__ */ _for_of(0, "<div></div>", "b");
const $children__script = _script("a0", ($scope) => {
	if ($scope.b?.length === 1) $children($scope, [...$scope.b, 2]);
});
const $children = /* @__PURE__ */ _let(1, ($scope) => {
	$children_length($scope, $scope.b?.length);
	$for($scope, [$scope.b]);
	$children__script($scope);
});
const $children_length = /* @__PURE__ */ _const(2, ($scope) => _attr($scope.a, "data-children", $scope.c));
