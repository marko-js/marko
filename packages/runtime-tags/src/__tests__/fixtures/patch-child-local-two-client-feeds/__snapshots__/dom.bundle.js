// tags/child.marko
const $if_content__c__OR__l = /*@__PURE__*/ _or_patch("b1", 3, ($scope) => _text($scope.a, $scope.c + "#" + $scope._.h));
const $if_content__l = /*@__PURE__*/ _const(2, $if_content__c__OR__l);
const $if_content__input_label__OR__input_other = /*@__PURE__*/ _or_patch("b0", 1, ($scope) => $if_content__l($scope, $scope._.f + $scope._.g + "!"));
const $if_content__input_label = /*@__PURE__*/ _if_closure_patch("b4", 0, 0, $if_content__input_label__OR__input_other);
const $if_content__input_other = /*@__PURE__*/ _if_closure_patch("b5", 0, 0, $if_content__input_label__OR__input_other);
const $if_content__c = /*@__PURE__*/ _if_closure_patch("b8", 0, 0, $if_content__c__OR__l);
const $c = /*@__PURE__*/ _fill_let("b6", 7, $if_content__c);
const $setup__script$1 = _script("b3", ($scope) => _on($scope.b, "click", function() {
	$c($scope, +$scope.h + 1);
}));
const $input_label = /*@__PURE__*/ _const(5, $if_content__input_label);
const $input_other = /*@__PURE__*/ _const(6, $if_content__input_other);

// template.marko
const $n = _let(5, ($scope) => {
	$input_label($scope.a, $scope.f ? "X" : "Y");
	$input_other($scope.a, $scope.f ? "A" : "B");
});
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$n($scope, +$scope.f + 1);
}));
