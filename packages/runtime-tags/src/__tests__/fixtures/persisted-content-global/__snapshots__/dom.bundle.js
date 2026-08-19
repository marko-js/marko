// tags/widget/index.marko
const $input_value = ($scope, input_value) => _text($scope.a, input_value);

// template.marko
const $count = /*@__PURE__*/ _let(2, ($scope) => $input_value($scope.a, $scope.c));
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.c + 1);
}));
