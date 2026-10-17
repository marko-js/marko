// template.marko
const $if_content__b = /*@__PURE__*/ _fill_let("a5", 3, ($scope) => _attr_input_value($scope, "b", $scope.d, $valueChange2($scope)));
const $if_content__a = /*@__PURE__*/ _fill_let("a4", 2, ($scope) => {
	_attr_input_value($scope, "a", $scope.c, $valueChange($scope));
	$if_content__b($scope, $scope.c);
}, ($scope) => _attr_input_value($scope, "a", $scope.c, $valueChange($scope)));
const $if_content__setup__script = _script("a3", ($scope) => {
	_attr_input_value_script($scope, "a");
	_attr_input_value_script($scope, "b");
});
const $valueChange2 = ($scope) => (_new_b) => {
	$if_content__b($scope, _new_b);
};
const $valueChange = ($scope) => (_new_a) => {
	$if_content__a($scope, _new_a);
};
_resumed.a1 = $valueChange2;
_resumed.a0 = $valueChange;
