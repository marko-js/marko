// template.marko
const $template = "<button id=t>t</button><section id=c><!></section>";
const $walks = " b D%l";
const $if = /*@__PURE__*/ _if("#text/2", "<p>yes</p>", 0, 0, "<i>no</i>");
const $show = /*@__PURE__*/ _show("#section/1");
const $visible = /*@__PURE__*/ _let("visible/3", ($scope) => {
	$if($scope, $scope.visible ? 0 : 1);
	$show($scope, $scope.visible);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$visible($scope, !$scope.visible);
}));
function $setup($scope) {
	$visible($scope, false);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
