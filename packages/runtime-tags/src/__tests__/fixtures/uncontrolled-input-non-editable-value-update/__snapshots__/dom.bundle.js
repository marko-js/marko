// template.marko
const $dynamicType__OR__value = /*@__PURE__*/ _or(12, ($scope) => _attr_input_value_dynamic_default($scope, "h", _attr_input_type($scope.h, $scope.k, $scope.l)));
const $value = /*@__PURE__*/ _let(11, ($scope) => {
	_attr($scope.a, "value", $scope.l);
	_attr($scope.b, "value", $scope.l);
	_attr($scope.c, "value", $scope.l);
	_attr($scope.d, "value", $scope.l);
	_attr($scope.e, "value", $scope.l);
	_attr($scope.f, "value", $scope.l);
	_attr($scope.g, "value", $scope.l);
	$dynamicType__OR__value($scope);
});
const $setup__script = _script("a0", ($scope) => {
	_on($scope.i, "click", function() {
		$value($scope, "b");
	});
	_on($scope.j, "click", function() {
		$value($scope, false);
	});
});
