// template.marko
_enable_catch();
const $if_content__a = /*@__PURE__*/ _closure_get(2, ($scope) => _text($scope.a, $scope._._.c), ($scope) => $scope._._);
const $if_content__b = /*@__PURE__*/ _closure_get(3, ($scope) => _text($scope.b, $scope._._.d), ($scope) => $scope._._);
const $a__OR__b = /*@__PURE__*/ _or(4, _script("a1", ($scope) => _on($scope.a, "click", function() {
	$a($scope, $scope.c + 1);
	$b($scope, $scope.d + 1);
})));
const $a__closure = /*@__PURE__*/ _closure($if_content__a);
const $a = /*@__PURE__*/ _let(2, ($scope) => {
	$a__OR__b($scope);
	$a__closure($scope);
});
const $b__closure = /*@__PURE__*/ _closure($if_content__b);
const $b = /*@__PURE__*/ _let(3, ($scope) => {
	$a__OR__b($scope);
	$b__closure($scope);
});
