// template.marko
const key = "bump";
const $handlers2 = /*@__PURE__*/ _const(3, _script("a1", ($scope) => _on($scope.a, "click", $scope.d[key])));
const $n = /*@__PURE__*/ _let(2, ($scope) => {
	_text($scope.b, $scope.c);
	$handlers2($scope, { [key]: $handlers($scope) });
});
const $handlers = ($scope) => function() {
	$n($scope, $scope.c + 1);
};
_resume("a0", $handlers);
