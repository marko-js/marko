// template.marko
const $bump2 = /*@__PURE__*/ _action(7, ($scope) => $bump_pending($scope, $scope.h.pending));
const $count__OR__shown = /*@__PURE__*/ _or(6, ($scope) => $bump2($scope, $bump($scope)));
const $count = /*@__PURE__*/ _let(3, ($scope) => {
	$_shownSource($scope, $scope.d);
	$count__OR__shown($scope);
});
const $shown = /*@__PURE__*/ _draft(4, 3, ($scope) => {
	_text($scope.b, $scope.e);
	$count__OR__shown($scope);
});
const $_shownSource = ($scope) => {
	$shown($scope, $scope.d);
};
const $setup__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$scope.h();
}));
const $bump_pending = /*@__PURE__*/ _const(8, ($scope) => _text($scope.c, $scope.i ? "pending" : "idle"));
const $bump = ($scope) => /*@__PURE__*/ _act(function* () {
	$shown($scope, $scope.e + 1, 1);
	yield resolveAfter(0);
	$count($scope, $scope.d + 1);
}, 1, $scope, $bump2);
_resume("a0", $bump);
