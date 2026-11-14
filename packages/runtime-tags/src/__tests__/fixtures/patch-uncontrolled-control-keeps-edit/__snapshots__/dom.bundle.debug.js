// template.marko
const $template = "<input><input type=checkbox><textarea></textarea><select><option value=a>A</option><option value=b>B</option><option value=c>C</option></select><details><summary>more</summary>body</details>";
const $walks = " b b b b b";
const $setup = ($_) => {};
const $input_text = /*@__PURE__*/ _const("input_text", ($scope) => {
	_attr_input_value_default($scope, "#input/0", $scope.input_text);
	_attr_textarea_value_default($scope, "#textarea/2", $scope.input_text);
});
const $input_on = /*@__PURE__*/ _const("input_on", ($scope) => _attr_input_checked_default($scope, "#input/1", $scope.input_on));
const $input_pick = /*@__PURE__*/ _const("input_pick", ($scope) => _attr_select_value_default($scope, "#select/3", $scope.input_pick));
const $input_open = /*@__PURE__*/ _const("input_open", ($scope) => _attr_details_open_default($scope, "#details/4", $scope.input_open));
const $input = ($scope, input) => {
	$input_text($scope, input.text);
	$input_on($scope, input.on);
	$input_pick($scope, input.pick);
	$input_open($scope, input.open);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, 0, $input);
