// template.marko
const $checked__render = /*@__PURE__*/ _render(($scope) => _text($scope.b, String($scope.c)));
const $checked = /*@__PURE__*/ _let(2, ($scope) => {
	$checked__render($scope);
	_attr_input_checked($scope, "a", $scope.c, $checkedChange($scope));
});
const $setup__script = _script("a1", ($scope) => _attr_input_checked_script($scope, "a"));
function $checkedChange($scope) {
	return (_new_checked) => {
		$checked($scope, _new_checked);
	};
}
_resume("a0", $checkedChange);
