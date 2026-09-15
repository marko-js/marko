// tags/counter/index.marko
const $spins = /*@__PURE__*/ _fill_let("b0", 6, ($scope) => _text($scope.b, $scope.g));
const $setup__script$1 = _script("b0", ($scope) => _on($scope.c, "click", function() {
	$spins($scope, +$scope.g + 1);
}));
const $input_value = ($scope, input_value) => _text($scope.a, input_value);

// template.marko
const $count = /*@__PURE__*/ _let(6, ($scope) => $input_value($scope.b, $scope.g));
const $setup__script = _script("a0", ($scope) => _on($scope.c, "click", function() {
	$count($scope, +$scope.g + 1);
}));
