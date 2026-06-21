// template.marko
const $template = "<input>";
const $walks = " b";
const $input_value__OR__input_onChange = /* @__PURE__ */ _or(5, ($scope) => _attr_input_value($scope, "#input/0", $scope.input_value, $scope.input_onChange));
const $input_value = /* @__PURE__ */ _const("input_value", $input_value__OR__input_onChange);
const $input_onChange = /* @__PURE__ */ _const("input_onChange", $input_value__OR__input_onChange);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _attr_input_value_script($scope, "#input/0"));
const $setup = $setup__script;
const $input = ($scope, input) => {
	$input_value($scope, input.value);
	$input_onChange($scope, input.onChange);
};
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, " b", $setup, $input);
