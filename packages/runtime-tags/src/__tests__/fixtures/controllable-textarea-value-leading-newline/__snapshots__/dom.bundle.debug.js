// template.marko
const $template = "<textarea></textarea><span> </span>";
const $walks = " bD l";
const $value = /* @__PURE__ */ _let("value/2", ($scope) => {
	_attr_input_value($scope, "#textarea/0", $scope.value, $valueChange($scope));
	_text($scope["#text/1"], JSON.stringify($scope.value));
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _attr_input_value_script($scope, "#textarea/0"));
function $setup($scope) {
	$value($scope, "\nhello");
	$setup__script($scope);
}
function $valueChange($scope) {
	return (_new_value) => {
		$value($scope, _new_value);
	};
}
_resume("__tests__/template.marko_0/valueChange", $valueChange);
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
