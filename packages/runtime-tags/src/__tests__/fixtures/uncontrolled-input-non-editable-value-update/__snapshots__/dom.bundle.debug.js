// template.marko
const $template = "<form><input type=button name=button><input type=checkbox name=checkbox checked><input type=hidden name=hidden><input type=image name=image><input type=radio name=radio checked><input type=reset name=reset><input type=submit name=submit></form><button>Update</button>";
const $walks = "D b b b b b b l b";
const $value = /*@__PURE__*/ _let("value/8", ($scope) => {
	_attr_input_value_default($scope, "#input/0", $scope.value);
	_attr($scope["#input/1"], "value", $scope.value);
	_attr_input_value_default($scope, "#input/2", $scope.value);
	_attr_input_value_default($scope, "#input/3", $scope.value);
	_attr($scope["#input/4"], "value", $scope.value);
	_attr_input_value_default($scope, "#input/5", $scope.value);
	_attr_input_value_default($scope, "#input/6", $scope.value);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/7"], "click", function() {
	$value($scope, "b");
}));
function $setup($scope) {
	$value($scope, "a");
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
