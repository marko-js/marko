// template.marko
const $toggle__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$toggle($scope, !$scope.c);
}));
const $toggle = /* @__PURE__ */ _let(2, ($scope) => {
	_attr($scope.a, "data-toggle", $scope.c);
	$toggle__script($scope);
});
