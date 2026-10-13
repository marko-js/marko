// template.marko
const $TextField_content__walks = " b";
const $TextField_content__template = "<input>";
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($TextField_content__template);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($TextField_content__walks);
const $TextField_content__value__OR__valueChange = /*@__PURE__*/ _fill_join("__tests__/template.marko_fill1", "valueChange", /*@__PURE__*/ _fill_join("__tests__/template.marko_fill0", "value", /*@__PURE__*/ _shell_or("__tests__/template.marko_1_value#3_valueChange#4/init", 5, ($scope) => _attr_input_value($scope, "#input/0", $scope.value, $scope.valueChange))));
const $TextField_content__value = /*@__PURE__*/ _const("value", $TextField_content__value__OR__valueChange);
const $TextField_content__valueChange = /*@__PURE__*/ _const("valueChange", $TextField_content__value__OR__valueChange);
const $TextField_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _attr_input_value_script($scope, "#input/0"));
const $TextField_content__setup = /*@__PURE__*/ _child_setup($TextField_content__setup__script);
const $TextField_content__attrs__script = _script("__tests__/template.marko_1_attrs#6", ($scope) => _attrs_script($scope, "#input/0"));
const $TextField_content__attrs = /*@__PURE__*/ _const("attrs", ($scope) => {
	_attrs_partial($scope, "#input/0", $scope.attrs, {
		value: 1,
		valueChange: 1
	});
	$TextField_content__attrs__script($scope);
});
const $TextField_content__$params = ($scope, $params2) => $TextField_content__input($scope, $params2[0]);
const $TextField_content__input = ($scope, input) => {
	$TextField_content__attrs($scope, (({ value, valueChange, ...attrs }) => attrs)(input));
	$TextField_content__value($scope, input.value);
	$TextField_content__valueChange($scope, input.valueChange);
};
function $setup($scope) {
	$TextField_content__setup._($scope["#childScope/0"], $scope);
	$TextField_content__valueChange($scope["#childScope/0"], $valueChange);
}
const $input_v = ($scope, input_v) => $TextField_content__value($scope["#childScope/0"], input_v);
const $input_hint = ($scope, input_hint) => $TextField_content__attrs($scope["#childScope/0"], { placeholder: input_hint });
const $input = ($scope, input) => {
	$input_hint($scope, input.hint);
	$input_v($scope, input.v);
};
function $valueChange(next) {
	document.title = next;
}
_resumed["__tests__/template.marko_0/valueChange"] = $valueChange;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
