// template.marko
const $template = "<fieldset><input type=radio class=a><input type=radio class=b></fieldset><p> </p>";
const $walks = "D b lD l";
const $note = /*@__PURE__*/ _let("note/6", ($scope) => _text($scope["#text/2"], $scope.note));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_attr_input_checkedValue_script($scope, "#input/0");
	_attr_input_checkedValue_script($scope, "#input/1");
});
function $setup($scope) {
	$note($scope, "");
	$setup__script($scope);
}
const $input_picked = /*@__PURE__*/ _const("input_picked", ($scope) => {
	_attr_input_checkedValue($scope, "#input/0", $scope.input_picked, $checkedValueChange($scope), "a");
	_attr_input_checkedValue($scope, "#input/1", $scope.input_picked, $checkedValueChange2($scope), "b");
});
const $input = ($scope, input) => $input_picked($scope, input.picked);
const $checkedValueChange2 = ($scope) => function(next) {
	$note($scope, next);
};
const $checkedValueChange = ($scope) => function(next) {
	$note($scope, next);
};
_resume("__tests__/template.marko_0/checkedValueChange2", $checkedValueChange2);
_resume("__tests__/template.marko_0/checkedValueChange", $checkedValueChange);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
