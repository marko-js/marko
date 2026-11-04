// tags/dump/index.marko
const $input = ($scope, input) => _text($scope.a, input.format(input.value));

// template.marko
const $input_suffix__OR__count = /*@__PURE__*/ _or_patch("a1", 6, ($scope) => $input($scope.a, {
	value: $scope.f,
	format: (v) => v + $scope.e
}));
const $count = _let(5, $input_suffix__OR__count);
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.f + 1);
}));
