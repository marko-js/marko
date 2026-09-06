// tags/counter.marko
const $n = /*@__PURE__*/ _fill_let("b0", 7, ($scope) => _text($scope.b, $scope.h));
const $setup__script = _script("b0", ($scope) => _on($scope.c, "click", function() {
	$n($scope, +$scope.h + 1);
}));
