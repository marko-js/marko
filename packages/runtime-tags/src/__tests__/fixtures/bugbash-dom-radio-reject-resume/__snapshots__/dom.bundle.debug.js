// template.marko
const $template = "<form><input type=radio name=g><input type=radio name=g></form><span>sel:<!></span>";
const $walks = "D b lDb%l";
const $sel = /*@__PURE__*/ _let("sel/3", ($scope) => {
	_attr_input_checkedValue($scope, "#input/0", $scope.sel, $checkedValueChange, "a");
	_attr_input_checkedValue($scope, "#input/1", $scope.sel, $checkedValueChange2, "b");
	_text($scope["#text/2"], $scope.sel);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_attr_input_checkedValue_script($scope, "#input/0");
	_attr_input_checkedValue_script($scope, "#input/1");
});
function $setup($scope) {
	$sel($scope, "a");
	$setup__script($scope);
}
function $checkedValueChange2(v) {
	;
}
function $checkedValueChange(v) {
	;
}
_resume("__tests__/template.marko_0/checkedValueChange2", $checkedValueChange2);
_resume("__tests__/template.marko_0/checkedValueChange", $checkedValueChange);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
