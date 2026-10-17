// tags/child.marko
const $if_content__input_a = /*@__PURE__*/ _shell_init("b1", /*@__PURE__*/ _fill_join("b3", 4, /*@__PURE__*/ _if_closure(1, 0, ($scope) => _text($scope.a, $scope._.e))));
const $if_content__setup = ($scope) => {
	$if_content__input_a._($scope);
	$if_content__input_b._($scope);
};
const $if_content__input_b = /*@__PURE__*/ _shell_init("b2", /*@__PURE__*/ _fill_join("b4", 5, /*@__PURE__*/ _if_closure(1, 0, ($scope) => _text($scope.b, $scope._.f))));
const $input_a__OR__input_b = /*@__PURE__*/ _fill_join_value("b4", 5, /*@__PURE__*/ _fill_join_value("b3", 4, /*@__PURE__*/ _patch_or("b5", 6, ($scope) => _text($scope.a, $scope.e + $scope.f))));
const $input_a = /*@__PURE__*/ _fill_const("b3", 4, ($scope) => {
	$if_content__input_a($scope);
	$input_a__OR__input_b($scope);
}, $if_content__input_a);
const $if = /*@__PURE__*/ _if(1, "<em><!>|<!></em>", "D%c%", $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);

// template.marko
const $n = /*@__PURE__*/ _fill_let("a1", 8, ($scope) => {
	$input_a($scope.a, $scope.i);
	$input_a($scope.b, $scope.i);
});
const $s = /*@__PURE__*/ _fill_let("a2", 9, ($scope) => $input_show($scope.a, $scope.j));
const $setup__script = _script("a0", ($scope) => {
	_on($scope.c, "click", function() {
		$n($scope, +$scope.i + 1);
	});
	_on($scope.d, "click", function() {
		$s($scope, !$scope.j);
	});
});
