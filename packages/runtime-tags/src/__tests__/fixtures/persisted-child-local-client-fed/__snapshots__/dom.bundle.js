// tags/child.marko
const $if_content__c__OR__l = /*@__PURE__*/ _fill_join("b1", 1, /*@__PURE__*/ _fill_join_if("b0", 6, /*@__PURE__*/ _or(2, ($scope) => _text($scope.a, $scope.b + "#" + $scope._.g)), 0, 0));
const $if_content__l = /*@__PURE__*/ _fill_const("b1", 1, $if_content__c__OR__l);
const $if_content__input_label = /*@__PURE__*/ _init_if_closure("b1", 0, 0, ($scope) => $if_content__l($scope, $scope._.f + "!"));
const $if_content__c = /*@__PURE__*/ _init_if_closure("b4", 0, 0, $if_content__c__OR__l);
const $c = /*@__PURE__*/ _fill_let("b0", 6, $if_content__c);
const $setup__script$1 = _script("b2", ($scope) => _on($scope.b, "click", function() {
	$c($scope, +$scope.g + 1);
}));
const $input_label = /*@__PURE__*/ _const(5, $if_content__input_label);

// template.marko
const $n = /*@__PURE__*/ _let(5, ($scope) => $input_label($scope.a, $scope.f ? "X" : "Y"));
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$n($scope, +$scope.f + 1);
}));
