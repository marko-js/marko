// template.marko
const $template = "<button>toggle</button><section></section>";
const $walks = " b b";
const $show = /*@__PURE__*/ _show("#section/1");
const $open = /*@__PURE__*/ _let("open/2", ($scope) => $show($scope, $scope.open));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$open($scope, !$scope.open);
}));
function $setup($scope) {
	$open($scope, false);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
