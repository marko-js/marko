// template.marko
const $d = /*@__PURE__*/ _draft(3, ($scope) => _text($scope.b, $scope.d));
const $slow2 = _action(5, "a2");
const $fast2 = _action(7, "a3");
const $setup__script = _script("a4", ($scope) => _on($scope.a, "click", function() {
	$scope.f();
	$scope.h();
}));
const $slow = ($scope) => async () => {
	$d($scope, "slow");
	await resolveAfter(0, 2);
};
const $fast = ($scope) => async () => {
	$d($scope, "fast");
	await resolveAfter(0, 1);
};
_resumed.a0 = $slow;
_resumed.a1 = $fast;
