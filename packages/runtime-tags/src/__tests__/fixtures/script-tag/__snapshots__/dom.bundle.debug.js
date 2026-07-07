// template.marko
const $template = "<div id=ref>0</div>";
const $walks = "b";
const $x__script = _script("__tests__/template.marko_0_x", ($scope) => document.getElementById("ref").textContent = $scope.x);
const $x = /*@__PURE__*/ _let("x/0", $x__script);
function $setup($scope) {
	$x($scope, 1);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b", $setup);
