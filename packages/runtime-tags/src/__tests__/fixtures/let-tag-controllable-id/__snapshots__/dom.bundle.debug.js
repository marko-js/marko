// template.marko
const $template = "<button><!>|<!></button>";
const $walks = " D%c%l";
const $y = /* @__PURE__ */ _let_change("y/6", ($scope) => _text($scope["#text/2"], $scope.y));
const $x__OR__handler = /* @__PURE__ */ _or(5, ($scope) => $y($scope, $scope.x, $scope.handler));
const $x = /* @__PURE__ */ _let("x/3", ($scope) => {
	_text($scope["#text/1"], $scope.x);
	$x__OR__handler($scope);
});
const $handler2 = /* @__PURE__ */ _let("handler/4", $x__OR__handler);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$y($scope, $scope.y + 1);
}));
function $setup($scope) {
	$x($scope, 1);
	$handler2($scope, $handler($scope));
	$setup__script($scope);
}
function $handler($scope) {
	return function(newValue) {
		$x($scope, newValue + 1);
	};
}
_resume("__tests__/template.marko_0/handler", $handler);
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
