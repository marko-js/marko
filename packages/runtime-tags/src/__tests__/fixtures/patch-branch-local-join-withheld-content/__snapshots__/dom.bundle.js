// tags/child.marko
const $frag_content__c = /*@__PURE__*/ _shell_init("b4", /*@__PURE__*/ _fill_join_closure("b2", 2, /*@__PURE__*/ _closure_get(10, ($scope) => _text($scope.a, $scope._.c), 0, "b5"), 0));
const $frag_content = _content$1("b0", "<em> </em>", "D ", $frag_content__c);
const $if_content__input_a__OR__c = /*@__PURE__*/ _fill_join_value("b2", 2, /*@__PURE__*/ _fill_join_if("b10", 5, /*@__PURE__*/ _patch_or("b6", 3, ($scope) => _text($scope.a, $scope._.f + $scope.c)), 0, 0));
const $if_content__input_a = /*@__PURE__*/ _if_closure(0, 0, $if_content__input_a__OR__c);
const $if_content__input_mode__OR__frag_content = /*@__PURE__*/ _fill_join_if("b9", 6, /*@__PURE__*/ _shell_or("b7", 6, ($scope) => _attr_content($scope, "b", $scope._.g ? $scope.f : null)), 0, 0);
const $if_content__input_mode = /*@__PURE__*/ _if_closure(0, 0, $if_content__input_mode__OR__frag_content);
const $input_a = /*@__PURE__*/ _const(5, $if_content__input_a);
const $input_mode = /*@__PURE__*/ _fill_const("b9", 6, $if_content__input_mode);

// template.marko
const $n = /*@__PURE__*/ _fill_let("a1", 9, ($scope) => $input_a($scope.a, $scope.j));
const $m = /*@__PURE__*/ _fill_let("a2", 10, ($scope) => {
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
