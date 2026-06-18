// tags/my-input.marko
const $template$1 = "<input><span> </span>";
const $walks$1 = " bD l";
const $setup$1 = () => {};
const $input__script = _script("__tests__/tags/my-input.marko_0_input", ($scope) => _attrs_script($scope, "#input/0"));
const $input = /* @__PURE__ */ _const("input", ($scope) => {
	_attrs($scope, "#input/0", $scope.input);
	$input_value($scope, $scope.input.value);
	$input__script($scope);
});
const $input_value = ($scope, input_value) => _text($scope["#text/1"], input_value);
var my_input_default = /* @__PURE__ */ _template("__tests__/tags/my-input.marko", $template$1, $walks$1, $setup$1, $input);

// template.marko
const $template = $template$1;
const $walks = /* @__PURE__ */ ((_w0) => `/${_w0}&`)($walks$1);
const $value = /* @__PURE__ */ _let("value/1", ($scope) => $input($scope["#childScope/0"], {
	value: $scope.value,
	valueChange: $valueChange($scope)
}));
function $setup($scope) {
	/* @__PURE__ */ $setup$1($scope["#childScope/0"]);
	$value($scope, "hi");
}
function $valueChange($scope) {
	return (_new_value) => {
		$value($scope, _new_value);
	};
}
_resume("__tests__/template.marko_0/valueChange", $valueChange);
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
