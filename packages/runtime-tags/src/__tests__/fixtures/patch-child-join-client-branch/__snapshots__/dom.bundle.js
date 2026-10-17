// tags/panel.marko
const $if_content__input_a__OR__input_b = /*@__PURE__*/ _fill_join_if("b3", 5, /*@__PURE__*/ _fill_join_if("b2", 4, /*@__PURE__*/ _patch_or("b1", 1, ($scope) => _text($scope.a, $scope._.e + ":" + $scope._.f)), 0, 0), 0, 0);
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
const $count = /*@__PURE__*/ _fill_let("a1", 8, ($scope) => $input_a($scope.a, $scope.i));
const $s = /*@__PURE__*/ _fill_let("a2", 9, ($scope) => {
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
