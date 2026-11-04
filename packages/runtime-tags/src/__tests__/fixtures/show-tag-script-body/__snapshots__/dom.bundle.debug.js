// template.marko
const $template = "<button id=t>t</button><span>before<!><!></span>";
const $walks = " bDb%b%l";
const $show = /*@__PURE__*/ _show("#text/2", "#text/1");
const $visible = /*@__PURE__*/ _let("visible/3", ($scope) => $show($scope, $scope.visible));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_on($scope["#button/0"], "click", function() {
		$visible($scope, !$scope.visible);
	});
	console.log("mounted");
});
function $setup($scope) {
	$visible($scope, true);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
