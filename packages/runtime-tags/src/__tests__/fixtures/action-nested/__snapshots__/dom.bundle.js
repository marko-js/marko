// template.marko
const $count = /*@__PURE__*/ _draft(6, ($scope) => _text($scope.b, $scope.g));
const $step2 = /*@__PURE__*/ _const(7, ($scope) => $step_pending($scope, $scope.h?.pending));
const $serverCount__OR__count = ($scope) => {
	$step2($scope, $step($scope));
};
const $run2__script = _script("a2", ($scope) => _on($scope.a, "click", $scope.j));
const $run2 = /*@__PURE__*/ _const(9, ($scope) => {
	$run_pending($scope, $scope.j?.pending);
	$run2__script($scope);
});
const $serverCount__OR__count__OR__step = ($scope) => {
	$run2($scope, $run($scope));
};
const $serverCount = /*@__PURE__*/ _let(5, ($scope) => {
	_text($scope.c, $scope.f);
	$count($scope, $scope.f);
	$serverCount__OR__count($scope);
	$serverCount__OR__count__OR__step($scope);
});
const $step_pending = /*@__PURE__*/ _let(8, ($scope) => _text($scope.d, String($scope.i)));
const $run_pending = /*@__PURE__*/ _let(10, ($scope) => _text($scope.e, String($scope.k)));
function $step($scope) {
	return _action($scope, 7, $step_pending, _action_async(function* () {
		$count.d($scope, $scope.g + 1);
		$serverCount($scope, yield resolveAfter($scope.f + 1, 1));
	}));
}
function $run($scope) {
	return _action($scope, 9, $run_pending, _action_async(function* () {
		yield $scope.h();
		$count.d($scope, $scope.g + 10);
		$serverCount($scope, yield resolveAfter($scope.f + 10, 2));
	}));
}
_resume("a0", $step);
_resume("a1", $run);
