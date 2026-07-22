// template.marko
const $template = "<input>";
const $walks = " b";
const $setup__render = /*@__PURE__*/ _render(($scope) => _attrs($scope, "#input/0", {
	type: "checkbox",
	checkedValue: 1,
	...{ checkedChange: $checkedChange }
}));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _attrs_script($scope, "#input/0"));
function $setup($scope) {
	$setup__render($scope);
	$setup__script($scope);
}
function $checkedChange() {}
_resume("__tests__/template.marko_0/checkedChange", $checkedChange);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, " b", $setup);
