// template.marko
const $template = "<input type=radio name=pick><input type=radio name=pick><span> </span>";
const $walks = " b bD l";
const $picked = /*@__PURE__*/ _let("picked/3", ($scope) => {
	_attr_input_checkedValue($scope, "#input/0", $scope.picked, $checkedValueChange, "a");
	_attr_input_checkedValue($scope, "#input/1", $scope.picked, $checkedValueChange2, "b");
	_text($scope["#text/2"], $scope.picked);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_attr_input_checkedValue_script($scope, "#input/0");
	_attr_input_checkedValue_script($scope, "#input/1");
});
function $setup($scope) {
	$picked($scope, "a");
	$setup__script($scope);
}
function $checkedValueChange2() {}
function $checkedValueChange() {}
_resume("__tests__/template.marko_0/checkedValueChange2", $checkedValueChange2);
_resume("__tests__/template.marko_0/checkedValueChange", $checkedValueChange);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
