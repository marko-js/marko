// template.marko
const $template = "<svg><linearGradient><stop offset=0% stop-color=gold></stop></linearGradient><clipPath></clipPath></svg><button>toggle</button>";
const $walks = "D b l b";
const $gradId = /*@__PURE__*/ _let("gradId/3", ($scope) => _attr($scope["#lineargradient/0"], "id", $scope.gradId));
const $if = /*@__PURE__*/ _if("#clippath/1", "<rect width=10 height=10></rect>", "b");
const $show = /*@__PURE__*/ _let("show/4", ($scope) => $if($scope, $scope.show ? 0 : 1));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/2"], "click", function() {
	$gradId($scope, "grad2");
	$show($scope, !$scope.show);
}));
function $setup($scope) {
	$gradId($scope, "grad");
	$show($scope, true);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
