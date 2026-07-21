// tags/my-textarea.marko
const $template$1 = "<textarea></textarea>";
const $walks$1 = " b";
const $setup$1 = () => {};
const $input__render = /*@__PURE__*/ _render(($scope) => _attrs($scope, "#textarea/0", $scope.input));
const $input__script = _script("__tests__/tags/my-textarea.marko_0_input", ($scope) => _attrs_script($scope, "#textarea/0"));
const $input = /*@__PURE__*/ _const("input", ($scope) => {
	$input__render($scope);
	$input__script($scope);
});
var my_textarea_default = /*@__PURE__*/ _template("__tests__/tags/my-textarea.marko", $template$1, " b", $setup$1, $input);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<span> </span>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&D l`)(" b");
const $value__render = /*@__PURE__*/ _render(($scope) => _text($scope["#text/1"], $scope.value));
const $value = /*@__PURE__*/ _let("value/2", ($scope) => {
	$value__render($scope);
	$input($scope["#childScope/0"], {
		value: $scope.value,
		valueChange: $valueChange($scope)
	});
});
function $setup($scope) {
	$value($scope, "hello");
}
function $valueChange($scope) {
	return (_new_value) => {
		$value($scope, _new_value);
	};
}
_resume("__tests__/template.marko_0/valueChange", $valueChange);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
