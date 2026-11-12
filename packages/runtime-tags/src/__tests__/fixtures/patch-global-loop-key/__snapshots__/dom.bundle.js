// template.marko
const $for = /*@__PURE__*/ _for_until_unkeyed(1, "<li> </li>", "D ", /* @__PURE__ */ _global_for("a0", /* @__PURE__ */ _global_key(4, "x"), 1, ($scope) => _text($scope.a, $scope.M + ":" + $scope.$.x)));
const $n = _let(2, ($scope) => $for($scope, [$scope.c]));
const $setup__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$n($scope, +$scope.c + 1);
}));
