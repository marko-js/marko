// tags/theme-display.marko
const $context_theme = _context_closure("c", ($scope2, $provider) => $theme$1($scope2, $provider["I"]), "b0");
const $theme$1 = /*@__PURE__*/ _const(1, ($scope) => _text($scope.a, $scope.b));

// tags/theme-provider.marko
const $theme = /*@__PURE__*/ _let(5, ($scope) => _context_value($scope, $scope.f, "c"));
const $setup__script = _script("c0", ($scope) => _on($scope.b, "click", function() {
	$theme($scope, "dark");
}));

// template.marko
_enable_catch();
const $placeholder_content = _content_resume("a0", "loading", "b");
