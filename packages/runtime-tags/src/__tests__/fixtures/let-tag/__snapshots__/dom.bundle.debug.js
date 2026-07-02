// template.marko
const $template = "<button> </button><!>";
const $walks = " D l%b";
const $x = /* @__PURE__ */ _let("x/3", ($scope) => _text($scope["#text/1"], $scope.x));
const $y = /* @__PURE__ */ _let_change("y/4", ($scope) => _text($scope["#text/2"], $scope.y));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", () => $x($scope, $y($scope, $scope.x + $scope.y))));
function $setup($scope) {
	$x($scope, 1);
	$y($scope, 1, false);
	$setup__script($scope);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
