// template.marko
const $obj = /*@__PURE__*/ _let(4, ($scope) => {
	$obj_c($scope, $scope.e.c);
	$a($scope, $scope.e.a);
});
const $obj_c = /*@__PURE__*/ _const(5, ($scope) => _text($scope.c, $scope.f));
const $a = /*@__PURE__*/ _const(6, ($scope) => $a_b($scope, $scope.g.b));
const $a_b = /*@__PURE__*/ _const(7, ($scope) => {
	_text($scope.b, $scope.h);
	$z($scope, $scope.h);
});
const $z = ($scope) => {
	_text($scope.a, $scope.h);
};
const $setup__script = _script("a0", ($scope) => _on($scope.d, "click", function() {
	$obj($scope, {
		a: { b: 3 },
		c: 4
	});
}));
