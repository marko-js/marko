// template.marko
const $v = /*@__PURE__*/ _let(2, ($scope) => {
	_attr_input_value($scope, "a", $scope.c, $valueChange($scope));
	_text($scope.b, $scope.c);
});
const $setup__script = _script("a1", ($scope) => _attr_input_value_script($scope, "a"));
const $valueChange = ($scope) => (_new_v) => {
	$v($scope, _new_v);
};
_resumed.a0 = $valueChange;
