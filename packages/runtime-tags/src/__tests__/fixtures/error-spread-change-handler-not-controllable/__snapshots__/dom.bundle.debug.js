// template.marko
const $template = "<input>";
const $walks = " b";
const $setup = () => {};
const $input_attrs__script = _script("__tests__/template.marko_0_input_attrs#3", ($scope) => _attrs_script($scope, "#input/0"));
const $input_attrs = /*@__PURE__*/ _const("input_attrs", ($scope) => {
	_attrs($scope, "#input/0", $scope.input_attrs, _controllable_input);
	$input_attrs__script($scope);
});
const $input = ($scope, input) => $input_attrs($scope, input.attrs);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, " b", $setup, $input);
