// tags/sum-with.marko
const $Sum_content__input_n__OR__a = /*@__PURE__*/ _or(3, ($scope) => _return($scope, $scope.c + $scope._.f));
const $Sum_content__input_n = /*@__PURE__*/ _closure_get(7, $Sum_content__input_n__OR__a, 0, "b1");
const $x = _var_resume("b2", ($scope, x) => _text($scope.c, x));
const $input_n__closure = /*@__PURE__*/ _closure($Sum_content__input_n);
const $input_n = /*@__PURE__*/ _const(5, $input_n__closure);

// template.marko
const $n = /*@__PURE__*/ _let(2, ($scope) => $input_n($scope.a, $scope.c));
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$n($scope, +$scope.c + 1);
}));
