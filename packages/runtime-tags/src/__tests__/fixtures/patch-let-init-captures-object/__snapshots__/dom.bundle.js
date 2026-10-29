// template.marko
const $a2 = _let(2, ($scope) => {
	$a_self($scope, $scope.c?.self);
	$a2($scope, { self: $a($scope) });
});
const $a_self = /*@__PURE__*/ _const(3, ($scope) => _text($scope.b, typeof $scope.d));
const $setup__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$a2($scope, { self: () => $scope.c.self() });
}));
const $a = ($scope) => () => $scope.c;
_resumed.a0 = $a;
