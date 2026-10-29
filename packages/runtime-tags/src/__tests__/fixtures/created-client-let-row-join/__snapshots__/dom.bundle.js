// template.marko
const $for_content__b__OR__i = /*@__PURE__*/ _or(3, ($scope) => _text($scope.a, $scope._.c + $scope.c));
const $for_content__b = /*@__PURE__*/ _for_closure(0, $for_content__b__OR__i);
const $if_content__b = /*@__PURE__*/ _let(2, $for_content__b);
const $if_content__setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$if_content__b($scope, +$scope.c + 1);
}));
