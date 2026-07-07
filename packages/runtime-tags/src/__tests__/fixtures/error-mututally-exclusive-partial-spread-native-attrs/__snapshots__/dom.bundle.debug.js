// template.marko
const $template = "<input>";
const $walks = " b";
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _attrs_script($scope, "#input/0"));
function $setup($scope) {
	_attrs($scope, "#input/0", {
		type: "checkbox",
		checkedValue: 1,
		...{ checkedChange: $checkedChange }
	});
	$setup__script($scope);
}
function $checkedChange() {}
_resume("__tests__/template.marko_0/checkedChange", $checkedChange);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, " b", $setup);
