// template.marko
const $template = "<input>";
const $walks = " b";
const $attrs2__script = _script("__tests__/template.marko_0_attrs#1", ($scope) => _attrs_script($scope, "#input/0"));
const $attrs2 = /*@__PURE__*/ _const("attrs", ($scope) => {
	_attrs($scope, "#input/0", {
		type: "checkbox",
		...$scope.attrs
	}, _controllable_input);
	$attrs2__script($scope);
});
function $setup($scope) {
	$attrs2($scope, {
		checkedValue: 1,
		checkedChange: $attrs
	});
}
function $attrs() {}
_resumed["__tests__/template.marko_0/attrs"] = $attrs;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, " b", $setup);
