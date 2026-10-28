// template.marko
const $Body_content__v__OR__w = /*@__PURE__*/ _or(5, ($scope) => _text($scope.a, $scope.d + $scope.e));
const $Body_content__v = /*@__PURE__*/ _const(3, $Body_content__v__OR__w);
const $if_content__input_a__OR__x = /*@__PURE__*/ _or(5, ($scope) => _text($scope.d, $scope.e + $scope._.e));
const $if_content__y = /*@__PURE__*/ _let(6, ($scope) => $Body_content__v($scope.a, $scope.g));
const $if_content__x = /*@__PURE__*/ _let(4, ($scope) => {
	$if_content__y($scope, $scope.e);
	$if_content__input_a__OR__x($scope);
});
const $if_content__setup__script = _script("a1", ($scope) => _on($scope.c, "click", function() {
	$if_content__x($scope, 2);
}));
