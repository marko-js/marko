// template.marko
const $template = "<input><input><button></button>";
const $walks = " b b b";
const $value__OR__type__script = _script("__tests__/template.marko_0_value#3_type#4", ($scope) => _attrs_script($scope, "#input/1"));
const $value__OR__type = /*@__PURE__*/ _or(5, ($scope) => {
	_attr_input_value($scope, "#input/0", _attr_input_type($scope["#input/0"], $scope.type, $scope.value), $valueChange($scope), _attr_input_value_dynamic_default);
	_attrs($scope, "#input/1", {
		type: $scope.type,
		value: $scope.value,
		valueChange: $valueChange2($scope)
	}, _controllable_input);
	$value__OR__type__script($scope);
});
const $value = /*@__PURE__*/ _let("value/3", $value__OR__type);
const $type = /*@__PURE__*/ _let("type/4", $value__OR__type);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_attr_input_value_script($scope, "#input/0");
	_on($scope["#button/2"], "click", function() {
		$type($scope, undefined);
		$value($scope, "abc");
	});
});
function $setup($scope) {
	$value($scope, "5");
	$type($scope, "number");
	$setup__script($scope);
}
const $valueChange2 = ($scope) => function(next) {
	$value($scope, next);
};
const $valueChange = ($scope) => (_new_value) => {
	$value($scope, _new_value);
};
_resumed["__tests__/template.marko_0/valueChange2"] = $valueChange2;
_resumed["__tests__/template.marko_0/valueChange"] = $valueChange;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
