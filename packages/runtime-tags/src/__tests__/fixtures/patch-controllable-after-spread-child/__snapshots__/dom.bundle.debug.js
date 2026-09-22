// tags/text-field.marko
const $template$1 = "<input>";
const $walks$1 = " b";
const $input_value__OR__input_valueChange = /*@__PURE__*/ _or(5, ($scope) => _attr_input_value($scope, "#input/0", $scope.value, $scope.valueChange));
const $value = /*@__PURE__*/ _const("value", $input_value__OR__input_valueChange);
const $valueChange$1 = /*@__PURE__*/ _const("valueChange", $input_value__OR__input_valueChange);
const $setup__script = _script("__tests__/tags/text-field.marko_0", ($scope) => _attr_input_value_script($scope, "#input/0"));
const $setup$1 = $setup__script;
const $attrs__script = _script("__tests__/tags/text-field.marko_0_attrs#6", ($scope) => _attrs_script($scope, "#input/0"));
const $attrs = /*@__PURE__*/ _const("attrs", ($scope) => {
	_attrs_partial($scope, "#input/0", $scope.attrs, {
		value: 1,
		valueChange: 1
	});
	$attrs__script($scope);
});
const $input$1 = ($scope, input) => {
	(({ value, valueChange, ...attrs }) => $attrs($scope, attrs))(input);
	$value($scope, input.value);
	$valueChange$1($scope, input.valueChange);
};
var text_field_default = /*@__PURE__*/ _template("__tests__/tags/text-field.marko", $template$1, " b", $setup$1, $input$1);

// template.marko
const $template = $template$1;
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)(" b");
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
	$valueChange$1($scope["#childScope/0"], $valueChange);
}
const $input_v = ($scope, input_v) => $value($scope["#childScope/0"], input_v);
const $input_hint = ($scope, input_hint) => $attrs($scope["#childScope/0"], { placeholder: input_hint });
const $input = ($scope, input) => {
	$input_hint($scope, input.hint);
	$input_v($scope, input.v);
};
function $valueChange(next) {
	document.title = next;
}
_resumed["__tests__/template.marko_0/valueChange"] = $valueChange;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
