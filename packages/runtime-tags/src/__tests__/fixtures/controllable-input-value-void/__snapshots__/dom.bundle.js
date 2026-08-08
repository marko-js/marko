// template.marko
const $v = /*@__PURE__*/ _let(1, ($scope) => _attr_input_value($scope, "a", $scope.b, $valueChange($scope), _attr_input_value_attribute_default));
const $setup__script = _script("a1", ($scope) => _attr_input_value_script($scope, "a"));
function $valueChange($scope) {
	return (_new_v) => {
		$v($scope, _new_v);
	};
}
_resume("a0", $valueChange);
