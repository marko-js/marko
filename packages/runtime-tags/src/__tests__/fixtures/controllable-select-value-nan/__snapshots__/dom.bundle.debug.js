// template.marko
const $template = "<select><option value>empty</option><option value=NaN>nan</option><option value=0>zero</option></select>";
const $walks = " b";
const $value = /*@__PURE__*/ _let("value/1", ($scope) => _attr_select_value($scope, "#select/0", $scope.value, $valueChange($scope)));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _attr_select_value_script($scope, "#select/0"));
function $setup($scope) {
	$value($scope, NaN);
	$setup__script($scope);
}
function $valueChange($scope) {
	return function(v) {
		$value($scope, v);
	};
}
_resume("__tests__/template.marko_0/valueChange", $valueChange);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, " b", $setup);
