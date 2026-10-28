// tags/child.marko
const $frag_content__input_a__OR__c = /*@__PURE__*/ _fill_signal("2 b5", /*@__PURE__*/ _fill_signal("5 b11", /*@__PURE__*/ _or_resume("b3", 1, ($scope) => _text($scope.a, $scope._._.f + $scope._.c)), _closure_subscribers, 8, 0), _closure_subscribers, 10, 0);
const $frag_content__input_a = /*@__PURE__*/ _closure_get(8, $frag_content__input_a__OR__c, ($scope) => $scope._._, "b1");
const $frag_content__setup = ($scope) => {
	$frag_content__input_a($scope);
	$frag_content__c($scope);
};
const $frag_content__c = /*@__PURE__*/ _closure_get(10, $frag_content__input_a__OR__c, 0, "b2");
const $frag_content = _content$1("b0", "<em> </em>", "D ", $frag_content__setup);
const $if_content__c__script = _script("b4", ($scope) => $scope.a.textContent = "s:" + $scope.c);
const $if_content__input_mode__OR__frag_content = /*@__PURE__*/ _fill_signal("6 b10", /*@__PURE__*/ _or_resume("b7", 5, ($scope) => _attr_content($scope, "b", $scope._.g ? $scope.e : null)), _if_closure, 0, 0);
const $if_content__input_mode = /*@__PURE__*/ _if_closure(0, 0, $if_content__input_mode__OR__frag_content);
const $input_a__closure = /*@__PURE__*/ _closure($frag_content__input_a);
const $input_a = /*@__PURE__*/ _const(5, $input_a__closure);
const $input_mode = /*@__PURE__*/ _fill_const("b10", 6, $if_content__input_mode);

// template.marko
const $n = /*@__PURE__*/ _let(9, ($scope) => $input_a($scope.a, $scope.j));
const $m = /*@__PURE__*/ _let(10, ($scope) => {
	$input_mode($scope.a, $scope.k);
	$input_mode($scope.b, $scope.k);
});
const $setup__script = _script("a0", ($scope) => {
	_on($scope.c, "click", function() {
		$n($scope, +$scope.j + 1);
	});
	_on($scope.d, "click", function() {
		$m($scope, !$scope.k);
	});
});
