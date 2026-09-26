// template.marko
const $template = "<select><option value=one>one</option></select><textarea></textarea>";
const $walks = " b b";
const $setup = () => {};
const $input_rest__script = _script("__tests__/template.marko_0_input_rest#4", ($scope) => {
	_attrs_script($scope, "#select/0");
	_attrs_script($scope, "#textarea/1");
});
const $input_rest = /*@__PURE__*/ _const("input_rest", ($scope) => {
	_attrs($scope, "#select/0", $scope.input_rest, _controllable_select);
	_attrs($scope, "#textarea/1", $scope.input_rest, _controllable_textarea);
	$input_rest__script($scope);
});
const $input = ($scope, input) => $input_rest($scope, input.rest);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, 0, $input);
