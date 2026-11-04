// tags/counter.marko
const $c = /*@__PURE__*/ _fill_let("b1", 6, ($scope) => _text($scope.c, $scope.g));
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$c($scope, +$scope.g + 1);
}));
