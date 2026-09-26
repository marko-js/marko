// template.marko
const $value__OR__type__script = _script("a2", ($scope) => _attrs_script($scope, "b"));
const $value__OR__type = /*@__PURE__*/ _or(5, ($scope) => {
	_attr_input_value($scope, "a", _attr_input_type($scope.a, $scope.e, $scope.d), $valueChange($scope), _attr_input_value_dynamic_default);
	_attrs($scope, "b", {
		type: $scope.e,
		value: $scope.d,
		valueChange: $valueChange2($scope)
	}, _controllable_input);
	$value__OR__type__script($scope);
});
const $value = /*@__PURE__*/ _let(3, $value__OR__type);
const $type = /*@__PURE__*/ _let(4, $value__OR__type);
const $setup__script = _script("a3", ($scope) => {
	_attr_input_value_script($scope, "a");
	_on($scope.c, "click", function() {
		$type($scope, void 0);
		$value($scope, "abc");
	});
});
const $valueChange2 = ($scope) => function(next) {
	$value($scope, next);
};
const $valueChange = ($scope) => (_new_value) => {
	$value($scope, _new_value);
};
_resumed.a1 = $valueChange2;
_resumed.a0 = $valueChange;
