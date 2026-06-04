// total: 4216 (min) 1903 (brotli)
// template.marko: 480 (min) 164 (brotli)
const $checked = /* @__PURE__ */ _let(4, ($scope) => {
	_attr_input_checkedValue($scope, "a", $scope.e + "", $checkedValueChange($scope), 0);
	_attr_input_checkedValue($scope, "b", $scope.e, $checkedValueChange2($scope), "1");
	_attr_input_checkedValue($scope, "c", $scope.e, $checkedValueChange3($scope), 2);
	_text($scope.d, $scope.e);
});
const $setup__script = _script("a3", ($scope) => {
	_attr_input_checkedValue_script($scope, "a");
	_attr_input_checkedValue_script($scope, "b");
	_attr_input_checkedValue_script($scope, "c");
});
function $checkedValueChange3($scope) {
	return function(v) {
		$checked($scope, +v);
	};
}
function $checkedValueChange2($scope) {
	return function(v) {
		$checked($scope, +v);
	};
}
function $checkedValueChange($scope) {
	return function(v) {
		$checked($scope, +v);
	};
}
_resume("a2", $checkedValueChange3);
_resume("a1", $checkedValueChange2);
_resume("a0", $checkedValueChange);
