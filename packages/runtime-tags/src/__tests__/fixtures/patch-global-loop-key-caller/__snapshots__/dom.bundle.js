// tags/rows.marko
const $for = /*@__PURE__*/ _for_until_unkeyed(0, "<li> </li>", "D ", /* @__PURE__ */ _fill_global_for("b0", 0, ($scope) => _text($scope.a, $scope.M + ":" + $scope.$.x), 4, 0, "x"));
const $input_n = ($scope, input_n) => $for($scope, [input_n]);

// template.marko
const $n = _let(6, ($scope) => $input_n($scope.b, $scope.g));
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$n($scope, +$scope.g + 1);
}));
