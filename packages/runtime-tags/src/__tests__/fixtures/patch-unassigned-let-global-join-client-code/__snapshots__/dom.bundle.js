// template.marko
const $uid = _let(6, /* @__PURE__ */ _fill_global_join("a0", ($scope) => _text($scope.a, $scope.g + "-" + $scope.$.x), "x"));
const $n = /*@__PURE__*/ _let(7, ($scope) => _text($scope.c, $scope.h));
const $setup__script = _script("a1", ($scope) => _on($scope.b, "click", function() {
	$n($scope, +$scope.h + 1);
}));
