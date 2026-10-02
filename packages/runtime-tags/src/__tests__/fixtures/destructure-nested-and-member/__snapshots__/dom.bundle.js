// template.marko
const $obj = /*@__PURE__*/ _let(3, ($scope) => {
	$obj_c($scope, $scope.d.c);
	$a2($scope, $scope.d.a);
});
const $obj_c = /*@__PURE__*/ _const(4, ($scope) => _text($scope.b, $scope.e));
const $a2 = /*@__PURE__*/ _const(5, ($scope) => $b($scope, $scope.f.b));
const $b = /*@__PURE__*/ _const(6, ($scope) => _text($scope.a, $scope.g));
const $setup__script = _script("a0", ($scope) => _on($scope.c, "click", function() {
	$obj($scope, {
		a: { b: 3 },
		c: 4
	});
}));
