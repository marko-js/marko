// template.marko
const $if_content__input_a__OR__b = /*@__PURE__*/ _fill_join_if("a3", 4, /*@__PURE__*/ _or_resume("a5", 3, ($scope) => _text($scope.a, $scope._.e + $scope.c)), 0, 0);
const $if_content__b = /*@__PURE__*/ _fill_let("a1", 2, $if_content__input_a__OR__b);
const $if_content__setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$if_content__b($scope, +$scope.c + 1);
}));
