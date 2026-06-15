// template.marko
const $n__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$n($scope, $scope.i + 1);
}));
const $n = /* @__PURE__ */ _let(8, ($scope) => {
	_text($scope.b, $scope.i);
	$n__script($scope);
});
