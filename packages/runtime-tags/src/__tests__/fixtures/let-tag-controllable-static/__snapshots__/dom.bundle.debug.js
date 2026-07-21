// template.marko
const $template = "<button><!>|<!></button>";
const $walks = " D%c%l";
const $y = /*@__PURE__*/ _let_change("y/4", /*@__PURE__*/ _render(($scope) => _text($scope["#text/2"], $scope.y)));
const $x__render = /*@__PURE__*/ _render(($scope) => _text($scope["#text/1"], $scope.x));
const $x = /*@__PURE__*/ _let("x/3", ($scope) => {
	$x__render($scope);
	$y($scope, $scope.x, $valueChange($scope));
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$y($scope, $scope.y + 1);
}));
function $setup($scope) {
	$x($scope, 1);
	$setup__script($scope);
}
function $valueChange($scope) {
	return function(newValue) {
		$x($scope, newValue + 1);
	};
}
_resume("__tests__/template.marko_0/valueChange", $valueChange);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
