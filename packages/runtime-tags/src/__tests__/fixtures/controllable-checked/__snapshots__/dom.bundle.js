// total: 3227 (min) 1545 (brotli)
// template.marko: 180 (min) 117 (brotli)
const $checked = /* @__PURE__ */ _let(2, ($scope) => {
	_attr_input_checked($scope, "a", $scope.c, $checkedChange($scope));
	_text($scope.b, String($scope.c));
});
const $setup__script = _script("a1", ($scope) => _attr_input_checked_script($scope, "a"));
function $checkedChange($scope) {
	return (_new_checked) => {
		$checked($scope, _new_checked);
	};
}
_resume("a0", $checkedChange);
