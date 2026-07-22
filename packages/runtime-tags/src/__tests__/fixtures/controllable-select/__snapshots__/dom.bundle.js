// template.marko
const $value__render = /*@__PURE__*/ _render(($scope) => _text($scope.b, $scope.c));
const $value = /*@__PURE__*/ _let(2, ($scope) => {
	$value__render($scope);
	_attr_select_value($scope, "a", $scope.c, $valueChange($scope));
});
const $setup__script = _script("a1", ($scope) => _attr_select_value_script($scope, "a"));
function $valueChange($scope) {
	return function(v) {
		$value($scope, v);
	};
}
_resume("a0", $valueChange);
