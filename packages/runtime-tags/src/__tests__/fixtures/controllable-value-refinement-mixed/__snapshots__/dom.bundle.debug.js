// template.marko
const $template = "<input id=refined><input id=refined2><input id=plain><input id=plain2><div><!> <!></div>";
const $walks = " b b b bD%c%l";
const $value__OR__$valueChange = /*@__PURE__*/ _or(10, ($scope) => {
	_attr_input_value($scope, "#input/0", $scope.value, $scope.$valueChange);
	_attr_input_value($scope, "#input/1", $scope.value, $scope.$valueChange);
});
const $value__OR__$valueChange2 = /*@__PURE__*/ _or(8, ($scope) => {
	_attr_input_value($scope, "#input/2", $scope.value, $scope.$valueChange2);
	_attr_input_value($scope, "#input/3", $scope.value, $scope.$valueChange2);
});
const $value = /*@__PURE__*/ _let("value/6", ($scope) => {
	_text($scope, "#text/4", typeof $scope.value);
	_text($scope, "#text/5", $scope.value);
	$value__OR__$valueChange($scope);
	$value__OR__$valueChange2($scope);
});
const $valueChange5 = /*@__PURE__*/ _const("$valueChange2", $value__OR__$valueChange2);
const $valueChange6 = /*@__PURE__*/ _const("$valueChange", $value__OR__$valueChange);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_attr_input_value_script($scope, "#input/0");
	_attr_input_value_script($scope, "#input/1");
	_attr_input_value_script($scope, "#input/2");
	_attr_input_value_script($scope, "#input/3");
});
function $setup($scope) {
	$value($scope, 0);
	$valueChange5($scope, $valueChange3($scope));
	$valueChange6($scope, $valueChange4($scope));
	$setup__script($scope);
}
const $valueChange3 = ($scope) => (_new_value) => {
	$value($scope, _new_value);
};
const $valueChange4 = ($scope) => (_new_value) => {
	$value($scope, parseInt(_new_value));
};
_resume("__tests__/template.marko_0/valueChange3", $valueChange3);
_resume("__tests__/template.marko_0/valueChange4", $valueChange4);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
