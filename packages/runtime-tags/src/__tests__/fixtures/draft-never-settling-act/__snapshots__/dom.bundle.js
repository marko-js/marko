// template.marko
const $stuck = /*@__PURE__*/ _draft(4, ($scope) => _text($scope.b, $scope.e));
const $quick = /*@__PURE__*/ _draft(6, ($scope) => _text($scope.c, $scope.g));
const $hang2 = _action(8, "a2");
const $brief2 = _action(10, "a3");
const $setup__script = _script("a4", ($scope) => _on($scope.a, "click", function() {
	$scope.i();
	$scope.k();
}));
const $hang = ($scope) => async () => {
	$stuck($scope, "stuck");
	await new Promise(() => {});
};
const $brief = ($scope) => async () => {
	$quick($scope, "quick");
	await new Promise((resolve) => setTimeout(resolve, 50));
};
_resumed.a0 = $hang;
_resumed.a1 = $brief;
