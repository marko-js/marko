// template.marko
const $d__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$d($scope, $scope.e + "!");
}));
const $d = /* @__PURE__ */ _let(4, ($scope) => {
	_attr_input_value_default($scope, "b", `a-${$scope.e}-b`);
	_attr($scope.c, "id", `id-${$scope.e}`);
	_attr($scope.c, "data-x", `${$scope.e}`);
	_text($scope.d, `t-${$scope.e}-z`);
	$d__script($scope);
});
