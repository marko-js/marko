// template.marko
const $count = /*@__PURE__*/ _let(3, ($scope) => _text($scope.c, $scope.d));
const $setup__script = _script("b1", ($scope) => _on($scope.b, "click", function() {
	$count($scope, $scope.d + 1);
}));
