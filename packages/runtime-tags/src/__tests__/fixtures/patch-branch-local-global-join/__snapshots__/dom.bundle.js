// tags/child.marko
const $if_content__input_a__OR__input_b__OR__c = /*@__PURE__*/ _fill_join_if("b5 b6", 5, /*@__PURE__*/ _fill_join_if("b3 b4", 4, /*@__PURE__*/ _or_resume("b1", 2, ($scope) => _text($scope.a, $scope._.e + $scope._.f + $scope.b), 2), 0, 0), 0, 0);
const $if_content__input_a = /*@__PURE__*/ _if_closure(0, 0, $if_content__input_a__OR__input_b__OR__c);
const $input_a = /*@__PURE__*/ _const(4, $if_content__input_a);

// template.marko
const $n = /*@__PURE__*/ _let(8, ($scope) => $input_a($scope.a, $scope.i));
const $setup__script = _script("a0", ($scope) => _on($scope.c, "click", function() {
	$n($scope, +$scope.i + 1);
}));
