// layout.marko
const $open = /*@__PURE__*/ _fill_let("a1", 6, ($scope) => _text($scope.b, $scope.g ? "close" : "open"));
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$open($scope, !$scope.g);
}));

// template.marko
_load_lazy("_b", () => import("./page-a.mjs").then(() => {}));
_load_lazy("_c", () => import("./page-b.mjs").then(() => {}));
const $global2__script = _fill_global_script("d5", ($scope) => $scope.$.log?.("router"));
_fill_global_join("", "d4", $global2__script);

// page-a.marko
const $count = /*@__PURE__*/ _fill_let("b1", 2, ($scope) => _text($scope.b, $scope.c));
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$count($scope, +$scope.c + 1);
}));

// page-b.marko
const $count = /*@__PURE__*/ _fill_let("c1", 2, ($scope) => _text($scope.b, $scope.c));
const $setup__script = _script("c0", ($scope) => _on($scope.a, "click", function() {
	$count($scope, +$scope.c + 1);
}));
