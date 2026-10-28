// tags/panel.marko
const $if_content2__input_n = /*@__PURE__*/ _init_resume("b0", /*@__PURE__*/ _fill_closure("b6", 4, /*@__PURE__*/ _closure_get(6, ($scope) => _text($scope.a, $scope._._.e), ($scope) => $scope._._, "b1"), 0));
const $if_content__input_n = /*@__PURE__*/ _init_resume("b5", /*@__PURE__*/ _fill("b6", 4, /*@__PURE__*/ _if_closure(0, 0, ($scope) => _text($scope.a, $scope._.e))));
const $input_n__closure = /*@__PURE__*/ _closure($if_content2__input_n);
const $input_n = /*@__PURE__*/ _fill_const("b6", 4, ($scope) => {
	$if_content__input_n($scope);
	$input_n__closure($scope);
});

// template.marko
const $input_x__OR__count = /*@__PURE__*/ _fill("a1", 4, /*@__PURE__*/ _or(7, ($scope) => $input_n($scope.a, $scope.g + $scope.e)));
const $count = _let(6, $input_x__OR__count);
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.g + 1);
}));
