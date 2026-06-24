// template.marko
const $state3 = ($scope, state) => {
	$state_a($scope, state.a);
	$state_aChange($scope, state.aChange);
	$state_b($scope, state.b);
	$state_bChange($scope, state.bChange);
};
const $a__OR__b = /*@__PURE__*/ _or(6, ($scope) => $state3($scope, {
	a: $scope.e,
	aChange: $state($scope),
	b: $scope.f,
	bChange: $state2($scope)
}));
const $a = /*@__PURE__*/ _let(4, ($scope) => {
	_text($scope.a, $scope.e);
	$a__OR__b($scope);
});
const $b = /*@__PURE__*/ _let(5, ($scope) => {
	_text($scope.b, $scope.f);
	$a__OR__b($scope);
});
const $setup__script = _script("a2", ($scope) => {
	_attr_input_value_script($scope, "c");
	_attr_input_value_script($scope, "d");
});
const $state_a__OR__state_aChange = /*@__PURE__*/ _or(10, ($scope) => _attr_input_value($scope, "c", $scope.i, $scope.j));
const $state_a = /*@__PURE__*/ _const(8, $state_a__OR__state_aChange);
const $state_aChange = /*@__PURE__*/ _const(9, $state_a__OR__state_aChange);
const $state_b__OR__state_bChange = /*@__PURE__*/ _or(13, ($scope) => _attr_input_value($scope, "d", $scope.l, $scope.m));
const $state_b = /*@__PURE__*/ _const(11, $state_b__OR__state_bChange);
const $state_bChange = /*@__PURE__*/ _const(12, $state_b__OR__state_bChange);
function $state2($scope) {
	return function(v) {
		$b($scope, v);
	};
}
function $state($scope) {
	return function(v) {
		$a($scope, v);
	};
}
_resume("a1", $state2);
_resume("a0", $state);
