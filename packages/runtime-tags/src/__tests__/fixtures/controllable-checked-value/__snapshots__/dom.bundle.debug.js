// template.marko
const $template = "<input type=radio><input type=radio><input type=radio><span> </span>";
const $walks = " b b bD l";
const $checkedValue__OR__$checkedValueChange = /* @__PURE__ */ _or(6, ($scope) => {
	_attr_input_checkedValue($scope, "#input/0", $scope.checkedValue, $scope.$checkedValueChange, "a");
	_attr_input_checkedValue($scope, "#input/1", $scope.checkedValue, $scope.$checkedValueChange, "b");
	_attr_input_checkedValue($scope, "#input/2", $scope.checkedValue, $scope.$checkedValueChange, "c");
});
const $checkedValue = /* @__PURE__ */ _let("checkedValue/4", ($scope) => {
	_text($scope["#text/3"], $scope.checkedValue);
	$checkedValue__OR__$checkedValueChange($scope);
});
const $checkedValueChange3 = /* @__PURE__ */ _const("$checkedValueChange", $checkedValue__OR__$checkedValueChange);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_attr_input_checkedValue_script($scope, "#input/0");
	_attr_input_checkedValue_script($scope, "#input/1");
	_attr_input_checkedValue_script($scope, "#input/2");
});
function $setup($scope) {
	$checkedValue($scope, "a");
	$checkedValueChange3($scope, $checkedValueChange2($scope));
	$setup__script($scope);
}
function $checkedValueChange2($scope) {
	return (_new_checkedValue) => {
		$checkedValue($scope, _new_checkedValue);
	};
}
_resume("__tests__/template.marko_0/checkedValueChange2", $checkedValueChange2);
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
