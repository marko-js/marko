// template.marko
const $template = "<input><p> </p>";
const $walks = " bD l";
const $value = /*@__PURE__*/ _let("value/5", ($scope) => {
	_attr_input_value($scope, "#input/0", $scope.value, $valueChange($scope));
	_text($scope["#text/1"], $scope.value);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _attr_input_value_script($scope, "#input/0"));
function $setup($scope) {
	$value($scope, "a");
	$setup__script($scope);
}
const $input_attrs__script = _script("__tests__/template.marko_0_input_attrs#4", ($scope) => _attrs_script($scope, "#input/0"));
const $input_attrs = /*@__PURE__*/ _const("input_attrs", ($scope) => {
	_attrs_partial($scope, "#input/0", $scope.input_attrs, {
		value: 1,
		valueChange: 1
	});
	$input_attrs__script($scope);
});
const $input = ($scope, input) => $input_attrs($scope, input.attrs);
const $valueChange = ($scope) => function(v) {
	$value($scope, v);
};
_resume("__tests__/template.marko_0/valueChange", $valueChange);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
