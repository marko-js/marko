// tags/panel.marko
const $if_content__input_a__OR__input_b = /*@__PURE__*/ _fill_join_if("b4 b5", 5, /*@__PURE__*/ _fill_join_if("b2 b3", 4, /*@__PURE__*/ _or_resume("b0", 1, ($scope) => _text($scope.a, $scope._.e + ":" + $scope._.f)), 0, 0), 0, 0);
const $if_content__input_a = /*@__PURE__*/ _if_closure(0, 0, $if_content__input_a__OR__input_b);
const $if_content__setup = ($scope) => {
	$if_content__input_a._($scope);
	$if_content__input_b._($scope);
};
const $if_content__input_b = /*@__PURE__*/ _if_closure(0, 0, $if_content__input_a__OR__input_b);
const $if = /*@__PURE__*/ _if(0, "<p> </p>", "D ", $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input_a = /*@__PURE__*/ _const(4, $if_content__input_a);

// template.marko
const $count = _let(8, ($scope) => $input_a($scope.a, $scope.i));
const $s = _let(9, ($scope) => {
	$input_show($scope.a, $scope.j);
	$input_show($scope.b, $scope.j);
});
const $setup__script = _script("a0", ($scope) => {
	_on($scope.c, "click", function() {
		$count($scope, +$scope.i + 1);
	});
	_on($scope.d, "click", function() {
		$s($scope, !$scope.j);
	});
});
