// template.marko
const $if_content2__a__OR__b = /*@__PURE__*/ _or(1, ($scope) => _text($scope.a, $scope._.c + $scope._.d));
const $if_content2__b = /*@__PURE__*/ _if_closure(0, 0, $if_content2__a__OR__b);
const $if_content__b = /*@__PURE__*/ _let(3, $if_content2__b);
const $if_content__setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$if_content__b($scope, +$scope.d + 1);
}));
