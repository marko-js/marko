// tags/child.marko
const $if_content__input_a__OR__input_b__OR__c = /*@__PURE__*/ _or_patch("b0", 2, ($scope) => _text($scope.a, $scope._.e + $scope._.f + $scope.b), 2);
const $if_content__input_a = /*@__PURE__*/ _if_closure_patch("b3", 0, 0, $if_content__input_a__OR__input_b__OR__c);
const $if_content__c = /*@__PURE__*/ _const(1, $if_content__input_a__OR__input_b__OR__c);
const $if_content__$global_g = /*@__PURE__*/ _if_closure_patch("b6", 0, 0, ($scope) => $if_content__c($scope, $scope.$.g + "!"));
const $input_a = /*@__PURE__*/ _const(4, $if_content__input_a);
const $global_g = _fill_global("b2", $if_content__$global_g, "g");

// template.marko
const $n = _let(8, ($scope) => $input_a($scope.a, $scope.i));
const $setup__script = _script("a0", ($scope) => _on($scope.c, "click", function() {
	$n($scope, +$scope.i + 1);
}));
