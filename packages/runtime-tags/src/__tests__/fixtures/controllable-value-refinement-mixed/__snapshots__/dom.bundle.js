// template.marko
const $value__OR__$valueChange = /*@__PURE__*/ _or(10, ($scope) => {
	_attr_input_value($scope, "a", $scope.g, $scope.j);
	_attr_input_value($scope, "b", $scope.g, $scope.j);
});
const $value__OR__$valueChange2 = /*@__PURE__*/ _or(8, ($scope) => {
	_attr_input_value($scope, "c", $scope.g, $scope.h);
	_attr_input_value($scope, "d", $scope.g, $scope.h);
});
const $value = /*@__PURE__*/ _let(6, ($scope) => {
	_text($scope, "e", typeof $scope.g);
	_text($scope, "f", $scope.g);
	$value__OR__$valueChange($scope);
	$value__OR__$valueChange2($scope);
});
const $setup__script = _script("a2", ($scope) => {
	_attr_input_value_script($scope, "a");
	_attr_input_value_script($scope, "b");
	_attr_input_value_script($scope, "c");
	_attr_input_value_script($scope, "d");
});
const $valueChange3 = ($scope) => (_new_value) => {
	$value($scope, _new_value);
};
const $valueChange4 = ($scope) => (_new_value) => {
	$value($scope, parseInt(_new_value));
};
_resume("a0", $valueChange3);
_resume("a1", $valueChange4);
