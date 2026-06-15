// template.marko
const $n__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$n($scope, $scope.d + 1);
}));
const $n = /* @__PURE__ */ _let(3, ($scope) => {
	_text($scope.b, $scope.d);
	$n__script($scope);
});
const $setup__script = _script("a0", ($scope) => _attr_input_value_script($scope, "c"));
