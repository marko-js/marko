// template.marko
const $template = "<div></div><button type=button>toggle</button>";
const $walks = " b b";
const $value = /* @__PURE__ */ _let("value/2", ($scope) => _attr($scope["#div/0"], "title", $scope.value));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$value($scope, $scope.value ? "" : "set");
}));
function $setup($scope) {
	$value($scope, "");
	$setup__script($scope);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
