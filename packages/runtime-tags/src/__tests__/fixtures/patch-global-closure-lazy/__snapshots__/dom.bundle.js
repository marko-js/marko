// child.marko
const $count = /*@__PURE__*/ _fill_let("a4", 4, ($scope) => _text($scope.b, $scope.e));
const $setup__script = _script("a3", ($scope) => _on($scope.a, "click", function() {
	$count($scope, +$scope.e + 1);
}));
