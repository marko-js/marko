// template.marko
const $count = /*@__PURE__*/ _let(10, ($scope) => _text($scope.e, $scope.k));
const $setup__script = _script("a2", ($scope) => _on($scope.d, "click", function() {
	$count($scope, $scope.k + 1);
}));
