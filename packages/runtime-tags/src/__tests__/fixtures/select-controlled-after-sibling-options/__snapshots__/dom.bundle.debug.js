// template.marko
const $template = "<select id=uncontrolled><option value=a>A</option><option value=b>B</option></select><select id=controlled><option value=a>A</option><option value=b>B</option></select><div> </div>";
const $walks = "b bD l";
const $value = /*@__PURE__*/ _let("value/2", ($scope) => {
	_attr_select_value($scope, "#select/0", $scope.value, $valueChange($scope));
	_text($scope, "#text/1", $scope.value);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _attr_select_value_script($scope, "#select/0"));
function $setup($scope) {
	$value($scope, "b");
	$setup__script($scope);
}
function $valueChange($scope) {
	return (_new_value) => {
		$value($scope, _new_value);
	};
}
_resume("__tests__/template.marko_0/valueChange", $valueChange);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
