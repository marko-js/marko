// template.marko
const $selected = /*@__PURE__*/ _let(2, ($scope) => {
	_attr_input_checkedValue($scope, "a", $scope.c, $checkedValueChange($scope), "");
	_text($scope.b, $scope.c === void 0 ? "undefined" : $scope.c === null ? "null" : "value=" + $scope.c);
});
const $setup__script = _script("a1", ($scope) => _attr_input_checkedValue_script($scope, "a"));
function $checkedValueChange($scope) {
	return (_new_selected) => {
		$selected($scope, _new_selected);
	};
}
_resume("a0", $checkedValueChange);
