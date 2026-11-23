// template.marko
const $a = /*@__PURE__*/ _let_change(6, ($scope) => _text($scope.b, $scope.g));
const $b = /*@__PURE__*/ _let_change(8, ($scope) => _text($scope.c, $scope.i));
const $setup__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$a($scope, +$scope.g + 1);
	$b($scope, +$scope.i + 1);
}));
function $valueChange(next) {
	return console.log(next);
}
_resumed.a0 = $valueChange;
