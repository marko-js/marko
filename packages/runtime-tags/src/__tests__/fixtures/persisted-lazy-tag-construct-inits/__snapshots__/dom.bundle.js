// template.marko
_load_lazy("_a", () => import("./child.mjs").then(() => {}));
const $n = /*@__PURE__*/ _let(8, ($scope) => _text($scope.b, $scope.i));
const $setup__script = _script("b1", ($scope) => _on($scope.a, "click", function() {
	$n($scope, +$scope.i + 1);
}));

// child.marko
const $for_content__count__OR__i = /*@__PURE__*/ _fill_join("a1", 3, /*@__PURE__*/ _fill_join_for("a0", 5, /*@__PURE__*/ _or(4, ($scope) => _text($scope.b, $scope._.f + $scope.d)), 1));
const $for_content__count = /*@__PURE__*/ _init_for_closure("a3", 1, $for_content__count__OR__i);
const $count = /*@__PURE__*/ _fill_let("a0", 5, $for_content__count);
const $setup__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$count($scope, +$scope.f + 1);
}));
