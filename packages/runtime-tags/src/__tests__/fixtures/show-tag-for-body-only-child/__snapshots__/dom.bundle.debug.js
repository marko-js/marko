// template.marko
const $template = "<button id=t>t</button><div id=c><!></div>";
const $walks = " b D%l";
const $for_content__i = ($scope, i) => _text($scope["#text/0"], i);
const $for_content__$params = ($scope, $params2) => $for_content__i($scope, $params2[0]);
const $show = /*@__PURE__*/ _show("#div/1");
const $visible = /*@__PURE__*/ _let("visible/3", ($scope) => $show($scope, $scope.visible));
const $for = /*@__PURE__*/ _for_of("#text/2", "<b> </b>", "D ", 0, $for_content__$params);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$visible($scope, !$scope.visible);
}));
function $setup($scope) {
	$visible($scope, true);
	$for($scope, [[1, 2]]);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
