// tags/child.marko
const $if_content__input_x__OR__a = /*@__PURE__*/ _or(1, ($scope) => $Rec_content__a($scope.a, $scope._.e || $scope._._.d));
const $if_content__input_x = /*@__PURE__*/ _closure_get(4, $if_content__input_x__OR__a, ($scope) => $scope._._, "b0");
const $if_content__a = /*@__PURE__*/ _if_closure(1, 0, $if_content__input_x__OR__a);
const $Rec_content__a = /*@__PURE__*/ _const(4, ($scope) => {
	_text($scope.a, $scope.e);
	$if_content__a($scope);
});
const $input_x__closure = /*@__PURE__*/ _closure($if_content__input_x);
const $input_x = /*@__PURE__*/ _const(3, $input_x__closure);

// template.marko
const $x = /*@__PURE__*/ _let(2, ($scope) => $input_x($scope.a, $scope.c));
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$x($scope, +$scope.c + 1);
}));
