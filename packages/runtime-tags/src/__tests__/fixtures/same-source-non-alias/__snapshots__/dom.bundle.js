// template.marko
function createWrapper(a) {
	return { a };
}
const $pattern2 = ($scope, $pattern) => $a($scope, $pattern.a);
const $count = /*@__PURE__*/ _let(3, ($scope) => $pattern2($scope, createWrapper($scope.d)));
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.d + 1);
}));
const $a__render = /*@__PURE__*/ _render(($scope, a) => _text($scope.b, a));
const $a = ($scope, a) => {
	$a__render($scope, a);
	$b($scope, a);
};
const $b = /*@__PURE__*/ _render(($scope, a) => _text($scope.c, a));
