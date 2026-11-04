// tags/child.marko
const $if_content__input_a__OR__input_b = /*@__PURE__*/ _or_patch("b2", 1, ($scope) => _text($scope.a, $scope._.e + $scope._.g));
const $if_content__input_a = /*@__PURE__*/ _if_closure_patch("b5", 1, 0, $if_content__input_a__OR__input_b);
const $if_content__setup = ($scope) => {
	$if_content__input_a._($scope);
	$if_content__input_b._($scope);
};
const $if_content__input_b = /*@__PURE__*/ _if_closure_patch("b9", 1, 0, $if_content__input_a__OR__input_b);
const $frag_content__input_a = /*@__PURE__*/ _closure_get_patch("b1", 10, ($scope) => _text($scope.a, $scope._.e), 0, "b4", 0);
const $frag_content = _content$1("b0", "<i> </i>", "D ", $frag_content__input_a);
const $input_mode__OR__frag_content = /*@__PURE__*/ _or_patch("b6", 9, ($scope) => _attr_content($scope, "a", $scope.f ? $scope.i : null));
const $input_mode = /*@__PURE__*/ _const(5, $input_mode__OR__frag_content);
const $if = /*@__PURE__*/ _if(1, "<p> </p>", "D ", $if_content__setup);
const $input_b = /*@__PURE__*/ _const(6, ($scope) => {
	$if($scope, $scope.g ? 0 : 1);
	$if_content__input_b($scope);
});

// template.marko
const $m = _let(8, ($scope) => {
	$input_mode($scope.a, $scope.i);
	$input_mode($scope.b, $scope.i);
});
const $n = _let(9, ($scope) => $input_b($scope.b, $scope.j));
const $setup__script = _script("a0", ($scope) => {
	_on($scope.c, "click", function() {
		$m($scope, !$scope.i);
	});
	_on($scope.d, "click", function() {
		$n($scope, $scope.j + "k");
	});
});
