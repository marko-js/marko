// tags/child.marko
const $if_content__input_a__OR__input_b = /*@__PURE__*/ _fill_signal("5 b2,6 b3", /*@__PURE__*/ _or_resume("b0", 1, ($scope) => _text($scope.a, $scope._.f + $scope._.g)), _if_closure, 0, 0);
const $if_content__input_a = /*@__PURE__*/ _if_closure(0, 0, $if_content__input_a__OR__input_b);
const $if_content__setup = ($scope) => {
	$if_content__input_a._($scope);
	$if_content__input_b._($scope);
};
const $if_content__input_b = /*@__PURE__*/ _if_closure(0, 0, $if_content__input_a__OR__input_b);
const $if = /*@__PURE__*/ _if(0, "<p> </p>", "D ", $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input_b = /*@__PURE__*/ _const(6, $if_content__input_b);

// template.marko
const $n = /*@__PURE__*/ _let(9, ($scope) => $input_b($scope.a, $scope.j));
const $s = /*@__PURE__*/ _let(10, ($scope) => {
	$input_show($scope.a, $scope.k);
	$input_show($scope.b, $scope.k);
});
const $setup__script = _script("a0", ($scope) => {
	_on($scope.c, "click", function() {
		$n($scope, $scope.j + "k");
	});
	_on($scope.d, "click", function() {
		$s($scope, !$scope.k);
	});
});
