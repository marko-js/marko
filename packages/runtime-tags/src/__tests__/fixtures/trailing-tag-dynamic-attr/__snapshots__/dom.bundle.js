// template.marko
const $toggle = /* @__PURE__ */ _let(2, ($scope) => _attr($scope.a, "data-toggle", $scope.c));
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$toggle($scope, !$scope.c);
}));
