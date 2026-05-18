// template.marko
const $template = "<input type=checkbox><input type=checkbox><input type=checkbox><button>Update</button>";
const $walks = "b b b b";
const $checked = /* @__PURE__ */ _let("checked/3", ($scope) => {
	_attr_input_checked_default($scope, "#input/0", $scope.checked);
	_attr_input_checked($scope, "#input/1", $scope.checked, undefined);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_attr_input_checked_script($scope, "#input/1");
	_on($scope["#button/2"], "click", function() {
		$checked($scope, true);
	});
});
function $setup($scope) {
	$checked($scope, false);
	$setup__script($scope);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
