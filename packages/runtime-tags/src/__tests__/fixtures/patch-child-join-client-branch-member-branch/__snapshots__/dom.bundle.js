// tags/child.marko
const $if_content2__input_a = /*@__PURE__*/ _init_resume("b3", /*@__PURE__*/ _fill_join("b4 b5", 5, /*@__PURE__*/ _if_closure(1, 0, ($scope) => _text($scope.a, $scope._.f))));
const $if_content2__setup = $if_content2__input_a;
const $if_content__input_a__OR__input_b = /*@__PURE__*/ _fill_join_if("b6", 6, /*@__PURE__*/ _fill_join_if("b5 | b4", 5, /*@__PURE__*/ _or_resume("b0", 1, ($scope) => _text($scope.a, $scope._.f + $scope._.g)), 0, 0), 0, 0);
const $if_content__input_a = /*@__PURE__*/ _if_closure(0, 0, $if_content__input_a__OR__input_b);
const $if_content__setup = ($scope) => {
	$if_content__input_a._($scope);
	$if_content__input_b._($scope);
};
const $if_content__input_b = /*@__PURE__*/ _if_closure(0, 0, $if_content__input_a__OR__input_b);
const $if = /*@__PURE__*/ _if(0, "<p> </p>", "D ", $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $if2 = /*@__PURE__*/ _if(1, "<em> </em>", "D ", $if_content2__setup);
const $input_other = ($scope, input_other) => $if2($scope, input_other ? 0 : 1);
const $input_b = /*@__PURE__*/ _const(6, $if_content__input_b);

// template.marko
const $n = _let(10, ($scope) => $input_b($scope.a, $scope.k));
const $s = _let(11, ($scope) => $input_show($scope.a, $scope.l));
const $o = _let(12, ($scope) => {
	$input_other($scope.a, $scope.m);
	$input_other($scope.b, $scope.m);
});
const $setup__script = _script("a0", ($scope) => {
	_on($scope.c, "click", function() {
		$n($scope, $scope.k + "k");
	});
	_on($scope.d, "click", function() {
		$o($scope, !$scope.m);
	});
	_on($scope.e, "click", function() {
		$s($scope, !$scope.l);
	});
});
