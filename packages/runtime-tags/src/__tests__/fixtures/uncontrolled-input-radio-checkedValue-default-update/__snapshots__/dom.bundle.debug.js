// template.marko
const $template = "<input type=radio><input type=radio><input type=radio><input type=radio><button>Update</button>";
const $walks = " b b b b b";
const $value = /* @__PURE__ */ _let("value/5", ($scope) => {
	_attr_input_checkedValue_default($scope, "#input/2", $scope.value, "b");
	_attr_input_checkedValue($scope, "#input/3", $scope.value, undefined, "b");
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_attr_input_checkedValue_script($scope, "#input/3");
	_on($scope["#button/4"], "click", function() {
		$value($scope, "b");
	});
});
function $setup($scope) {
	_attr_input_checkedValue_default($scope, "#input/0", "a", "a");
	_attr_input_checkedValue_default($scope, "#input/1", "a", "b");
	$value($scope, "a");
	$setup__script($scope);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
