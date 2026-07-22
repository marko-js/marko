// template.marko
const $selected__render = /*@__PURE__*/ _render(($scope) => _text($scope.b, $scope.d));
const $selected = /*@__PURE__*/ _let(3, ($scope) => {
	$selected__render($scope);
	_attr_select_value($scope, "a", $scope.d, $valueChange($scope));
});
const $setup__script = _script("a1", ($scope) => {
	_attr_select_value_script($scope, "a");
	_on($scope.c, "click", function() {
		$selected($scope, 1);
	});
});
function $valueChange($scope) {
	return function(v) {
		$selected($scope, +v);
	};
}
_resume("a0", $valueChange);
