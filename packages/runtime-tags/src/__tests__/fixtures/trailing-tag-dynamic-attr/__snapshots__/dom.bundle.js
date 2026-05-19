// total: 2607 (min) 1351 (brotli)
// template.marko: 113 (min) 94 (brotli)
const $toggle__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$toggle($scope, !$scope.c);
}));
const $toggle = /* @__PURE__ */ _let(2, ($scope) => {
	_attr($scope.a, "data-toggle", $scope.c);
	$toggle__script($scope);
});
