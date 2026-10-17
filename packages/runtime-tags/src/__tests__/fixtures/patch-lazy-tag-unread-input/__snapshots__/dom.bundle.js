// template.marko
const $n = /*@__PURE__*/ _fill_let("b3", 10, ($scope) => _text($scope.b, $scope.k));
const $setup__script = _script("b1", ($scope) => _on($scope.a, "click", function() {
	$n($scope, +$scope.k + 1);
}));

// card.marko
const $c = /*@__PURE__*/ _fill_let("a1", 7, ($scope) => _text($scope.c, $scope.h));
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$c($scope, +$scope.h + 1);
}));
