// template.marko
const $template = "<input type=checkbox><output> </output>";
const $walks = " bD l";
const $selected = /* @__PURE__ */ _let("selected/2", ($scope) => {
	_attr_input_checkedValue($scope, "#input/0", $scope.selected, $checkedValueChange($scope), "");
	_text($scope["#text/1"], $scope.selected === undefined ? "undefined" : $scope.selected === null ? "null" : "value=" + $scope.selected);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _attr_input_checkedValue_script($scope, "#input/0"));
function $setup($scope) {
	$selected($scope, null);
	$setup__script($scope);
}
function $checkedValueChange($scope) {
	return (_new_selected) => {
		$selected($scope, _new_selected);
	};
}
_resume("__tests__/template.marko_0/checkedValueChange", $checkedValueChange);
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
