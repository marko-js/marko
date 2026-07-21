// template.marko
const $n__render = /*@__PURE__*/ _render(($scope) => _text($scope.b, $scope.d));
const $n = /*@__PURE__*/ _let(3, ($scope) => {
	$n__render($scope);
	_attr_input_value_default($scope, "c", `premid-${$scope.d}-postend`);
});
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$n($scope, $scope.d + 1);
}));
