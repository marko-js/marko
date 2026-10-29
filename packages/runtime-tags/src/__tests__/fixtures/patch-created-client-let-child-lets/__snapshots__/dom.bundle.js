// tags/child.marko
const $a__OR__b = /*@__PURE__*/ _or_resume("b2", 4, ($scope) => _text($scope.a, $scope.c + $scope.d));
const $b = /*@__PURE__*/ _fill_let("b1", 3, $a__OR__b);
const $setup__script = _script("b0", ($scope) => _on($scope.b, "click", function() {
	$b($scope, +$scope.d + 1);
}));
