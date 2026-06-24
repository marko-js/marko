// template.marko
const $template = "<input type=checkbox><span> </span>";
const $walks = " bD l";
const $checked = /*@__PURE__*/ _let("checked/2", ($scope) => {
	_attr_input_checked($scope, "#input/0", $scope.checked, $checkedChange($scope));
	_text($scope["#text/1"], String($scope.checked));
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _attr_input_checked_script($scope, "#input/0"));
function $setup($scope) {
	$checked($scope, false);
	$setup__script($scope);
}
function $checkedChange($scope) {
	return (_new_checked) => {
		$checked($scope, _new_checked);
	};
}
_resume("__tests__/template.marko_0/checkedChange", $checkedChange);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
