// template.marko
const $template = "<main><div>x</div></main>";
const $walks = "D l";
const $input_attrs__script = _script("__tests__/template.marko_0_input_attrs#3", ($scope) => _attrs_script($scope, "#div/0"));
const $input_attrs = /*@__PURE__*/ _const("input_attrs", ($scope) => {
	_attrs($scope, "#div/0", $scope.input_attrs);
	$input_attrs__script($scope);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _el_read($scope["#div/0"]).setAttribute("data-mounted", ""));
const $setup = $setup__script;
const $input = ($scope, input) => $input_attrs($scope, input.attrs);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "D l", $setup, $input);
