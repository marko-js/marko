// template.marko
const $value = /*@__PURE__*/ _let(9, ($scope) => {
	_attr_input_value_default($scope, "a", $scope.j);
	_attr_input_value_default($scope, "b", $scope.j);
	_attr_input_value_default($scope, "c", $scope.j);
	_attr_input_value_default($scope, "d", $scope.j);
	_attr_input_value_default($scope, "e", $scope.j);
	_attr_input_value_default($scope, "f", $scope.j);
	_attr_input_value_default($scope, "g", $scope.j);
});
const $setup__script = _script("a0", ($scope) => {
	_on($scope.h, "click", function() {
		$value($scope, "b");
	});
	_on($scope.i, "click", function() {
		$value($scope, false);
	});
});
