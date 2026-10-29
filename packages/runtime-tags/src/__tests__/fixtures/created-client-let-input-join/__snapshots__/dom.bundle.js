// template.marko
const $if_content__input_a__OR__b = /*@__PURE__*/ _or(3, ($scope) => _text($scope.a, $scope._.e + $scope.c));
const $if_content__b = /*@__PURE__*/ _let(2, $if_content__input_a__OR__b);
const $if_content__setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$if_content__b($scope, +$scope.c + 1);
}));
