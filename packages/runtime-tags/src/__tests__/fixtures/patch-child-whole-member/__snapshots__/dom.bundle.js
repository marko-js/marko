// tags/duo/index.marko
const $input = ($scope, input) => {
	_text($scope.b, JSON.stringify(input));
	_text($scope.a, input.label);
};

// template.marko
const $input_title__OR__count = /*@__PURE__*/ _or_patch("a1", 6, ($scope) => $input($scope.a, {
	label: $scope.e,
	value: $scope.f
}));
const $count = _let(5, $input_title__OR__count);
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.f + 1);
}));
