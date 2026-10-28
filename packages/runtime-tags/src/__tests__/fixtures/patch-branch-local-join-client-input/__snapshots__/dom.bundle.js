// tags/child.marko
const $if_content__input_a__OR__c = /*@__PURE__*/ _fill_signal("6 b5", /*@__PURE__*/ _or_resume("b1", 2, ($scope) => _text($scope.a, $scope._.g + $scope.b)), _if_closure, 0, 0);
const $if_content__input_a = /*@__PURE__*/ _if_closure(0, 0, $if_content__input_a__OR__c);
const $input_a__script = _script("b3", ($scope) => $scope.b.textContent = "s:" + $scope.g);
const $input_a = /*@__PURE__*/ _const(6, ($scope) => {
	$if_content__input_a($scope);
	$input_a__script($scope);
});

// template.marko
const $n = /*@__PURE__*/ _let(8, ($scope) => $input_a($scope.a, $scope.i));
const $setup__script = _script("a0", ($scope) => _on($scope.c, "click", function() {
	$n($scope, +$scope.i + 1);
}));
