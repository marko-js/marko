// template.marko
const $count = /*@__PURE__*/ _draft(5, ($scope) => _text($scope.b, $scope.f));
const $increment2__script = _script("a1", ($scope) => _on($scope.a, "click", $scope.g));
const $increment2 = /*@__PURE__*/ _const(6, ($scope) => {
	$increment_pending($scope, $scope.g?.pending);
	$increment2__script($scope);
});
const $serverCount__OR__count = ($scope) => {
	$increment2($scope, $increment($scope));
};
const $serverCount = /*@__PURE__*/ _let(4, ($scope) => {
	_text($scope.c, $scope.e);
	$count($scope, $scope.e);
	$serverCount__OR__count($scope);
});
const $increment_pending = /*@__PURE__*/ _let(7, ($scope) => _text($scope.d, String($scope.h)));
function $increment($scope) {
	return _action($scope, 6, $increment_pending, _action_async(function* () {
		$count.d($scope, $scope.f + 5);
		$serverCount($scope, yield resolveAfter($scope.e + 1));
	}));
}
_resume("a0", $increment);
