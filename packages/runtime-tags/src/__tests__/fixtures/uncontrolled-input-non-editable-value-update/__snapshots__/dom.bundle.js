// template.marko
const $value = /*@__PURE__*/ _let(8, ($scope) => {
	_attr_input_value_default($scope, "a", $scope.i);
	_attr($scope.b, "value", $scope.i);
	_attr_input_value_default($scope, "c", $scope.i);
	_attr_input_value_default($scope, "d", $scope.i);
	_attr($scope.e, "value", $scope.i);
	_attr_input_value_default($scope, "f", $scope.i);
	_attr_input_value_default($scope, "g", $scope.i);
});
const $setup__script = _script("a0", ($scope) => _on($scope.h, "click", function() {
	$value($scope, "b");
}));
