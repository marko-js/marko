// tags/panel.marko
const $if_content__input_a__OR__input_b = /*@__PURE__*/ _fill_join_if("b4 b5", 5, /*@__PURE__*/ _fill_join_if("b2 b3", 4, /*@__PURE__*/ _or_resume("b0", 1, ($scope) => _text($scope.a, $scope._.e + ":" + $scope._.f)), 0, 0), 0, 0);
const $if_content__input_a = /*@__PURE__*/ _if_closure(0, 0, $if_content__input_a__OR__input_b);
const $input_a = /*@__PURE__*/ _const(4, $if_content__input_a);

// template.marko
const $if_content__count = /*@__PURE__*/ _init_resume("a7", /*@__PURE__*/ _if_closure(0, 0, ($scope) => $input_a($scope.a, $scope._.h)));
const $count = _let(7, $if_content__count);
const $setup__script = _script("a3", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.h + 1);
}));
