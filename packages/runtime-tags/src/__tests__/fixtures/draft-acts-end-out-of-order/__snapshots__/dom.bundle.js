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
	await new Promise((resolve) => setTimeout(resolve, 250));
};
const $fast = ($scope) => async () => {
	$d($scope, "fast");
	await new Promise((resolve) => setTimeout(resolve, 100));
};
_resumed.a0 = $slow;
_resumed.a1 = $fast;
