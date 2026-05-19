// tags/custom-input.marko
const $template$1 = "<input type=number>";
const $walks$1 = " b";
const $input_value__OR__input_valueChange = /* @__PURE__ */ _or(5, ($scope) => _attr_input_value($scope, "#input/0", $scope.input_value, $scope.input_valueChange && $valueChange$1($scope)));
const $input_value = /* @__PURE__ */ _const("input_value", $input_value__OR__input_valueChange);
const $input_valueChange = /* @__PURE__ */ _const("input_valueChange", $input_value__OR__input_valueChange);
const $setup__script = _script("__tests__/tags/custom-input.marko_0", ($scope) => _attr_input_value_script($scope, "#input/0"));
const $setup$1 = $setup__script;
const $input = ($scope, input) => {
	$input_value($scope, input.value);
	$input_valueChange($scope, input.valueChange);
};
function $valueChange$1($scope) {
	return ($next) => {
		$scope.input_valueChange(parseInt($next));
	};
}
_resume("__tests__/tags/custom-input.marko_0/valueChange", $valueChange$1);
var custom_input_default = /* @__PURE__ */ _template("__tests__/tags/custom-input.marko", $template$1, " b", $setup$1, $input);

// template.marko
const $template = /* @__PURE__ */ ((_w0) => `${_w0}<span><!> <!></span>`)($template$1);
const $walks = /* @__PURE__ */ ((_w0) => `/${_w0}&D%c%l`)(" b");
const $value = /* @__PURE__ */ _let("value/3", ($scope) => {
	$input_value($scope["#childScope/0"], $scope.value);
	_text($scope["#text/1"], $scope.value);
	_text($scope["#text/2"], typeof $scope.value);
});
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
	$input_valueChange($scope["#childScope/0"], $valueChange($scope));
	$value($scope, 0);
}
function $valueChange($scope) {
	return (_new_value) => {
		$value($scope, _new_value);
	};
}
_resume("__tests__/template.marko_0/valueChange", $valueChange);
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
