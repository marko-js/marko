// tags/view.marko
const $if_content__a__OR__b = /*@__PURE__*/ _or(4, ($scope) => _text($scope.a, $scope.c + $scope.d));
const $if_content__a = /*@__PURE__*/ _fill_let("b3", 2, $if_content__a__OR__b);
const $if_content__setup__script = _script("b0", ($scope) => _on($scope.b, "click", function() {
	$if_content__a($scope, +$scope.c + 1);
}));
const $if_content__b = fill("b4", /*@__PURE__*/ _let(3, $if_content__a__OR__b));
