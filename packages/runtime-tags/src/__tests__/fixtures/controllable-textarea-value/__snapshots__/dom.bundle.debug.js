// template.marko
const $template = "<textarea></textarea><span> </span>";
const $walks = " bD l";
const $value__render = /*@__PURE__*/ _render(($scope) => _text($scope["#text/1"], $scope.value));
const $value = /*@__PURE__*/ _let("value/2", ($scope) => {
	$value__render($scope);
	_attr_input_value($scope, "#textarea/0", $scope.value, $valueChange($scope));
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _attr_input_value_script($scope, "#textarea/0"));
function $setup($scope) {
	$value($scope, "hello");
	$setup__script($scope);
}
function $valueChange($scope) {
	return (_new_value) => {
		$value($scope, _new_value);
	};
}
_resume("__tests__/template.marko_0/valueChange", $valueChange);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
