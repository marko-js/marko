// template.marko
const $total = /*@__PURE__*/ _draft(7, ($scope) => _text($scope.c, $scope.h));
const $addFast2__script = _script("a3", ($scope) => _on($scope.a, "click", $scope.i));
const $addFast2 = /*@__PURE__*/ _const(8, ($scope) => {
	$addFast_pending($scope, $scope.i?.pending);
	$addFast2__script($scope);
});
const $addSlow2__script = _script("a2", ($scope) => _on($scope.b, "click", $scope.k));
const $addSlow2 = /*@__PURE__*/ _const(10, ($scope) => {
	$addSlow_pending($scope, $scope.k?.pending);
	$addSlow2__script($scope);
});
const $serverTotal__OR__total = ($scope) => {
	$addFast2($scope, $addFast($scope));
	$addSlow2($scope, $addSlow($scope));
};
const $serverTotal = /*@__PURE__*/ _let(6, ($scope) => {
	_text($scope.d, $scope.g);
	$total($scope, $scope.g);
	$serverTotal__OR__total($scope);
});
const $addFast_pending = /*@__PURE__*/ _let(9, ($scope) => _text($scope.e, String($scope.j)));
const $addSlow_pending = /*@__PURE__*/ _let(11, ($scope) => _text($scope.f, String($scope.l)));
function $addFast($scope) {
	return _action($scope, 8, $addFast_pending, async () => {
		$total.d($scope, $scope.h + 1);
		$serverTotal($scope, await resolveAfter($scope.g + 1, 1));
	});
}
function $addSlow($scope) {
	return _action($scope, 10, $addSlow_pending, async () => {
		$total.d($scope, $scope.h + 10);
		$serverTotal($scope, await resolveAfter($scope.g + 10, 2));
	});
}
_resume("a0", $addFast);
_resume("a1", $addSlow);
