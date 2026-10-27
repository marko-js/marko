// template.marko
const $d = /*@__PURE__*/ _draft(3, ($scope) => _text($scope.b, $scope.d));
const $outer2__script = _script("a4", ($scope) => _on($scope.a, "click", $scope.h));
const $outer2 = _action(7, "a3", $outer2__script);
const $set2 = _action(5, "a2", ($scope) => $outer2($scope, $outer($scope)));
const $outer = ($scope) => async () => {
	await resolveAfter(0, 1);
	$scope.f();
};
const $set = ($scope) => async () => {
	$d($scope, 9);
	await resolveAfter(0, 2);
};
_resumed.a1 = $outer;
_resumed.a0 = $set;
