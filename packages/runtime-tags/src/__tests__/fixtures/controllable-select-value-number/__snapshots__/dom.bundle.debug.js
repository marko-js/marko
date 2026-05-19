// template.marko
const $template = "<select><option value=0></option><option value=1></option><option value=2></option></select><span> </span><button>Reset</button>";
const $walks = " bD l b";
const $selected = /* @__PURE__ */ _let("selected/3", ($scope) => {
	_attr_select_value($scope, "#select/0", $scope.selected, $valueChange($scope));
	_text($scope["#text/1"], $scope.selected);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_attr_select_value_script($scope, "#select/0");
	_on($scope["#button/2"], "click", function() {
		$selected($scope, 1);
	});
});
function $setup($scope) {
	$selected($scope, 1);
	$setup__script($scope);
}
function $valueChange($scope) {
	return function(v) {
		$selected($scope, +v);
	};
}
_resume("__tests__/template.marko_0/valueChange", $valueChange);
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
