// template.marko
const $template = "<input value=yes><button></button>";
const $walks = " b b";
const $checked__OR__attrs__script = _script("__tests__/template.marko_0_checked#2_attrs#4", ($scope) => _attrs_script($scope, "#input/0"));
const $checked__OR__attrs = /*@__PURE__*/ _or(5, ($scope) => {
	_attrs_partial($scope, "#input/0", {
		type: "checkbox",
		...$scope.attrs,
		checked: $scope.checked
	}, { value: 1 }, _controllable_input);
	$checked__OR__attrs__script($scope);
});
const $checked = /*@__PURE__*/ _let("checked/2", $checked__OR__attrs);
const $attrs = /*@__PURE__*/ _const("attrs", $checked__OR__attrs);
const $name = /*@__PURE__*/ _let("name/3", ($scope) => $attrs($scope, { name: $scope.name }));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$name($scope, "y");
	$checked($scope, true);
}));
function $setup($scope) {
	$checked($scope, false);
	$name($scope, "x");
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
