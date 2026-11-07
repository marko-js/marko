// tags/rows.marko
const $for_content__$global_x = /*@__PURE__*/ _for_closure_patch("b3", 0, ($scope) => _text($scope.a, $scope.M + ":" + $scope.$.x), 4);
const $for = /*@__PURE__*/ _for_until_unkeyed(0, "<li> </li>", "D ", $for_content__$global_x);
const $input_n = ($scope, input_n) => $for($scope, [input_n]);
const $global_x = _fill_global("b1", $for_content__$global_x, "x");

// template.marko
const $n = _let(6, ($scope) => $input_n($scope.b, $scope.g));
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$n($scope, +$scope.g + 1);
}));
