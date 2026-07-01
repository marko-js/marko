// template.marko
const $template = "<button>toggle</button><div id=a><span>first</span><span>second</span></div><div id=b>fallback <b>content</b></div>";
const $walks = " b b b";
const $show = /* @__PURE__ */ _show("#div/1");
const $show2 = /* @__PURE__ */ _show("#div/2");
const $open__script = _script("__tests__/template.marko_0_open", ($scope) => _on($scope["#button/0"], "click", function() {
	$open($scope, !$scope.open);
}));
const $open = /* @__PURE__ */ _let("open/3", ($scope) => {
	$show($scope, $scope.open);
	$show2($scope, !$scope.open);
	$open__script($scope);
});
function $setup($scope) {
	$open($scope, true);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
