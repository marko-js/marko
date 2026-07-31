// template.marko
const $template = "<input type=checkbox><button>t</button><div> </div>";
const $walks = " b bD l";
const $sel__script = _script("__tests__/template.marko_0_sel#3", ($scope) => _attrs_script($scope, "#input/0"));
const $sel = /*@__PURE__*/ _let("sel/3", ($scope) => {
	_attrs_partial($scope, "#input/0", {
		checkedValue: $scope.sel,
		value: "a"
	}, { type: 1 }, _controllable_input);
	_text($scope, "#text/2", $scope.sel.join(","));
	$sel__script($scope);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$sel($scope, $scope.sel.slice());
}));
function $setup($scope) {
	$sel($scope, ["a"]);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
