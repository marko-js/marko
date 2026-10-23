// template.marko
const $template = "<button>toggle</button><section><!></section>";
const $walks = " b D%l";
const $if = /*@__PURE__*/ _if("#text/2", "<p>yes</p>", 0, 0, "<i>no</i>");
const $show2 = /*@__PURE__*/ _show("#section/1");
const $show = /*@__PURE__*/ _let("show/3", ($scope) => {
	$if($scope, $scope.show ? 0 : 1);
	$show2($scope, $scope.show);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$show($scope, !$scope.show);
}));
function $setup($scope) {
	$show($scope, false);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
