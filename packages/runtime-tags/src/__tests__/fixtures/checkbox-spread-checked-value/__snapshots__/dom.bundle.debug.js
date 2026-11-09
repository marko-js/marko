// template.marko
const $template = "<input type=checkbox><button>t</button><div> </div>";
const $walks = " b bD l";
const $attrs__script = _script("__tests__/template.marko_0_attrs#4", ($scope) => _attrs_script($scope, "#input/0"));
const $attrs = /*@__PURE__*/ _const("attrs", ($scope) => {
	_attrs_partial($scope, "#input/0", $scope.attrs, { type: 1 }, _controllable_input);
	$attrs__script($scope);
});
const $sel = /*@__PURE__*/ _let("sel/3", ($scope) => {
	_text($scope["#text/2"], $scope.sel.join(","));
	$attrs($scope, {
		checkedValue: $scope.sel,
		value: "a"
	});
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$sel($scope, $scope.sel.slice());
}));
function $setup($scope) {
	$sel($scope, ["a"]);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
