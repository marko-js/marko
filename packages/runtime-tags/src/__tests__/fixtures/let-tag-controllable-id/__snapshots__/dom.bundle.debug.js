// template.marko
const $template = "<button><!>|<!></button>";
const $walks = " D%c%l";
const $y__script = _script("__tests__/template.marko_0_y", ($scope) => _on($scope["#button/0"], "click", function() {
	$y($scope, $scope.y + 1);
}));
const $y = /* @__PURE__ */ _let("y/6", ($scope) => {
	_text($scope["#text/2"], $scope.y);
	$y__script($scope);
});
const $x__OR__handler = /* @__PURE__ */ _or(5, ($scope) => $y($scope, $scope.x, $scope.handler));
const $x = /* @__PURE__ */ _let("x/3", ($scope) => {
	_text($scope["#text/1"], $scope.x);
	$x__OR__handler($scope);
});
const $handler2 = /* @__PURE__ */ _let("handler/4", $x__OR__handler);
function $setup($scope) {
	$x($scope, 1);
	$handler2($scope, $handler($scope));
}
function $handler($scope) {
	return function(newValue) {
		$x($scope, newValue + 1);
	};
}
_resume("__tests__/template.marko_0/handler", $handler);
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
