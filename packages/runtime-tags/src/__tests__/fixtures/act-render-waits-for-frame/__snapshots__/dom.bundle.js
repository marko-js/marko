// template.marko
const $act2__script = _script("a3", ($scope) => _on($scope.a, "submit", $scope.f));
const $act2 = _action(5, "a1", ($scope) => {
	$act_pending($scope, $scope.f?.pending);
	$act2__script($scope);
});
const $count = /*@__PURE__*/ _let(4, ($scope) => {
	_text($scope.d, $scope.e);
	$act2($scope, $act($scope));
});
const $setup__script = _script("a2", ($scope) => _on($scope.c, "click", function() {
	$count($scope, +$scope.e + 1);
}));
const $act_pending = /*@__PURE__*/ _const(7, ($scope) => _attr($scope.b, "disabled", $scope.h));
const $act = ($scope) => async (ev) => {
	ev.preventDefault();
	$count($scope, +$scope.e + 1);
	await new Promise((resolve) => setTimeout(resolve, 100));
};
_resumed.a0 = $act;
