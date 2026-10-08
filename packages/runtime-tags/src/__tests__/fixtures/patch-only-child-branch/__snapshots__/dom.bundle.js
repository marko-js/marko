// template.marko
const $count = /*@__PURE__*/ _fill_let("a3", 7, ($scope) => _text($scope.c, $scope.h));
const $setup__script = _script("a1", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.h + 1);
}));
