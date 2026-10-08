// template.marko
const $count = /*@__PURE__*/ _fill_let("a6", 8, ($scope) => _text($scope.d, $scope.i));
const $setup__script = _script("a5", ($scope) => _on($scope.c, "click", function() {
	$count($scope, +$scope.i + 1);
}));
