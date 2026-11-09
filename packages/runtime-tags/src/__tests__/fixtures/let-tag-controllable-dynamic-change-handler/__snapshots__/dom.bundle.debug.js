// template.marko
const $template = "<button id=inc><!>|<!>|<!></button><button id=toggle>toggle</button>";
const $walks = " D%c%c%l b";
const $y = /*@__PURE__*/ _let_change("y/8", ($scope) => _text($scope["#text/2"], $scope.y));
const $x__OR__yChange = /*@__PURE__*/ _or(7, ($scope) => $y($scope, $scope.x, $scope.yChange));
const $x = /*@__PURE__*/ _let("x/5", ($scope) => {
	_text($scope["#text/1"], $scope.x);
	$x__OR__yChange($scope);
});
const $z = /*@__PURE__*/ _let_change("z/10", ($scope) => _text($scope["#text/3"], $scope.z));
const $yChange2 = /*@__PURE__*/ _let("yChange/6", ($scope) => {
	$z($scope, void 0, $scope.yChange);
	$x__OR__yChange($scope);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_on($scope["#button/0"], "click", function() {
		$y($scope, +$scope.y + 1);
	});
	_on($scope["#button/4"], "click", function() {
		$yChange2($scope, null);
	});
});
function $setup($scope) {
	$x($scope, 1);
	$yChange2($scope, $yChange($scope));
	$setup__script($scope);
}
const $yChange = ($scope) => function(newValue) {
	$x($scope, newValue + 1);
};
_resumed["__tests__/template.marko_0/yChange"] = $yChange;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
