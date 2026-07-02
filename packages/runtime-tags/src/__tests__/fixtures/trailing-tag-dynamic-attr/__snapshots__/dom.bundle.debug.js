// template.marko
const $template = "<html><body><button>Toggle</button></body></html>";
const $walks = "D D m";
const $toggle = /* @__PURE__ */ _let("toggle/2", ($scope) => _attr($scope["#body/0"], "data-toggle", $scope.toggle));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$toggle($scope, !$scope.toggle);
}));
function $setup($scope) {
	$toggle($scope, false);
	$setup__script($scope);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
