// total: 2706 (min) 1387 (brotli)
// template.marko: 144 (min) 109 (brotli)
const $disabled__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$disabled($scope, !$scope.d);
}));
const $disabled = /* @__PURE__ */ _let(3, ($scope) => {
	_attr($scope.a, "disabled", $scope.d);
	_text($scope.c, $scope.d ? "enable" : "disable");
	$disabled__script($scope);
});
