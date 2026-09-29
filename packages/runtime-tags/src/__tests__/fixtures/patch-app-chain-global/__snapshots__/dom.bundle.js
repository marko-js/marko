// layout.marko
const $open = /*@__PURE__*/ _fill_let("a0", 6, ($scope) => _text($scope.b, $scope.g ? "close" : "open"));
const $setup__script$1 = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$open($scope, !$scope.g);
}));

// template.marko
_load_lazy("_b", () => import("./page-a.mjs").then(() => {}));
_load_lazy("_c", () => import("./page-b.mjs").then(() => {}));
const $setup__script = _script("d3", ($scope) => $scope.$.log?.("router"));

// page-a.marko
const $count = /*@__PURE__*/ _fill_let("b0", 2, ($scope) => _text($scope.b, $scope.c));
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$count($scope, +$scope.c + 1);
}));

// page-b.marko
const $count = /*@__PURE__*/ _fill_let("c0", 8, ($scope) => _text($scope.d, $scope.i));
const $setup__script = _script("c1", ($scope) => _on($scope.a, "click", function() {
	$count($scope, +$scope.i + 1);
}));
