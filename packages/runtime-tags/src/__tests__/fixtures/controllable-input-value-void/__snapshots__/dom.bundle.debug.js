// template.marko
const $template = "<input type=hidden>";
const $walks = " b";
const $v = /*@__PURE__*/ _let("v/1", ($scope) => _attr_input_value($scope, "#input/0", $scope.v, undefined, _attr_input_value_attribute_default));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _attr_input_value_script($scope, "#input/0"));
function $setup($scope) {
	$v($scope, undefined);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, " b", $setup);
