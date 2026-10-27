// tags/child.marko
const $input_act_pending = ($scope, input_act_pending) => _attr($scope.a, "disabled", input_act_pending);
const $input_act__script = _script("b0", ($scope) => _on($scope.a, "click", $scope.d));
const $input_act = /*@__PURE__*/ _const(3, ($scope) => {
	$input_act_pending($scope, $scope.d?.pending);
	$input_act__script($scope);
});

// template.marko
const $act2 = _action(1, "a1", ($scope) => $input_act($scope.a, $scope.b));
async function $act() {
	await resolveAfter(0);
}
_resumed.a0 = $act;
