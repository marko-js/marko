// template.marko
const $template = "<button> </button><!> <!> <!>";
const $walks = " D l%c%c%b";
const $y = /* @__PURE__ */ _const("y", ($scope) => _text($scope["#text/2"], $scope.y));
const $z = /* @__PURE__ */ _const("z", ($scope) => _text($scope["#text/3"], $scope.z));
const $a = ($scope, a) => _text($scope["#text/4"], a);
const $y__OR__z = ($scope) => {
	$a($scope, $scope.y + $scope.z);
};
const $x__script = _script("__tests__/template.marko_0_x", ($scope) => _on($scope["#button/0"], "click", () => $x($scope, $scope.x + 1) - 1));
const $x = /* @__PURE__ */ _let("x/5", ($scope) => {
	_text($scope["#text/1"], $scope.x);
	$y($scope, $scope.x + 1);
	$z($scope, $scope.x + 2);
	$y__OR__z($scope);
	$x__script($scope);
});
function $setup($scope) {
	$x($scope, 1);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
