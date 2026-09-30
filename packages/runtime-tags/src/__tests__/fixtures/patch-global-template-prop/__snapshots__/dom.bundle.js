// tags/child.marko
const $input_n = ($scope, input_n) => _text($scope.b, input_n);

// template.marko
const $count = /*@__PURE__*/ _let(2, ($scope) => $input_n($scope.a, $scope.c));
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.c + 1);
}));
