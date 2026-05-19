// template.marko
const $template = "<div> </div>";
const $walks = "D l";
const $x = /* @__PURE__ */ _let("x/1", ($scope) => _text($scope["#text/0"], $scope.x));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => $x($scope, 2));
function $setup($scope) {
	$x($scope, 1);
	$setup__script($scope);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, "D l", $setup);
