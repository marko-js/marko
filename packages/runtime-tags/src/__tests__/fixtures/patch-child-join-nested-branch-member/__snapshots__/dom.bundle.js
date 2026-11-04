// tags/panel.marko
const $input_b__OR__input_a = /*@__PURE__*/ _or_patch("b5", 7, ($scope) => _text($scope.b, $scope.g + ":" + $scope.f));
const $input_a = /*@__PURE__*/ _const(6, $input_b__OR__input_a);

// template.marko
const $count = _let(6, ($scope) => $input_a($scope.a, $scope.g));
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.g + 1);
}));
