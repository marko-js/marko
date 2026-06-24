// template.marko
const $n__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$n($scope, $scope.d + 1);
}));
const $n = /*@__PURE__*/ _let(3, ($scope) => {
	_text($scope.b, $scope.d);
	_attr_input_value_default($scope, "c", `premid-${$scope.d}-postend`);
	$n__script($scope);
});
