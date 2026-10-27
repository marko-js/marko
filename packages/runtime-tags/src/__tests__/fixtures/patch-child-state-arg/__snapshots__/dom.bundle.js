// tags/arg-badge/index.marko
const $input_value = ($scope, input_value) => _text($scope.a, input_value);
const $input = ($scope, input) => $input_value($scope, input.value);

// template.marko
const $count = /*@__PURE__*/ _let(6, ($scope) => $input($scope.b, { value: $scope.g }));
const $setup__script = _script("a0", ($scope) => _on($scope.c, "click", function() {
	$count($scope, +$scope.g + 1);
}));
