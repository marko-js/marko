// template.marko
const $template = "<form><input type=button name=button><input type=checkbox name=checkbox><input type=hidden name=hidden><input type=image name=image><input type=radio name=radio><input type=reset name=reset><input type=submit name=submit><input name=dynamic></form><button>Update</button><button>Remove</button>";
const $walks = "D b b b b b b b l b b";
const $dynamicType = /*@__PURE__*/ _let("dynamicType/10", ($scope) => _attr($scope["#input/7"], "type", $scope.dynamicType));
const $value = /*@__PURE__*/ _let("value/11", ($scope) => {
	_attr($scope["#input/0"], "value", $scope.value);
	_attr($scope["#input/1"], "value", $scope.value);
	_attr($scope["#input/2"], "value", $scope.value);
	_attr($scope["#input/3"], "value", $scope.value);
	_attr($scope["#input/4"], "value", $scope.value);
	_attr($scope["#input/5"], "value", $scope.value);
	_attr($scope["#input/6"], "value", $scope.value);
	_attr_input_value_dynamic_default($scope, "#input/7", $scope.value);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_on($scope["#button/8"], "click", function() {
		$value($scope, "b");
	});
	_on($scope["#button/9"], "click", function() {
		$value($scope, false);
	});
});
function $setup($scope) {
	$dynamicType($scope, "hidden");
	$value($scope, "a");
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
