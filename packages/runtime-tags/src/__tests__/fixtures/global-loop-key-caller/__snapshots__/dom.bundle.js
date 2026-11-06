// tags/rows.marko
const $for_content__setup = ($scope) => _text($scope.a, $scope.M + ":" + $scope.$.x);
const $for = /*@__PURE__*/ _for_until_unkeyed(0, "<li> </li>", "D ", $for_content__setup);
const $input_n = ($scope, input_n) => $for($scope, [input_n]);

// template.marko
const $n = /*@__PURE__*/ _let(6, ($scope) => $input_n($scope.b, $scope.g));
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$n($scope, +$scope.g + 1);
}));
