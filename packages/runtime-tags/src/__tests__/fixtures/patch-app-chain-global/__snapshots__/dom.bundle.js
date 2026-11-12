// layout.marko
const $open = /*@__PURE__*/ _fill_let("a1", 6, ($scope) => _text($scope.b, $scope.g ? "close" : "open"));
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$open($scope, !$scope.g);
}));

// template.marko
const $global2 = /*@__PURE__*/ _global_closure("d6", /* @__PURE__ */ _global_key(5), ($scope) => $global2__script($scope));
const $global2__script = _global_script("d4", ($scope) => $scope.$.log?.("router"), $global2);

// page-a.marko
const $count = /*@__PURE__*/ _fill_let("b1", 2, ($scope) => _text($scope.b, $scope.c));
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$count($scope, +$scope.c + 1);
}));

// page-b.marko
const $count = /*@__PURE__*/ _fill_let("c2", 7, ($scope) => _text($scope.d, $scope.h));
const $setup__script = _script("c1", ($scope) => _on($scope.a, "click", function() {
	$count($scope, +$scope.h + 1);
}));
