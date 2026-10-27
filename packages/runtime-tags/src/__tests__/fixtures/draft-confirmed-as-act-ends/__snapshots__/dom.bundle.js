// template.marko
const $d = /*@__PURE__*/ _draft(3, ($scope) => _text($scope.b, $scope.d));
const $n = /*@__PURE__*/ _let(2, ($scope) => $d($scope, $scope.c));
const $save2__script = _script("a2", ($scope) => _on($scope.a, "click", $scope.f));
const $save2 = _action(5, "a1", $save2__script);
const $save = ($scope) => async () => {
	$d($scope, 2);
	await new Promise((resolve) => setTimeout(resolve, 50));
	$n($scope, 3);
};
_resumed.a0 = $save;
