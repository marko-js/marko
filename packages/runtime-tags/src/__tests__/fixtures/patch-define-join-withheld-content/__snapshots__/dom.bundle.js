// tags/child.marko
const $frag_content__input_a__OR__input_b = /*@__PURE__*/ _fill_join_subscribers("b5", 4, /*@__PURE__*/ _fill_join_subscribers("b4", 3, /*@__PURE__*/ _patch_or("b3", 1, ($scope) => _text($scope.a, $scope._.d + $scope._.e)), 9, 0), 10, 0);
const $frag_content__input_a = _closure_resume("b1", /*@__PURE__*/ _closure_get(9, $frag_content__input_a__OR__input_b));
const $frag_content__setup = ($scope) => {
	$frag_content__input_a($scope);
	$frag_content__input_b($scope);
};
const $frag_content__input_b = _closure_resume("b2", /*@__PURE__*/ _closure_get(10, $frag_content__input_a__OR__input_b));
const $frag_content = _content$1("b0", "<em> </em>", "D ", $frag_content__setup);
const $input_mode__OR__frag_content = /*@__PURE__*/ _shell_or("b6", 8, ($scope) => _attr_content($scope, "a", $scope.f ? $scope.h : null));
const $input_mode = /*@__PURE__*/ _const(5, $input_mode__OR__frag_content);
const $input_a__closure = /*@__PURE__*/ _closure($frag_content__input_a);
const $input_a = /*@__PURE__*/ _const(3, $input_a__closure);

// template.marko
const $n = /*@__PURE__*/ _fill_let("a1", 8, ($scope) => $input_a($scope.a, $scope.i));
const $m = /*@__PURE__*/ _fill_let("a2", 9, ($scope) => {
	$input_mode($scope.a, $scope.j);
	$input_mode($scope.b, $scope.j);
});
const $setup__script = _script("a0", ($scope) => {
	_on($scope.c, "click", function() {
		$n($scope, +$scope.i + 1);
	});
	_on($scope.d, "click", function() {
		$m($scope, !$scope.j);
	});
});
