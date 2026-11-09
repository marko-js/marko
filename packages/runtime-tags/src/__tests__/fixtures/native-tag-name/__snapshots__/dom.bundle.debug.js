// template.marko
const $template = "<span></span><div></div><div></div><foo-bar></foo-bar>";
const $walks = "d b";
const $setup = ($_) => {};
const $input__script = _script("__tests__/template.marko_0_input#2", ($scope) => _attrs_script($scope, "#foo-bar/0"));
const $input = /*@__PURE__*/ _const("input", ($scope) => {
	_attrs_content($scope, "#foo-bar/0", $scope.input);
	$input__script($scope);
});
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "d b", 0, $input);
