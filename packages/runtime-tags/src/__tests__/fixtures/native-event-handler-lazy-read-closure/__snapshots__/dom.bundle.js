// template.marko
const $for_content__i__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$seen($scope._, `${"f" in $scope._ ? $scope._.f : ""}(${$scope.d}:${"e" in $scope._ ? $scope._.e : 0})`);
}));
const $total = /*@__PURE__*/ _let(4, ($scope) => _text($scope.c, $scope.e));
const $seen = /*@__PURE__*/ _let(5, ($scope) => _text($scope.d, $scope.f));
const $setup__script = _script("a1", ($scope) => _on($scope.b, "click", function() {
	$total($scope, ("e" in $scope ? $scope.e : 0) + 1);
}));
