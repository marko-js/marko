// template.marko
const $template = "<textarea></textarea><button>update</button>";
const $walks = " b b";
const $value = /* @__PURE__ */ _let("value/2", ($scope) => _attr_input_value_default($scope, "#textarea/0", $scope.value));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$value($scope, "after");
}));
function $setup($scope) {
	$value($scope, "before");
	$setup__script($scope);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
