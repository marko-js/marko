// tags/child.marko
const $frag_content__input_a = /*@__PURE__*/ _shell_init("b3", /*@__PURE__*/ _fill_join_closure("b6", 5, /*@__PURE__*/ _fill_join_closure("b5", 5, /*@__PURE__*/ _closure_get(11, ($scope) => _text($scope.a, $scope._.f), 0, "b4"), 0), 0));
const $frag_content = _content$1("b0", "<em> </em>", "D ", $frag_content__input_a);
const $if_content__input_a__OR__input_b = /*@__PURE__*/ _fill_join_if("b7", 6, /*@__PURE__*/ _fill_join_if("b6", 5, /*@__PURE__*/ _fill_join("b5", 5, /*@__PURE__*/ _patch_or("b2", 1, ($scope) => _text($scope.a, $scope._.f + $scope._.g)), () => () => {}), 0, 0), 0, 0);
const $if_content__input_a = /*@__PURE__*/ _if_closure(0, 0, $if_content__input_a__OR__input_b);
const $if_content__setup = ($scope) => {
	$if_content__input_a._($scope);
	$if_content__input_b._($scope);
};
const $if_content__input_b = /*@__PURE__*/ _if_closure(0, 0, $if_content__input_a__OR__input_b);
const $if = /*@__PURE__*/ _if(0, "<p> </p>", "D ", $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input_mode__OR__frag_content = /*@__PURE__*/ _shell_or("b8", 10, ($scope) => _attr_content($scope, "b", $scope.h ? $scope.j : null));
const $input_mode = /*@__PURE__*/ _const(7, $input_mode__OR__frag_content);
const $input_b = /*@__PURE__*/ _const(6, $if_content__input_b);

// template.marko
const $n = /*@__PURE__*/ _fill_let("a1", 10, ($scope) => $input_b($scope.a, $scope.k));
const $s = /*@__PURE__*/ _fill_let("a2", 11, ($scope) => $input_show($scope.a, $scope.l));
const $m = /*@__PURE__*/ _fill_let("a3", 12, ($scope) => {
	$input_mode($scope.a, $scope.m);
	$input_mode($scope.b, $scope.m);
});
const $setup__script = _script("a0", ($scope) => {
	_on($scope.c, "click", function() {
		$n($scope, $scope.k + "k");
	});
	_on($scope.d, "click", function() {
		$m($scope, !$scope.m);
	});
	_on($scope.e, "click", function() {
		$s($scope, !$scope.l);
	});
});
