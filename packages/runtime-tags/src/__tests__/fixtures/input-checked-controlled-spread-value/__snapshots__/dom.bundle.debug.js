// template.marko
const $template = "<input>";
const $walks = " b";
const $input_rest__OR__checked__script = _script("__tests__/template.marko_0_input_rest_checked", ($scope) => _attrs_script($scope, "#input/0"));
const $input_rest__OR__checked = /* @__PURE__ */ _or(5, ($scope) => {
	_attrs($scope, "#input/0", {
		type: "radio",
		checked: $scope.checked,
		checkedChange: $checkedChange($scope),
		value: "x",
		...$scope.input_rest
	});
	$input_rest__OR__checked__script($scope);
});
const $checked = /* @__PURE__ */ _let("checked/4", $input_rest__OR__checked);
function $setup($scope) {
	$checked($scope, false);
}
const $input_rest = /* @__PURE__ */ _const("input_rest", $input_rest__OR__checked);
const $input = ($scope, input) => $input_rest($scope, input.rest);
function $checkedChange($scope) {
	return (_new_checked) => {
		$checked($scope, _new_checked);
	};
}
_resume("__tests__/template.marko_0/checkedChange", $checkedChange);
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, " b", $setup, $input);
