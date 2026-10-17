// tags/panel.marko
const $input_b__OR__input_a = /*@__PURE__*/ _fill_join_value("b5", 5, /*@__PURE__*/ _patch_or("b6", 7, ($scope) => _text($scope.b, $scope.g + ":" + $scope.f)));
const $input_a = /*@__PURE__*/ _const(6, $input_b__OR__input_a);

// template.marko
const $count = /*@__PURE__*/ _fill_let("a1", 6, ($scope) => $input_a($scope.a, $scope.g));
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.g + 1);
}));
