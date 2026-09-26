// template.marko
_load_lazy("_a", () => import("./page.mjs").then(() => {}));
const $open = /*@__PURE__*/ _let(6, ($scope) => _text($scope.b, $scope.g ? "close" : "open"));
const $setup__script = _script("b1", ($scope) => _on($scope.a, "click", function() {
	$open($scope, !$scope.g);
}));

// page.marko
const $count = /*@__PURE__*/ _fill_let("a0", 6, ($scope) => _text($scope.c, $scope.g));
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$count($scope, +$scope.g + 1);
}));
