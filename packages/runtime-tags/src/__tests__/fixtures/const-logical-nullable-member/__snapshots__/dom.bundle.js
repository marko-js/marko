// template.marko
const $viaAnd = ($scope, viaAnd) => _text($scope.a, viaAnd?.label ?? "none");
const $viaTernary = ($scope, viaTernary) => _text($scope.b, viaTernary?.label ?? "none");
const $viaAndAssign = ($scope, viaAndAssign) => _text($scope.c, viaAndAssign?.label ?? "none");
const $on = /*@__PURE__*/ _let(4, ($scope) => {
	$viaAnd($scope, $scope.e && { label: "and" });
	$viaTernary($scope, $scope.e ? { label: "ternary" } : null);
	$viaAndAssign($scope, { inner: $scope.e ? { label: "assign" } : null }.inner &&= { label: "andassign" });
});
const $setup__script = _script("a0", ($scope) => _on($scope.d, "click", function() {
	$on($scope, $scope.e ? null : true);
}));
