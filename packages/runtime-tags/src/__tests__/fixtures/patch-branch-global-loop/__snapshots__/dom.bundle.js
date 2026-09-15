// tags/row.marko
const $clicks = /*@__PURE__*/ _fill_let("b0", 6, ($scope) => _text($scope.c, $scope.g));
const $setup__script = _script("b0", ($scope) => _on($scope.b, "click", function() {
	$clicks($scope, +$scope.g + 1);
}));
