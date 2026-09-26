// template.marko
const $template = "<input><input><input>";
const $walks = " b b b";
const $input_checkboxType__OR__v = /*@__PURE__*/ _or(9, ($scope) => _attr_input_value($scope, "#input/0", _attr_input_type($scope["#input/0"], $scope.input_checkboxType, $scope.v), $valueChange($scope), _attr_input_value_dynamic_default));
const $v = /*@__PURE__*/ _let("v/8", $input_checkboxType__OR__v);
const $input_hiddenType__OR__h = /*@__PURE__*/ _or(11, ($scope) => _attr_input_value($scope, "#input/1", _attr_input_type($scope["#input/1"], $scope.input_hiddenType, $scope.h), $valueChange2($scope), _attr_input_value_dynamic_default));
const $h = /*@__PURE__*/ _let("h/10", $input_hiddenType__OR__h);
const $s = /*@__PURE__*/ _let("s/12", ($scope) => _attr_input_value($scope, "#input/2", $scope.s, $valueChange3($scope)));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_attr_input_value_script($scope, "#input/0");
	_attr_input_value_script($scope, "#input/1");
	_attr_input_value_script($scope, "#input/2");
});
function $setup($scope) {
	$v($scope, "a");
	$h($scope, "b");
	$s($scope, "c");
	$setup__script($scope);
}
const $input_checkboxType = /*@__PURE__*/ _const("input_checkboxType", $input_checkboxType__OR__v);
const $input_hiddenType = /*@__PURE__*/ _const("input_hiddenType", $input_hiddenType__OR__h);
const $input_attrs__script = _script("__tests__/template.marko_0_input_attrs#7", ($scope) => _attrs_script($scope, "#input/2"));
const $input_attrs = /*@__PURE__*/ _const("input_attrs", ($scope) => {
	_attrs_partial($scope, "#input/2", $scope.input_attrs, {
		value: 1,
		valueChange: 1
	});
	$input_attrs__script($scope);
});
const $input = ($scope, input) => {
	$input_checkboxType($scope, input.checkboxType);
	$input_hiddenType($scope, input.hiddenType);
	$input_attrs($scope, input.attrs);
};
const $valueChange = ($scope) => (_new_v) => {
	$v($scope, _new_v);
};
const $valueChange2 = ($scope) => (_new_h) => {
	$h($scope, _new_h);
};
const $valueChange3 = ($scope) => (_new_s) => {
	$s($scope, _new_s);
};
_resumed["__tests__/template.marko_0/valueChange"] = $valueChange;
_resumed["__tests__/template.marko_0/valueChange2"] = $valueChange2;
_resumed["__tests__/template.marko_0/valueChange3"] = $valueChange3;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
