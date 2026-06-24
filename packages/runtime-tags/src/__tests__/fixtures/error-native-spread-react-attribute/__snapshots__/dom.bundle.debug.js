// template.marko
const $template = "<div>Hello</div>";
const $walks = " b";
const $setup = () => {};
const $input_attrs__script = _script("__tests__/template.marko_0_input_attrs", ($scope) => _attrs_script($scope, "#div/0"));
const $input_attrs = /*@__PURE__*/ _const("input_attrs", ($scope) => {
	_attrs($scope, "#div/0", $scope.input_attrs);
	$input_attrs__script($scope);
});
const $input = ($scope, input) => $input_attrs($scope, input.attrs);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, " b", $setup, $input);
