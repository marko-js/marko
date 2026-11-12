// layout.marko
const $open = /*@__PURE__*/ _fill_let("a1", 6, ($scope) => _text($scope.b, $scope.g ? "close" : "open"));
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$open($scope, !$scope.g);
}));

// template.marko
const $global_key = /*@__PURE__*/ _global_key(5);
const $global2__script = _script("d4", ($scope) => {
	$global2.r($scope);
	$scope.$.log?.("router");
});
const $global2 = /*@__PURE__*/ _global_closure("d6", $global_key, $global2__script);

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
