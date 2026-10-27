// template.marko
const $go__script = _script("a1", ($scope) => _on($scope.a, "click", $scope.g));
const $go = fill("a3", _action(6, "a0", ($scope) => {
	$go_pending($scope, $scope.g?.pending);
	$go__script($scope);
}));
const $go_pending = /*@__PURE__*/ _const(8, ($scope) => _text($scope.b, $scope.i));
