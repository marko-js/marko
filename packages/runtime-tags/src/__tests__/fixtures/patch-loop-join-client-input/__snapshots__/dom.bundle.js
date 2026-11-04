// tags/child.marko
const $for_content__input_a__OR__item = /*@__PURE__*/ _or_patch("b0", 3, ($scope) => _text($scope.a, $scope._.e + $scope.c));
const $for_content__input_a = /*@__PURE__*/ _for_closure_patch("b2", 0, $for_content__input_a__OR__item, 5);
const $input_a = /*@__PURE__*/ _const(4, $for_content__input_a);

// template.marko
const $n = _let(7, ($scope) => $input_a($scope.a, $scope.h));
const $setup__script = _script("a0", ($scope) => _on($scope.c, "click", function() {
	$n($scope, +$scope.h + 1);
}));
