// template.marko
const $template = "<input><textarea></textarea><input type=checkbox>";
const $walks = " b b b";
const $setup = () => {};
const $input_name = /*@__PURE__*/ _const("input_name", ($scope) => {
	_attr_input_value_default($scope, "#input/0", $scope.input_name);
	_attr_textarea_value_default($scope, "#textarea/1", $scope.input_name);
});
const $input_on = /*@__PURE__*/ _const("input_on", ($scope) => _attr_input_checked_default($scope, "#input/2", $scope.input_on));
const $input = ($scope, input) => {
	$input_name($scope, input.name);
	$input_on($scope, input.on);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, 0, $input);
