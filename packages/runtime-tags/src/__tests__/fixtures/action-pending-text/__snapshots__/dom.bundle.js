// template.marko
const $save2__script = _script("a1", ($scope) => _on($scope.a, "click", $scope.c));
const $save_pending = /*@__PURE__*/ _let(3, ($scope) => _text($scope.b, String($scope.d)));
function $save($scope) {
	return _action($scope, 2, $save_pending, async () => {
		await resolveAfter(1);
	});
}
_resume("a0", $save);
