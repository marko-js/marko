// template.marko
const $template = "<button>toggle</button><section><!><p> </p><!></section>";
const $walks = " b D%bD l%l";
const $show2 = /*@__PURE__*/ _show("#text/4", "#text/2");
const $show3 = /*@__PURE__*/ _show("#section/1");
const $show = /*@__PURE__*/ _let("show/5", ($scope) => {
	$show2($scope, $scope.show);
	$show3($scope, $scope.show);
});
const $n = /*@__PURE__*/ _let("n/6", ($scope) => _text($scope["#text/3"], $scope.n));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$show($scope, !$scope.show);
	$n($scope, +$scope.n + 1);
}));
function $setup($scope) {
	$show($scope, true);
	$n($scope, 0);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
