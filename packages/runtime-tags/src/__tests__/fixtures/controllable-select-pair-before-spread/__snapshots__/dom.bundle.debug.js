// template.marko
const $template = "<select><option value=a>A</option><option value=b>B</option><option value=c>C</option></select>";
const $walks = " b";
const $setup = () => {};
const $input_value__OR__input_valueChange__OR__input_attrs__script = _script("__tests__/template.marko_0_input_value#3_input_valueChange#4_input_attrs#5", ($scope) => _attrs_script($scope, "#select/0"));
const $input_value__OR__input_valueChange__OR__input_attrs = /*@__PURE__*/ _or(6, ($scope) => {
	_attrs($scope, "#select/0", {
		value: $scope.input_value,
		valueChange: $scope.input_valueChange,
		...$scope.input_attrs
	}, _controllable_select);
	$input_value__OR__input_valueChange__OR__input_attrs__script($scope);
}, 2);
const $input_value = /*@__PURE__*/ _const("input_value", $input_value__OR__input_valueChange__OR__input_attrs);
const $input_valueChange = /*@__PURE__*/ _const("input_valueChange", $input_value__OR__input_valueChange__OR__input_attrs);
const $input_attrs = /*@__PURE__*/ _const("input_attrs", $input_value__OR__input_valueChange__OR__input_attrs);
const $input = ($scope, input) => {
	$input_value($scope, input.value);
	$input_valueChange($scope, input.valueChange);
	$input_attrs($scope, input.attrs);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, " b", 0, $input);
