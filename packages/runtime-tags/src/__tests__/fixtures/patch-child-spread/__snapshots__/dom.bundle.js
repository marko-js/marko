// tags/card.marko
const $open = /*@__PURE__*/ _fill_let("b0", 8, ($scope) => _text($scope.d, $scope.i ? "hide" : "show"));
const $setup__script$1 = _script("b0", ($scope) => _on($scope.c, "click", function() {
	$open($scope, !$scope.i);
}));

// template.marko
const $count = /*@__PURE__*/ _let(9, ($scope) => _text($scope.d, $scope.j));
const $setup__script = _script("a1", ($scope) => _on($scope.c, "click", function() {
	$count($scope, +$scope.j + 1);
}));
