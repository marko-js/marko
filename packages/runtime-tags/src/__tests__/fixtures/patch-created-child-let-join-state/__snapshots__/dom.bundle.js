// tags/child.marko
const $value__OR__n = /*@__PURE__*/ _or_resume("b1", 7, ($scope) => _text($scope.b, $scope.f + $scope.g));
const $value = /*@__PURE__*/ _let(5, $value__OR__n);
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$value($scope, "z");
}));
