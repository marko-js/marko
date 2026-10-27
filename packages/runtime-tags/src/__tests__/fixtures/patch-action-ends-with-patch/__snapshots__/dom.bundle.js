// template.marko
const $placeholder_content = _content$1("a2", "<i>loading</i>");
const $go__script = _script("a7", ($scope) => _on($scope.a, "click", $scope.i));
const $go = fill("a12", _action(8, "a0", ($scope) => {
	$go_pending($scope, $scope.i?.pending);
	$go__script($scope);
}));
const $go_pending = /*@__PURE__*/ _const(10, ($scope) => _text($scope.b, $scope.k));
