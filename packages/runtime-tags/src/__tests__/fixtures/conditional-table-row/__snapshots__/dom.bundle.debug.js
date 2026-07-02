// template.marko
const $template = "<table><tbody></tbody></table><button>Toggle</button>";
const $walks = "D l b";
const $if = /* @__PURE__ */ _if("#tbody/0", "<tr><td>Hi</td></tr>", "b");
const $show = /* @__PURE__ */ _let("show/2", ($scope) => $if($scope, $scope.show ? 0 : 1));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$show($scope, !$scope.show);
}));
function $setup($scope) {
	$show($scope, false);
	$setup__script($scope);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
