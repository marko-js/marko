// template.marko
const $count = /*@__PURE__*/ _let(8, ($scope) => _text($scope.d, $scope.i));
const $setup__script = _script("a1", ($scope) => _on($scope.e, "click", function() {
	$count($scope, +$scope.i + 1);
}));
const $label = _var_resume("a0", ($scope, label) => _text($scope.c, label));
