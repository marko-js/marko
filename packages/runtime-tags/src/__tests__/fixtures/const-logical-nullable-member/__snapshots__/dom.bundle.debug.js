// template.marko
const $template = "<ul><li> </li><li> </li><li> </li></ul><button>toggle</button>";
const $walks = "E lD lD m b";
const $viaAnd = ($scope, viaAnd) => _text($scope["#text/0"], viaAnd?.label ?? "none");
const $viaTernary = ($scope, viaTernary) => _text($scope["#text/1"], viaTernary?.label ?? "none");
const $viaAndAssign = ($scope, viaAndAssign) => _text($scope["#text/2"], viaAndAssign?.label ?? "none");
const $on = /*@__PURE__*/ _let("on/4", ($scope) => {
	$viaAnd($scope, $scope.on && { label: "and" });
	$viaTernary($scope, $scope.on ? { label: "ternary" } : null);
	$viaAndAssign($scope, { inner: $scope.on ? { label: "assign" } : null }.inner &&= { label: "andassign" });
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/3"], "click", function() {
	$on($scope, $scope.on ? null : true);
}));
function $setup($scope) {
	$on($scope, true);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
