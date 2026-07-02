// template.marko
const $template = "<button id=toggle>toggle</button><div><button id=inc>count <!></button></div>";
const $walks = " b D Db%m";
const $show = /* @__PURE__ */ _show("#div/1");
const $open = /* @__PURE__ */ _let("open/4", ($scope) => $show($scope, $scope.open));
const $n = /* @__PURE__ */ _let("n/5", ($scope) => _text($scope["#text/3"], $scope.n));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_on($scope["#button/0"], "click", function() {
		$open($scope, !$scope.open);
	});
	_on($scope["#button/2"], "click", function() {
		$n($scope, $scope.n + 1);
	});
});
function $setup($scope) {
	$open($scope, true);
	$n($scope, 0);
	$setup__script($scope);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
