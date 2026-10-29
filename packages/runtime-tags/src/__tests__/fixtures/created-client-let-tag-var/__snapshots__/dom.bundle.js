// template.marko
const $if_content__b__OR__v = /*@__PURE__*/ _or(6, ($scope) => _text($scope.c, $scope.f + $scope.e), 1, 1);
const $if_content__b = /*@__PURE__*/ _let(4, $if_content__b__OR__v);
const $if_content__setup__script = _script("a0", ($scope) => _on($scope.d, "click", function() {
	$if_content__b($scope, +$scope.e + 1);
}));
