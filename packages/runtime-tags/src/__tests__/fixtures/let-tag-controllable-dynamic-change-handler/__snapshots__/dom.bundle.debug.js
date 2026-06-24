// template.marko
const $template = "<button id=inc><!>|<!></button><button id=toggle>toggle</button>";
const $walks = " D%c%l b";
const $y__script = _script("__tests__/template.marko_0_y", ($scope) => _on($scope["#button/0"], "click", function() {
	$y($scope, $scope.y + 1);
}));
const $y = /*@__PURE__*/ _let_change("y/7", ($scope) => {
	_text($scope["#text/2"], $scope.y);
	$y__script($scope);
});
const $x__OR__yChange = /*@__PURE__*/ _or(6, ($scope) => $y($scope, $scope.x, $scope.yChange));
const $x = /*@__PURE__*/ _let("x/4", ($scope) => {
	_text($scope["#text/1"], $scope.x);
	$x__OR__yChange($scope);
});
const $yChange2 = /*@__PURE__*/ _let("yChange/5", $x__OR__yChange);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/3"], "click", function() {
	$yChange2($scope, null);
}));
function $setup($scope) {
	$x($scope, 1);
	$yChange2($scope, $yChange($scope));
	$setup__script($scope);
}
function $yChange($scope) {
	return function(newValue) {
		$x($scope, newValue + 1);
	};
}
_resume("__tests__/template.marko_0/yChange", $yChange);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
