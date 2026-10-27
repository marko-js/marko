// tags/child.marko
const $for_content__j = ($scope, j) => _text($scope.a, j);
const $for_content__input_a__OR__item = /*@__PURE__*/ _fill_join_for("b2", 4, /*@__PURE__*/ _or_resume("b0", 3, ($scope) => $for_content__j($scope, $scope._.e + $scope.c)), 0);
const $for_content__input_a = /*@__PURE__*/ _for_closure(0, $for_content__input_a__OR__item);
const $input_a = /*@__PURE__*/ _const(4, $for_content__input_a);

// template.marko
const $n = /*@__PURE__*/ _let(7, ($scope) => $input_a($scope.b, "m" + $scope.h));
const $setup__script = _script("a0", ($scope) => _on($scope.c, "click", function() {
	$n($scope, +$scope.h + 1);
}));
