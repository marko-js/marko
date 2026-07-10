// template.marko
const $a__OR__b = /*@__PURE__*/ _or(4, ($scope) => _text($scope.b, ("c" in $scope ? $scope.c : 0) + ("d" in $scope ? $scope.d : 0)));
const $a = /*@__PURE__*/ _let(2, $a__OR__b);
const $b = /*@__PURE__*/ _let(3, $a__OR__b);
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$a($scope, ("c" in $scope ? $scope.c : 0) + 1);
	$b($scope, ("d" in $scope ? $scope.d : 0) + 1);
}));
