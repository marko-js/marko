// template.marko
const $bump2 = /*@__PURE__*/ _action(7, ($scope) => $bump_pending($scope, $scope.h.pending));
const $shown = /*@__PURE__*/ _draft(4, ($scope) => {
	_text($scope.b, $scope.e);
	$bump2($scope, $bump($scope));
});
const $setup__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$scope.h().catch(() => {});
}));
const $bump_pending = /*@__PURE__*/ _const(8, ($scope) => _text($scope.c, $scope.i ? "pending" : "idle"));
const $bump = ($scope) => /*@__PURE__*/ _act(function* () {
	$shown($scope, $scope.e + 1, 1);
	yield rejectAfter(/* @__PURE__ */ new Error("refused"));
}, 1, $scope, $bump2);
_resume("a0", $bump);
