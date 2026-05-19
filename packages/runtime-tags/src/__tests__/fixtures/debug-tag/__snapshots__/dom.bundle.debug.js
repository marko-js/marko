// template.marko
const $template = "";
const $walks = "";
const $x__OR__y__script = _script("__tests__/template.marko_0_x_y", ($scope) => console.log($scope.x, $scope.y));
const $x__OR__y = /* @__PURE__ */ _or(2, $x__OR__y__script);
const $x = /* @__PURE__ */ _const("x", ($scope) => {
	debugger;
	$x__OR__y($scope);
});
const $y = /* @__PURE__ */ _let("y/1", ($scope) => {
	debugger;
	$x__OR__y($scope);
});
function $setup($scope) {
	debugger;
	$x($scope, 0);
	$y($scope, 0);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", "", "", $setup);
