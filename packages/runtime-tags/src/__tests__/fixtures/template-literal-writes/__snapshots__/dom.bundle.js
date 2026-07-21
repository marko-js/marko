// template.marko
const $d__render = /*@__PURE__*/ _render(($scope) => {
	_attr($scope.c, "id", `id-${$scope.e}`);
	_attr($scope.c, "data-x", `${$scope.e}`);
	_text($scope.d, `${$scope.e}`);
});
const $d = /*@__PURE__*/ _let(4, ($scope) => {
	$d__render($scope);
	_attr_input_value_default($scope, "b", `a-${$scope.e}-b`);
});
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$d($scope, $scope.e + "!");
}));
