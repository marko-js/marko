// template.marko
const $obj = /*@__PURE__*/ _let(3, ($scope) => $a($scope, $scope.d.a));
const $a = /*@__PURE__*/ _const(4, ($scope) => $a_b($scope, $scope.e?.b));
const $a_b = /*@__PURE__*/ _const(5, ($scope) => {
	_text($scope.a, JSON.stringify($scope.f));
	$a_b_c($scope, $scope.f?.c);
});
const $a_b_c = /*@__PURE__*/ _const(6, ($scope) => _text($scope.b, String($scope.g)));
const $setup__script = _script("a0", ($scope) => _on($scope.c, "click", function() {
	$obj($scope, { a: { b: { c: 2 } } });
}));
