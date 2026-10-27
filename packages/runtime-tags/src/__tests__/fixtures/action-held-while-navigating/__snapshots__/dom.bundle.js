// template.marko
const $go__script = _script("a1", ($scope) => _on($scope.a, "click", $scope.c));
const $go = _action(2, "a0", ($scope) => {
	$go_pending($scope, $scope.c?.pending);
	$go__script($scope);
});
const $go_pending = /*@__PURE__*/ _const(4, ($scope) => _text($scope.b, $scope.e));
