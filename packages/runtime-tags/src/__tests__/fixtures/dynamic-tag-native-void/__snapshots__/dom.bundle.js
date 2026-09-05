// template.marko
const $count = /*@__PURE__*/ _let(9, ($scope) => {
	_text($scope.a, $scope.j);
	_attr_input_value_default($scope, "b", `count & ${$scope.j}`);
	_text_content($scope.c, `count ${_to_text($scope.j)}`);
	_text($scope.e, $scope.j);
});
const $setup__script = _script("a0", ($scope) => _on($scope.f, "click", function() {
	$count($scope, +$scope.j + 1);
}));
