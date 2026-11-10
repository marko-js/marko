// template.marko
const $calls = /*@__PURE__*/ _let(6, ($scope) => {
	_attr_select_value($scope, "a", "b", $valueChange($scope));
	_attr_select_value($scope, "b", ["b"], $valueChange2($scope));
	_text($scope.c, $scope.g);
});
const $setup__script = _script("a2", ($scope) => {
	_attr_select_value_script($scope, "a");
	_attr_select_value_script($scope, "b");
});
const $valueChange2 = ($scope) => function() {
	$calls($scope, +$scope.g + 1);
};
const $valueChange = ($scope) => function() {
	$calls($scope, +$scope.g + 1);
};
_resumed.a1 = $valueChange2;
_resumed.a0 = $valueChange;
