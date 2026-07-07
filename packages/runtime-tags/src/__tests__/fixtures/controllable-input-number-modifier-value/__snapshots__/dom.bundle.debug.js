// template.marko
const $template = "<input type=number><span><!> <!></span>";
const $walks = " bD%c%l";
const $value = /*@__PURE__*/ _let("value/3", ($scope) => {
	_attr_input_value($scope, "#input/0", $scope.value, $valueChange($scope));
	_text($scope["#text/1"], $scope.value);
	_text($scope["#text/2"], typeof $scope.value);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _attr_input_value_script($scope, "#input/0"));
function $setup($scope) {
	$value($scope, 0);
	$setup__script($scope);
}
function $valueChange($scope) {
	return (_new_value) => {
		$value($scope, parseInt(_new_value));
	};
}
_resume("__tests__/template.marko_0/valueChange", $valueChange);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
