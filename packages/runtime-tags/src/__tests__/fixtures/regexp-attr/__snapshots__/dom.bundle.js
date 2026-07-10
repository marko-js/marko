// template.marko
const $pattern = ($scope, pattern) => _attr($scope.a, "pattern", pattern);
const $source = /*@__PURE__*/ _let(2, ($scope) => $pattern($scope, new RegExp($scope.c)));
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$source($scope, "^b+$");
}));
