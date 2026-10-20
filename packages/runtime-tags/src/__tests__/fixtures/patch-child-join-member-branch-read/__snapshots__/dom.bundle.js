// tags/child.marko
const $if_content__input_a = /*@__PURE__*/ _shell_init("b1", /*@__PURE__*/ _fill_join("b2", 4, /*@__PURE__*/ _if_closure(1, 0, ($scope) => _text($scope.a, $scope._.e))));
const $if_content__setup = $if_content__input_a;
const $input_a__OR__input_b = /*@__PURE__*/ _fill_join("b2", 4, /*@__PURE__*/ _shell_or("b3", 6, ($scope) => _text($scope.a, $scope.e + $scope.f)), () => () => {});
const $input_b = /*@__PURE__*/ _const(5, $input_a__OR__input_b);
const $if = /*@__PURE__*/ _if(1, "<em> </em>", "D ", $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);

// template.marko
const $n = /*@__PURE__*/ _fill_let("a1", 8, ($scope) => $input_b($scope.a, $scope.i));
const $s = /*@__PURE__*/ _fill_let("a2", 9, ($scope) => {
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
