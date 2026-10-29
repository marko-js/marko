// tags/child.marko
const $if_content__c__OR__l = /*@__PURE__*/ _fill_join("b0", 2, /*@__PURE__*/ _or(3, ($scope) => _text($scope.a, $scope.c + "#" + $scope._.h)));
const $if_content__l = /*@__PURE__*/ _const(2, $if_content__c__OR__l);
const $if_content__input_label__OR__input_other = /*@__PURE__*/ _fill_join_if("b6", 6, /*@__PURE__*/ _fill_join_if("b5", 5, /*@__PURE__*/ _or(1, ($scope) => $if_content__l($scope, $scope._.f + $scope._.g + "!")), 0, 0), 0, 0);
const $if_content__input_label = /*@__PURE__*/ _init_resume("b1", /*@__PURE__*/ _if_closure(0, 0, $if_content__input_label__OR__input_other));
const $if_content__input_other = /*@__PURE__*/ _init_resume("b2", /*@__PURE__*/ _if_closure(0, 0, $if_content__input_label__OR__input_other));
const $if_content__c = /*@__PURE__*/ _init_resume("b9", /*@__PURE__*/ _if_closure(0, 0, $if_content__c__OR__l));
const $c = /*@__PURE__*/ _fill_let("b7", 7, $if_content__c);
const $setup__script$1 = _script("b4", ($scope) => _on($scope.b, "click", function() {
	$c($scope, +$scope.h + 1);
}));
const $input_label = /*@__PURE__*/ _fill_const("b5", 5, $if_content__input_label);
const $input_other = /*@__PURE__*/ _fill_const("b6", 6, $if_content__input_other);

// template.marko
const $n = _let(5, ($scope) => {
	$input_label($scope.a, $scope.f ? "X" : "Y");
	$input_other($scope.a, $scope.f ? "A" : "B");
});
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$n($scope, +$scope.f + 1);
}));
