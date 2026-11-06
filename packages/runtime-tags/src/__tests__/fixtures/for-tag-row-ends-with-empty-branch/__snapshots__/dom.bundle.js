// template.marko
const $if_content__n = /*@__PURE__*/ _closure_get(3, ($scope) => _text($scope.a, $scope._._.c), ($scope) => $scope._._, "a0");
const $for_content__n = /*@__PURE__*/ _for_closure(0, ($scope) => _text($scope.a, $scope._.c), 3);
const $n__closure = /*@__PURE__*/ _closure($if_content__n);
const $n = /*@__PURE__*/ _let(2, ($scope) => {
	$for_content__n($scope);
	$n__closure($scope);
});
const $setup__script = _script("a1", ($scope) => _on($scope.b, "click", function() {
	$n($scope, +$scope.c + 1);
}));
