// template.marko
const $template = "";
const $walks = "";
const $x__script = _script("__tests__/template.marko_0_x", ($scope) => {
	(() => {
		if ($scope.x) return;
		console.log("first: " + $scope.x);
	})();
	console.log("second: " + $scope.x);
});
const $x = /*@__PURE__*/ _let("x/0", $x__script);
function $setup($scope) {
	$x($scope, true);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", "", "", $setup);
