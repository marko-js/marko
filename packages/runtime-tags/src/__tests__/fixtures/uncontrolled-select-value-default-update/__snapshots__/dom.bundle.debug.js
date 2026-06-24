// template.marko
const $template = "<select><option></option><option value=a></option></select><select><option></option><option value=b></option></select><select><option></option><option value=b></option></select><select><option></option><option value=b></option></select><button>Update</button>";
const $walks = " b b b b b";
const $value = /*@__PURE__*/ _let("value/5", ($scope) => {
	_attr_select_value_default($scope, "#select/2", $scope.value);
	_attr_select_value($scope, "#select/3", $scope.value, undefined);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_attr_select_value_script($scope, "#select/3");
	_on($scope["#button/4"], "click", function() {
		$value($scope, "b");
	});
});
function $setup($scope) {
	_attr_select_value_default($scope, "#select/0", "a");
	_attr_select_value_default($scope, "#select/1", "a");
	$value($scope, "a");
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
