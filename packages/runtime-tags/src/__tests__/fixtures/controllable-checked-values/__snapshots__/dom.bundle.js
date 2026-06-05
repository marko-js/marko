// template.marko
const $checkedValue__OR__$checkedValueChange = /* @__PURE__ */ _or(6, ($scope) => {
	_attr_input_checkedValue($scope, "a", $scope.e, $scope.f, "a");
	_attr_input_checkedValue($scope, "b", $scope.e, $scope.f, "b");
	_attr_input_checkedValue($scope, "c", $scope.e, $scope.f, "c");
});
const $checkedValue = /* @__PURE__ */ _let(4, ($scope) => {
	_text($scope.d, $scope.e);
	$checkedValue__OR__$checkedValueChange($scope);
});
const $setup__script = _script("a1", ($scope) => {
	_attr_input_checkedValue_script($scope, "a");
	_attr_input_checkedValue_script($scope, "b");
	_attr_input_checkedValue_script($scope, "c");
});
function $checkedValueChange2($scope) {
	return (_new_checkedValue) => {
		$checkedValue($scope, _new_checkedValue);
	};
}
_resume("a0", $checkedValueChange2);
