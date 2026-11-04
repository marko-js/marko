// template.marko
const $for_content__setup = ($scope) => _text($scope.a, $scope.M + ":" + $scope.$.x);
const $for = /*@__PURE__*/ _for_until_unkeyed(1, "<li> </li>", "D ", $for_content__setup);
const $n = /*@__PURE__*/ _let(2, ($scope) => $for($scope, [$scope.c]));
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$n($scope, +$scope.c + 1);
}));
