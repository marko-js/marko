// template.marko
const $template = "<select><option>-- choose --</option><option value=a>A</option><option value=b>B</option></select><output> </output>";
const $walks = " D lD l";
const $value__render = /*@__PURE__*/ _render(($scope) => _text($scope["#text/2"], $scope.value === undefined ? "undefined" : "value=" + $scope.value));
const $value = /*@__PURE__*/ _let("value/3", ($scope) => {
	$value__render($scope);
	_attr_select_value($scope, "#select/0", $scope.value, $valueChange($scope));
});
const $placeholder__render = /*@__PURE__*/ _render(($scope) => _attrs($scope, "#option/1", $scope.placeholder));
const $placeholder__script = _script("__tests__/template.marko_0_placeholder", ($scope) => _attrs_script($scope, "#option/1"));
const $placeholder = /*@__PURE__*/ _const("placeholder", ($scope) => {
	$placeholder__render($scope);
	$placeholder__script($scope);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _attr_select_value_script($scope, "#select/0"));
function $setup($scope) {
	$value($scope, "");
	$placeholder($scope, { value: "" });
	$setup__script($scope);
}
function $valueChange($scope) {
	return function(v) {
		$value($scope, v);
	};
}
_resume("__tests__/template.marko_0/valueChange", $valueChange);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
