// template.marko
const $bound = /*@__PURE__*/ _let(6, ($scope) => _attr_input_value($scope, "b", $scope.g, $valueChange($scope)));
const $setup__script = _script("a1", ($scope) => _attr_input_value_script($scope, "b"));
const $valueChange = ($scope) => (_new_bound) => {
	$bound($scope, _new_bound);
};
_resume("a0", $valueChange);
