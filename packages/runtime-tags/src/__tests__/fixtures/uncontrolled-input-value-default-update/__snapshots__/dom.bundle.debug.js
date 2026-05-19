// template.marko
const $template = "<input value=a><input><input><button>Update</button>";
const $walks = "b b b b";
const $value = /* @__PURE__ */ _let("value/3", ($scope) => {
	_attr_input_value_default($scope, "#input/0", $scope.value);
	_attr_input_value($scope, "#input/1", $scope.value, undefined);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_attr_input_value_script($scope, "#input/1");
	_on($scope["#button/2"], "click", function() {
		$value($scope, "b");
	});
});
function $setup($scope) {
	$value($scope, "a");
	$setup__script($scope);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
