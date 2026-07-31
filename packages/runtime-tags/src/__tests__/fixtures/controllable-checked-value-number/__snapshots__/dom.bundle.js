// template.marko
const $checked = /*@__PURE__*/ _let(4, ($scope) => {
	_attr_input_checkedValue($scope, "a", $scope.e + "", $checkedValueChange($scope), 0);
	_attr_input_checkedValue($scope, "b", $scope.e, $checkedValueChange2($scope), "1");
	_attr_input_checkedValue($scope, "c", $scope.e, $checkedValueChange3($scope), 2);
	_text($scope, "d", $scope.e);
});
const $setup__script = _script("a3", ($scope) => {
	_attr_input_checkedValue_script($scope, "a");
	_attr_input_checkedValue_script($scope, "b");
	_attr_input_checkedValue_script($scope, "c");
});
const $checkedValueChange3 = ($scope) => function(v) {
	$checked($scope, +v);
};
const $checkedValueChange2 = ($scope) => function(v) {
	$checked($scope, +v);
};
const $checkedValueChange = ($scope) => function(v) {
	$checked($scope, +v);
};
_resume("a2", $checkedValueChange3);
_resume("a1", $checkedValueChange2);
_resume("a0", $checkedValueChange);
