// tags/plain-child.marko
const $input_a__OR__input_b = /*@__PURE__*/ _fill_join("b1", 4, /*@__PURE__*/ _fill_join("b0", 3, /*@__PURE__*/ _or_resume("b2", 5, ($scope) => _text($scope.a, $scope.d + $scope.e))));
const $input_a = /*@__PURE__*/ _const(3, $input_a__OR__input_b);

// template.marko
const $if_content__tab = /*@__PURE__*/ _init_resume("a5", /*@__PURE__*/ _if_closure(1, 0, ($scope) => $input_a($scope.a, $scope._.g)));
const $tab = _let(6, $if_content__tab);
const $setup__script = _script("a2", ($scope) => _on($scope.a, "click", function() {
	$tab($scope, +$scope.g + 1);
}));
