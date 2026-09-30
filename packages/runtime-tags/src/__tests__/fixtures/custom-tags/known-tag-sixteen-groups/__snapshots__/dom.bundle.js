// tags/child.marko
const $input_a = ($scope, input_a0) => _text($scope.a, input_a0);

// template.marko
const $x = /*@__PURE__*/ _let(3, ($scope) => {
	$input_a($scope.a, $scope.d);
	_text($scope.c, $scope.d);
});
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$x($scope, +$scope.d + 1);
}));
