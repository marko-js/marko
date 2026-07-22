// template.marko
const $value__render = /*@__PURE__*/ _render(($scope) => {
	_text($scope.b, $scope.d);
	_text($scope.c, typeof $scope.d);
});
const $value = /*@__PURE__*/ _let(3, ($scope) => {
	$value__render($scope);
	_attr_input_value($scope, "a", $scope.d, $valueChange($scope));
});
const $setup__script = _script("a1", ($scope) => _attr_input_value_script($scope, "a"));
function $valueChange($scope) {
	return (_new_value) => {
		$value($scope, parseInt(_new_value));
	};
}
_resume("a0", $valueChange);
