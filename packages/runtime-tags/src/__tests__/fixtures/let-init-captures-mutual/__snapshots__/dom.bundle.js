// template.marko
const $b_getter = _hoist_resume("a2", 3);
const $b2 = /*@__PURE__*/ _let(3);
const $a2 = /*@__PURE__*/ _let(2, ($scope) => {
	_text($scope.b, typeof $scope.c);
	$b2($scope, $b($scope));
});
const $setup__script = _script("a3", ($scope) => _on($scope.a, "click", function() {
	$a2($scope, $scope.d);
}));
const $b = ($scope) => () => $scope.c;
function $a() {
	return $b_getter($scope);
}
_resumed.a1 = $b;
_resumed.a0 = $a;
