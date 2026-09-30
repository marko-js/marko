// template.marko
const $template = "<button id=t>t</button><div id=c>x <!><!><!><!> y</div>";
const $walks = " bDb%b%b%b%l";
const $show = /*@__PURE__*/ _show("#text/4", "#text/1", "#text/3");
const $visible = /*@__PURE__*/ _let("visible/5", ($scope) => $show($scope, $scope.visible));
const $if = /*@__PURE__*/ _if("#text/2", "<b>B</b>");
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$visible($scope, !$scope.visible);
}));
function $setup($scope) {
	$visible($scope, true);
	$if($scope, true ? 0 : 1);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
