// template.marko
const $template = "<textarea></textarea><textarea></textarea><textarea></textarea><textarea></textarea><textarea></textarea><textarea></textarea><button>Update</button>";
const $walks = " b b b b b b b";
const $value = /* @__PURE__ */ _let("value/7", ($scope) => {
	_attr_input_value_default($scope, "#textarea/2", $scope.value);
	_attr_input_value_default($scope, "#textarea/3", $scope.value);
	_attr_input_value($scope, "#textarea/4", $scope.value, undefined);
	_attr_input_value($scope, "#textarea/5", $scope.value, undefined);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_attr_input_value_script($scope, "#textarea/4");
	_attr_input_value_script($scope, "#textarea/5");
	_on($scope["#button/6"], "click", function() {
		$value($scope, "b");
	});
});
function $setup($scope) {
	_attr_input_value_default($scope, "#textarea/0", "a");
	_attr_input_value_default($scope, "#textarea/1", "a");
	$value($scope, "a");
	$setup__script($scope);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
