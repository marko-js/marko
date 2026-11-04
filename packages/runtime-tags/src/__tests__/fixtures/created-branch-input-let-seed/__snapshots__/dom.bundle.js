// template.marko
const $if_content__a__OR__b = /*@__PURE__*/ _or(4, ($scope) => _text($scope.a, $scope.c + $scope.d));
const $if_content__b = /*@__PURE__*/ _let(3, $if_content__a__OR__b);
const $if_content__setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$if_content__b($scope, +$scope.d + 1);
}));
