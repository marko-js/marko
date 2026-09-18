// template.marko
const $count__script = _script("a2", ($scope) => {
	{
		const takeOver = (event) => {
			if (event.target.id === "claimed") event[Symbol.for("marko.act")]?.(resolveAfter(0).then(() => $count($scope, $scope.e + 1)));
		};
		document.addEventListener("click", takeOver);
		$signal($scope, 0).onabort = () => document.removeEventListener("click", takeOver);
	}
});
const $count = /*@__PURE__*/ _let(4, ($scope) => {
	$signalReset($scope, 0);
	$_shownSource($scope, $scope.e);
	$count__script($scope);
});
const $bump2 = /*@__PURE__*/ _action(8, ($scope) => $bump_pending($scope, $scope.i.pending));
const $shown = /*@__PURE__*/ _draft(5, ($scope) => {
	_text($scope.b, $scope.f);
	$bump2($scope, $bump($scope));
});
const $_shownSource = ($scope) => {
	$shown($scope, $scope.e);
};
const $setup__script = _script("a1", ($scope) => {
	_on($scope.a, "click", function() {
		$scope.i();
	});
	_on($scope.c, "click", function() {
		$scope.i();
	});
});
const $bump_pending = /*@__PURE__*/ _const(9, ($scope) => _text($scope.d, $scope.j ? "pending" : "idle"));
const $bump = ($scope) => /*@__PURE__*/ _act(() => {
	$shown($scope, $scope.f + 1, 1);
}, 0, $scope, $bump2);
_resume("a0", $bump);
