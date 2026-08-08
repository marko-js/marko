// template.marko
const $template = "<input>";
const $walks = " b";
const $checked = /*@__PURE__*/ _let("checked/4", ($scope) => _attr_input_checked($scope, "#input/0", $scope.checked, $checkedChange($scope)));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _attr_input_checked_script($scope, "#input/0"));
function $setup($scope) {
	$checked($scope, false);
	$setup__script($scope);
}
const $input_attrs__script = _script("__tests__/template.marko_0_input_attrs#3", ($scope) => _attrs_script($scope, "#input/0"));
const $input_attrs = /*@__PURE__*/ _const("input_attrs", ($scope) => {
	_attrs_partial($scope, "#input/0", $scope.input_attrs, {
		checked: 1,
		checkedChange: 1
	});
	$input_attrs__script($scope);
});
const $input = ($scope, input) => $input_attrs($scope, input.attrs);
const $checkedChange = ($scope) => function(v) {
	$checked($scope, v);
};
_resume("__tests__/template.marko_0/checkedChange", $checkedChange);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, " b", $setup, $input);
