// tags/view.marko
const $if_content__a__OR__b = /*@__PURE__*/ _or_resume("b8", 4, ($scope) => _text($scope.a, $scope.c + $scope.d));
const $if_content__a = /*@__PURE__*/ _fill_let("b3", 2, $if_content__a__OR__b);
const $if_content__setup__script = _script("b0", ($scope) => _on($scope.b, "click", function() {
	$if_content__a($scope, +$scope.c + 1);
}));
const $if_content__b = _let(3, $if_content__a__OR__b);
