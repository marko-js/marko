// tags/child.marko
const $if_content__input_b__OR__input_a = /*@__PURE__*/ _fill_if("b2 b3", 4, /*@__PURE__*/ _fill_if("b4 b5", 6, /*@__PURE__*/ _or_resume("b0", 1, ($scope) => _text($scope.a, $scope._.e + $scope._.g)), 1, 0), 1, 0);
const $if_content__input_a = /*@__PURE__*/ _if_closure(1, 0, $if_content__input_b__OR__input_a);
const $if_content__setup = ($scope) => {
	$if_content__input_a._($scope);
	$if_content__input_b._($scope);
};
const $if_content__input_b = /*@__PURE__*/ _if_closure(1, 0, $if_content__input_b__OR__input_a);
const $if = /*@__PURE__*/ _if(1, "<p> </p>", "D ", $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input_b = /*@__PURE__*/ _const(6, $if_content__input_b);

// template.marko
const $n = _let(8, ($scope) => $input_b($scope.a, $scope.i));
const $s = _let(9, ($scope) => {
	$input_show($scope.a, $scope.j);
	$input_show($scope.b, $scope.j);
});
const $setup__script = _script("a0", ($scope) => {
	_on($scope.c, "click", function() {
		$n($scope, $scope.i + "k");
	});
	_on($scope.d, "click", function() {
		$s($scope, !$scope.j);
	});
});
