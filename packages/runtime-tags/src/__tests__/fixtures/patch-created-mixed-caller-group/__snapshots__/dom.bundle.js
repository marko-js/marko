// tags/panel.marko
const $if_content2__input_n = /*@__PURE__*/ _closure_get_patch("b0", 6, ($scope) => _text($scope.a, $scope._._.e), ($scope) => $scope._._, "b5", 0);
const $if_content__input_n = /*@__PURE__*/ _if_closure_patch("b4", 0, 0, ($scope) => _text($scope.a, $scope._.e));
const $input_n__closure = /*@__PURE__*/ _closure($if_content2__input_n);
const $input_n = /*@__PURE__*/ _const(4, ($scope) => {
	$input_n__closure($scope);
	$if_content__input_n($scope);
});

// template.marko
const $input_x__OR__count = /*@__PURE__*/ _or_patch("a1", 7, ($scope) => $input_n($scope.a, $scope.g + $scope.e));
const $count = _let(6, $input_x__OR__count);
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.g + 1);
}));
