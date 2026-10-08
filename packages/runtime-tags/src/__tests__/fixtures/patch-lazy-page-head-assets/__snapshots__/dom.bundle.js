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
