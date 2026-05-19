// template.marko
const $template = "<span> </span><span> </span>";
const $walks = "D lD l";
const $x__script = _script("__tests__/template.marko_0_x", ($scope) => {
	$y($scope, $scope.x);
	$x($scope, 2);
});
const $x = /* @__PURE__ */ _let("x/2", ($scope) => {
	_text($scope["#text/0"], $scope.x);
	$x__script($scope);
});
const $y = /* @__PURE__ */ _let("y/3", ($scope) => _text($scope["#text/1"], $scope.y));
function $setup($scope) {
	$x($scope, 1);
	$y($scope, 0);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
