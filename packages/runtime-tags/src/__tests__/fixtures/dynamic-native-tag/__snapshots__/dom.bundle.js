// template.marko
const $href = /* @__PURE__ */ _let(6, ($scope) => {
	_attr($scope.a, "href", $scope.g);
	_dynamic_native_tag($scope, "a", $scope.g ? "a" : "span");
});
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$href($scope, $scope.g ? void 0 : "/home");
}));
