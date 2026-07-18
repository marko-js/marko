// template.marko
const $status = /*@__PURE__*/ _draft(3, ($scope) => _text($scope.b, $scope.d));
const $serverStatus = /*@__PURE__*/ _let(2, ($scope) => $status($scope, $scope.c));
const $save2__script = _script("a1", ($scope) => _on($scope.a, "click", $scope.e));
const $save_pending = /*@__PURE__*/ _let(5, ($scope) => _attr($scope.a, "disabled", $scope.f));
function $save($scope) {
	return _action($scope, 4, $save_pending, _action_async(function* () {
		$status.d($scope, "saving");
		yield resolveAfter(1, 1);
		$status.d($scope, "syncing");
		$serverStatus($scope, yield resolveAfter("saved again", 2));
	}));
}
_resume("a0", $save);
