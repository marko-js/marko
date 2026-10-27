// template.marko
const $d = /*@__PURE__*/ _fill_draft("a3", 5, ($scope) => _text($scope.b, $scope.f));
const $hold2__script = _script("a2", ($scope) => _on($scope.a, "click", $scope.h));
const $hold2 = fill("a5", _action(7, "a1", $hold2__script));
const $hold = ($scope) => async () => {
	$d($scope, 5);
	await new Promise((resolve) => setTimeout(resolve, 600));
};
_resumed.a0 = $hold;
