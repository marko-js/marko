// template.marko
const $save2 = /*@__PURE__*/ _const(5, ($scope) => $save_pending($scope, $scope.f?.pending));
const $count = /*@__PURE__*/ _draft(4, ($scope) => {
	_text($scope.b, $scope.e);
	$save2($scope, $save($scope));
});
const $serverCount = /*@__PURE__*/ _let(3, ($scope) => $count($scope, $scope.d));
const $setup__script = _script("a1", ($scope) => _on($scope.a, "click", () => $scope.f().catch(() => {})));
const $save_pending = /*@__PURE__*/ _let(6, ($scope) => _text($scope.c, String($scope.g)));
function $save($scope) {
	return _action($scope, 5, $save_pending, async () => {
		$count.d($scope, $scope.e + 1);
		$serverCount($scope, await rejectAfter(/* @__PURE__ */ new Error("save failed")));
	});
}
_resume("a0", $save);
