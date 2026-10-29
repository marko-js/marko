// tags/child.marko
const $value = /*@__PURE__*/ _let(5, ($scope) => $value_b($scope, $scope.f?.b));
const $value_b__OR__n = /*@__PURE__*/ _or(8, ($scope) => _text($scope.b, $scope.g + $scope.h));
const $value_b = /*@__PURE__*/ _const(6, $value_b__OR__n);
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$value($scope, {
		a: "y",
		b: "z"
	});
}));
