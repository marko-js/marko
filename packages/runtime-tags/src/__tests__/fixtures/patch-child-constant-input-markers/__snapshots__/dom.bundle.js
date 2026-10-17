// template.marko
const $count = /*@__PURE__*/ _fill_let("a2", 11, ($scope) => _text($scope.g, $scope.l));
const $setup__script = _script("a1", ($scope) => _on($scope.f, "click", function() {
	$count($scope, +$scope.l + 1);
}));
