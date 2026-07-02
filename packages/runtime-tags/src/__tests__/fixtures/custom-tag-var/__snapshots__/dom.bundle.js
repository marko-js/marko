// tags/child.marko
const $x = /* @__PURE__ */ _let(2, ($scope) => {
	_text($scope.b, $scope.c);
	_return($scope, $scope.c);
});
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$x($scope, $scope.c + 1);
}));

// template.marko
const $data = _var_resume("a0", ($scope, data) => _text($scope.c, data));
