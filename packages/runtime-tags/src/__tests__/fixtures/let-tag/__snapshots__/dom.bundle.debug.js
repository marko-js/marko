// template.marko
const $template = "<button> </button><!>";
const $walks = " D l%b";
const $x__OR__y__script = _script("__tests__/template.marko_0_x_y", ($scope) => _on($scope["#button/0"], "click", () => $x($scope, $y($scope, $scope.x + $scope.y))));
const $x__OR__y = /*@__PURE__*/ _or(5, $x__OR__y__script);
const $x = /*@__PURE__*/ _let("x/3", ($scope) => {
	_text($scope["#text/1"], $scope.x);
	$x__OR__y($scope);
});
const $y = /*@__PURE__*/ _let_change("y/4", ($scope) => {
	_text($scope["#text/2"], $scope.y);
	$x__OR__y($scope);
});
function $setup($scope) {
	$x($scope, 1);
	$y($scope, 1, false);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
