// template.marko
const $template = "<input>";
const $walks = " b";
const $setup = () => {};
const $attrs__script = _script("__tests__/template.marko_0_attrs", ($scope) => _attrs_script($scope, "#input/0"));
const $attrs = /*@__PURE__*/ _const("attrs", ($scope) => {
	_attrs($scope, "#input/0", $scope.attrs);
	$attrs__script($scope);
});
const $input = ($scope, input) => $attrs($scope, input.attrs);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, " b", $setup, $input);
