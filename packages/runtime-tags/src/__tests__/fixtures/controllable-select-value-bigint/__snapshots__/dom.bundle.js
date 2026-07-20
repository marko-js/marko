// template.marko
const $value = /*@__PURE__*/ _let(1, ($scope) => _attr_select_value($scope, "a", $scope.b, $valueChange($scope)));
const $setup__script = _script("a1", ($scope) => _attr_select_value_script($scope, "a"));
function $valueChange($scope) {
	return function(v) {
		$value($scope, v);
	};
}
_resume("a0", $valueChange);
