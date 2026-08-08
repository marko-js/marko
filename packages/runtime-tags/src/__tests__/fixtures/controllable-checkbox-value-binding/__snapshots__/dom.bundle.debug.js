// template.marko
const $template = "<input><input>";
const $walks = " b b";
const $v = /*@__PURE__*/ _let("v/6", ($scope) => _attr_input_value($scope, "#input/0", $scope.v, $valueChange($scope), _attr_input_value_dynamic_default));
const $h = /*@__PURE__*/ _let("h/7", ($scope) => _attr_input_value($scope, "#input/1", $scope.h, $valueChange2($scope), _attr_input_value_dynamic_default));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_attr_input_value_script($scope, "#input/0");
	_attr_input_value_script($scope, "#input/1");
});
function $setup($scope) {
	$v($scope, "a");
	$h($scope, "b");
	$setup__script($scope);
}
const $input_checkboxType = ($scope, input_checkboxType) => _attr($scope["#input/0"], "type", input_checkboxType);
const $input_hiddenType = ($scope, input_hiddenType) => _attr($scope["#input/1"], "type", input_hiddenType);
const $input = ($scope, input) => {
	$input_checkboxType($scope, input.checkboxType);
	$input_hiddenType($scope, input.hiddenType);
};
function $valueChange($scope) {
	return (_new_v) => {
		$v($scope, _new_v);
	};
}
function $valueChange2($scope) {
	return (_new_h) => {
		$h($scope, _new_h);
	};
}
_resume("__tests__/template.marko_0/valueChange", $valueChange);
_resume("__tests__/template.marko_0/valueChange2", $valueChange2);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
