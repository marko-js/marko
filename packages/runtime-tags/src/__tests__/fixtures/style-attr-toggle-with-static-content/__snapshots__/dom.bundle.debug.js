// template.marko
const $template = "<button></button><div style=\"border:1px solid black\">foo bar</div>";
const $walks = " b b";
const $open = /* @__PURE__ */ _let("open/2", ($scope) => _attr_style_item($scope["#div/1"], "display", $scope.open ? undefined : "none"));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$open($scope, !$scope.open);
}));
function $setup($scope) {
	$open($scope, true);
	$setup__script($scope);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
