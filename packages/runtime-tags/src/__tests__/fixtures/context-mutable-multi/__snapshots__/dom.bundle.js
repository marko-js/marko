// tags/theme-provider.marko
const $theme = /*@__PURE__*/ _let(5, ($scope) => _context_value($scope, $scope.f, "b"));
const $setup__script = _script("b0", ($scope) => _on($scope.b, "click", function() {
	$theme($scope, $scope.f === "light" ? "dark" : "light");
}));

// template.marko
const $context_theme = _context_closure("b", ($scope2, $provider) => ($themeprovider_content__theme($scope2, $provider["I"]), $themeprovider_content__accent($scope2, $provider["I"])), "a0");
const $themeprovider_content__theme = /*@__PURE__*/ _const(2, ($scope) => _text($scope.a, $scope.c));
const $themeprovider_content__accent = /*@__PURE__*/ _const(3, ($scope) => _text($scope.b, $scope.d === "light" ? "gold" : "silver"));
