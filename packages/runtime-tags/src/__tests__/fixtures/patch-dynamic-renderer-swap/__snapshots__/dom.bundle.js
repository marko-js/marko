// template.marko
const $n = /*@__PURE__*/ _fill_let("c4", 8, ($scope) => _text($scope.c, $scope.i));
const $setup__script = _script("c0", ($scope) => _on($scope.b, "click", function() {
	$n($scope, +$scope.i + 1);
}));
