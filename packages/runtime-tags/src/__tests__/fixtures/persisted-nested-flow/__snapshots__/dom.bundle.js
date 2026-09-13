// tags/badge.marko
const $seen = /*@__PURE__*/ _fill_let("b0", 6, ($scope) => _text($scope.b, $scope.g));
const $setup__script = _script("b0", ($scope) => _on($scope.c, "click", function() {
	$seen($scope, +$scope.g + 1);
}));
