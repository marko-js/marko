// template.marko
const $count = /*@__PURE__*/ _let(6, ($scope) => {
	_attr_input_value($scope, "b", void 0, $valueChange($scope));
	_text($scope.c, $scope.g);
});
const $setup__script = _script("a1", ($scope) => _attr_input_value_script($scope, "b"));
const $valueChange = ($scope) => function(v) {
	$count($scope, $scope.g + v.length);
};
_resumed.a0 = $valueChange;
