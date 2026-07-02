// template.marko
const $template = "<!><p>paragraph</p><button></button>";
const $walks = "b b b";
const $className = /* @__PURE__ */ _let("className/2", ($scope) => _attr_class($scope["#p/0"], $scope.className));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$className($scope, $scope.className === "A" ? "B" : "A");
}));
function $setup($scope) {
	$className($scope, "A");
	$setup__script($scope);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
