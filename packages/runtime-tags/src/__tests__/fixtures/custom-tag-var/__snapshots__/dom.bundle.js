// total: 2610 (min) 1355 (brotli)
// tags/child.marko: 115 (min) 94 (brotli)
const $x__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$x($scope, $scope.c + 1);
}));
const $x = /* @__PURE__ */ _let(2, ($scope) => {
	_text($scope.b, $scope.c);
	_return($scope, $scope.c);
	$x__script($scope);
});

// template.marko: 38 (min) 42 (brotli)
const $data = _var_resume("a0", ($scope, data) => _text($scope.c, data));
