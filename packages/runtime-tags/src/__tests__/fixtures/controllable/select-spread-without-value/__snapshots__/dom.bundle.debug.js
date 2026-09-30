// template.marko
const $template = "<select><option value=one>one</option><option value>empty</option></select>";
const $walks = " b";
const $setup = () => {};
const $input_rest__script = _script("__tests__/template.marko_0_input_rest#3", ($scope) => _attrs_script($scope, "#select/0"));
const $input_rest = /*@__PURE__*/ _const("input_rest", ($scope) => {
	_attrs($scope, "#select/0", $scope.input_rest, _controllable_select);
	$input_rest__script($scope);
});
const $input = ($scope, input) => $input_rest($scope, input.rest);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, " b", 0, $input);
