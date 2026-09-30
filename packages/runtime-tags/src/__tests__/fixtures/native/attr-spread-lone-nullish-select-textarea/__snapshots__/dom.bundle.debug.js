// template.marko
const $template = "<select><option value=one>one</option><option value>empty</option></select><textarea></textarea>";
const $walks = " b b";
const $setup = () => {};
const $attrs__script = _script("__tests__/template.marko_0_attrs#4", ($scope) => {
	_attrs_script($scope, "#select/0");
	_attrs_script($scope, "#textarea/1");
});
const $attrs = /*@__PURE__*/ _const("attrs", ($scope) => {
	_attrs($scope, "#select/0", $scope.attrs, _controllable_select);
	_attrs($scope, "#textarea/1", $scope.attrs, _controllable_textarea);
	$attrs__script($scope);
});
const $input = ($scope, input) => $attrs($scope, input.attrs);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, 0, $input);
