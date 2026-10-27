// template.marko
const $d = /*@__PURE__*/ _draft(4, ($scope) => _text($scope.b, $scope.e));
const $n = /*@__PURE__*/ _let(3, ($scope) => $d($scope, $scope.d));
const $hold2__script = _script("a3", ($scope) => _on($scope.a, "click", $scope.g));
const $hold2 = _action(6, "a1", $hold2__script);
const $setup__script = _script("a2", ($scope) => _on($scope.c, "click", function() {
	$n($scope, +$scope.d + 1);
}));
const $hold = ($scope) => async () => {
	$d($scope, 5);
	await new Promise((resolve) => setTimeout(resolve, 100));
};
_resumed.a0 = $hold;
