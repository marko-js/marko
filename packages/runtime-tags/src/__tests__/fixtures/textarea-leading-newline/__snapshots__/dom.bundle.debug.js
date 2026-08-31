// template.marko
const $template = "<textarea id=attr></textarea><textarea id=bound></textarea><textarea id=body></textarea><p id=text> </p>";
const $walks = " b b bD l";
const $bound = /*@__PURE__*/ _let("bound/7", ($scope) => _attr_textarea_value($scope, "#textarea/1", $scope.bound, $valueChange($scope)));
const $input_v = /*@__PURE__*/ _const("input_v", ($scope) => {
	_attr_textarea_value_default($scope, "#textarea/0", $scope.input_v);
	_attr_textarea_value_default($scope, "#textarea/2", $scope.input_v);
	_text($scope["#text/3"], $scope.input_v);
	$bound($scope, $scope.input_v);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _attr_textarea_value_script($scope, "#textarea/1"));
const $setup = $setup__script;
const $input = ($scope, input) => $input_v($scope, input.v);
const $valueChange = ($scope) => (_new_bound) => {
	$bound($scope, _new_bound);
};
_resume("__tests__/template.marko_0/valueChange", $valueChange);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
