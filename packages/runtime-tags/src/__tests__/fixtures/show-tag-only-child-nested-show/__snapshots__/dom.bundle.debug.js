// template.marko
const $template = "<button id=t>t</button><section id=c><p> </p><!></section>";
const $walks = " b E l%l";
const $show = /*@__PURE__*/ _show("#text/3");
const $show2 = /*@__PURE__*/ _show("#section/1");
const $visible = /*@__PURE__*/ _let("visible/4", ($scope) => {
	$show($scope, $scope.visible);
	$show2($scope, $scope.visible);
});
const $n = /*@__PURE__*/ _let("n/5", ($scope) => _text($scope["#text/2"], $scope.n));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$visible($scope, !$scope.visible);
	$n($scope, +$scope.n + 1);
}));
function $setup($scope) {
	$visible($scope, true);
	$n($scope, 0);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
