// tags/child.marko
const $if_content__input_a__OR__input_b = /*@__PURE__*/ _fill_join_if("b6", 4, /*@__PURE__*/ _fill_join("b5", 4, /*@__PURE__*/ _shell_or("b4", 1, ($scope) => _text($scope.a, $scope._.e + $scope._.g)), () => () => {}), 1, 0);
const $if_content__input_a = /*@__PURE__*/ _if_closure(1, 0, $if_content__input_a__OR__input_b);
const $if_content__setup = ($scope) => {
	$if_content__input_a._($scope);
	$if_content__input_b._($scope);
};
const $if_content__input_b = /*@__PURE__*/ _if_closure(1, 0, $if_content__input_a__OR__input_b);
const $frag_content__input_a = /*@__PURE__*/ _shell_init("b2", /*@__PURE__*/ _fill_join_closure("b6", 4, /*@__PURE__*/ _fill_join_closure("b5", 4, /*@__PURE__*/ _closure_get(10, ($scope) => _text($scope.a, $scope._.e), 0, "b3"), 0), 0));
const $frag_content = _content$1("b0", "<i> </i>", "D ", $frag_content__input_a);
const $input_mode__OR__frag_content = /*@__PURE__*/ _shell_or("b7", 9, ($scope) => _attr_content($scope, "a", $scope.f ? $scope.i : null));
const $input_mode = /*@__PURE__*/ _const(5, $input_mode__OR__frag_content);
const $if = /*@__PURE__*/ _if(1, "<p> </p>", "D ", $if_content__setup);
const $input_b = /*@__PURE__*/ _const(6, ($scope) => {
	$if($scope, $scope.g ? 0 : 1);
	$if_content__input_b($scope);
});

// template.marko
const $m = /*@__PURE__*/ _fill_let("a1", 8, ($scope) => {
	$input_mode($scope.a, $scope.i);
	$input_mode($scope.b, $scope.i);
});
const $n = /*@__PURE__*/ _fill_let("a2", 9, ($scope) => $input_b($scope.b, $scope.j));
const $setup__script = _script("a0", ($scope) => {
	_on($scope.c, "click", function() {
		$m($scope, !$scope.i);
	});
	_on($scope.d, "click", function() {
		$n($scope, $scope.j + "k");
	});
});
