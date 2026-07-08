// tags/theme-provider.marko
const $theme = /*@__PURE__*/ _let(6, ($scope) => {
	_text($scope.a, $scope.g);
	_context_value($scope, $scope.g, "c");
});
const $setup__script = _script("c0", ($scope) => _on($scope.c, "click", function() {
	$theme($scope, $scope.g === "light" ? "dark" : "light");
}));
