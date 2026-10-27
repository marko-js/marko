// template.marko
const $d = /*@__PURE__*/ _draft(4, ($scope) => _text($scope.c, $scope.e));
const $act2__script = _script("a2", ($scope) => _on($scope.b, "click", $scope.g));
const $act2 = _action(6, "a1", $act2__script);
const $setup__script = _script("a3", ($scope) => _on($scope.a, "click", function() {
	$d($scope, 5);
}));
const $act = ($scope) => async () => {
	await 0;
	$d($scope, 7);
};
_resumed.a0 = $act;
