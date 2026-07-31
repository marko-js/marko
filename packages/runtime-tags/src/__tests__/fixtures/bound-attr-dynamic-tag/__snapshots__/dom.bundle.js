// template.marko
_resume_dynamic_tag();
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
	_text($scope, "c", $scope.e);
	$a__OR__b($scope);
});
const $b = /*@__PURE__*/ _let(5, ($scope) => {
	_text($scope, "d", $scope.f);
	$a__OR__b($scope);
});
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $state_a__OR__state_aChange__OR__tag = /*@__PURE__*/ _or(13, ($scope) => $dynamicTag($scope, $scope.m, () => ({
	value: $scope.i,
	valueChange: $scope.j
})), 2);
const $dynamicTag2 = /*@__PURE__*/ _dynamic_tag(1);
const $state_b__OR__state_bChange__OR__tag = /*@__PURE__*/ _or(14, ($scope) => $dynamicTag2($scope, $scope.m, () => ({
	value: $scope.k,
	valueChange: $scope.l
})), 2);
const $state_a = /*@__PURE__*/ _const(8, $state_a__OR__state_aChange__OR__tag);
const $state_aChange = /*@__PURE__*/ _const(9, $state_a__OR__state_aChange__OR__tag);
const $state_b = /*@__PURE__*/ _const(10, $state_b__OR__state_bChange__OR__tag);
const $state_bChange = /*@__PURE__*/ _const(11, $state_b__OR__state_bChange__OR__tag);
const $state2 = ($scope) => function(v) {
	$b($scope, v);
};
const $state = ($scope) => function(v) {
	$a($scope, v);
};
_resume("a1", $state2);
_resume("a0", $state);
