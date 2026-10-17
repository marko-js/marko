// tags/child.marko
const $frag_content__input_a__OR__input_b = /*@__PURE__*/ _fill_join_subscribers("b8", 5, /*@__PURE__*/ _fill_join_subscribers("b7", 4, /*@__PURE__*/ _patch_or("b4", 1, ($scope) => _text($scope.a, $scope._._.e + $scope._._.f)), 7, 0), 8, 0);
const $frag_content__input_a = _closure_resume("b2", /*@__PURE__*/ _closure_get(7, $frag_content__input_a__OR__input_b, ($scope) => $scope._._));
const $frag_content__setup = ($scope) => {
	$frag_content__input_a($scope);
	$frag_content__input_b($scope);
};
const $frag_content__input_b = _closure_resume("b3", /*@__PURE__*/ _closure_get(8, $frag_content__input_a__OR__input_b, ($scope) => $scope._._));
const $frag_content = _content$1("b0", "<em> </em>", "D ", $frag_content__setup);
const $if_content__input_mode__OR__frag_content = /*@__PURE__*/ _fill_join_if("b6", 6, /*@__PURE__*/ _shell_or("b5", 3, ($scope) => _attr_content($scope, "a", $scope._.g ? $scope.c : null)), 0, 0);
const $if_content__input_mode = /*@__PURE__*/ _if_closure(0, 0, $if_content__input_mode__OR__frag_content);
const $input_a__closure = /*@__PURE__*/ _closure($frag_content__input_a);
const $input_a = /*@__PURE__*/ _const(4, $input_a__closure);
const $input_mode = /*@__PURE__*/ _fill_const("b6", 6, $if_content__input_mode);

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
