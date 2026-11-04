// tags/panel.marko
const $if_content__input_a__OR__input_b = /*@__PURE__*/ _or_patch("b0", 1, ($scope) => _text($scope.a, $scope._.e + ":" + $scope._.f));
const $if_content__input_a = /*@__PURE__*/ _if_closure_patch("b2", 0, 0, $if_content__input_a__OR__input_b);
const $input_a = /*@__PURE__*/ _const(4, $if_content__input_a);

// template.marko
const $count = _let(6, ($scope) => $input_a($scope.a, $scope.g));
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.g + 1);
}));
