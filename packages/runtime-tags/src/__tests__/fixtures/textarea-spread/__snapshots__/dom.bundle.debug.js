// template.marko
const $template = "<textarea></textarea>";
const $walks = " b";
const $setup = () => {};
const $input__script = _script("__tests__/template.marko_0_input", ($scope) => _attrs_script($scope, "#textarea/0"));
const $input = /*@__PURE__*/ _const("input", ($scope) => {
	_attrs($scope, "#textarea/0", $scope.input);
	$input__script($scope);
});
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, " b", $setup, $input);
