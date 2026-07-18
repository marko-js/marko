// template.marko
const $claps = /*@__PURE__*/ _let(6, ($scope) => _text($scope.b, $scope.g));
const $setup__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$claps($scope, $scope.g + 1);
}));
