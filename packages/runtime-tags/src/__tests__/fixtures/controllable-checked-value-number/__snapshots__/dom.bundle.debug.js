// template.marko
const $template = "<input type=radio><input type=radio><input type=radio><span> </span>";
const $walks = " b b bD l";
const $checked = /* @__PURE__ */ _let("checked/4", ($scope) => {
	_attr_input_checkedValue($scope, "#input/0", $scope.checked + "", $checkedValueChange($scope), 0);
	_attr_input_checkedValue($scope, "#input/1", $scope.checked, $checkedValueChange2($scope), "1");
	_attr_input_checkedValue($scope, "#input/2", $scope.checked, $checkedValueChange3($scope), 2);
	_text($scope["#text/3"], $scope.checked);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_attr_input_checkedValue_script($scope, "#input/0");
	_attr_input_checkedValue_script($scope, "#input/1");
	_attr_input_checkedValue_script($scope, "#input/2");
});
function $setup($scope) {
	$checked($scope, 0);
	$setup__script($scope);
}
function $checkedValueChange3($scope) {
	return function(v) {
		$checked($scope, +v);
	};
}
function $checkedValueChange2($scope) {
	return function(v) {
		$checked($scope, +v);
	};
}
function $checkedValueChange($scope) {
	return function(v) {
		$checked($scope, +v);
	};
}
_resume("__tests__/template.marko_0/checkedValueChange3", $checkedValueChange3);
_resume("__tests__/template.marko_0/checkedValueChange2", $checkedValueChange2);
_resume("__tests__/template.marko_0/checkedValueChange", $checkedValueChange);
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
