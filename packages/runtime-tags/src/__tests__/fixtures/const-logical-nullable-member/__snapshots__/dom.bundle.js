// template.marko
const $viaAnd = ($scope, viaAnd) => $viaAnd_label($scope, viaAnd?.label);
const $viaTernary = ($scope, viaTernary) => $viaTernary_label($scope, viaTernary?.label);
const $box = ($scope, box) => $box_inner($scope, box.inner);
const $on = /*@__PURE__*/ _let(4, ($scope) => {
	$viaAnd($scope, ("e" in $scope ? $scope.e : true) && { label: "and" });
	$viaTernary($scope, ("e" in $scope ? $scope.e : true) ? { label: "ternary" } : null);
	$box($scope, { inner: ("e" in $scope ? $scope.e : true) ? { label: "assign" } : null });
});
const $setup__script = _script("a0", ($scope) => _on($scope.d, "click", function() {
	$on($scope, ("e" in $scope ? $scope.e : true) ? null : true);
}));
const $viaAnd_label = ($scope, viaAnd_label) => _text($scope.a, viaAnd_label ?? "none");
const $viaTernary_label = ($scope, viaTernary_label) => _text($scope.b, viaTernary_label ?? "none");
const $viaAndAssign = ($scope, viaAndAssign) => $viaAndAssign_label($scope, viaAndAssign?.label);
const $box_inner = ($scope, box_inner) => $viaAndAssign($scope, box_inner &&= { label: "andassign" });
const $viaAndAssign_label = ($scope, viaAndAssign_label) => _text($scope.c, viaAndAssign_label ?? "none");
