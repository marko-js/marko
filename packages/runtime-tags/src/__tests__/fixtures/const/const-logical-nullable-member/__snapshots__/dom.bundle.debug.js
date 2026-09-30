// template.marko
const $template = "<ul><li> </li><li> </li><li> </li></ul><button>toggle</button>";
const $walks = "E lD lD m b";
const $viaAnd = ($scope, viaAnd) => $viaAnd_label($scope, viaAnd?.label);
const $viaTernary = ($scope, viaTernary) => $viaTernary_label($scope, viaTernary?.label);
const $viaAndAssign = ($scope, viaAndAssign) => $viaAndAssign_label($scope, viaAndAssign?.label);
const $box = ($scope, box) => $viaAndAssign($scope, box.inner &&= { label: "andassign" });
const $on = /*@__PURE__*/ _let("on/4", ($scope) => {
	$viaAnd($scope, $scope.on && { label: "and" });
	$viaTernary($scope, $scope.on ? { label: "ternary" } : null);
	$box($scope, { inner: $scope.on ? { label: "assign" } : null });
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/3"], "click", function() {
	$on($scope, $scope.on ? null : true);
}));
function $setup($scope) {
	$on($scope, true);
	$setup__script($scope);
}
const $viaAnd_label = ($scope, viaAnd_label) => _text($scope["#text/0"], viaAnd_label ?? "none");
const $viaTernary_label = ($scope, viaTernary_label) => _text($scope["#text/1"], viaTernary_label ?? "none");
const $viaAndAssign_label = ($scope, viaAndAssign_label) => _text($scope["#text/2"], viaAndAssign_label ?? "none");
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
