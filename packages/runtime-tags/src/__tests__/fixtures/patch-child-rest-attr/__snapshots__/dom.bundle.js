// tags/dump/index.marko
const $input = ($scope, input) => _text($scope.a, JSON.stringify(input));

// template.marko
const $count = /*@__PURE__*/ _let(6, ($scope) => $input($scope.b, { value: $scope.g }));
const $setup__script = _script("a0", ($scope) => _on($scope.c, "click", function() {
	$count($scope, +$scope.g + 1);
}));
