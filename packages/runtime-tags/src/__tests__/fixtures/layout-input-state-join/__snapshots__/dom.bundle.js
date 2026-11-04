// layout.marko
const $if_content__input_a__OR__input_b = /*@__PURE__*/ _or(1, ($scope) => _text($scope.a, $scope._.f + $scope._.g));
const $if_content__input_a = /*@__PURE__*/ _if_closure(0, 0, $if_content__input_a__OR__input_b);
const $input_a = /*@__PURE__*/ _const(5, $if_content__input_a);

// template.marko
const $Layout_content__setup = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$a($scope._, +$scope._.f + 1);
}));
const $a = /*@__PURE__*/ _let(5, ($scope) => $input_a($scope.a, $scope.f));
